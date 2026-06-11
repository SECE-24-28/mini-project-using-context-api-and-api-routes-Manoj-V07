"use client";

import { Book } from "@/types/book";
import Link from "next/link";
import { useContext } from "react";
import { BookContext } from "@/context/BookContext";

export default function Books() {

    const context = useContext(BookContext);

    if(!context) {
        return <h1>Context Not Found</h1>;
    }

    const { books, issueBook } = context;

    return (
        <div>
            <h3>Books Page</h3>
            <br />
            <h4>View all the books available in the library !!!</h4>
            {
                books.map((book : Book) => (
                    <div key={book.id as number}>
                        <img src={book.image as string} width={400} height={400} />
                        <p>
                            <strong>Book Title : </strong>
                            {book.title}
                        </p>
                        <p>
                            <strong>Book Author : </strong>
                            {book.author}
                        </p>
                        <p>
                            <strong>Book Rating : </strong>
                            {book.rating as number}
                        </p>
                        <p> 
                            <strong>Total Reviews : </strong>
                            {book.reviews as number}
                        </p>
                        <button onClick={() => {
                            alert("Issued Book");
                            issueBook(book);
                        }}>Issue Book</button>
                        <br /><br />

                        <Link href={`/books/${book.id}`}>
                            View More Details
                        </Link>
                        <br /><hr /><br />
                    </div>
                ))
            }
        </div>
    );
}