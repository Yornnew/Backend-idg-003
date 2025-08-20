import express from 'express';
import { createAuthor, deleteAuthorById, getAllAuthor, getAllAuthorById, updateAuthorById } from '../controller/author.controller.js';



const authorRoute = express.Router()


authorRoute.get('/', getAllAuthor)
authorRoute.get('/:id', getAllAuthorById)
authorRoute.delete('/:authorId', deleteAuthorById)
authorRoute.post('/:authorId', updateAuthorById)
authorRoute.post('/', createAuthor)




export default authorRoute;







