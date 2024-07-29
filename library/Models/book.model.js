import { model, Schema } from "mongoose";

const bookSchema = new Schema({
  title: String,
  author: String,
  publishedYear: String,
  genre: String,
  summary: String,
});

const Book = model("book", bookSchema);

export default Book;