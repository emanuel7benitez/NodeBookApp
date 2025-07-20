// validar el método http -> acción por sobre la entidad
// validar el endpoint

import { Router } from "express"
import { authMiddleware } from "../middlewares/auth"
import { getAllGender } from "../controllers/genderControllers"

const genderRouter = Router()

genderRouter.get("/", authMiddleware, getAllGender)

export { genderRouter }