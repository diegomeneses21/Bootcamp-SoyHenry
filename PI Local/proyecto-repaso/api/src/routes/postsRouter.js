const { Router } = require("express");
const postsRouter = Router();
const { createPostHandler } = require("../handlers/postsHandlers");

postsRouter.get("/", (req, res) => {
  res.send("Estoy en posts");
});

postsRouter.post("/", createPostHandler);

module.exports = postsRouter;
