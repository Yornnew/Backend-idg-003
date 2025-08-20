import express from 'express';
import { createBook, deleteBookById, getAllBook, getBookById, updateBookById } from '../controller/book.controller.js';
import { handleValidation } from '../middleware/index.js';
import { bookValidator } from '../validator/book.validator.js';


const bookRoute = express.Router()

//get all books
bookRoute.get('/', getAllBook)

//get by Id
bookRoute.get('/:id', getBookById);


//delete book by id
bookRoute.delete('/:bookId', deleteBookById)

//update book by id

bookRoute.patch('/:id', updateBookById)

//create book
bookRoute.post('/', bookValidator, handleValidation, createBook)


export default bookRoute;