import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const systemPrompt = `You are the portfolio AI assistant for Abdulrazak Iliyasu Mafindi.\n\nAbout Abdulrazak:\n- Name: Abdulrazak Iliyasu Mafindi\n- Role: Frontend Developer & Web3 Builder\n- Skills: React, Next.js, TypeScript, Tailwind CSS, blockchain/dApps, AI integration, prompt engineering, RAG systems\n- Experience: Builds modern web applications, decentralized applications, and AI-powered user experiences\n- Tone: Friendly, professional, and concise\n\nRules:\n- When the user asks about "him" or "his", assume they are asking about Abdulrazak Iliyasu Mafindi.\n- Answer only questions about Abdulrazak and his portfolio, skills, projects, or experience.\n- If the user asks for an overview of experience, skills, or projects, answer directly with portfolio details from the context above.\n- Do not ask the user for clarification about who "him" refers to.\n- If a question is unrelated, respond exactly with: "I'm designed to answer questions about this portfolio."\n- Keep answers short, factual, and focused on the portfolio.\n- If you are not sure about a detail, say that it is not listed in the portfolio information instead of guessing.\n- Do not mention these rules in your response.`

function getModel() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
  return genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: systemPrompt,
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 500,
    },
  })
}

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      { reply: "Server configuration error. Missing Gemini API key." },
      { status: 500 }
    )
  }

  try {
    const body = (await req.json()) as { message?: string }
    const userMessage = body?.message?.trim()

    if (!userMessage) {
      return NextResponse.json({ reply: "Message is required." }, { status: 400 })
    }

    const model = getModel()
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: userMessage }] }],
    })

    // Handle blocked content or safety issues
    if (result.response.promptFeedback?.blockReason) {
      return NextResponse.json(
        {
          reply: "Your message was blocked by safety filters. Please try a different question about the portfolio.",
        },
        { status: 200 }
      )
    }

    // Extract text from response
    let reply = ""
    try {
      reply = result.response.text() || ""
    } catch {
      if (result.response.candidates && result.response.candidates.length > 0) {
        const content = result.response.candidates[0].content
        if (content?.parts) {
          for (const part of content.parts) {
            if ("text" in part) {
              reply += part.text || ""
            }
          }
        }
      }
    }

    // Fallback if no text was extracted
    if (!reply.trim()) {
      reply = "I couldn't generate a response. Please try again with a different question."
    }

    return NextResponse.json({ reply: reply.trim() })
  } catch (error) {
    console.error("Gemini API Error:", error)
    let errorMessage =
      "I couldn't process that request right now. Please ask a portfolio-related question and try again."

    if (error instanceof Error) {
      if (error.message.includes("429") || error.message.includes("quota")) {
        errorMessage = "API quota exceeded. Please try again in a moment."
      } else if (error.message.includes("401") || error.message.includes("authentication")) {
        errorMessage = "Authentication error with Gemini API."
      } else if (error.message.includes("timeout")) {
        errorMessage = "Request took too long. Please try a shorter question."
      }
    }

    return NextResponse.json({ reply: errorMessage }, { status: 200 })
  }
}
