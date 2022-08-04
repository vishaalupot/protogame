import wrong from './cross.png';
import right from './correct.png';
import './App.css';
import React,{useState} from 'react'
import {getFirestore} from 'firebase/firestore'
import {collection,addDoc} from 'firebase/firestore'
import firebase from './firebase';
import { useNavigate } from 'react-router';
import { org_name } from './Welcome.js';
let score=0;

function Level1 (){

    const nav=useNavigate(); 

    const [min,setMin]=useState(7)
    const [sec,setSec]=useState(0)
    const [pause,setPause]=useState(false)
  
    const db = getFirestore();
    const data = collection(db,"game")

    setTimeout(()=>{
      if(pause)
      {
        if(sec>0)
        {
          setSec(sec-1);
        }
        else if(sec===0)
        {
          setSec(59);
          setMin(min-1)
          if(min===0)
          {
            // alert("Your Score is " + score +"/5")
          
            setPause(false)
            setMin(0)
            setSec(0)

              addDoc(data,{
                  data:"",
                  input: `${org_name}`,
                  score: `${score}`
              }).then(response => {
                   console.log("Success")
                  })
                  .catch((error) => {
                      console.error("Error adding document: ", error);
                  });
              nav('/protogame/game/leader')
          }
        }
      }
    },10)

return (
    <div className="App">
    <div className="start">
    <button className="button-65" role="button" onClick={() => {
      setPause(true)
    }} >START</button>
    </div>

    <h1 className="time">{min} : {sec}</h1>
    
    <div className="box" style={{color:"orange"}}>
    <h3 className="colorname">RED</h3>
    <button className="butt" style={{backgroundColor:"aliceblue",  borderStyle: "solid",  borderColor: "aliceblue"}} onClick={()=>{
      score=score+1;
    }} ><img className="wrongButt" src={wrong} /></button>
    <button className="butt" style={{backgroundColor:"aliceblue",  borderStyle: "solid",  borderColor: "aliceblue"}}><img className="rightButt" src={right} /></button>
    </div>
    <div className="box" style={{color:"black"}}>
    <h3 className="colorname">BLACK</h3>
    <button className="butt" style={{backgroundColor:"aliceblue",  borderStyle: "solid",  borderColor: "aliceblue"}}><img className="wrongButt" src={wrong} /></button>
    <button className="butt" style={{backgroundColor:"aliceblue",  borderStyle: "solid",  borderColor: "aliceblue"}} onClick={()=>{
      score=score+1;
    }} ><img className="rightButt" src={right} /></button>
    </div>

    <div className="box" style={{color:"grey"}}>
    <h3 className="colorname">GREEN</h3>
    <button className="butt" style={{backgroundColor:"aliceblue",  borderStyle: "solid",  borderColor: "aliceblue"}}  onClick={()=>{
      score=score+1;
    }}  ><img className="wrongButt" src={wrong} /></button>
    <button className="butt" style={{backgroundColor:"aliceblue",  borderStyle: "solid",  borderColor: "aliceblue"}}><img className="rightButt" src={right} /></button>
    </div>

    <div className="box" style={{color:"blue"}}>
    <h3 className="colorname">VIOLET</h3>
    <button className="butt" style={{backgroundColor:"aliceblue",  borderStyle: "solid",  borderColor: "aliceblue"}}  onClick={()=>{
      score=score+1;
    }}  ><img className="wrongButt" src={wrong} /></button>
    <button className="butt" style={{backgroundColor:"aliceblue",  borderStyle: "solid",  borderColor: "aliceblue"}}><img className="rightButt" src={right} /></button>
    </div>

    <div className="box" style={{color:"brown"}}>
    <h3 className="colorname">BROWN</h3>
    <button className="butt" style={{backgroundColor:"aliceblue",  borderStyle: "solid",  borderColor: "aliceblue"}}><img className="wrongButt" src={wrong} /></button>
    <button className="butt" style={{backgroundColor:"aliceblue",  borderStyle: "solid",  borderColor: "aliceblue"}} onClick={()=>{
      score=score+1;
    }} ><img className="rightButt" src={right} /></button>
    </div>

    

  </div>
  
);

}
export default Level1;
