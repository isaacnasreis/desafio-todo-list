import * as TaskService from "./tasks.service.js"

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({error: "Erro ao buscar tarefas"});
  }
};
export const createTask = async (req, res) => {
  try {
    console.log(req.body);
    const title = req.body.title;

    const task = await TaskService.createTask(title);
    res.status(201).json(task);
  } catch (error) {
    console.log(error)
    res.status(500).json({error: "Erro ao criar tarefa"});
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const title = req.body.title;
    const completed = req.body.completed;

    const updatedTask = await TaskService.updateTask(id, title, completed);
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({error: "Erro ao atualizar tarefa"});
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await TaskService.deleteTask(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({error: "Erro ao deletar tarefa"});
  }
};