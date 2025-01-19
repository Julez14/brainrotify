import "dotenv/config";

export interface AppConfig {
  OPENAI_API_KEY: string;
}

export default {
  name: "CoolApp",
  version: "1.0.0",
  extra: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};
