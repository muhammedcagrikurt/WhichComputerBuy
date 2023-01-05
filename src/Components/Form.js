import React, {useState} from "react";
// import Cpu from "./Cpu";
// import Credibility from "./Credibility";
// import Gpu from "./Gpu"
// import Price from "./Price";
// import Ram from "./Ram";

const Form = () =>{
 const [score,setScore]= useState(0);
 //const [scores,setScores]=useState([]);
const [name,setName]=useState("");
// const [names,setNames]=useState([]);
 const [price,setPrice]=useState(0)
const [laptop,setLaptop]=useState([])
  const addLaptop=()=>{
    setLaptop([...laptop,name+" : "+score.toString()])
   // setScores([...scores,score]);
   // setNames([...names,name]);
    //setLaptop({...laptop,names:name,scores:score})
    setName("");
    setScore(0);
    setPrice(0);
  }
  const sum=()=>{
    setScore(score+(18-price))
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
        <button onClick={()=>setScore(score+ 3 )}>Evet</button>
        <button onClick={()=>setScore(score+ -3 )}>Hayır</button>

        <hr/>
        <h2>Fiyat</h2>
        <input  type="number" name="price" value={price} placeholder="Laptop Fiyatı" onChange={(e)=>setPrice(e.target.value)}/>
        {console.log(price)}
        <button onClick={sum}> Fiyatı Kaydet</button>
        <hr/>
        <input type="text" name="name" value={name} placeholder="Laptop Markası/İsmi" onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={addLaptop}>Kaydet</button>

      <ul> 
      <ol>
      {laptop.map((laptop,index) => (
           <li key={index}>{laptop}</li>
         ))}</ol>
 
        </ul>
      
     </div>
    );
};
export default Form;



// import React, {useState} from "react";
// // import Cpu from "./Cpu";
// // import Credibility from "./Credibility";
// // import Gpu from "./Gpu"
// // import Price from "./Price";
// // import Ram from "./Ram";

// const Form = () =>{
//   const [score,setScore]= useState(0);
//   const [scores,setScores]=useState([]);
//   const [name,setName]=useState("");
//   const [names,setNames]=useState([]);

//   const addLaptop=()=>{
//     setScores([...scores,score]);
//     setNames([...names,name]);
//     setName("");
//     setScore(0);
//   }

//     return(
//      <div >
//        <form>
//         <h2>İşlemci Seçiniz</h2>
//             <select onChange={(e)=>setScore(score+Number(e.target.value))}>
//                 <option value="0"></option>
//                 <option value="1">i5</option>
//                 <option value="2">i7</option>
//             </select>
//             <hr/>
//             <h2>İşlemci Nesili Seçiniz</h2>
//             <select onChange={(e)=>setScore(score+Number(e.target.value))}>
//                 <option value="0"></option>
//                 <option value="2">11.Nesil</option>
//                 <option value="1">12.Nesil</option>
//             </select>
//             <hr/>
//             <h2>Ekran Kartı Seçiniz</h2>
//         <select onChange={(e)=>setScore(score+Number(e.target.value))}>
//             <option value="0"></option>
//             <option value="1">1650</option>
//             <option value="2">1650 Ti</option>
//             <option value="3">3050</option>
//             <option value="4">3053 Ti</option>
//             <option value="5">3060</option>
//         </select>
//         <hr/>
//         <h2>Ram Seçiniz</h2>
//         <select onChange={(e)=>setScore(score+Number(e.target.value))}>
//             <option value="0"></option>
//             <option value="1">8 Gb</option>
//             <option value="2">16 Gb</option>
//         </select>
//         <hr/>
//         <h2>Güvenilirlik Durumu Seçiniz</h2>
//         <select onChange={(e)=>setScore(score+Number(e.target.value))}>
//             <option value="0">Nötr</option>
//             <option value="1">Evet</option>
//             <option value="-1">Hayır</option>
//         </select>
//         <hr/>
//         <h2>Fiyat</h2>
//         <hr/>
//         {console.log(score)}
//         <input type="text" name="name" value={name} placeholder="Laptop Markası/İsmi" onChange={(e)=>{setName(e.target.value)}}/>
//         <button onClick={addLaptop}>Kaydet</button>
//         <select onChange={{addLaptop}}>
//           <option></option>
//           <option>Kaydet</option>
//         </select>
//         <button type="reset">Reset</button> 
//       </form>
//       <ul>
 
//         {scores.map((scores,index) => (
//           <li key={index}>{scores}</li>
//         ))}
        
//       </ul>

//      </div>
//     );
// };
// export default Form;

// <table>
// <tr>
//   <th>Laptop Markası/İsmi</th>
//   <th>Puan</th>
// </tr>

// <ul>
  
// <tr>
// <ol>
// {names.map((names,index) => (
//   <div className="sol"><li key={index}>{names}</li></div>
//   ))}</ol>
//   <ol>
//   {scores.map((scores,index) => (
//   <div className="sag"><li key={index}>{scores}</li></div>
//   ))} </ol>

//   </tr>
  
//   </ul>

// </table>

// {laptop.map(({ names, scores }) => (
//   <p key={names}>Coffee type {names} in a {scores} size.</p>
// ))}