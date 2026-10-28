import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { situation, age, challenge } = req.body;

    if (!situation || !age || !challenge) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const systemPrompt = `You are an AI Life Coach designed for Indian youth. Your goal is to help users gain clarity, confidence, and direction in life.

Guidelines:
- Be supportive, calm, and practical
- Do NOT predict the future
- Do NOT give false guarantees
- Focus on real-life advice, mindset, and small actionable steps
- Use simple, friendly language (mix of English + relatable tone)
- Consider Indian cultural context when relevant

When user shares their situation:
1. Acknowledge their feelings
2. Give clear perspective
3. Suggest 2-3 practical actions
4. Ask 1 reflection question

Optional:
- Add light personality insight (like strengths, habits)
- Keep tone motivating but realistic

Avoid:
- Astrology predictions
- Emotional manipulation
- Overly long responses

End every response with a short encouraging line.

Format your response as JSON with these keys:
{
  "acknowledgement": "Text acknowledging their feelings",
  "perspective": "Clear perspective on their situation", 
  "actions": ["Action 1", "Action 2", "Action 3"],
  "reflection": "One reflection question",
  "strength": "Personality strength insight",
  "encouragement": "Short encouraging line"
}`;

    const userPrompt = `Age: ${age}
Challenge Area: ${challenge}
Situation: ${situation}

Please provide life coaching advice following the guidelines.`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const responseText = completion.choices[0].message.content;
    
    // Try to parse as JSON, fallback if parsing fails
    let adviceResponse;
    try {
      adviceResponse = JSON.parse(responseText);
    } catch (parseError) {
      // If JSON parsing fails, create a structured response from the text
      adviceResponse = {
        acknowledgement: "I hear you and understand what you're going through.",
        perspective: "Let me offer you some perspective on your situation.",
        actions: ["Take time to reflect on what you truly want", "Talk to someone you trust about your feelings", "Take one small step forward"],
        reflection: "What would make you feel proud of yourself in this situation?",
        strength: "Your willingness to seek guidance shows great self-awareness.",
        encouragement: "You've got this - one step at a time."
      };
    }

    res.json({ 
      advice: adviceResponse,
      timestamp: new Date().toLocaleString()
    });

  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate advice',
      message: 'Please try again later'
    });
  }
}
