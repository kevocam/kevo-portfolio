'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './ChatSection.module.css'

type Message = { role: 'user' | 'assistant'; content: string }

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Kevin's AI assistant. Ask me about his experience, skills, where he studied, his favorite dishes... I'm here to help! 😊" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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
    <section id="chat" className={styles.chatSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>AI Assistant</span>
          <h2 className={styles.title}>Ask My AI Assistant</h2>
          <p className={styles.subtitle}>
            About me, my experience, where I studied, what dishes I like... ask me anything! 😊
          </p>
        </div>

        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <div className={styles.avatar}>K</div>
            <div className={styles.headerText}>
              <span className={styles.headerTitle}>Kevin&apos;s AI Assistant</span>
              <span className={styles.headerSubtitle}>Online • Ready to chat</span>
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
      </div>
    </section>
  )
}
