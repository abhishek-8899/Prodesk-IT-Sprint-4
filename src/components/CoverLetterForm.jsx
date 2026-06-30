
import { generateCoverLetter } from "../services/gemini";
import "../styles/CoverLetterForm.css";

const CoverLetterForm = ({
    name,
    setName,
    role,
    setRole,
    company,
    setCompany,
    skills,
    setSkills,
    setGeneratedLetter,
    loading,
    setLoading
}
) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!name || !role || !company || !skills) {
                alert("Please fill in all fields.");
                return;
            }
            setLoading(true);

            const letter = await generateCoverLetter(
                name,
                role,
                company,
                skills
            );

            setGeneratedLetter(letter);

        } catch (error) {
            console.error(error);
            alert("Failed to generate cover letter.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="form-card">
            <h2>Create Your Cover Letter</h2>


            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Candidate Name</label>
                    <input
                        placeholder='Enter your full name'
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>


                <div className="form-group">
                    <label>Job Role</label>
                    <input
                        type="text"
                        id="job"
                        name="job"
                        placeholder='Web Developer...'
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Target Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder='IT Tech...'
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Key Skills</label>
                    <textarea
                        id="skills"
                        name="skills"
                        placeholder='AI/ML,Python...'
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                    />
                </div>


                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Generating..." : "Generate Cover Letter"}
                </button>

            </form>



        </div>
    )
}

export default CoverLetterForm