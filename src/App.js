import './App.css';
import JSONDATA from "./MOCK_DATA.json";
import {useState} from "react";


function App() {
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <div className="App">
      <input type="text" placeholder="Search..." onChange={(event)=>{setSearchTerm(event.target.value);}}/>
      {JSONDATA.filter((val)=>{
        if(searchTerm==""){
          return val
      }
    else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){

    }  
    }).map((val,key)=>{
        return (
        <div key={key}>
          <p>{val.first_name}</p>
          </div>
        )
        })}
    </div>
  );
}

export default App;
