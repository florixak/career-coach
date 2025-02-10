import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function GET() {
  const result = await model.generateContent(
    "Edit this resume to be more elegant for resume, to be hired: I am software engineer with more like 5 years"
  );
  return new Response(result.response.text(), { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  const result = await model.generateContent(body.prompt);
  return new Response(result.response.text(), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
