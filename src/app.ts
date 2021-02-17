import express, { Application } from 'express'
const xss = require('xss-clean');
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import apiRoutes from './routes/api.routes';

// Init
const server: Application = express();

// Settings
server.set('port', process.env.PORT || 3000);
const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: (process.env.CORS_CREDENTIALS === 'true')
};

// Middlewares
server.use(morgan('dev'));
server.use(cors(corsOptions));
server.use(express.urlencoded({extended: false}));
server.use(express.json());
server.use(xss());
server.use(compression());

// error handler
// app.use((err, req, res, next) => {
// 	if (err) {
// 		console.error(err.message);
// 		console.error(err.stack);
// 		return res.status(err.output.statusCode || 500).json(err.output.payload);
// 	}
// });

// Routes
server.use('/api/v1', apiRoutes);

export default server;