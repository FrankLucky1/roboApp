import React from "react";

import "./searchbox.css";

export const SearchBox = ({placeholder, handlechange}) => (

<input className="search"

        type="search"
        
        placeholder={placeholder}
        
        onChange={handlechange}/>
 
);


