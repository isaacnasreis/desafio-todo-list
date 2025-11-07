import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import taskRoutes from './modules/tasks/tasks.routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/tasks', taskRoutes);

export default app;