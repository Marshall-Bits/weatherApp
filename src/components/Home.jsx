import { Link } from "react-router-dom";
import { useState } from "react";

const Home = (()=>{
    const [searchString, setSearchString] = useState();
    const handleSearchString = ((e)=>{
        setSearchString(e.target.value)
    })
    return(
        <div className="city">
            <h1>Select your city to see the weather...</h1>
            <h2>Or search it here:</h2>
            <div>
                <input type="text" onChange={handleSearchString}/>
                <Link to={'/cities/'+searchString}><button>I'm feeling lucky</button></Link>
            </div>
        </div>
    )
})

export default Home;