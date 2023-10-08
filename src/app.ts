import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import { Express } from 'express';

import healthCheckRoute from './routes/healthcheck'

import * as middlewares from './helpers/middlewares';
import type { ResponseBack } from './types/MessageResponse';

const app:Express = express();

// Middlewares
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(morgan('common'));
app.use(helmet());
app.use(mongoSanitize());


app.use(
  cors({
    origin: '*',
  }),
);
dotenv.config();
app.disable('x-powered-by');

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);
app.use('/api/v1',healthCheckRoute)

// Routes
app.get<unknown, ResponseBack>('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      message: 'success',
    },
  });
});

app.use(middlewares.errorHandler);
app.use(middlewares.notFound);

export default app;
