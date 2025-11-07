import {Router} from "express";
import * as TaskController from "./tasks.controller.js"
import { validate } from "../../middlewares/validate.middleware.js";
import { createTaskSchema, updatedTaskSchema, deleteTaskSchema } from "../../schemas/task.schema.js";

const router = Router();

router.get('/', TaskController.getTasks);
router.post('/', validate(createTaskSchema), TaskController.createTask);
router.put('/:id', validate(updatedTaskSchema), TaskController.updateTask);
router.delete('/:id', validate(deleteTaskSchema), TaskController.deleteTask);


export default router;