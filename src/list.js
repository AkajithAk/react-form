import React from "react";
function List(name){  
return(
    <>
    {name.combine.map(e=><div>
        <h1>{e.names}</h1>
        <h1>{e.email}</h1>
    </div>)} 
    
    </>
);
}
export default List;