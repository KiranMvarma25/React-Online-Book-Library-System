import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
    
    const books = useSelector(store => store.cart.books);

    return (
        <>
            <div className="firsthalf">
                <h2 className="bookcategories">Book Categories</h2>
                <br />
                <div className="categories">
                    <Link to="/books/fiction" className="categoriesChild"><h4>Fiction</h4></Link>
                    <Link to="/books/non-fiction" className="categoriesChild"><h4>Non-Fiction</h4></Link>
                    <Link to="/books/history" className="categoriesChild"><h4>History</h4></Link>
                    <Link to="/books/biography" className="categoriesChild"><h4>Biography</h4></Link>
                    <Link to="/books/horror" className="categoriesChild"><h4>Horror</h4></Link>
                    <Link to="/books/fantasy" className="categoriesChild"><h4>Fantasy</h4></Link>
                </div>
            </div>

            <h2 className="popularbooks">Popular Books</h2>
            <br />
            <br />
            <div className="popular">
                {books.slice(0, 8).map(book => (
                    <>
                        <div key={book.id} className="browsebookschild">
                            <img src={book.coverImage} alt={`image of ${book.title}`} height="250px" width="250px" />
                            <h4>{book.title}</h4>
                            <p>by {book.author}</p>
                            <br />
                            <Link to={`/books/details/${book.id}`} key={book.id} className="viewdetails">View Details</Link>
                        </div>
                    </>
                ))}
            </div>     
        </>
    );
}

export default Home;