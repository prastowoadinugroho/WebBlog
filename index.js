import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import postRoutes from './routes/posts.js';

const app = express();

dotenv.config({
    path: './config/index.env'
})

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(morgan('dev'));

app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.DB_URL;

const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
        .catch((err) => {
            console.log(err.message)
        })
mongoose.set('useFindAndModify', false)