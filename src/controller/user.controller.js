import expressAsyncHandler from "express-async-handler";
import { userModel } from "../model/user.model.js"
//filter
export const getAllUser = expressAsyncHandler(async (req, res)=>{

    const {age, minAge, maxAge, role} = req.query

    let filter = {}
    //filter by age
    if(age) {
        const ageArray = Array.isArray(age)? age.map(Number):[Number(age)]
        filter.age = { $in: ageArray}
        
    }
    
    //min age or max age
    if(minAge || maxAge) {
        filter.age = filter.age || {}
        if(minAge) {
            filter.age.$gte = Number(minAge)

        }
        if(maxAge) filter.age.$lte = Number(maxAge)
      
    }
    //filter by role 

    if(role) {
        const roles = Array.isArray(role)? role:[role]
        filter.role =  {$in : roles}
    
    }

    //if no filter , return all users
    
    const users = Object.keys(filter).length ===0
        ? await userModel.find().lean()
        : await userModel.find(filter).lean();
    return res.json(users)

});
   

export const getAllUserById = expressAsyncHandler( async (req, res)=>{
    const id = req.params.userid;
     console.log(id)
     const user = await userModel.findById(id)
    console.log(user)
    if(!user) {
        return res.status(404).json({message: 'User not found'})
    }
     return res.json(user)
})

export const deleteUserById = expressAsyncHandler( async (req, res)=>{
    const id = req.query.id;
    const deleteUser = await userModel.deleteOne({_id:id})
    return res.json({message :`Delete successfully with id = ${id}`, data: deleteUser})
    
})

export const updateUserById =expressAsyncHandler(async (req, res)=>{
    const userId = req.params.id
    const userIndex = await userModel.updateOne({_id :userId}, {$set: req.body})
    if(userIndex == -1) {
        return res.json("User not found")
    }
    return res.json({message: `User with id ${userId} is updated.`})
})

export const createUser =expressAsyncHandler( async (req, res)=>{
    const user = new userModel(req.body)
    await user.save()
    return res.status(201).json(user)
})

    
   