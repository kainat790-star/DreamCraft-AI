import { useState } from "react";

function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const generateResponse = async () => {
    if (!prompt.trim()) return;

    const openRouterKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    const openAIKey = import.meta.env.VITE_OPENAI_API_KEY;
    const apiKey = openRouterKey || openAIKey;
    const useOpenRouter = Boolean(openRouterKey);

    if (!apiKey) {
      setResponse(
        "Missing API key. Create a .env file with VITE_OPENROUTER_API_KEY or VITE_OPENAI_API_KEY and restart the dev server."
      );
      return;
    }

    const endpoint = useOpenRouter
      ? "https://openrouter.ai/api/v1/chat/completions"
      : "https://api.openai.com/v1/chat/completions";

    const body = useOpenRouter
      ? {
          model: "openai/gpt-oss-20b",
          messages: [{ role: "user", content: prompt }],
        }
      : {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        };

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        const message = data.error?.message || `${res.status} ${res.statusText}`;
        const fallback = `The assistant is temporarily unavailable.\n\nReason: ${message}\n\nTry again later or update the API key in .env.`;
        setResponse(fallback);
      } else {
        const answer = data.choices?.[0]?.message?.content;
        setResponse(answer || "No response returned.");
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