import "./AIChat.css";
import { useState } from "react";

function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [goal, setGoal] = useState("");
const [level, setLevel] = useState("Beginner");
const [studyTime, setStudyTime] = useState("1 Hour");
const [duration, setDuration] = useState("30 Days");

  const generateResponse = async () => {
    console.log("Button clicked");

    if (!goal.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          goal,
          level,
          studyTime,
          duration,
          prompt,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok || data.error) {
        setResponse(data.error?.message || "Something went wrong. Please try again.");
      } else {
        setResponse(
          data.choices?.[0]?.message?.content ||
            data.choices?.[0]?.text ||
            data.output?.[0]?.content ||
            "No response received."
        );
      }
    } catch (err) {
      setResponse("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-chat" className="ai-chat">
      <h2 className="ai-title">
  🤖 AI Roadmap Generator
</h2>

      <input
  type="text"
  placeholder="🎯 Learning Goal (e.g. React Developer)"
  value={goal}
  onChange={(e) => setGoal(e.target.value)}
  style={{
    width: "80%",
    maxWidth: "700px",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
  }}
/>

<br />

<select
  value={level}
  onChange={(e) => setLevel(e.target.value)}
  style={{
    width: "80%",
    maxWidth: "700px",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
  }}
>
  <option>Beginner</option>
  <option>Intermediate</option>
  <option>Advanced</option>
</select>

<br />

<select
  value={studyTime}
  onChange={(e) => setStudyTime(e.target.value)}
  style={{
    width: "80%",
    maxWidth: "700px",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
  }}
>
  <option>1 Hour</option>
  <option>2 Hours</option>
  <option>4 Hours</option>
</select>

<br />

<select
  value={duration}
  onChange={(e) => setDuration(e.target.value)}
  style={{
    width: "80%",
    maxWidth: "700px",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
  }}
>
  <option>30 Days</option>
  <option>60 Days</option>
  <option>90 Days</option>
</select>

<br />

<textarea
  rows="5"
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  placeholder="Any additional request (optional)"
  style={{
    width: "80%",
    maxWidth: "700px",
    padding: "15px",
    borderRadius: "10px",
    fontSize: "16px",
  }}
/>

      <br />
      <br />

     <button
  onClick={generateResponse}
  className="ai-button"
  disabled={loading}
>
  {loading ? "Generating..." : "🚀 Generate Roadmap"}
</button>

     <div className="ai-response">
  {response}
</div>
    </section>
  );
}

export default AIChat;