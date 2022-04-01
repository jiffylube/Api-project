import db from "../db/connection.js"
import Avocados from "../avocados/model/avocadosModel.js"
import avocado from "../avocados/avocado.json" assert { type: "json" }

const insertData = async () => {
  // reset database
  db.dropDatabase()

  // insert into database
  await Avocados.insertMany(avocado)

  // close db connection (done)
  db.close()
}

insertData()
