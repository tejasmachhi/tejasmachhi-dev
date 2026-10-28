# AI Life Coach Setup Guide

## 🚀 OpenAI API Setup

### 1. Get OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Click "Create new secret key"
4. Copy the key (starts with `sk-...`)

### 2. Add API Key to Project
1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and replace `your_openai_api_key_here` with your actual API key:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

### 3. Restart Development Server
```bash
npm run dev
```

## 💰 Cost Information

- **Model**: gpt-4o-mini (very affordable)
- **Cost**: ~$0.15 per 1M tokens
- **Per request**: ~$0.001-0.005 (less than 1 cent)
- **Free tier**: Usually $5-18 free credit for new users

## 🧪 Testing the API

Once setup is complete:

1. Visit `/fun` in your browser
2. Fill out the life coach form
3. Click "Get My Advice"
4. Real AI responses should appear!

## 🔧 Troubleshooting

### Error: "Failed to get advice"
- Check your API key is correct in `.env.local`
- Make sure you have OpenAI credits
- Check browser console for detailed errors

### Error: "Missing required fields"
- Fill in all form fields before submitting

### API Key Not Working
- Generate a new API key from OpenAI dashboard
- Make sure there are no spaces in the key
- Restart your development server

## 🎯 Next Steps

- The AI will provide personalized coaching advice
- Each response includes: acknowledgement, perspective, actions, reflection question, strength insight, and encouragement
- Users can get new advice for different situations

Ready to help Indian youth with real AI-powered life coaching! 🇮🇳
