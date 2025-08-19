const Tarefa = require("../models/Tarefa");

let mensagem = "";
let tipoMensagem = "";

const getAllTarefas = async (req, res) => {
  try {
    setTimeout(() => {
      mensagem = "";
    }, 2000);
    const listaTarefas = await Tarefa.find();
    return res.render("index", {
      listaTarefas,
      tarefa: null,
      tarefaDelete: null,
      mensagem,
      tipoMensagem,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTarefa = async (req, res) => {
  const tarefa = req.body;

  if (!tarefa.tarefa) {
    mensagem = "Insira um texto, antes de adicionar a Tarefa!";
    tipoMensagem = "perigo";
    return res.redirect("/");
  }

  try {
    await Tarefa.create(tarefa);
    mensagem = "Tarefa criada com sucesso!";
    tipoMensagem = "sucesso";
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
      res.render("index", {
        tarefa,
        tarefaDelete: null,
        listaTarefas,
        mensagem,
        tipoMensagem,
      });
    } else {
      const tarefaDelete = await Tarefa.findOne({ _id: req.params.id });
      res.render("index", {
        tarefa: null,
        tarefaDelete,
        listaTarefas,
        mensagem,
        tipoMensagem,
      });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateOneTarefa = async (req, res) => {
  try {
    const tarefa = req.body;
    await Tarefa.updateOne({ _id: req.params.id }, tarefa);
    mensagem = "Tarefa atualizada com sucesso!";
    tipoMensagem = "sucesso";

    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteOneTarefa = async (req, res) => {
  try {
    await Tarefa.deleteOne({ _id: req.params.id });
    mensagem = "Tarefa apagada com sucesso!";
    tipoMensagem = "sucesso";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const tarefaCheck = async (req, res) => {
  try {
    const tarefa = await Tarefa.findOne({ _id: req.params.id });

    //Condocional Ternária
    tarefa.check ? tarefa.check = false : tarefa.check = true;

    await Tarefa.updateOne({ _id: req.params.id }, tarefa);
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
  tarefaCheck,
};
