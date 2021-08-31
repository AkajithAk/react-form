import './App.css';
import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from './list';
import Demo from './demo';

function App() { 
   const [names,setName]=useState();
   const [email,setEmail]=useState();
   const [select,setSelect]=useState();
   const [gender,setGender]=useState();
   const [combine,setCombine]=useState([]); 
   

   console.log(gender);
   

  
const DataSubmited=(e)=>{
  e.preventDefault();
  const value={names,email,select,gender};
  if(names&&email&&select&&gender){
    setCombine(datas=>[...datas,value])
    setName("")
    setEmail("")
  } 
}



  return (
    <div className="App">
      <form onSubmit={DataSubmited}>
        <div className="input-pading">
        <input className="inputs" type="text"  placeholder="Name" value={names} onChange={e=>setName(e.target.value)}/>
       
        </div>
        <div className="input-pading">
        <input className="inputs" type="text"  placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
       
        </div>
      <div className="input-pading">
      Rating : 
        <select value={select} onChange={e=>setSelect(e.target.value)}>
      <option value="Luke Skywalker">
       1
      </option>
      <option value="C-3PO">2</option>
      <option value="R2-D2">3</option>
      <option value="R2-D2">4</option>
      <option value="R2-D2">5</option>
       
    </select>
      </div>
      <br/>
      Gender : 
    <input   type="radio" value="male"   name="gender" onChange={e=>setGender(e.target.value)}/>Male
    <input  type="radio" value="female"  name="gender" onChange={e=>setGender(e.target.value)}/>Female
       <br/><br/>
        <button className="submit">submit</button>
        </form>
       
        <Router>
      <div>
        
             <h1> <Link to="/list">List</Link></h1>
             <h1> <Link to="/demo">Demo</Link></h1>
           
 
        <Switch>
          <Route path="/list"> 
          <List combine={combine}/>
         
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          
        </Switch>
 
      </div>
    </Router>

    
    </div>
    
  );
}

export default App;

