import { Router } from 'express';

const api = () => {
  let api = Router();

  api.use('/hello', (_req, res) => {
    res.send('hello world');
  });

  return api;
}

export default api;
