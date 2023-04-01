const {
  createUser,
  getUserById,
  getAllUsers,
  searchUserByName,
} = require("../controllers/usersController");

const getUsersHandler = async (req, res) => {
  const { name } = req.query;

  const results = name ? await searchUserByName(name) : await getAllUsers();

  res.status(200).json(results);
};

// tengo que poder darme cuenta de que tipo de ID estoy hablando
// puede que llegue acá un id de algo que no existe

const getUserHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const user = await getUserById(id, source);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createUserHandler = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newUser = await createUser(name, email, phone);
    res.status(201).json("Creado exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUserHandler,
  getUsersHandler,
  createUserHandler,
};
