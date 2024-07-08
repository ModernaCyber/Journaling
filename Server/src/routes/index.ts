import express from "express";
import PingController from "../controllers/ping";
import authRoutes from "./authRoutes";
import journalRoutes from "./journalRoutes";

const router = express.Router();
router.use("/auth", authRoutes);
router.use("/journals", journalRoutes);
router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;
