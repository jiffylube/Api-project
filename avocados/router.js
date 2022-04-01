import { Router } from "express"
import * as controllers from "./controller.js"

const router = Router()

router.get("/avocados", controllers.getAvocados)
router.get("/avocados/:id", controllers.getAvocados)
router.post("/avocados", controllers.createAvocados)
router.put("/avocados/:id", controllers.updateAvocados)
router.delete("/avocados/:id", controllers.deleteAvocados)

export default router
