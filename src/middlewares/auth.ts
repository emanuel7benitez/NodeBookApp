import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET!

declare module "express" {
  interface Request {
    userId?: string
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization
  const token = authHeader?.split(" ")[1]

  if (!authHeader || !authHeader.startsWith("Bearer") || !token) {
    res.json({ success: false, message: "No autorizado" })
    return
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { user: any  }
    console.log(decoded, 'decode')
    req.userId = decoded.user._id
    next()
  } catch (error: any) {
    if (error.name === "JsonWebTokenError") {
      res.status(401).json({ success: false, message: "Clave secreta erronea" })
    } else if (error.name === "TokenExpiredError") {
      res.status(401).json({ success: false, message: "Token expirado" })
    }
  }
}

export { authMiddleware }