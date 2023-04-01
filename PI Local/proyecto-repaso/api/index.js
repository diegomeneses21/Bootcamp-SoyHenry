const { createDatabase } = require("../../PI-Countries-main/api/src/controllers/countriesControllers");
const app = require("./src/app");
const { sequelize } = require("./src/db");

app.listen(3001, () => {
  sequelize.sync({ alter: true });
  createDatabase();
  console.log("listening on port 3001");
});
