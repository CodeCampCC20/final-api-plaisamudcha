import express from "express";
import healthCon from "../controllers/health.controller.js";
import checkUserMiddleware from "../middlewares/checkUserMiddleware.js";

const healthRoute = express.Router();

healthRoute.use(checkUserMiddleware);

healthRoute.post("/", healthCon.createHealth);
healthRoute.get("/", healthCon.getAllHealth);
healthRoute.get("/:id", healthCon.getHealthById);
healthRoute.patch("/:id", healthCon.updateHealthById);
healthRoute.delete("/:id", healthCon.deleteHealth);

export default healthRoute;
