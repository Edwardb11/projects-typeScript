import express from "express";
import * as diaryServices from "../services/diaryServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSenstitiveInfo());
});

router.post("/", (_req, res) => {
  res.send("Saving a diaries ");
});

export default router;
