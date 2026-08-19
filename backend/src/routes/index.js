import { Router } from "express";
import contactRoutes from "./contact.routes.js";
import projectsRoutes from "./projects.routes.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

router.use("/contact", contactRoutes);
router.use("/projects", projectsRoutes);

export default router;
