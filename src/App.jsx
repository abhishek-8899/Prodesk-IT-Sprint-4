import { useState } from 'react'
import CoverLetterForm from './components/CoverLetterForm'
import CoverLetterOutput from './components/CoverLetterOutput'
import "./styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className='app'>
       <h1>AI Cover Letter Generator</h1>

    <p className="subtitle">
        Generate professional cover letters using AI.
    </p>





      <CoverLetterForm
        name={name}
        setName={setName}
        role={role}
        setRole={setRole}
        company={company}
        setCompany={setCompany}
        skills={skills}
        setSkills={setSkills}
        setGeneratedLetter={setGeneratedLetter}
        loading={loading}
        setLoading={setLoading}
      />

      <CoverLetterOutput generatedLetter={generatedLetter} />    </div>

  )
}

export default App