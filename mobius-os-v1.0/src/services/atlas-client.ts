export class AtlasClient {
  constructor(private readonly baseUrl: string) {}

  async publishEvent(event: unknown) {
    const response = await fetch(`${this.baseUrl}/api/v1/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event)
    });
    return response.json();
  }

  async requestRecommendation(input: unknown) {
    const response = await fetch(`${this.baseUrl}/api/v1/reasoning/recommendations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input)
    });
    return response.json();
  }
}
