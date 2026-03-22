# ATHENA
 
A configurable AI assistant with a retro terminal interface, built with vanilla JavaScript, Alpine.js and the Gemini API.
 
---
 
## What is it?
 
Athena (AI-thena) is a fully configurable AI assistant that runs in the browser. It features a retro CRT terminal aesthetic, dynamic prompt engineering, text-to-speech output, persistent settings via cookies and support for multiple Gemini models.
 
The name stands for **AI-thena** — a nod to the Greek goddess of wisdom.
 
---
 
## Features
 
- **Dynamic prompt engineering** — configure personality, mood, job role, response length, creativity and more
- **Text-to-speech** — Athena can speak her responses out loud using the Web Speech API
- **Persistent settings** — all configuration saved via cookies, restored on next visit
- **Multiple AI roles** — Assistant, Tutor, Research Assistant, Creative Assistant, Finance, Health and more
- **Multiple moods** — Friendly, Professional, Humorous, Empathetic, Motivational, Calm, Formal, Curious, Creative
- **Conversation memory** — full conversation history sent with each request for context
- **Retro CRT terminal UI** — scanlines, flicker animation, green on black aesthetic
- **Multiple Gemini models** — from 2.0 Flash Lite to 2.5 Pro
 
---
 
## How it works
 
```
User configures Athena
        │
        ▼
System prompt is built dynamically
        │
        ▼
User sends a message
        │
        ▼
Full conversation history + system prompt sent to Gemini API
        │
        ▼
Response displayed in terminal
        │
        ▼
Optional: response spoken aloud via TTS
```
 
---
 
## Prompt Engineering System
 
Athena builds her system prompt dynamically from your configuration:
 
| Setting | Options |
|---------|---------|
| Job | Assistant, Tutor, Coding Assistant, Research Assistant, Creative Assistant, Finance, Health, Guide and more |
| Mood | Friendly, Professional, Humorous, Empathetic, Motivational, Calm, Formal, Curious, Creative |
| Style | Custom free text |
| Expertise | Custom free text |
| Avoid | Topics Athena should never discuss |
| Response Length | Short (10-50 words), Medium (50-250), Large (200-1000) |
| Creativity | Precise, Balanced, Creative |
| Quality vs Speed | Quality or Speed model preference |
 
Each combination produces a unique AI personality.
 
---
 
## Gemini Models Supported
 
- gemini-2.5-flash-lite
- gemini-2.5-flash
- gemini-2.5-pro
- gemini-2.0-flash-lite
- gemini-2.0-flash
- gemini-2.0-flash-exp
- learnlm-2.0-flash-experimental
 
---
 
## Setup
 
1. Get a free Gemini API key from [Google AI Studio](https://aistudio.google.com)
2. Open the app in your browser
3. Click **SYSTEM**
4. Enter your API key
5. Configure Athena to your liking
6. Click **SAVE**
7. Start chatting
 
---
 
## Tech Stack
 
- **Language:** JavaScript
- **Framework:** Alpine.js
- **Styling:** Tailwind CSS
- **AI:** Google Gemini API
- **Speech:** Web Speech API
- **Storage:** Browser cookies
 
---
 
## Project Structure
 
```
index.html      Main application — UI and logic
```
 
Single file application — no build step required. Open in any browser.
 
---
 
## Browser APIs Used
 
| API | Purpose |
|-----|---------|
| Fetch API | Gemini API requests |
| SpeechSynthesisUtterance | Text-to-speech output |
| Document.cookie | Persistent settings storage |
 
---
 
## Project Status
 
| Feature | Status |
|---------|--------|
| Dynamic prompt engineering | ✅ Working |
| Gemini API integration | ✅ Working |
| Conversation memory | ✅ Working |
| Text-to-speech | ✅ Working |
| Cookie persistence | ✅ Working |
| Multiple AI roles | ✅ Working |
| Multiple moods | ✅ Working |
| Retro terminal UI | ✅ Working |
| Voice input | 📋 Planned |
| localStorage migration | 📋 Planned |
 
---
 
## What I Learned
 
- How to engineer effective AI system prompts dynamically
- How the Gemini API handles multi-turn conversations
- How to use the Web Speech API for TTS in the browser
- Cookie-based persistence for settings across sessions
- How personality and tone affect AI output significantly
- Building a complete single-file application with Alpine.js
 
---
 
## Author
 
**Quidon Roethof** — Software Developer, Netherlands
 
*Built to explore AI prompt engineering and what makes an AI assistant feel genuinely configurable and personal.*
