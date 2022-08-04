import firebase from './firebase';
import React, { useState } from 'react';
import {getFirestore} from 'firebase/firestore';
import {collection,getDocs} from 'firebase/firestore';

function Leaderboard () {

  const [rdata,setRdata]=useState([]);

  const db=getFirestore();
  const data=collection(db,"game")

  getDocs(data).then(response => {
    const game=response.docs.map(doc =>({
      data: doc.data(),
      id: doc.id,
    }))
    setRdata(game)
  }).catch(error=>console.log("error"))


  return (
    <div className="leader">
        <div className="score">
            <h3 style={{fontFamily:"'Philosopher', sans-serif", fontSize:"70px",textAlign:"center",margin:"0"}}>LEADERS</h3>
            
            {rdata.map(datas => (
              <div className="box1" key={datas.id}> {datas.data.input} {datas.data.score}</div>         
           ))}
        </div>
    </div>
  )
}

export default Leaderboard;
