"use client"

import { Bot } from "lucide-react"

type ChatButtonProps = {
  isOpen: boolean
  onToggle: () => void
}

export default function ChatButton({ isOpen, onToggle }: ChatButtonProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close chat" : "Open chat"}
      onClick={onToggle}
      className="fixed left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-primary text-primary-foreground shadow-lg ring-1 ring-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(34,211,238,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <Bot className="h-6 w-6" />
      </span>
    </button>
  )
}
