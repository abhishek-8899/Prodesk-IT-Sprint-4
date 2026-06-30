import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});

export async function generateCoverLetter(
    name, role, company, skills
) {
    const prompt = `
You are an experienced HR recruiter.

Write a professional cover letter based on the following details.

Candidate Name: ${name}
Job Role: ${role}
Target Company: ${company}
Key Skills: ${skills}

Requirements:
- Maximum 180 words.
- Use a professional and confident tone.
- Keep it concise and personalized.
- Divide it into 3-4 short paragraphs.
- Do not mention an attached resume.
- Do not use placeholders.
- Return only the cover letter without explanations or headings.
`;
    const result = await model.generateContent(prompt);

    const response = await result.response;
    return response.text();
}