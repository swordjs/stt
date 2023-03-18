import { useApp, usePipeline, usePlugin } from '@swordjs/sword-framework';
import { useCorsPlugin } from '@swordjs/sword-cors';

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
