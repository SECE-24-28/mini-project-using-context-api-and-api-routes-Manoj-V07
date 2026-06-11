import BookData  from "@/data/book";
import { Book } from "@/types/book";
import Link from "next/link";
import { notFound } from "next/navigation";

interface DetailPageProps {
    params : Promise<{ id : String }>;
}

export default async function DetailBooks({ params } : DetailPageProps) {

    const { id } = await params;
    const book = BookData.find((book : Book) => String(book.id) === id);

    if(!book) {
        notFound();
    }

    return (
        <div>
            <Link href="/books">
                <button>Back to Library</button>
            </Link>
            <br /><br />

            <h3>Detailed View of a Book : </h3>
            <hr />
            {
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
                        <p>
                            <strong>Book Description : </strong>
                            {book.description}
                        </p>
                        <p>
                            <strong>Book Review : </strong>
                            {book.review}
                        </p>
                        <br /><br />
                    </div>
            }
        </div>
    );
}