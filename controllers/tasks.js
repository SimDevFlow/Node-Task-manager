import { Task } from "../models/Task.js"

const getAllTasks = async(req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const createTasks = async(req,res)=>{
    
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const getTask = async(req,res)=>{
    
    const{id:taskId} = req.params
    
    try {
        
        const task = await Task.findOne({_id:taskId})
        if (!task) {
            return res.status(404).json({msg:`Pas de tâche avec l'id ${taskId}`})
        }
        
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})

    }
}
const updateTask = async(req,res)=>{
    
    const{id:taskId} = req.params
    
    try {
        
        const task = await Task.findOneAndUpdate({_id:taskId},req.body,{new:true,runValidators:true})
        
        if(!task){
            res.status(404).json({msg:`Pas de tâche avec l'id ${taskId}`})
        }
        
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deleteTask = async(req,res)=>{
    
    const{id:taskId} = req.params
    
    try {
        
        const task = await Task.findOneAndDelete({_id:taskId})
        
        if(!task){
            res.status(404).json({msg:`Pas de tâche avec l'id ${taskId}`})
        }
        
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


export{getAllTasks,createTasks,updateTask,deleteTask,getTask}