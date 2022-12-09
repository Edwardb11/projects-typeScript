import express from "express";
import * as diaryServices from "../services/diaryServices";
import toNewDiaryEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSenstitiveInfo());
});
router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id));
  return diary != null ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    // const { date, weather, visibility, comment } = req.body;
    // const AddedDiaryEntry = diaryServices.addDiary({
    //   date,
    //   weather,
    //   visibility,
    //   comment,
    // });
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const AddedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
    res.json(AddedDiaryEntry);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }
  }
});

export default router;
