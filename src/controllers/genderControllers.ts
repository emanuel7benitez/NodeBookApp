// tomar y sanitizar data de entrada (input)
// procesos internos -> hash de la contraseña
import { NextFunction, Request, Response } from "express"
import { HTTP_STATUS_CODES } from "../utils/statusCodes"
import { Gender } from "../models/GenderModel"

const {
  OK,
  INTERNAL_SERVER_ERROR,
} = HTTP_STATUS_CODES

declare module "express" {
  interface Request {
    userId?: string
  }
}


const getAllGender = async (req: Request, res: Response) => {
  try {
    const gender = await Gender.find({})
    res.status(OK).json({ success: true, message: "Éxito al obtener los generos", data: gender })
  } catch (error: any) {
    res.status(INTERNAL_SERVER_ERROR).json({ success: false, message: error.message })
  }
}




export {  getAllGender }