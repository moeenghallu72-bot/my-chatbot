export const DEFAULT_CHAT_MODEL = "gemini-1.5-flash";

export const titleModel = {
  description: "Fast model for title generation",
  gatewayOrder: [],
  id: "gemini-1.5-flash",
  name: "Gemini 1.5 Flash",
  provider: "google",
};

export type ModelCapabilities = {
  tools: boolean;
  vision: boolean;
  reasoning: boolean;
};

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
  gatewayOrder?: string[];
  reasoningEffort?: "none" | "minimal" | "low" | "medium" | "high";
};

export const chatModels: ChatModel[] = [
  {
    description: "Fast and capable Google model",
    gatewayOrder: [],
    id: "gemini-2.0-flash",
    name: "Gemini 2.0 Flash",
    provider: "google",
  },
  {
    description: "Balanced and fast model",
    gatewayOrder: [],
    id: "gemini-1.5-flash",
    name: "Gemini 1.5 Flash",
    provider: "google",
  },
  {
    description: "Most capable Gemini model",
    gatewayOrder: [],
    id: "gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    provider: "google",
  },
];

// Compatibility functions for old template
export function getAllGatewayModels() {
  return chatModels;
}
export function getActiveModels() {
  return chatModels;
}
export function isEndpointImpacted() {
  return false;
}
export function getModelAvailability() {
  return { available: true };
}
export function getCapabilities() {
  return { tools: true, vision: true, reasoning: false };
}
