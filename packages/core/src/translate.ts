import * as dotenv from 'dotenv';
import { ChatGPTAPI } from '@swordjs/chatgpt';
import { loadPromptTemplate } from '@swordjs/prompt-template';
import path from 'path';
import type { ChatCompletionRequestMessage } from '#types/openapi';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const chatgptInstance = new ChatGPTAPI({
  apiKey: process.env.PUBLIC_API_KEY as string,
  completionParams: {
    max_tokens: 1000,
    temperature: 0
  }
});

let template: { messages: ChatCompletionRequestMessage[] } | undefined;

export const sendMessage = async (message: string, opts?: { apiKey?: string }) => {
  const { apiKey } = opts || {};
  if (!template) {
    template = await loadPromptTemplate(path.resolve(__dirname, '../prompt/default.md'));
  }
  const res = await chatgptInstance.sendMessage(message, {
    systemMessage: template.messages[0].content,
    promptData: template.messages.slice(1) as [],
    apiKey
  });
  return res.text;
};
