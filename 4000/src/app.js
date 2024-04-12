import express from 'express';
import dotenv from 'dotenv';
import notFoundErrorHandler from './middlewares/notFoundError.middleware.js';
import generalErrorHandler from './middlewares/generalError.middleware.js';

dotenv.config();

const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
  res.send('<h1>4000번</h1>');
});

app.get('/4000/:number', (req, res) => {
  const number = req.params.number;
  
  res.send(`<h1>4000번 ${number} 주소</h1>`);
});

app.use(notFoundErrorHandler);
app.use(generalErrorHandler);
app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
