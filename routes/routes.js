const routes = require("express").Router();
const TarefasController = require("../controller/TarefasController");

routes.get("/", TarefasController.getAllTarefas);
routes.post("/create", TarefasController.createTarefa);

module.exports = routes;
