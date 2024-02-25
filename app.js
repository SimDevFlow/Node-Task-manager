import express from 'express'
import 'dotenv/config'
import {connectDb} from './db/connect.js'
import { router as tasks } from "./router/tasks.js"
import { notFound } from './middlewares/not-found.js'
const app = express()

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/V1/tasks',tasks)
app.use(notFound)

const start = async()=>{
    try {
        app.listen(3000,()=>{console.log('app is listen on port 3000...')})
        connectDb(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

start()