
const getAllTasks = (req,res)=>{
    res.send("ALL tasks")
}
const createTasks = (req,res)=>{
    res.json(req.body)
}
const getTask = ((req,res)=>{
    res.json({id:req.params.id})
})
const updateTask = (req,res)=>{
    res.send('update task ')
}
const deleteTask = (req,res)=>{
    res.send('delete task ')
}


export{getAllTasks,createTasks,updateTask,deleteTask,getTask}