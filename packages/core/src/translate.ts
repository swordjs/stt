import * as dotenv from 'dotenv';
import { ChatGPTAPI } from '@swordjs/chatgpt';
import { loadPromptTemplate } from '@swordjs/prompt-template';
import path from 'path';
import { ref } from '@vue/reactivity';
import type { ChatCompletionRequestMessage } from '#types/openapi';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const chatgptInstance = new ChatGPTAPI({
  apiKey: process.env.PUBLIC_API_KEY as string
});

let template: { messages: ChatCompletionRequestMessage[] } | undefined;

export const sendMessage = async (message: string) => {
  if (!template) {
    template = await loadPromptTemplate(path.resolve(__dirname, '../prompt/default.md'));
  }
  console.log([
    ...template.messages,
    {
      role: 'user',
      content: message
    }
  ]);
  // const res = await chatgptInstance.sendMessage(message);
  // return res;
};
