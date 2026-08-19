import { Router } from "express";
import { postContact } from "../controllers/contact.controller.js";
import { validateBody } from "../middleware/validate.js";
import { contactSchema } from "../validators/contact.validator.js";
import { contactLimiter } from "../middleware/rateLimit.js";

const router = Router();

// POST /api/contact
router.post("/", contactLimiter, validateBody(contactSchema), postContact);

export default router;
