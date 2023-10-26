type Environments = "apiUrl" | "googleClientId";

const envs = {
  apiUrl: import.meta.env.VITE_API_URL,
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
};

export const getEnv = (key: Environments) => envs[key];
