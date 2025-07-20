// tomar y sanitizar data de entrada (input)
// procesos internos -> hash de la contraseña
import { Request, Response } from "express"
import { HTTP_STATUS_CODES } from "../utils/statusCodes"
import { Book } from "../models/BooksModel"
import { bookSchema } from "../validators/BookSchemaValidator"

const {
  OK,
  CREATED,
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = HTTP_STATUS_CODES

declare module "express" {
  interface Request {
    userId?: string
  }
}

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const userId = req.userId
    const books = await Book.find({ userId })
    res.status(OK).json({ success: true, message: "Éxito al obtener las tareas", data: books })
  } catch (error: any) {
    res.status(INTERNAL_SERVER_ERROR).json({ success: false, message: error.message })
  }
}


const createBook = async (req: Request, res: Response): Promise<void> => {
  const body = req.body
  const userId = req.userId
  try {
    const { text, gender } = body

    const validator = bookSchema.safeParse({ text, gender })

    if (!validator.success) {
      res.status(BAD_REQUEST).json({ success: false, message: validator.error.issues })
      return
    }

    const newBook = new Book({ text, userId, gender })
    await newBook.save()

    res.status(CREATED).json({ success: true, message: "Tarea registrada con éxito", data: newBook })
  } catch (error: any) {
    res.status(INTERNAL_SERVER_ERROR).json({ success: false, message: error.message })
  }
}

const updateBook = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id
  const body = req.body
  const userId = req.userId
  try {
    const { completed } = body

    if (!id || completed === undefined) {
      res.status(BAD_REQUEST).json({ success: false, message: "Data invalida" })
      return
    }

    const book = await Book.findOne({ _id: id, userId })

    if (!book) {
      res.status(NOT_FOUND).json({ success: false, message: "Tarea no encontrada" })
      return
    }

    book.completed = !book.completed
    await book.save()

    res.json({ success: true, message: "Tarea actualizada con éxito", data: book })
  } catch (error) {
    const err = error as Error
    res.status(INTERNAL_SERVER_ERROR).json({ success: false, message: err.message })
  }
}

const deleteBook = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const userId = req.userId

  try {
    if (!id) {
      res.status(BAD_REQUEST).json({ success: "false", message: "Data invalida" })
      return
    }

    const deletedBook = await Book.findByIdAndDelete({ _id: id, userId })
    if (!deletedBook) {
      res.status(NOT_FOUND).json({ success: false, message: "Error al encontrar la tarea" })
      return
    }

    res.json({ success: true, message: "Tarea borrada con éxito", data: deletedBook._id })
  } catch (error) {
    const err = error as Error
    res.status(INTERNAL_SERVER_ERROR).json({ success: false, message: err.message })
  }
}

export { getAllBooks, createBook, updateBook, deleteBook }