import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET!
const JWT_EXPIRES = process.env.JWT_EXPIRES!

export const generateToken = (user: Object) => {
  return jwt.sign({ user }, JWT_SECRET, { expiresIn: Number(JWT_EXPIRES) })
}