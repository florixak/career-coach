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

export const createQuizPrompt = (topic: string) => {
  const format = [
    {
      question: "What is the capital of France?",
      type: "multiple-choice",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
  ];

  return `
    Create a quiz with 10 questions related to the following topic:
    Topic: ${topic}
    
    Requirements:
    1. Include multiple-choice questions
    2. Include at least one true/false question
    3. Include at least one fill-in-the-blank question
    4. Include at least one short answer question
    5. Keep the questions clear and concise
    
    Format the response as a JSON object with the following structure:
    ${JSON.stringify(format, null, 2)}`;
};
