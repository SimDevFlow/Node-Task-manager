import express from 'express'
import {getAllTasks,createTasks, deleteTask, updateTask, getTask} from "../controllers/tasks.js"

const router = express.Router()


router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').delete(deleteTask).patch(updateTask).get(getTask)

export{router}