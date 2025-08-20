import expressAsyncHandler from "express-async-handler";
import { authorModel } from "../model/author.model.js"


export const getAllAuthor = expressAsyncHandler( async (req, res) => {
    const author = await authorModel.find().populate('book');
    return res.json(author)
})

export const getAllAuthorById = expressAsyncHandler( async (req, res) => {

    const id = req.params.id
    const author = await authorModel.findById(id)
    if (!author) {
        return res.status(404).json({ message: `The author with ${id} is not found!` })
    }
    return res.json({ author })
})

export const deleteAuthorById = expressAsyncHandler( async (req, res) => {
    const authorId = req.params.id;
    const author = await authorModel.deleteOne({ _id: authorId })
    return res.status(201).json({ message: `The author with id = ${authorId} is deleted!` })
})

export const updateAuthorById = expressAsyncHandler( async (req, res) => {
    const authorId = req.params.id
    const updateAuthor = await authorModel.updateOne({ _id: id }, req.body)
    if (updateAuthor.matchedCount === 0) {
        return res.status(404).json({ message: `Author with id = ${authorId} Not Found!` })
    }
    return res.json(req.body)
})

export const createAuthor = expressAsyncHandler(async (req, res) => {

        const author = new authorModel(req.body)
        await author.save()
        return res.status(201).json(author)

    } 
)
   


