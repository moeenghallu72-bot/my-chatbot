import { customProvider } from "ai";
import { isTestEnvironment } from "../constants";
import { titleModel } from "./models";
import { google } from "@ai-sdk/google";

export const myProvider = isTestEnvironment
  ? ((() => {
      const {
        chatModel,
        titleModel: mockTitleModel,
      } = require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "title-model": mockTitleModel,
        },
      });
    }) as any)
  : null;

export function getLanguageModel(modelId: string) {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel(modelId);
  }
  return google.languageModel(modelId);
}

export function getTitleModel() {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel("title-model");
  }
  return google.languageModel(titleModel.id);
}
