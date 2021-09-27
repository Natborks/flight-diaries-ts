import express from 'express';
const app = express();
import diaryRouter from './routes/diary';
app.use(express.json());

const PORT = 3000;

app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
