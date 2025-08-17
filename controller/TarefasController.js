const Tarefa = require("../models/Tarefa");

const getAllTarefas = async (req, res) => {
  try {
    const listaTarefas = await Tarefa.find();
    return res.render("index", {
      listaTarefas,
      tarefa: null,
      tarefaDelete: null,
    });
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

const getById = async (req, res) => {
  try {
    const listaTarefas = await Tarefa.find();
    if (req.params.method == "update") {
      const tarefa = await Tarefa.findOne({ _id: req.params.id });
      res.render("index", { tarefa, tarefaDelete: null, listaTarefas });
    } else {
      const tarefaDelete = await Tarefa.findOne({ _id: req.params.id });
      res.render("index", { tarefa: null, tarefaDelete, listaTarefas });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateOneTarefa = async (req, res) => {
  try {
    const tarefa = req.body;
    await Tarefa.updateOne({ _id: req.params.id }, tarefa);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteOneTarefa = async (req, res) => {
  try {
    await Tarefa.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllTarefas,
  createTarefa,
  getById,
  updateOneTarefa,
  deleteOneTarefa,
};
