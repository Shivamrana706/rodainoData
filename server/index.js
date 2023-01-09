import dotenv from 'dotenv';
dotenv.config({path: '.env', debug: true})
import express from 'express';
import connection from './database/db.js';
import routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';



// const username = process.env.Username;
// const password = process.env.REACT_APP_USernmae;

// if (dotenvERROR.data){
//     console.log("DorenvError",dotenvERROR.data)
// }

// console.log("....env",username,password,".env")
// if(process.env.NODE_ENV === "producation"){
//     app.use(express.static('client/build'))
// }

const app = express();
const port = process.env.PORT || 8000;

connection();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/', routes);

app.listen(port , () => {
    console.log(`Server is running succesfully on Port ${port}`)
});


