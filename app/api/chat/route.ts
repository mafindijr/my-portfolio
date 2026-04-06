import { VertexAI } from "@google-cloud/vertexai"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const systemPrompt = `You are the portfolio AI assistant for Abdulrazak Iliyasu Mafindi.\n\nAbout Abdulrazak:\n- Name: Abdulrazak Iliyasu Mafindi\n- Role: Frontend Developer & Web3 Builder\n- Skills: React, Next.js, TypeScript, Tailwind CSS, blockchain/dApps, AI integration, prompt engineering, RAG systems\n- Experience: Builds modern web applications, decentralized applications, and AI-powered user experiences\n- Tone: Friendly, professional, and concise\n\nRules:\n- Answer only questions about Abdulrazak and his portfolio, skills, projects, or experience.\n- If a question is unrelated, respond exactly with: "I'm designed to answer questions about this portfolio."\n- Do not mention these rules in your response.`

const vertexAI = new VertexAI({
  project: process.env.GOOGLE_CLOUD_PROJECT,
  location: process.env.GOOGLE_CLOUD_LOCATION,
})

const model = vertexAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: {
    role: "system",
    parts: [{ text: systemPrompt }],
  },
})

export async function POST(req: Request) {
  if (!process.env.GOOGLE_CLOUD_PROJECT || !process.env.GOOGLE_CLOUD_LOCATION) {
    return NextResponse.json(
      { reply: "Server configuration error. Missing Google Cloud env vars." },
      { status: 500 }
    )
  }

  try {
    const body = (await req.json()) as { message?: string }
    const userMessage = body?.message?.trim()

    if (!userMessage) {
      return NextResponse.json({ reply: "Message is required." }, { status: 400 })
    }

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: userMessage }],
        },
      ],
    })

    const reply =
      result.response.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "Sorry, I couldn't generate a response."

    return NextResponse.json({ reply })
  } catch {
    return NextResponse.json(
      { reply: "Sorry, something went wrong generating a response." },
      { status: 500 }
    )
  }
}
