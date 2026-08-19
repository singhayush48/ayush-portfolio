import { listProjects, getProjectBySlug } from "../services/projects.service.js";

export async function getProjects(req, res, next) {
  try {
    const projects = await listProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
}

export async function getProjectDetail(req, res, next) {
  try {
    const project = await getProjectBySlug(req.params.slug);
    if (!project) {
      return res.status(404).json({ error: `No project found for slug "${req.params.slug}"` });
    }
    res.json(project);
  } catch (err) {
    next(err);
  }
}
