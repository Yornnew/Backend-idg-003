import { faker } from "@faker-js/faker";
import { dbConnect } from "./database/db.js";
import { bookModel } from "./model/book.model.js";
import { authorModel } from "./model/author.model.js";




dbConnect().catch((err) => {
    console.log(err)
})

const numberOfBook = 200;
const numberOfAuthor = 50;
const usedTitles = new Set();
const usedAuthorName = new Set();
const usedAuthorUserName = new Set();
// combine id between book and autor
const bookId = [];
const authorId = []

for (let i = 0; i < numberOfBook; i++) {

    let title;
    do {
        title = faker.book.title()
    } while (usedTitles.has(title))
    usedTitles.add(title)
// for only year

 const year = faker.date
        .between({ from: "2000-01-01", to: "2025-12-31" })
        .getFullYear();

    let book = new bookModel({
        title,
        publishedYear: year,
        typeOfBook: faker.book.series(),
        price: faker.commerce.price({ min: 50, max: 800, dec: 0, symbol: '$' }).replace(/[^0-9.-]+/g, "")


    })
    bookId.push(book._id)
    await book.save()
}
console.log(`the books = ${numberOfBook} generated`)


for (let i = 0; i < numberOfAuthor; i++) {


    let name, username;
    do {
        name = faker.person.fullName();
    } while (usedAuthorName.has(name));
    usedAuthorName.add(name);

    do {
        username = faker.internet.username();
    } while (usedAuthorUserName.has(username));
    usedAuthorUserName.add(username);

    let author = new authorModel({
        name: name,
        username: username,
        age: faker.number.int({ min: 10, max: 100 }),
        email: faker.internet.email()


    })
    authorId.push(author._id)
    await author.save()
}

//loop in books
let books = await bookModel.find()
books.forEach(async (item) => {
    item.authorBy = faker.helpers.arrayElements(authorId, { min: 1, max: 4 })
    await item.save()
})

//loop in author
let authors = await authorModel.find()
authors.forEach(async (item) => {
    item.book = faker.helpers.arrayElements(bookId, { min: 2, max: 4 })
    await item.save()
})

console.log(`the auhtors = ${numberOfAuthor} generated`)