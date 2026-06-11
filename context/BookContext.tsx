"use client";

import { createContext, ReactNode, useState } from "react";
import booksData from "@/data/book";
import { Book, BookContextType } from "@/types/book";

export const BookContext = createContext<BookContextType | null>(null);

interface BookProviderProps {
  children: ReactNode;
}

export function BookProvider({ children }: BookProviderProps) {
  const [issuedBooks, setIssuedBooks] = useState<Book[]>([]);

  const issueBook = (book: Book) => {
    console.log("Issue Book Called");
    console.log(book);

    setIssuedBooks((prev) => {
      const updated = [...prev, book];

      console.log("Updated Issued Books:", updated);

      return updated;
    });
  };

  const returnBook = (id: Number) => {
    setIssuedBooks((prev) =>
      prev.filter((book) => book.id !== id)
    );
  };

  console.log("Current Issued Books:", issuedBooks);

  return (
    <BookContext.Provider
      value={{
        books: booksData,
        issuedBooks,
        issueBook,
        returnBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}