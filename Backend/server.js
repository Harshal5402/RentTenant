import express from "express"
import { connectDB } from "./config/db.js"
import 'dotenv/config'
import userRouter from "./routes/userRoute.js"
import cors from 'cors'

// app config
const app = express()
const PORT = process.env.PORT

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use('/api/user', userRouter)



app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})