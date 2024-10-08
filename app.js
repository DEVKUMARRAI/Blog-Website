import dotenv from 'dotenv';
import express from 'express';
import expressLayout from 'express-ejs-layouts';
import mainRoutes from './server/routes/main.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

import {connectDB} from './server/config/db.js' 
connectDB();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`App Running On Port: ${PORT}`);
});
