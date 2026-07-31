export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { goal, level, studyTime, duration, prompt } = req.body;

    if (!goal || !goal.trim()) {
      return res.status(400).json({ error: "Learning goal is required." });
    }

    const userPrompt = `Create a ${duration} learning roadmap to become a ${goal} for a ${level} learner practicing ${studyTime} daily.${
      prompt ? ` Also include: ${prompt}` : ""
    }`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1-0528:free",
        messages: [
          {
            role: "system",
            content:
              "You are an expert learning roadmap generator. Provide clear, practical learning paths with milestones, tools, and study recommendations.",
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    return res.status(response.ok ? 200 : 500).json(data);
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
}