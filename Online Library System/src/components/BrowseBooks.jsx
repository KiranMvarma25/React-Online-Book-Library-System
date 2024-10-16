import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function BrowseBooks() {
    
    const { category } = useParams(); 
    const books = useSelector((store) => store.cart.books);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if(category) {
            const filtered = books.filter(
                book => book.category.toLowerCase() === category.toLowerCase()
            );
            setFilteredBooks(filtered);
        } 
        
        else 
            setFilteredBooks(books);
        
    }, [category, books]);

    function handleSearch() {
        const search = searchTerm.toLowerCase();
        const filtered = books.filter(book => 
                book.title.toLowerCase().includes(search) || 
                book.author.toLowerCase().includes(search)
        );
        setFilteredBooks(filtered);
    };

    
    const uniqueCategories = [...new Set(books.map(book => book.category))];

    return (
        <>
            <h1 className="AllBooksHeading">{category ? `Books in ${category}` : "All Books"}</h1>

            <br />
            <br />

            <div className="categorylinks">
                <Link to="/browse" className="categorylinkschild">All</Link>
                {uniqueCategories.map(cat => (
                    <Link key={cat} to={`/books/${cat.toLowerCase()}`} className="categorylinkschild">{cat}</Link>
                ))}
            </div>

            <br />

            <div className="inputandbutton">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by title or author" className="inputfield" />
                <button onClick={handleSearch} className="searchbutton">Search</button>
            </div>
            
            <div className="browsebooks">
                {filteredBooks.map(book => (
                    <div key={book.id} className="browsebookschild">
                        <img src={book.coverImage} alt={`image of ${book.title}`} height="250px" width="250px" />
                        <h4>{book.title}</h4>
                        <p>by {book.author}</p>

                        <br />
                        
                        <Link to={`/books/details/${book.id}`} className="viewdetails">View Details</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BrowseBooks;