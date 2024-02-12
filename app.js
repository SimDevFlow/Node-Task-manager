import express from 'express';
import { router as tasks } from "./router/tasks.js";
const app = express()

//middleware
app.use(express.json())

//routes
app.use('/api/V1/tasks',tasks)

app.listen(3000,()=>{
    console.log('app listen on port 3000')
})