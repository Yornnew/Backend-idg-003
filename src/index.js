import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './route/user.route.js';
import bookRoute from './route/book.route.js';
import teacherRoute from './route/teacher.route.js';
import { dbConnect } from './database/db.js';
import authorRoute from './route/author.route.js';
import { handleError } from './middleware/index.js';
import morgan from 'morgan';



dbConnect().catch((err)=>{
    console.log(err)
})
const app = express();
app.use(bodyParser.json())
//morgan to log the originated data as common or combind

app.use(morgan('combined'))

//user
app.use('/api/users', userRoute)

//Books

app.use('/api/books', bookRoute);

//author

app.use('/api/authors', authorRoute)

//teacher

app.use('/api/teachers', teacherRoute)

//handle

app.use(handleError)


//runing port 
app.listen(2000, ()=>{ console.log("Running on port 2000")})