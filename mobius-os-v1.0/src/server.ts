import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { registerRoutes } from "./routes/index.js";

export async function buildServer() {
  const app = Fastify({ logger: true });
  await app.register(cors, { origin: true });
  await app.register(helmet);

  app.get("/health", async () => ({
    status: "ok",
    service: "mobius-os",
    version: "1.0.0"
  }));

  await registerRoutes(app);
  return app;
}

const port = Number(process.env.PORT ?? 4100);

if (process.env.NODE_ENV !== "test") {
  const app = await buildServer();
  await app.listen({ port, host: "0.0.0.0" });
}
