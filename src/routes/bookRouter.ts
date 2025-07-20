// validar el método http -> acción por sobre la entidad
// validar el endpoint

import { Router } from "express"
import { authMiddleware } from "../middlewares/auth"
import { createBook, deleteBook, getAllBooks, updateBook } from "../controllers/booksControllers"

const bookRouter = Router()

// TODAS LAS QUERIES QUE LLEGAN ACÁ COMIENZAN CON "/api/tasks"

// obtener todas las tareas
bookRouter.get("/", authMiddleware, getAllBooks)
bookRouter.post("/", authMiddleware, createBook)
bookRouter.patch("/:id", authMiddleware, updateBook)
bookRouter.delete("/:id", authMiddleware, deleteBook)

export { bookRouter }

