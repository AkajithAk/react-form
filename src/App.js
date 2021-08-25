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
   const [combine,setCombine]=useState([]); 
  
  

  
const DataSubmited=(e)=>{
  e.preventDefault();
  const value={names,email};
  if(names&&email){
    setCombine(datas=>[...datas,value])
    setName("")
    setEmail("")
  }
}



  return (
    <div className="App">
      <form onSubmit={DataSubmited}>
        <input type="text"   value={names} onChange={e=>setName(e.target.value)}/>
        <input type="text"  value={email} onChange={e=>setEmail(e.target.value)}/>
        <button>submit</button>
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

