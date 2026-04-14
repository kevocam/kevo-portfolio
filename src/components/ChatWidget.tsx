'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './ChatWidget.module.css'

type Message = { role: 'user' | 'assistant'; content: string }

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I&apos;m Kevin&apos;s AI assistant. Ask me anything about his experience, skills, or freelance availability 👋" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [isInChatSection, setIsInChatSection] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  useEffect(() => {
    const chatSection = document.getElementById('chat')
    if (!chatSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInChatSection(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    observer.observe(chatSection)
    return () => observer.disconnect()
  }, [])

  async function sendMessage() {
    if (!input.trim() || loading) return

    const userMsg: Message = { role: 'user', content: input }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated })
      })
      const data = await res.json()
      setMessages([...updated, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages([...updated, { role: 'assistant', content: 'Something went wrong. Try again!' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`${styles.button} ${isInChatSection ? styles.hidden : ''}`}
        aria-label="Chat with Kevin's AI"
        style={{ opacity: isInChatSection ? 0 : 1, pointerEvents: isInChatSection ? 'none' : 'auto' }}
      >
        {open ? '✕' : '🤖'}
      </button>

      {open && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <div className={styles.avatar}>K</div>
            <div className={styles.headerText}>
              <span className={styles.headerTitle}>Kevin&apos;s AI Assistant</span>
              <span className={styles.headerSubtitle}>Ask me anything</span>
            </div>
          </div>

          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${msg.role === 'user' ? styles.messageUser : styles.messageAssistant}`}>
                <div className={`${styles.bubble} ${msg.role === 'user' ? styles.bubbleUser : styles.bubbleAssistant}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className={styles.typing}>
                <div className={styles.typingBubble}>Thinking...</div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className={styles.inputWrapper}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about Kevin..."
              className={styles.input}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className={styles.sendButton}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}
