import { validationResult } from "express-validator"

export function userMiddleware(req, res, next) {
    const {age, role} = req.query
    const erros = []
    if(age) {
        const parseAge = parseInt(age)
        if(isNaN(parseAge)) {
            erros.push({message: 'Age must be the number.'})
        }
    }
    if(role) {
        const alphaRole= /^[A-Za-z]+$/
        if(!alphaRole.test(role)) {
            erros.push({message: 'Role must be only letter'})
        }
    } 
    if(erros.length>0)    
    return res.json(erros) 
    next()
}

//middleware to validate create user
export function userMiddlewarePostUser(req, res, next) {
    const {id, name, age, role} = req.body
    const errors = []
    if(id){
        const userId = parseInt(id)
        if(isNaN(userId)) {
            errors.push({error: "Error with id"})
        }
    }
    if(name) {
        const userName = /^[A-Za-z\s]+$/
        if(!userName.test(name)) {
            errors.push({error: " Error with name"})
        }
    }
    if(age) {
        const parseAge = parseInt(age)
        if(isNaN(parseAge)) {
            errors.push({message: 'Error with age.'})
        }
    }
    if(role) {
        const alphaRole= /^[A-Za-z\s]+$/
        if(!alphaRole.test(role)) {
            errors.push({message: 'Error with role'})
        }
    } 
    if(errors.length>0)    
    return res.json(errors) 
    next()
}

export function handleValidation(req, res, next){
    const result = validationResult(req);
    if(result.isEmpty()) {
       return next()
    }
    res.send({errors: result.array()});
    
}   

//handle erro

export function handleError(error, req, res,next) {
    return res.status(500).json({message: error.message})
}