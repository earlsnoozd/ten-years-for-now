import { createServer } from "http";
import { Express } from "express";

export async function registerRoutes(app: Express) {
  // Example API route
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from API!" });
  });

  // Wrap Express app in HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
