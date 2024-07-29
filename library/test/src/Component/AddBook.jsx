import React, { useState } from 'react'

const AddBook = () => {
    const [book, setBook] = useState({ title: '', author: '', publishedYear: '', genre: '', summary: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prevBook => ({ ...prevBook, [name]: value }));
      };
    


  return (
    <div>
      <form >
      <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" required /><br />
      <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author" required /><br />
      <input type="number" min="1900" max="2099"  name="publishedYear" value={book.publishedYear} onChange={handleChange} placeholder="Published Year" required /> <br />
      <input type="text" name="genre" value={book.genre} onChange={handleChange} placeholder="Genre" required /> <br />
      <textarea name="summary" value={book.summary} onChange={handleChange} placeholder="Summary"></textarea><br />
      <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default AddBook
