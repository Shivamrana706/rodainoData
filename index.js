import dotenv from 'dotenv';
dotenv.config({ path: '.env', debug: true })
import express from 'express';
import connection from './database/db.js';
import routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 8000;

connection();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/', routes);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function (err) {
        res.status(500).send(err);
    })
})



app.listen(port, () => {
    console.log(`Server is running succesfully on Port ${port}`)
});


