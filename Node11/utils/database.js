const { Sequelize } = require("sequelize");

//utilizaremos el paso 2 para conectar sequelize con postgress (DB)
const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "atitalaquia2020",
  database: "agendaEmpresaComputo",
});

module.exports = { db };
