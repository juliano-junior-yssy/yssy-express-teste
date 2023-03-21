// tslint:disable-next-line: no-var-requires
import 'express-async-errors';

import { NODE_ENV } from '@config';
import { errorMiddleware } from '@middlewares/error.middleware';
import express from 'express';
import logger from 'morgan';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(logger(NODE_ENV === 'development' ? 'dev' : 'combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(errorMiddleware);

app.use(routes);

export default app;
