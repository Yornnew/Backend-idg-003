import mongoose from "mongoose";


//set name database

const dbname = "yorn-idg-003"

//create connection to mongodb

const mongoURI = 'mongodb://localhost:27017';

export async function dbConnect() {
    mongoose.connection.on('connected', ()=> {
        console.log('connected:', dbname)
    })
    await mongoose.connect(mongoURI, {dbname})
}
