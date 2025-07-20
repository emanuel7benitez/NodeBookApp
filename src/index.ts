import "dotenv/config"
import express from "express"
import { connect } from "./config/mongoConnect";
import { authRouter } from "./routes/authRouter"
import cors from "cors";
import { genderRouter } from "./routes/genderRouter";
import { bookRouter } from "./routes/bookRouter";

const PORT = process.env.PORT ?? 1234

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", authRouter)
app.use("/api/genders", genderRouter)
app.use("/api/books", bookRouter)

app.use("/api", (req, res) => {
  res.status(404).json({
    message: "Not found"
  })
})

app.use((req, res) => {
  res.json({
    status: 200,
    books: "/api/books"
  })
})

app.listen(PORT, () => {
  console.log(`✅ Servidor en escucha por el puerto http://localhost:${PORT}`)
  connect()
})