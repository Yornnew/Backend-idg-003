import express from 'express';
import { createTeacher, deleteTeacherById, getAllTecher, getAllTecherById, updateTeacherById } from '../controller/teacher.controller.js';





const teacherRoute = express.Router()

teacherRoute.get('/', getAllTecher)

teacherRoute.get('/:id', getAllTecherById)

teacherRoute.delete('/:id', deleteTeacherById)

teacherRoute.patch('/:id', updateTeacherById)
teacherRoute.post('/', createTeacher)


export default teacherRoute; 