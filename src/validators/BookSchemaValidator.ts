import { z } from "zod"

const bookSchema = z.object({
  text: z.string().min(2, "El título debe tener 2 caracteres mínimo"),
  gender: z.string()

})

export { bookSchema }