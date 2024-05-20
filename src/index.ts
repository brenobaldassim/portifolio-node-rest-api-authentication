import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import router from './router';

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_USER_ADMIN = process.env.MONGO_USER_ADMIN;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;
const MONGO_URL = `mongodb+srv://${MONGO_USER_ADMIN}:${MONGO_PASSWORD}@${MONGO_CLUSTER}`;
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.clear();
  console.log('Server listening on port 8080 \n');
});

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (err: Error) => console.log(err));

app.use('/', router());
