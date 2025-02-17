export const improveDescriptionPrompt = (description: string) => {
  return `
    As an expert resume writer, improve the following description ${description} to be professional.
    Make it more impactful, quantifiable, and aligned with industry standards.

    Requirements:
    1. Use action verbs
    2. Include metrics and results where possible
    3. Highlight relevant technical skills
    4. Keep it concise but detailed
    5. Focus on achievements over responsibilities
    6. Use industry-specific keywords
    
    Format the response as a single paragraph without any additional text or explanations.`;
};
