import Link from "next/link";

export default function Home() {

  return (
    <div>
      <h4>Home Page</h4>
      <Link href="/books">View All Books</Link>
      <br /><br />
      
      <Link href="/issued-books">View Issued Books</Link>
    </div>
  );
}
