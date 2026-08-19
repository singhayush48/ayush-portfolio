import "dotenv/config";

const required = ["SUPABASE_URL", "SUPABASE_SECRET_KEY"];

for (const key of required) {
  if (!process.env[key]) {
    console.warn(`[config] Missing required environment variable: ${key}`);
  }
}

export const env = {
  port: Number(process.env.PORT) || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  frontendUrls: (process.env.FRONTEND_URL || "http://localhost:5173")
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean),
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseSecretKey: process.env.SUPABASE_SECRET_KEY,
};
