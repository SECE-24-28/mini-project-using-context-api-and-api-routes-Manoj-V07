"use client";

import { useContext } from "react";
import { BookContext } from "@/context/BookContext";

export default function IssuedBooks() {
  const context = useContext(BookContext);

  if (!context) {
    return <h1>Context Not Found</h1>;
  }

  const { issuedBooks, returnBook } = context;

  return (
    <div>
      <h1>Issued Books</h1>

      {issuedBooks.length === 0 ? (
        <h3>No Books Issued Yet</h3>
      ) : (
        issuedBooks.map((book) => (
          <div key={book.id as number}>
            <img
              src={book.image as string}
              alt={book.title as string}
              width={200}
            />

            <p>
              <strong>Title:</strong> {book.title}
            </p>

            <p>
              <strong>Author:</strong> {book.author}
            </p>

            <p>
              <strong>Rating:</strong> {book.rating as number}
            </p>

            <button
              onClick={() => returnBook(book.id)}
            >
              Return Book
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}