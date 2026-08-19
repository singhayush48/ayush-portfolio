import { createContactMessage } from "../services/contact.service.js";

export async function postContact(req, res, next) {
  try {
    const saved = await createContactMessage(req.body);
    res.status(201).json({
      message: "Message received. Thanks for reaching out!",
      id: saved.id,
    });
  } catch (err) {
    next(err);
  }
}
