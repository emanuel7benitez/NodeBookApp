// estructurar la data
// definit un modelo
import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  gender: {type: String, required: true},
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }
},
  { versionKey: false, timestamps: true }
)

const Book = model("Book", bookSchema)

export { Book }