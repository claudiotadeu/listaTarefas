const Tarefa = require("../models/Tarefa");

const getAllTarefas = async (req, res) => {
  try {
    const listaTarefas = await Tarefa.find();
    return res.render("index", {listaTarefas});
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTarefa = async (req, res) => {
  const tarefa = req.body;

  if (!tarefa.tarefa) {
    return res.redirect("/");
  }

  try {
    await Tarefa.create(tarefa);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllTarefas,
  createTarefa,
};
