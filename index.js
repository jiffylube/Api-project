import { Router } from "express"
import avocadoRoutes from "./avocados/router.js"

const router = Router()

router.get("/", (req, res) => res.send("This is the api root!"))

router.use("/", avocadoRoutes)

export default router
