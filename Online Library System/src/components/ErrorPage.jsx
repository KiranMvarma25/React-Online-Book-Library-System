import { Link, useRouteError } from "react-router-dom";

function ErrorPage(){
    
    const err = useRouteError();
    
    return (
        <>
            <div className="errorpage"> 
                <h1 className="errorpagechildemoji">! Page Not Found</h1>
                <h1 className="errorpagechild">{err.data}</h1>
                <h1 className="errorpagechild">Status : {err.status} {err.statusText}</h1>
                <br />
                <br />
                <Link to="/home" className="errorpagelink">Back to Home</Link>
            </div>
        </>
    )
}


export default ErrorPage;