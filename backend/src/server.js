import { createApp } from "./app.js";
import { env } from "./config/env.js";

const app = createApp();

app.listen(env.port, () => {
  console.log(`[server] Listening on port ${env.port} (${env.nodeEnv})`);
  console.log(`[server] Allowing requests from ${env.frontendUrls.join(", ")}`);
});
