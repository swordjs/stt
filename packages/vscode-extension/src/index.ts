import { window, commands, extensions } from 'vscode';
import { sendMessage } from '@swordjs/stt-core';
import type { GitExtension } from '../typings/git';

function getGitExtension() {
  return extensions.getExtension<GitExtension>('vscode.git')?.exports;
}

export function activate() {
  // 绑定command
  commands.registerCommand('extension.translateGitMessage', () => {
    const gitExtension = getGitExtension();

    if (!gitExtension?.enabled) {
      window.showErrorMessage('Git extensions are not currently enabled, please try again after enabled!');
      return false;
    }

    const repo = gitExtension.getAPI(1).repositories[0];
    sendMessage(repo.inputBox.value);
    // 显示信息
    window.showInformationMessage(`Hello World! ${repo.inputBox.value}`);
  });
}

export function deactivate() {
  // TODO
}
