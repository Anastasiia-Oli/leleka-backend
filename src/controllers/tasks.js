import {
  createTask,
  getTasksByUserId,
  updateTasksStatus,
} from '../services/tasks.js';

export const createTaskController = async (req, res) => {
  const taskData = { ...req.body, userId: req.user._id };
  const newTask = await createTask(taskData);
  res.status(201).json({
    status: 201,
    message: 'Task created',
    data: newTask,
  });
};
export const getTaskController = async (req, res) => {
  const isDoneParam = req.query.isDone;
  const isDone =
    isDoneParam === 'true' ? true : isDoneParam === 'false' ? false : undefined;
  const task = await getTasksByUserId(req.user._id, isDone);
  res.status(200).json({
    status: 200,
    data: task,
  });
};
export const updateTaskStatusController = async (req, res) => {
  const task = await updateTasksStatus(
    req.params.id,
    req.user._id,
    req.body.isDone,
  );
  res.status(200).json({
    status: 200,
    message: 'Status updated',
    data: task,
  });
};
