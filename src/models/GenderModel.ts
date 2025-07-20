import { Schema, model } from "mongoose"

const genderSchema = new Schema({
  name: { type: String, required: true },
}, { versionKey: false })



export const Gender = model("Gender", genderSchema)