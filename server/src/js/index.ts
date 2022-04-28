import express from 'express';
import cors from 'cors';
import { initConfigRoutes } from './routes/configRoutes';
import { initMarkdownRoutes } from './routes/markdownRoutes';
import { initDB } from './database/init';

const app = express();
const port = 7000;

initDB();

const initRoutes = () => {
  initConfigRoutes(app);
  initMarkdownRoutes(app);
};

app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);
app.use(express.json());
initRoutes();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
