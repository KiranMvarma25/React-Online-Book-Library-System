import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

function BookDetails() {
    
    const { id } = useParams();
    const books = useSelector((store) => store.cart.books);
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) 
        return <p>Book not found</p>;
    
    return (
        <>  
            <br />
            <br />
            <Link to="/browse" className="backtobrowse" >Back to Browse</Link>
            
            <br />
            <br />
            <br />

            <div className="bookdetails">
                <img src={book.coverImage} alt={`Image of ${book.title}`} height="300px" width="100%" className="bookdetailsimage" />
                <h1 className="bookdetailschild">{book.title}</h1>
                <p className="bookdetailschild"><strong>Author:</strong> {book.author}</p>
                <p className="bookdetailschild"><strong>Published Date:</strong> {book.publishedDate}</p>
                <p className="bookdetailschild"><strong>Description:</strong> {book.description}</p>
                <p className="bookdetailschild"><strong>Pages :</strong> {book.pages}</p>
                <p className="bookdetailschildrating"><strong>Rating :</strong> {book.rating}</p>
            </div>
            
        </>
    );
}

export default BookDetails;