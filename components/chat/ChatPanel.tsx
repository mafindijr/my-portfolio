"use client"

import type React from "react"
import { SendHorizontal, X } from "lucide-react"

export type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
}

type ChatPanelProps = {
  isOpen: boolean
  messages: ChatMessage[]
  loading: boolean
  input: string
  onInputChange: (value: string) => void
  onSend: () => void
  onClose: () => void
  onInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  endRef: React.RefObject<HTMLDivElement>
}

export default function ChatPanel({
  isOpen,
  messages,
  loading,
  input,
  onInputChange,
  onSend,
  onClose,
  onInputKeyDown,
  endRef,
}: ChatPanelProps) {
  return (
    <section
      aria-hidden={!isOpen}
      className={`fixed left-2 top-1/2 z-40 w-[94vw] max-w-105 -translate-y-1/2 rounded-3xl border border-border bg-card/95 shadow-2xl backdrop-blur transition-all duration-300 sm:left-4 sm:w-[380px] ${
        isOpen
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-primary">Ask Me Anything</p>
          <p className="text-xs text-muted-foreground">Portfolio AI assistant</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-2 text-muted-foreground transition hover:bg-accent hover:text-foreground"
          aria-label="Close chat"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex h-[60vh] flex-col gap-3 overflow-y-auto px-4 py-4 sm:h-[420px]">
        {messages.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border bg-muted/40 p-4 text-sm text-muted-foreground">
            Ask about my projects, skills, or experience. I will only answer questions about the portfolio.
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
              message.role === "user"
                ? "ml-auto bg-primary text-primary-foreground"
                : "mr-auto border border-border bg-background text-foreground"
            }`}
          >
            {message.content}
          </div>
        ))}

        {loading && (
          <div className="mr-auto flex max-w-[70%] items-center gap-2 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary" />
            Typing...
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="border-t border-border px-4 py-4">
        <div className="flex items-center gap-2 rounded-2xl border border-border bg-background px-3 py-2">
          <input
            value={input}
            onChange={(event) => onInputChange(event.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="Type your message..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            disabled={loading}
            aria-label="Chat message"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={onSend}
            className="rounded-xl bg-primary px-3 py-2 text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={loading || input.trim().length === 0}
            aria-label="Send message"
          >
            <SendHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
