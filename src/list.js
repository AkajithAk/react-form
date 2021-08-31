import React from "react";
import './App.css';
function List(name){  
    console.log(name); 
return(
    <>
    {name.combine.map(e=><div className="main-div">
       <div className="cards">
        <h1>Name: {e.names}</h1>
        
      <h1> Email : {e.email}</h1>
      <h1> Ratings :{e.select}</h1>
       <h1>Gender : {e.gender}</h1>
       <button className="edit">Edit</button>&nbsp;&nbsp;
       <button className="delete">Delete</button></div>
       

    </div>)} 
    
    </>
);
}
export default List;