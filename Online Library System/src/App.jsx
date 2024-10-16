import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import './index.css'; 

function App(){
  return (
    <>
      <Navbar />
      
      <h1 className="greeting">Welcome To Online BOOK LIBRARY</h1>
      
      <Outlet />

      <br />
      <br />
      <br />

      <h2 className="footerheader">Click Home to Enter the Library</h2>

      <br />


      <footer>
        <p className="footerchild">Kiran Varma Copyright @ 2024 Online Book Library</p>
                
        <p className="footerchild">Mostly all types of Categories Available</p>
                
        <p className="footerchild">Add your Favourite Books to our Library</p>

        <p className="footerchild">Download the App for better experience</p>

        <p className="footerchild">Made in India</p>
      </footer>

    </>
  )
}

export default App;