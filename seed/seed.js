import db from "../db/connection.js";
import HelloSir from "../helloSir/model/helloSirmodel.js";
import helloSir from "../helloSir/helloSir.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  db.dropDatabase();

  // insert into database
  await HelloSir.insertMany(helloSir);

  // close db connection (done)
  db.close();
};

insertData();