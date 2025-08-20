import expressAsyncHandler from "express-async-handler"
import { teachers } from "../model/teacher.model.js"


export const getAllTecher = expressAsyncHandler( (req, res) =>{
    
    return res.status(200).json(teachers)
})

export const getAllTecherById =expressAsyncHandler( (req, res)=>{
    const id = req.params.id
    const teacher = teachers.find(t=> t.id == id)
    if(!teacher) {
        return res.status(404).json({message: `Teacher with id = ${id} is not found.`})
    }
    return res.status(200).json(teacher)
})

export const deleteTeacherById = expressAsyncHandler((req, res)=>{
    const id = req.params.id
    const teacherIndex = teachers.findIndex(t => t.id == id)
    if(teacherIndex ===-1) {
        return res.status(404).json({message: `teacher with id = ${id} is not found`})
    }
    teachers.splice(teacherIndex, 1)
    return res.status(200).json({message: `Teacher with id = ${id} is deleted`})
})

export const updateTeacherById =expressAsyncHandler((req, res) => {
    const tId = req.params.id
    const teacher = teachers.findIndex(t => t.id == tId)
    if(teacher ===- 1) {
        return res.status(404).json({message: `ID=${tId} Not Found`})
    }
    teachers[teacher] = {id , ...req.body}
    return res.json({message: " teacher is updated"})
})

export const createTeacher = expressAsyncHandler((req, res) => {
    const {id, name} = req.body

    const teacher = teachers.find(t=> t.id == id)
    const teacherFindName=teachers.find(t => t.name.toLowerCase() == name.toLowerCase())

    if(teacher) {
        return res.status(400).json({message: `ID = ${id} is already exist`})
    }
    if(teacherFindName) {
        return res.status(400).json({message: `Teacher with name ${name} is already exist`})
    }
    teachers.push(req.body)
    return res.json(req.body)

})