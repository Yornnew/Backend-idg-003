import { checkSchema } from "express-validator";
import { bookModel } from "../model/book.model.js";

export const bookValidator = checkSchema({
    title: {
        trim: true,
        isAlpha: {
            options:
                ['en-US', { ignore: ' .' }]
        },
        custom:{
            options: async v =>{
                const book = await bookModel.findOne({title: v});
                if(book){
                    throw new Error(`this book title as ${v} already exists`)
                }
            }
        }
    },
    publishedYear: {
        isInt: {
            options: {
                min: 2000,
                max: 2025
            },
            errorMessage: 'The Published year must be only number'
        }
    },
    typeOfBook: {
        // can use "the formula: customSanitizer : {option: v=>
        // ['',''].includes(v)?v:'something'" instead of "formular : isIn: {
        // option:['','']" to be able to set defualt.
        customSanitizer: {
            options: v => ['history', 'economics', 'technology'].includes(v) ? v : 'Unknown book'

        }
    },
    price: {
        isFloat: {
            options: {
                min: 0.01
            }
        }
    }


})