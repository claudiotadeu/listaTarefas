const routes = require("express").Router();
const TarefasController = require("../controller/TarefasController");

routes.get("/", TarefasController.getAllTarefas);
routes.post("/create", TarefasController.createTarefa);
routes.get("/getById/:id/:method", TarefasController.getById);
routes.post("/updateOne/:id", TarefasController.updateOneTarefa);
routes.get("/deleteOne/:id", TarefasController.deleteOneTarefa);
routes.get("/check/:id", TarefasController.tarefaCheck);

module.exports = routes;
