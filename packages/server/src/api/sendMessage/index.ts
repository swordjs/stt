import { useApi, Post } from '@swordjs/sword-framework';
import { loadPromptTemplate } from '@swordjs/prompt-template';
import { chatgptInstance } from '../../index';
import { ReqQuery, ReqParams, Res } from './proto';
import path from 'path';
import type { ChatCompletionRequestMessage } from '#types/openapi';

let template: { messages: ChatCompletionRequestMessage[] } | undefined;

export default useApi<{
  query: ReqQuery;
  params: ReqParams;
  res: Res;
}>({
  instruct: [Post()],
  handler: async (ctx) => {
    if (!template) {
      template = await loadPromptTemplate(path.resolve(__dirname, '../../prompt/default.md'));
    }
    const res = await chatgptInstance.sendMessage(ctx.params.message, {
      systemMessage: template.messages[0].content,
      promptData: template.messages.slice(1) as []
    });
    return {
      message: res.text
    };
  }
});
