export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PUBLIC_API_KEY: string;
      _SWORD_COMMAND: 'dev' | 'build' | 'init' | 'doc' | 'share' | 'util';
      _SWORD_PLATFORM: 'server' | 'unicloud';
    }
  }
}
