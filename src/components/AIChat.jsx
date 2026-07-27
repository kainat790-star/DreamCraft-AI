import { useState } from "react";

function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const generateResponse = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      });

      const data = await res.json();

      if (data.error) {
        setResponse(data.error.message);
      } else {
        setResponse(data.choices[0].message.content);
      }
    } catch (err) {
      setResponse("Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2>✨ AI Roadmap Assistant</h2>

      <textarea
        rows="5"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask AI anything..."
        style={{
          width: "80%",
          maxWidth: "700px",
          padding: "15px",
          borderRadius: "10px",
        }}
      />

      <br />
      <br />

      <button onClick={generateResponse}>
        {loading ? "Generating..." : "Ask AI"}
      </button>

      <div
        style={{
          marginTop: "30px",
          width: "80%",
          marginInline: "auto",
          whiteSpace: "pre-wrap",
        }}
      >
        {response}
      </div>
    </section>
  );
}

export default AIChat;