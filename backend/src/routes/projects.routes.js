import { Router } from "express";
import { getProjects, getProjectDetail } from "../controllers/projects.controller.js";

const router = Router();

// GET /api/projects
router.get("/", getProjects);

// GET /api/projects/:slug
router.get("/:slug", getProjectDetail);

export default router;
