import { NetworkErrorMessage } from "@/data/ChatbotConfig";

type Language = "en" | "fr";

let apiEndpoint: string | null = null;

async function getApiEndpoint(): Promise<string> {
  if (apiEndpoint) return apiEndpoint;

  try {
    const res = await fetch("/api-config.json");
    const config = await res.json();
    apiEndpoint = config.apiEndpoint;

    if (!apiEndpoint) throw new Error("Missing movie recommendation backend endpoint in config");
    return apiEndpoint;
  } catch (err) {
    console.error("Error fetching API endpoint:", err);
    throw err;
  }
}

export async function getMovieRecommendation({
  query,
  sessionId,
  lang,
}: {
  query: string;
  sessionId: string;
  lang: Language;
}): Promise<string> {
  try {
    const API_ENDPOINT = await getApiEndpoint();

    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, query }),
    });

    const data = await res.json();
    console.log("API response:", data);

    if (!res.ok) {
      console.error("API call failed", data);
      return NetworkErrorMessage[lang];
    }
    return data.answer || "⚠️ Empty answer received.";
  } catch (err) {
    console.error("Error fetching movie recommendation:", err);
    return NetworkErrorMessage[lang];
  }
}
