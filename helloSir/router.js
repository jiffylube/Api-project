import { Router } from "express";
import * as controllers from "./controller.js";

const router = Router();

router.get("/hellosirs", controllers.getHelloSirs);
router.get("/hellosirs/:id", controllers.getHelloSir);
router.post("/hellosirs", controllers.createHelloSir);
router.put("/hellsirs/:id", controllers.updateHelloSir);
router.delete("/hellsirs/:id", controllers.deleteHelloSir);

export default router;