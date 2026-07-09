import { ai } from "./gemini";

export async function createPlan(task: string): Promise<string> {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
You are a Playwright automation planner.

Return ONLY valid JSON.

Supported actions:
- goto
- click
- fill
- press
- acceptAlert

Example:

{
  "steps": [
    {
      "action": "goto",
      "url": "https://the-internet.herokuapp.com/javascript_alerts"
    },
    {
      "action": "click",
      "locator": "text=Click for JS Alert"
    },
    {
      "action": "acceptAlert"
    }
  ]
}

Task:
${task}
`
    });

    const text = response.text ?? "";

    return text
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/\s*```$/, "")
        .trim();
}