import express from "express";
import * as diaryServices from "../services/diaryServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSenstitiveInfo());
});
router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id));
  return diary != null ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (_req, res) => {
  res.send("Saving a diaries ");
});

export default router;
