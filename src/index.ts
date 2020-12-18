import express from "express"
import { fileURLToPath } from "url"
import path from "path"
import axios from "axios"
import dotenv from "dotenv"
import "regenerator-runtime/runtime"

dotenv.config()

const __dirname = path.dirname(fileURLToPath((import.meta as any).url))
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, "../../client/build")))
app.listen(PORT)

app.post("/what-about-windows", async (req, res) => {
  return res.send("windows users are not real programmers")
})

app.get("*", (_, res) =>
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"))
)
