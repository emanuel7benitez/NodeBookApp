import { z } from "zod"

const bookSchema = z.object({
  text: z.string().min(1, "La tarea tiene que tener como mínimo 1 caracter"),
  gender: z.string()

})

export { bookSchema }