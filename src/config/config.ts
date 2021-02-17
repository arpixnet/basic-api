import dotenv from 'dotenv';
dotenv.config();

export default {
    DB: {
        USER: process.env.DB_USER || 'postgres',
        PASSWORD: process.env.DB_PASSWORD || 'postgres',
        HOST: process.env.DB_HOST || '127.0.0.1',
        PORT: parseInt(process.env.DB_PORT || '5432'),
        DATABASE: process.env.DB_DATA_BASE || 'postgres'
    }
}