import Avocados from "./model/avocadosModel.js"

export const getAvocados = async (req, res) => {
  try {
    const avocados = await Avocados.find()
    res.json(avocados)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const getAvocado = async (req, res) => {
  try {
    const { id } = req.params
    const avocado = await avocado.findById(id)

    if (avocado) {
      return res.json(avocado)
    }

    res.status(400).json({ message: "Data not found!" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const createAvocados = async (req, res) => {
  try {
    const avocado = new Avocados(req.body)
    await avocado.save()
    res.status(201).json(avocado)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateAvocados = async (req, res) => {
  const { id } = req.params
  const avocado = await Avocados.findByIdAndUpdate(id, req.body)
  res.status(200).json(avocado)
}

export const deleteAvocados = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Avocados.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send("Data deleted!")
    }

    throw new Error("Data not found")
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
