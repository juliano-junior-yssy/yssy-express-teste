import express from 'express';
const router = express.Router();

import { helloRouter } from '@routes/hello.route';

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/hello', helloRouter);

export default router;
