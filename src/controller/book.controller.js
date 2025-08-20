
import expressAsyncHandler from "express-async-handler";
import { bookModel} from "../model/book.model.js"




export const getAllBook =  expressAsyncHandler( async (req, res)=>{

    const book = await bookModel.find();
    return res.json(book);
 
})

export const getBookById =expressAsyncHandler( async (req, res) =>{
    const id = req.params.id;
    const book = await bookModel.findById(id);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    return res.json(book);
})

export const deleteBookById = async (req, res)=>{
    const bookId = req.params.bookId
    const deleteIndex = await bookModel.deleteOne({_id: bookId})
    return res.status(200).json({message: `The book is deleted with id = ${bookId}`})
}

//update by using function " find"
// export const updateBookById = (req, res)=>{
//     const id = req.params.id
//     const updateBook = books.find(b=> b.id == id)
//     if(!updateBook) {
//         return res.status(404).json({message: `The book is not found with id ${id}`})
//     }
//     Object.assign(updateBook, req.body)
//     return res.status(200).json({message: `Book is updated with id ${id}`})
// }
//update by using function "findIndex"
export const updateBookById = async (req, res)=>{
    const id = req.params.id
    const updateBook = await bookModel.updateOne({_id: id}, req.body)
    if(updateBook.matchedCount === 0) {
        return res.status(404).json({message: `The book is not found with id ${id}`})
    }
    return res.status(200).json(req.body)
}
export const createBook = expressAsyncHandler( async (req, res)=>{
    
    const book = new bookModel(req.body)
    await book.save()
    return res.status(200).json(book)
})