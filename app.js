import express from 'express';
import session from 'express-session';
import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname,'public')));

app.use(session({
secret: 'your-secret-key',
resave: false,
saveUninitialized: true,
cookie: {secure:true}
}));



app.listen(port,() =>{
    console.log(`server running on http://localhost:${port}`)
});
