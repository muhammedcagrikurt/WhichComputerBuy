import './App.css';
import React, {useState} from "react";

function App() {
  const [score,setScore]= useState(0);
  const [scores,setScores]=useState([]);
 const [name,setName]=useState("");
  const [names,setNames]=useState([]);
   //const [laptop,setLaptop]=useState([{names:"",scores:""}])
   const addLaptop=()=>{
     setScores([...scores,score]);
     setNames([...names,name]);
     //setLaptop({...laptop,names:name,scores:score})
     setName("");
     setScore(0);
   }
 
     return(
      <div >
       
         <h2>İşlemci Seçiniz</h2>
               <button onClick={()=>setScore(score+ 1 )}>i5</button>
               <button onClick={()=>setScore(score+ 2 )}>i7</button>
               
             <hr/>
             <h2>İşlemci Nesili Seçiniz</h2>
             <button onClick={()=>setScore(score+ 2 )}>11.Nesil</button>
             <button onClick={()=>setScore(score+ 1 )}>12.Nesil</button>
 
             <hr/>
             <h2>Ekran Kartı Seçiniz</h2>
       
         <button onClick={()=>setScore(score+ 1 )}>1650</button>
         <button onClick={()=>setScore(score+ 2 )}>1650 Ti</button>
         <button onClick={()=>setScore(score+ 3 )}>3050</button>
         <button onClick={()=>setScore(score+ 4 )}>3050 Ti</button>
         <button onClick={()=>setScore(score+ 5 )}>3060</button>
        
         <hr/>
         <h2>Ram Seçiniz</h2>
 
         <button onClick={()=>setScore(score+ 1 )}>8 Gb</button>
         <button onClick={()=>setScore(score+ 2 )}>16 Gb</button>
 
         <hr/>
         <h2>Güvenilirlik Durumu Seçiniz</h2>
         <button onClick={()=>setScore(score+ 1 )}>Evet</button>
         <button onClick={()=>setScore(score+ -1 )}>Hayır</button>
 
         <hr/>
         <h2>Fiyat</h2>
         <hr/>
         {console.log(score)}
         <input type="text" name="name" value={name} placeholder="Laptop Markası/İsmi" onChange={(e)=>{setName(e.target.value)}}/>
         <button onClick={addLaptop}>Kaydet</button>
 
       <ul> 
         <ol>
       {names.map((names,index) => (
           <li key={index}>{names}</li>
         ))}</ol>
          <ol>
       {scores.map((scores,index) => (
            <li key={index}>{scores}</li>
          ))}</ol>
 
  
         </ul>
       
      </div>
     );
 };


export default App;
