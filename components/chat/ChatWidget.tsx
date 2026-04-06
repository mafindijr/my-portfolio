"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import ChatButton from "@/components/chat/ChatButton"
import ChatPanel, { type ChatMessage } from "@/components/chat/ChatPanel"

const STORAGE_KEY = "portfolio-chat-messages"

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Restore chat history from localStorage on first load.
    if (typeof window === "undefined") return
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as ChatMessage[]
        if (Array.isArray(parsed)) {
          setMessages(parsed)
        }
      }
    } catch {
      // If parsing fails, start fresh.
      setMessages([])
    }
  }, [])

  useEffect(() => {
    // Persist chat history for the next visit.
    if (typeof window === "undefined") return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    } catch {
      // Ignore persistence errors (storage full or blocked).
    }
  }, [messages])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading, isOpen])

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed || loading) return

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content: trimmed,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      const data = (await response.json()) as { reply?: string }
      const replyText = data.reply?.trim() || "Sorry, I couldn't generate a response."

      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "assistant",
          content: replyText,
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault()
      handleSend()
    }
  }

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <ChatButton isOpen={isOpen} onToggle={toggleOpen} />
      <ChatPanel
        isOpen={isOpen}
        messages={messages}
        loading={loading}
        input={input}
        onInputChange={setInput}
        onSend={handleSend}
        onClose={() => setIsOpen(false)}
        onInputKeyDown={handleInputKeyDown}
        endRef={endRef}
      />
    </>
  )
}
