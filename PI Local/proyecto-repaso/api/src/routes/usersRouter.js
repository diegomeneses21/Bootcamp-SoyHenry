const { Router } = require("express");

const {
  createUserHandler,
  getUserHandler,
  getUsersHandler,
} = require("../handlers/usersHandlers");

const usersRouter = Router();

const validate = (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  if (!email) return res.status(400).json({ error: "Missing email" });
  if (!phone) return res.status(400).json({ error: "Missing phone" });

  next();
};

usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id", getUserHandler);

usersRouter.post("/", validate, createUserHandler);

module.exports = usersRouter;
