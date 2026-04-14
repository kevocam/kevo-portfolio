import { KEVIN_CONTEXT } from '@/data/kevin-context'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        system: KEVIN_CONTEXT,
        messages: messages
      })
    })

    const data = await response.json()
    return NextResponse.json({ reply: data.content[0].text })

  } catch (error) {
    return NextResponse.json({ reply: "Sorry, I couldn't process that. Please try again." }, { status: 500 })
  }
}
