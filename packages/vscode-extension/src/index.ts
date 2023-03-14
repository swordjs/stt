import { window, commands, extensions, languages, Hover, TextDocument, Position } from 'vscode';
import { sendMessage } from '@swordjs/stt-core';
import type { GitExtension } from '../typings/git';

function getGitExtension() {
  return extensions.getExtension<GitExtension>('vscode.git')?.exports;
}

function getHoverId(document: TextDocument, position: Position) {
  return `${document.uri.toString()}-${position.line}-${position.character}`;
}

export function activate() {
  // 绑定command
  commands.registerCommand('extension.translateGitMessage', async () => {
    const gitExtension = getGitExtension();

    if (!gitExtension?.enabled) {
      window.showErrorMessage('Git extensions are not currently enabled, please try again after enabled!');
      return false;
    }

    const repo = gitExtension.getAPI(1).repositories[0];
    // loading
    window.withProgress(
      {
        location: 15,
        title: 'Translating...',
        cancellable: false
      },
      async () => {
        // 翻译
        const result = await sendMessage(repo.inputBox.value);
        repo.inputBox.value = result;
      }
    );
  });
}

export function deactivate() {
  // TODO
}
