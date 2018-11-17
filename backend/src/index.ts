import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import api from './api';
import config from './config';
import middleware from './middleware';

const app = express();

// logger
app.use(morgan('dev'));

app.use(cors({
  exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
  limit : config.bodyLimit
}));

app.use(middleware());

// api router
app.use('/api', api());

app.listen(process.env.PORT || config.port, () => {
  console.log(`Started on port ${config.port}`);
});

export default app;
