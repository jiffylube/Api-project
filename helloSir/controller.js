import HelloSir from "./model/helloSirmodel.js";

export const getHelloSirs = async (req, res) => {
  try {
    const helloSirs = await HelloSir.find();
    res.json(helloSirs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getHelloSir = async (req, res) => {
  try {
    const { id } = req.params;
    const helloSir = await helloSir.findById(id);

    if (helloSir) {
      return res.json(helloSir);
    }

    res.status(400).json({ message: "Data not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createHelloSir = async (req, res) => {
  try {
    const helloSir = new HelloSir(req.body);
    await helloSir.save();
    res.status(201).json(helloSir);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateHelloSir = async (req, res) => {
  const { id } = req.params;
  const helloSir = await HelloSir.findByIdAndUpdate(id, req.body);
  res.status(200).json(helloSir);
};

export const deleteHelloSir = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HelloSir.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Data deleted!");
    }

    throw new Error("Data not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};