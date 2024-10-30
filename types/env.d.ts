declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      HOST: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};