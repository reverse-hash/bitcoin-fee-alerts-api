import 'dotenv/config';
import express from 'express';
import estimatedFees from './estimated-fees.js';
import { getStatus } from './health.js';

const app = express();

app.get('/estimated-fees', (_, res) => {
  res.send(estimatedFees());
});

app.get('/health', (_, res) => {
  return res.json({ status: getStatus() });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
