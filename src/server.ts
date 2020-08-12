import express from 'express';
import StuffController from '@controllers/stuff';

const app = express();

const stuff = new StuffController();

app.get('/stuff/:stuffId', (request, response) => stuff.get(request, response));

const port = 3333;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
