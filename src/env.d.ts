declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_PASSWORD?: string;
      MONGO_USER_ADMIN?: string;
      MONGO_ClUSTER?: string;
      APP_SECRET?: string;
      NODE_ENV: 'development' | 'production';
      APP_PORT?: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
