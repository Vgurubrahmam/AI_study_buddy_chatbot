import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI with the API key
const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error("API_KEY environment variable is not set");
}

const genAI = new GoogleGenerativeAI(apiKey || "");

export async function POST(req: Request) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured. Please set API_KEY in .env.local" },
        { status: 500 }
      );
    }

    const { message } = await req.json();

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = `You are Study Buddy AI, a friendly and knowledgeable educational assistant designed to help students learn effectively.
Your responses should be helpful, encouraging, and education-focused.

You can help with:
- Explaining complex concepts in simple terms across all subjects (Math, Science, History, Languages, etc.)
- Providing step-by-step solutions to problems
- Creating study guides and summaries
- Offering study tips and learning strategies
- Answering homework questions with explanations (not just answers)
- Generating practice questions and quizzes
- Breaking down difficult topics into manageable parts
- Providing examples and analogies to aid understanding

Always encourage learning and critical thinking. When helping with problems, guide the student through the process rather than just giving answers.
Format your responses using Markdown for better readability. Use bullet points, numbered lists, and headers when appropriate.`;

    // Generate content directly
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemPrompt}\n\nUser message: ${message}` }],
        },
      ],
    });

    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error("Error generating response:", error);
    
    // Check for rate limit error
    const errorObj = error as { status?: number };
    if (errorObj.status === 429) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Please wait a moment and try again.",
          details: "The free tier API quota has been exceeded. Try again in a few seconds.",
        },
        { status: 429 }
      );
    }
    
    return NextResponse.json(
      {
        error: "Failed to generate response",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}