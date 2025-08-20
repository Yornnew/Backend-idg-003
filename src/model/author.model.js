import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const authorShcema = new mongoose.Schema({
  name :{
    type: String,
    required : true,
    unique : true
  },
  username :{
    type: String,
    required: true,
    unique : true
  },
  age: {
    type : Number,
    required : true
  },
  email: {
    type: String,
    required: true
  },
  book: [
    {type: mongoose.Types.ObjectId, ref:'books'}
  ]
},{
  timestamps: true
}
);
authorShcema.plugin(mongoosePaginate)
export const authorModel = mongoose.model('authors', authorShcema)
