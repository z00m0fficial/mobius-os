import type { FastifyInstance } from "fastify";
import { createMosId } from "../shared/id.js";
import { AtlasClient } from "../services/atlas-client.js";

export async function registerRoutes(app: FastifyInstance) {
  app.post("/api/v1/organizations", async (request) => ({
    status: "created",
    data: { organizationId: createMosId("ORG"), body: request.body }
  }));

  app.get("/api/v1/workspaces/:organizationId", async (request) => {
    const { organizationId } = request.params as { organizationId: string };
    return { status: "ok", data: { organizationId, modules: ["dashboards", "workflows", "tasks", "scheduling", "audit"] } };
  });

  app.get("/api/v1/dashboards/:organizationId", async (request) => {
    const { organizationId } = request.params as { organizationId: string };
    return { status: "ok", data: [{ dashboardId: createMosId("DSH"), organizationId, type: "executive" }] };
  });

  app.post("/api/v1/workflows", async (request) => ({
    status: "created",
    data: { workflowId: createMosId("WFL"), body: request.body }
  }));

  app.post("/api/v1/tasks", async (request) => ({
    status: "created",
    data: { taskId: createMosId("TSK"), body: request.body }
  }));

  app.post("/api/v1/schedule/items", async (request) => ({
    status: "created",
    data: { scheduleItemId: createMosId("SCH"), body: request.body }
  }));

  app.post("/api/v1/notifications", async (request) => ({
    status: "accepted",
    data: { notificationId: createMosId("NTF"), body: request.body }
  }));

  app.get("/api/v1/audit/:organizationId", async (request) => {
    const { organizationId } = request.params as { organizationId: string };
    return { status: "ok", data: { organizationId, events: [] } };
  });

  const atlas = new AtlasClient(process.env.ATLAS_CORE_URL ?? "http://localhost:4000");

  app.post("/api/v1/atlas/events", async (request) => atlas.publishEvent(request.body));
  app.post("/api/v1/atlas/recommendations", async (request) => atlas.requestRecommendation(request.body));
}
