import { useApi, Post } from '@swordjs/sword-framework';
import { sendMessage } from '@swordjs/stt-core';
import { ReqQuery, ReqParams, Res } from './proto';

export default useApi<{
  query: ReqQuery;
  params: ReqParams;
  res: Res;
}>({
  instruct: [Post()],
  handler: async (ctx) => {
    return {
      message: await sendMessage(ctx.params.message)
    };
  }
});
