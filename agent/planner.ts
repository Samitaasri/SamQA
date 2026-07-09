import { ai } from "./gemini";

export async function createPlan(task: string): Promise<string> {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
You are a QA Automation Planner.

Return ONLY valid JSON.

Example:

{
  "steps":[
    {
      "action":"goto",
      "url":"https://google.com"
    },
    {
      "action":"fill",
      "locator":"textarea[name='q']",
      "value":"Playwright"
    },
    {
      "action":"press",
      "locator":"textarea[name='q']",
      "value":"Enter"
    }
  ]
}

Task:
${task}
`
    });

    const text = response.text ?? "";

    // Remove markdown code fences if Gemini adds them
    return text
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/\s*```$/, "")
        .trim();
}