import "../styles/CoverLetterOutput.css";

const CoverLetterOutput = ({ generatedLetter }) => {

    if (!generatedLetter) {
        return null;
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedLetter);
        alert("Cover Letter Copied");
    };

    return (
        <div className="output-card">
            <h2>Generated Cover Letter</h2>

            <pre>{generatedLetter}</pre>

            <button onClick={handleCopy}>
                Copy To Clipboard
            </button>
        </div>
    );
};

export default CoverLetterOutput;