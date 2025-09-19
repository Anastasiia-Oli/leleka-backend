import createHttpError from 'http-errors';
import { TaskCollection } from '../db/models/tasks.js';

export const createTask = async (taskData) => {
  return await TaskCollection.create(taskData);
};
export const getTasksByUserId = async (userId) => {
  return await TaskCollection.find({ userId }).sort({ date: 1 });
};
export const updateTasksStatus = async (taskId, userId) => {
  const task = await TaskCollection.findOne({ _id: taskId, userId });
  if (!task) throw createHttpError(404, 'Task not found');
  task.isDone = !task.isDone;
  await task.save();
  return task;
};
