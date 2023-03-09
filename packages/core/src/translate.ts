import { ChatGPTAPI } from 'chatgpt';
import { ref } from '@vue/reactivity';

export const chatgptInstance = new ChatGPTAPI({
  apiKey: process.env.PUBLIC_API_KEY
});

export const sendMessage = async (message: string) => {
  const res = await chatgptInstance.sendMessage(message);
  return res;
};
