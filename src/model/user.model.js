
import mongoose from "mongoose";


const userShcema = new mongoose.Schema({
  name :{
    type: String,
    required : true
  },
  age :{
    type: Number,
    required: true
  },
  email: {
    type : String,
    required : true
  },
  role: {
    type : String,
    required : true
  }
})

export const userModel = mongoose.model('users', userShcema)
// export const users = [
//   { "id": 1, "name": "John Doe", "email": "john.doe@example.com", "age": 28, "role": "manager" },
//   { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com", "age": 32, "role": "admin" },
//   { "id": 3, "name": "Michael Brown", "email": "michael.brown@example.com", "age": 25, "role": "staff" },
//   { "id": 4, "name": "Emily Davis", "email": "emily.davis@example.com", "age": 29, "role": "manager" },
//   { "id": 5, "name": "William Wilson", "email": "william.wilson@example.com", "age": 35, "role": "admin" },
//   { "id": 6, "name": "Sophia Taylor", "email": "sophia.taylor@example.com", "age": 27, "role": "staff" },
//   { "id": 7, "name": "James Anderson", "email": "james.anderson@example.com", "age": 31, "role": "manager" },
//   { "id": 8, "name": "Olivia Thomas", "email": "olivia.thomas@example.com", "age": 26, "role": "admin" },
//   { "id": 9, "name": "Daniel Martinez", "email": "daniel.martinez@example.com", "age": 30, "role": "staff" },
//   { "id": 10, "name": "Ava Garcia", "email": "ava.garcia@example.com", "age": 24, "role": "manager" },
//   { "id": 11, "name": "Ethan Lee", "email": "ethan.lee@example.com", "age": 33, "role": "admin" },
//   { "id": 12, "name": "Mia Gonzalez", "email": "mia.gonzalez@example.com", "age": 22, "role": "staff" },
//   { "id": 13, "name": "Alexander Perez", "email": "alexander.perez@example.com", "age": 29, "role": "manager" },
//   { "id": 14, "name": "Isabella Hall", "email": "isabella.hall@example.com", "age": 31, "role": "admin" },
//   { "id": 15, "name": "Logan Young", "email": "logan.young@example.com", "age": 34, "role": "staff" },
//   { "id": 16, "name": "Charlotte Allen", "email": "charlotte.allen@example.com", "age": 27, "role": "manager" },
//   { "id": 17, "name": "Benjamin Wright", "email": "benjamin.wright@example.com", "age": 26, "role": "admin" },
//   { "id": 18, "name": "Amelia Scott", "email": "amelia.scott@example.com", "age": 25, "role": "staff" },
//   { "id": 19, "name": "Lucas Torres", "email": "lucas.torres@example.com", "age": 28, "role": "manager" },
//   { "id": 20, "name": "Harper Nguyen", "email": "harper.nguyen@example.com", "age": 23, "role": "admin" }

// ];
