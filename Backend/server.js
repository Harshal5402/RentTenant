import express from "express"
import { connectDB } from "./config/db.js"

const app = express()
const PORT = process.env.PORT 

app.use(express.json())

connectDB();

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})