import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[100,'length can not be more than 20 caracters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const Task = mongoose.model('Task',TaskSchema)

export{Task}