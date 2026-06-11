export interface Book {
    id : Number,
    title : String,
    author : String,
    rating : Number,
    reviews : Number,
    image : String,
    description : String,
    review : String
};

export interface BookContextType {
    books : Book[],
    issuedBooks : Book[],
    issueBook : (book : Book) => void,
    returnBook : (id : Number) => void
}