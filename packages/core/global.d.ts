// 扩展process.env类型
declare namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_API_KEY: string;
  }
}
