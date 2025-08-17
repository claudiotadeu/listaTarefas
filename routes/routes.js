const routes = require("express").Router();
const TarefasController = require("../controller/TarefasController");

routes.get("/", TarefasController.getAll);

module.exports = routes;