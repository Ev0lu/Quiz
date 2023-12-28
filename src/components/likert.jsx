import React, { useEffect, useState } from "react";
import './likert.css';

export default function Likert(props) {
    
    const [emoji,setEmoji] = useState('')
    useEffect(()=>{
        if(props.data == 0){
            setEmoji("😔")
        }else if(props.data == 25){
            setEmoji("😆")
        }else if(props.data == 50){
            setEmoji("😊")
        }else if(props.data == 75){
            setEmoji("😇")
        }
        else if(props.data == 100){
            setEmoji("🥰")
        }
    },[props.data])
    return(
        <div className="likert_scale">
            <h1>{emoji}</h1>
            <input className={props.data>50?'heigh':'less'} type="range" min="0" max="100" step="25" value={props.data} onChange={(e)=>props.setData(e.target.value)} />
        </div>
    );
}