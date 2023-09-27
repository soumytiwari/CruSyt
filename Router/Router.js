import express from "express";
import * as controllers from "../Controllers/Controllers.js";

const router = express.Router();

router.get("/", controllers.homepageGet);
export default router;