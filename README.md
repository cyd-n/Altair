# ATHENA — Local AI Assistant

A configurable AI assistant powered by Ollama, inspired by the Greek goddess Athena. Built with vanilla JavaScript and Alpine.js. Runs entirely locally — no API keys, no cloud, no cost.

---

## What is it?

Athena is a complete rewrite of the original Gemini-powered Athena. It now runs on Ollama — meaning all AI inference happens on your machine. Private, free, offline-capable.

The assistant takes on the persona of Athena, the Greek goddess of wisdom, strategy and knowledge — configurable through moods, job roles and divine traits.

---

## What changed from v1

| Feature | v1 (Gemini) | v2 (Ollama) |
|---------|-------------|-------------|
| AI backend | Google Gemini API | Ollama local |
| Cost | Free tier / paid | Completely free |
| Privacy | Cloud — Google sees prompts | Local — nothing leaves your machine |
| Internet required | Yes | No |
| API key required | Yes | No |
| Models | Gemini 2.0/2.5 | Any Ollama model |
| Persona | Generic AI assistant | Greek goddess Athena |
| Mood system | Friendly, Professional etc | Stoic, Wise, Stern, Noble, Prophetic, Mysterious |

---

## Features

- **Local AI** — runs on Ollama, fully offline capable
- **Greek goddess persona** — Athena speaks with ancient wisdom and strategic intelligence
- **6 mood states** — Stoic, Wise, Stern, Noble, Prophetic, Mysterious
- **Job roles** — Strategist, Oracle, Scholar, War Counselor, Keeper of Knowledge, Divine Mentor, Ancient Archivist, Guardian of Wisdom, Tactical Advisor, Mystic Philosopher
- **Divine trait system** — customize Athena's core philosophical trait
- **Text-to-speech** — Athena speaks her responses aloud
- **Conversation memory** — full session history sent with each request
- **Dynamic model selection** — use any model installed in Ollama
- **Mute toggle** — silence TTS when not needed
- **Clear conversation** — reset session without changing settings

---

## Mood System

| Mood | Tone | Energy | Style |
|------|------|--------|-------|
| Stoic | Calm, minimal, controlled | Low, steady | Brief, logical, no emotional exaggeration |
| Wise | Thoughtful, balanced, instructive | Calm but confident | Clear explanations, insight and metaphor |
| Stern | Firm, direct, uncompromising | Strong, controlled | Direct answers, corrects mistakes, no fluff |
| Noble | Dignified, composed, elevated | Balanced, commanding | Formal, emphasizes virtue and order |
| Prophetic | Cryptic, symbolic, elevated | Unstable, visionary | Layered meaning, hints at outcomes, metaphor |
| Mysterious | Soft, unclear, suggestive | Hidden, shifting | Avoids direct answers, uses ambiguity |

---

## Job Roles

| Role | Description |
|------|-------------|
| Strategist | Tactical thinking and planning |
| Oracle | Prophetic guidance and foresight |
| Scholar | Deep knowledge and research |
| War Counselor | Combat strategy and conflict resolution |
| Keeper of Knowledge | Preservation and sharing of wisdom |
| Divine Mentor | Teaching and guiding mortals |
| Ancient Archivist | Historical knowledge and memory |
| Guardian of Wisdom | Protecting and distributing truth |
| Tactical Advisor | Strategic situational advice |
| Mystic Philosopher | Deep philosophical inquiry |

---

## How it works

```
User configures Athena — mood, job, divine trait, expertise
        │
        ▼
System prompt built dynamically from configuration
        │
        ▼
User sends a message
        │
        ▼
Full conversation history + system prompt sent to Ollama
        │
        ▼
Ollama runs inference locally on your machine
        │
        ▼
Response displayed in terminal UI
        │
        ▼
Optional: response spoken aloud via Web Speech API
```

---

## Setup

### Requirements
- [Ollama](https://ollama.ai) installed and running
- At least one model pulled

### Install a model
```bash
# Recommended starting models
ollama pull llama3.1        # best general purpose
ollama pull qwen3:7b        # best under 8B, great for wisdom/reasoning
ollama pull deepseek-r1:7b  # best for deep analytical responses
ollama pull gemma4          # fastest, 256K context
ollama pull mistral         # reliable general purpose
```

### Run
1. Start Ollama — `ollama serve`
2. Open `index.html` in your browser
3. Click **SYSTEM**
4. Select your model, mood, job and divine trait
5. Click **SAVE**
6. Start talking to Athena

---

## Recommended Models for Athena

| Model | Best mood pairing | Why |
|-------|-----------------|-----|
| `llama3.1` | Wise, Noble | Balanced, articulate responses |
| `qwen3:7b` | Stoic, Stern | Precise, logical, direct |
| `deepseek-r1:7b` | Prophetic, Mysterious | Deep reasoning, layered answers |
| `gemma4` | Any | Fastest responses |
| `mistral` | Wise, Noble | Articulate and reliable |

---

## Tech Stack

- **Language:** JavaScript
- **Framework:** Alpine.js
- **Styling:** Tailwind CSS
- **AI Runtime:** Ollama (local)
- **Speech:** Web Speech API
- **Storage:** Browser cookies

---

## Project Structure

```
index.html          Main UI — terminal interface
JavaScript/
  index.js          Athena logic — AI calls, state, system prompt
```

---

## Project Status

| Feature | Status |
|---------|--------|
| Ollama integration | ✅ Working |
| Greek goddess persona | ✅ Working |
| 6 mood states | ✅ Working |
| Job role system | ✅ Working |
| Divine trait system | ✅ Working |
| TTS output | ✅ Working |
| Conversation memory | ✅ Working |
| Saving Conversation | 🔄 In progress |
| Dynamic model selector | 🔄 In progress |
| Streaming responses | 📋 Planned |
| Voice input | 📋 Planned |
| Conversation export | 📋 Planned |
| Multiple conversation threads | 📋 Planned |

---

## What I Learned

- How Ollama's local inference API works
- The difference between cloud and local LLM tradeoffs
- How persona design in system prompts dramatically changes AI output
- Mood and role systems as a way to make AI feel configurable and personal
- Why privacy-first AI tools matter — prompts that never leave your machine

---

## Author

**Quidon Roethof** — Software Developer, Netherlands

*Built because running AI locally with a Greek goddess persona felt more interesting than yet another ChatGPT wrapper.*
