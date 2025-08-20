import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"


const bookShcema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // will store all titles in lowercase
    trim: true
  },
  publishedYear: {
    type: Number,
    required: true
  },
  typeOfBook: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  authorBy: [
    { type: mongoose.Types.ObjectId, ref: 'authors' }
  ]

}, {
  timestamps: true
}
);

bookShcema.plugin(mongoosePaginate)
export const bookModel = mongoose.model('books', bookShcema)


// export const books = [
//   { id: 1, title: "Atomic Habits", author: "James Clear", publishedYear: 2018 },
//   { id: 2, title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008 },
//   { id: 3, title: "The Pragmatic Programmer", author: "Andrew Hunt", publishedYear: 1999 },
//   { id: 4, title: "Deep Work", author: "Cal Newport", publishedYear: 2016 },
//   { id: 5, title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", publishedYear: 1989 },
//   { id: 6, title: "Start With Why", author: "Simon Sinek", publishedYear: 2009 },
//   { id: 7, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", publishedYear: 2011 },
//   { id: 8, title: "Grit", author: "Angela Duckworth", publishedYear: 2016 },
//   { id: 9, title: "Outliers", author: "Malcolm Gladwell", publishedYear: 2008 },
//   { id: 10, title: "Drive", author: "Daniel H. Pink", publishedYear: 2009 }
// ];
