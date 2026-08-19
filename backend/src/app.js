import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env.js";
import { apiLimiter } from "./middleware/rateLimit.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";
import apiRoutes from "./routes/index.js";

export function createApp() {
  const app = express();

  // Security headers
  app.use(helmet());

  // Only allow the configured frontend origins to call this API.
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || env.frontendUrls.includes(origin)) return callback(null, true);
        const error = new Error("Origin is not allowed by CORS");
        error.status = 403;
        return callback(error);
      },
      methods: ["GET", "POST"],
    })
  );

  app.use(express.json({ limit: "10kb" }));
  app.use(apiLimiter);

  app.use("/api", apiRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
