// https://github.com/MagicCube/cli-gpt/blob/571175beea3d2b1ae9ed87861995f3d59115fe76/src/prompt/template.ts#L
import * as fs from 'node:fs/promises';
import * as os from 'node:os';
import * as readline from 'node:readline';
import * as stream from 'node:stream';
import type { ChatCompletionRequestMessage } from '#types/openapi';

export async function loadPromptTemplate(path: string) {
  return new Promise<{ messages: ChatCompletionRequestMessage[] }>(async (resolve) => {
    const messages: ChatCompletionRequestMessage[] = [];
    const saveCurrentMessage = () => {
      if (currentMessage) {
        currentMessage.content = currentMessage.content.trim();
        messages.push(currentMessage);
        currentMessage = null;
      }
    };

    const buffer = await fs.readFile(path);
    const bufferStream = new stream.PassThrough({ encoding: 'utf-8' });
    bufferStream.end(buffer);

    const rl = readline.createInterface({ input: bufferStream });
    let currentMessage: ChatCompletionRequestMessage | null = null;
    rl.on('line', (line) => {
      if (line.startsWith('# ')) {
        saveCurrentMessage();
        currentMessage = {
          role: line.substring(2).trim().toLowerCase() as 'user' | 'assistant' | 'system',
          content: ''
        };
      } else if (currentMessage) {
        const text = line.trim();
        if (text !== '') {
          currentMessage.content += line + '\n';
        }
      }
    });
    rl.on('close', () => {
      saveCurrentMessage();
      resolve({ messages });
    });
  });
}
