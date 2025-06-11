import express from 'express'
import { UserRouter } from './routes/UserRoutes.js'
import { VideoRouter } from './routes/VideoRoutes.js'


const app = express()
const PORT = 8080

app.use(express.json())

app.use('/api',UserRouter)
app.use('/api',VideoRouter)


app.listen(PORT,()=>{
    console.log("Server Started ",PORT)
})