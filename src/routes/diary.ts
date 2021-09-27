import express from 'express';
import diaryService from '../services/diaryService';
import toNewDiary from '../utils/utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));

  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', (req, res) => {
  try{
    const newDiaryEntry = toNewDiary(req.body);

    const addedEntry = diaryService.addDiary(newDiaryEntry);

    res.json(addedEntry);
  } catch (e) {
    const result = (e as Error).message;
    console.log(result);
  }

});

export default router;
