import { useApp, usePipeline, usePlugin } from '@swordjs/sword-framework';
import { useCorsPlugin } from '@swordjs/sword-cors';
import { ChatGPTAPI } from '@swordjs/chatgpt';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const chatgptInstance = new ChatGPTAPI({
  apiKey: process.env.PUBLIC_API_KEY,
  completionParams: {
    max_tokens: 1000,
    temperature: 0
  }
});

const plugin = usePlugin();
const pipeline = usePipeline();

plugin.add(useCorsPlugin() as any);

const init = async () => {
  const app = await useApp();
  await app.implementApi();
  // 启动服务器
  app.server.start();
};

init();
