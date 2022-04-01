import mongoose from "mongoose"
const Schema = mongoose.Schema

let Avocados = new Schema({
  Date: { type: String },
  AveragePrice: { type: Number },
  type: { type: String },
  year: { type: Number },
  region: { type: String },
  // region: { type: String, required: true }
})

export default mongoose.model("AvocadoDB", Avocados)
