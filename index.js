import { Router } from "express";
import helloSirRoutes from "./helloSir/router.js";
// import helloSirRoutes2 from "./hellSir/router2.js";


const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", helloSirRoutes);
// router.use("/", helloSirRoutes2);


export default router;