import React, { useEffect, useState } from "react";
import './likert.css';

export default function Likert(props) {
    const [data,setData] = useState(0)
    const [emoji,setEmoji] = useState('')
    useEffect(()=>{
        if(data == 0){
            setEmoji("😔")
        }else if(data == 25){
            setEmoji("😆")
        }else if(data == 50){
            setEmoji("😊")
        }else if(data == 75){
            setEmoji("😇")
        }
        else if(data == 100){
            setEmoji("🥰")
        }
    },[data])
    return(
        <div className="likert_scale">
                <h1>{emoji}</h1>
            <input className={data>50?'heigh':'less'} type="range" min="0" max="100" step="25" value={data} onChange={(e)=> {
            setData(e.target.value)
            props.getMultipleAnswer([data])}} />

        </div>
    );
}