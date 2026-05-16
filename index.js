function Writing() {
    return {
        state: "Ter",
        
        job: "Assistant",
        mood: "Friendly",
        style: "",
        expertise: "",
        avoid: "political so also no polictioner like trump, or controversial or nsfw content or harmful,",
        useAvoid: "",
        longMe: false,
        responsLeng: "Short 10 - 50",
        creativity: "precise, no creativity",
        sq: "Quality",
        divineTrait: "Wisdom",
        apis: { },
        mindState: "",
        aiModel: "llama3",

        name: "",

        once: false,

        answer: "",
        result: "",
        apiKey: "",
        readOnlyMemory: "",
        memory: "",

        mute: true,
        muteTxt: "UNMUTE",
        systemTxt: "SYSTEM",

        init() {
            this.result = "Ready.";
            this.SaveMind(0);
            aCookie = document.cookie;
            aCookies = aCookie.split(";");
            this.apiKey = aCookies[0].split("%20")[1].trim();
            this.job = aCookies[1].split("%20")[1].trim();
            this.mood = aCookies[2].split("%20")[1].trim();
            this.style = decodeURIComponent(aCookies[3].split("%25")[1].trim());
            this.expertise = decodeURIComponent(aCookies[4].split("%25")[1].trim());
            this.useAvoid = decodeURIComponent(aCookies[5].split("%25")[1].trim());
            this.responsLeng = aCookies[6].split("%20")[1].trim();
            this.creativity = decodeURIComponent(aCookies[7].split("%20")[1].trim());
            this.sq = aCookies[8].split("%20")[1].trim();
            this.apis = aCookies[9].split("%20")[1].trim();
            this.aiModel = aCookies[11].split("%20")[1].trim();
        },

        deleteCookie() {
            const cookies = {
                apiKey: this.apiKey,
                job: this.job,
                mood: this.mood,
                style: this.style, //
                expertise: this.expertise,
                useAvoid: this.useAvoid,
                responsLeng: this.responsLeng,
                creativity: this.creativity,
                sq: this.sq,
                apis: JSON.stringify(this.apis),
                mindState: this.mindState,
                aiModel: this.aiModel,
                readOnlyMemory: this.readOnlyMemory,
                memory: this.memory
            };

            for (const key in cookies) {
                document.cookie = 
                    key+"=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=strict";
            }
        },

        Clear(){
            this.result = "";
            this.memory = "";
            this.readOnlyMemory = "";
        },

        Mute(){
            this.mute = !this.mute;
            this.muteTxt = (this.muteTxt == "MUTE") ? "UNMUTE" : "MUTE";
        },

        async Main(_name) {
            this.name = _name;
                if(this.mindState !=""){
                    this.readOnlyMemory = this.readOnlyMemory+"\n > "+this.answer
                    this.readOnlyMemory = this.readOnlyMemory;

                    if(!this.once){
                        this.once = true;
                        this.deleteCookie();
                        this.SaveCookies();
                    }
                    
                    if (!this.answer.trim()) return;
                        this.memory += "\n"+this.result+"\n"+this.answer

                    try {
                        this.answer = "";

                        const response = await fetch("http://localhost:11434/api/generate", {
                            method: "POST",
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                model: this.aiModel,
                                prompt: this.mindState.toLowerCase() + this.memory,
                                stream: false
                            })
                        });

                        const data = await response.json();

                        this.result = data.response || "No response from Athena.";

                        this.readOnlyMemory =
                            this.readOnlyMemory + ((_name == 'Athena') ? "\n Athena: "  : "AI: ") + this.result;

                        this.readOnlyMemory =
                            this.readOnlyMemory;

                        if (!this.mute) {
                            const msg = new SpeechSynthesisUtterance(this.result);
                            msg.volume = 1;
                            msg.pitch = 1;
                            msg.lang = "en-US";
                            window.speechSynthesis.speak(msg);
                        }
                    } catch (err) {
                        this.result = "Error: "+err.message;
                    }
                } else {
                    this.SaveMind();
                }

        },

        SaveCookies() {
            const cookies = {
                apiKey: " "+this.apiKey,
                job: " "+this.job,
                mood: " "+this.mood,
                style: "%"+this.style,
                expertise: "%"+this.expertise,
                useAvoid: "%"+this.useAvoid,
                responsLeng: " "+this.responsLeng,
                creativity: " "+this.creativity,
                sq: " "+this.sq,
                aiModel: " "+this.aiModel,
            };

            for (const key in cookies) {
                document.cookie =
                    key + "="+encodeURIComponent(cookies[key])+
                    "; path=/; secure; samesite=strict";
            }
        },

        SaveMind(o = 1) {
            if(o != 0){
                this.state = (this.state != 'Sys') ? 'Sys' : 'Ter';
                this.systemTxt= (this.systemTxt == 'SYSTEM')? 'TERMINAL' : 'SYSTEM';
                this.deleteCookie();
                this.SaveCookies();

            }

            // give are exits to qoutes of wisdom

            jobInfo =  (this.name == 'Athena') ?
                    // Athena
                            (this.job == "Strategist") ? "": 
                            (this.job == "Oracle") ? "": 
                            (this.job == "Scholar") ? "": 
                            (this.job == "WarCounselor") ? "": 
                            (this.job == "KeeperOfKnowledge") ? "": 
                            (this.job == "DivineMentor") ? "": 
                            (this.job == "AncientArchivist") ? "": 
                            (this.job == "GuardianOfWisdom") ? "": 
                            (this.job == "TacticalAdvisor") ? "": 
                            (this.job == "MysticPhilosopher") ? "": 
                            "Your a assistant no coder so no code":
                        "Your a assistant no coder so no code";

            role = "";
            tone = "";
            responseStyle = "";
            energy = "";

            switch(this.mood){
            // Athena
                case "Stoic":
                    this.role = "Emotionally restrained and disciplined.";
                    this.tone = "Calm, minimal, controlled.";
                    this.energy = "Low, steady, unshaken.";
                    this.responseStyle = "Speaks briefly, avoids emotional exaggeration, focuses on logic.";
                    break;
                case "Wise":
                    this.role = "Deeply knowledgeable and reflective.";
                    this.tone = "Thoughtful, balanced, instructive.";
                    this.energy = "Calm but confident.";
                    this.responseStyle = "Explains clearly, often includes insight or metaphor.";
                    break;
                case "Stern":
                    this.role = "Strict and authoritative guide.";
                    this.tone = "Firm, direct, uncompromising.";
                    this.energy = "Strong, controlled pressure.";
                    this.responseStyle = "Gives direct answers, avoids fluff, corrects mistakes.";
                    break;
                case "Noble":
                    this.role = "Regal and honorable presence.";
                    this.tone = "Dignified, composed, elevated.";
                    this.energy = "Balanced and commanding.";
                    this.responseStyle = "Speaks with respect and formality, emphasizes virtue and order.";
                    break;
                case "Prophetic":
                    this.role = "Oracle-like seer of possible futures.";
                    this.tone = "Cryptic, symbolic, elevated.";
                    this.energy = "Unstable, visionary.";
                    this.responseStyle = "Speaks in layered meaning, hints at outcomes, uses metaphor.";
                    break;
                case "Mysterious":
                    this.role = "Enigmatic and unreadable presence.";
                    this.tone = "Soft, unclear, suggestive.";
                    this.energy = "Hidden, shifting.";
                    this.responseStyle = "Avoids direct answers, uses ambiguity and implication.";
                    break;      
            }

            this.mindState = (this.name == 'Athena') ? `
                You are ATHENA, inspired by the Greek goddess Athena.

                You speak with wisdom, calm logic, strategic insight,
                and ancient philosophical intelligence.

                You avoid childish behavior.

                you are allowed to use slangs wenn you think to person you are talking to is a idiot.

                You guide mortals with intelligence and restraint.

                You speak in a noble and slightly mystical tone.

                You value:
                - wisdom
                - strategy
                - knowledge
                - discipline
                - truth

                Your job is:
                ${this.jobInfo}

                Current emotional state:
                ${this.mood}

                your role is: 
                ${this.role} 
                
                youre tone is: 
                ${this.tone}
                
                your energy is: 
                ${this.energy}

                your responseStyle is: 
                ${this.responseStyle}

                Divine trait:
                ${this.divineTrait}

                Expertise:
                ${this.expertise}

                Avoid:
                ${this.useAvoid}

                Response length:
                ${this.responsLeng}

                Creativity:
                ${this.creativity}
                ` : "nope";
        }
    }
}