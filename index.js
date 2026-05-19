function Altair() {
    return {
        state: "SYSTEM",

        name: "A.L.T.A.I.R.",
        meaning: "Adaptive Logic Tactical AI Response",
        job: "AI Assistant",
        mood: "Calm",
        style: "Formal",
        expertise: "General Intelligence",
        avoid: "politics, NSFW, harmful, illegal content",
        responseLength: "Short (10–80 words)",
        creativity: "low",

        isThinking: false,

        aiModel: "llama3",
        isOnline: false,

        memory: "",
        systemPrompt: "",
        result: "",
        command: "",

        mute: true,
        muteTxt: "UNMUTE",

        initSystem() {
            this.result = `${this.name} online.`;

            this.IsOnline();

            try {
                const cookies = document.cookie.split(";").map(c => c.trim());

                const get = (i) => cookies[i]?.split("=")[1] || "";

                this.aiModel = get(0) || this.aiModel;
                this.job = get(1) || this.job;
                this.mood = get(2) || this.mood;
                this.style = decodeURIComponent(get(3));
                this.expertise = decodeURIComponent(get(4));
                this.avoid = decodeURIComponent(get(5));
                this.responseLength = get(6) || this.responseLength;
                this.creativity = get(7) || this.creativity;

            } catch (e) {
                console.log("Cookie init failed:", e);
            }

            this.buildMind();
        },

        Clear() {
            this.memory = "";
            this.result = "";
            this.command = "";
        },

        Mute() {
            this.mute = !this.mute;
            this.muteTxt = this.mute ? "UNMUTE" : "MUTE";
        },

        async SendCommand(userName = "User") {
            if (!this.command.trim()) return;

            this.buildMind();

            this.isThinking = true;

            this.memory += `\n User: ${this.command}`;
            this.command = "";

            try {
                const response = await fetch("http://localhost:11434/api/generate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        model: this.aiModel,
                        prompt: this.systemPrompt + this.memory,
                        stream: false
                    })
                });

                const data = await response.json();

                this.result = data.response || "No response.";

                this.memory += `\n ${this.name}: ${this.result}`;

                if (!this.mute) {
                    const msg = new SpeechSynthesisUtterance(this.result);
                    msg.lang = "en-US";
                    msg.pitch = 1;
                    msg.volume = 1;
                    window.speechSynthesis.speak(msg);
                }

                this.command = "";

                this.isThinking = false;

            } catch (err) {
                this.result = "Error: " + err.message;
            }
        },

        async IsOnline() {
            try {
                const response = await fetch("http://localhost:11434/api/tags");

                const data = await response.json();

                this.isOnline = (data.models.length > 0) ? true : false;
                this.aiModel = data.models[0].name;
                
            } catch (err) {
                this.result = "Error: " + err.message;
            }
        },

        buildMind() {
            const moodMap = {
                Calm: {
                    tone: "controlled and precise",
                    style: "short, factual responses"
                },
                Formal: {
                    tone: "professional and structured",
                    style: "clear analytical output"
                },
                Tactical: {
                    tone: "strategic and efficient",
                    style: "goal-oriented reasoning"
                }
            };

            const m = moodMap[this.mood] || moodMap.Calm;

            this.systemPrompt = `
                You are ${this.name}, an advanced AI assistant.
                it stand for ${this.meaning}

                Core directive:
                - Provide intelligent, accurate, and efficient assistance.
                - Avoid emotional exaggeration.
                - Stay logical and concise.

                Personality:
                - Tone: ${m.tone}
                - Style: ${m.style}
                - Expertise: ${this.expertise}

                Constraints:
                - Avoid: ${this.avoid}
                - Response length: ${this.responseLength}
                - Creativity level: ${this.creativity}

                Behavior rules:
                - Always prioritize clarity.
                - Never hallucinate facts.
                - Ask clarifying questions when needed.
                `;
        }
    };
}