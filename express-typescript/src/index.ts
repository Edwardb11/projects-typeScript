import express from "express";
// Routes

import diaryRouter from './routes/diaries'
const app = express();
app.use(express.json()); //Middeware que trasnforma la req.body en un JSOM
const PORT = 3000;

// Parametro bajo ignora
app.get("/ping", (_req, res) => {
  console.log("Hola mundo");
  res.send("Ping");
});

app.use('/api/diaries',diaryRouter)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
