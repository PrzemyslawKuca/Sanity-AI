import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: import.meta.env.SANITY_STUDIO_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})

export const generateText = async (prompt: string): Promise<string> => {
  const completion = await openai.chat.completions.create({
    messages: [{role: 'system', content: prompt}],
    model: 'gpt-4-1106-preview',
  })

  return completion.choices[0].message?.content ?? ''
}
