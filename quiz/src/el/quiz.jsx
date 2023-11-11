import React, { useRef, useState } from 'react';


function Quiz(props) {
    const [inputValue, setInputValue] = useState('')
    const [liActive, setLiActive] = useState(0)
    
    return(
        <>
                  <div className="quiz_title">
                      <h1>{props.question.title}</h1>
                    </div>
                    {props.question.options != ""
                        ?
                        <div className="quiz_list">
                            <ul>
                              {props.question.options.map((item,index) => (
                                <li key={index} className={index == liActive ? 'current_li' : ''} onClick={() => setLiActive(index)}>{item.text}</li>
                              ))}
                            </ul>
                        </div>
                         :
                        <div className="quiz_input">
                          <input defaultValue={inputValue}  onChange={(e) => setInputValue(e.target.value)}  type="text" className="input" />
                        </div>
                    }
                <div className="quiz_btn">
                  <button className='quiz_btn_el' onClick={() => {
                    props.setId(props.id+1)
                    props.setAnswers([...props.answers, inputValue == '' ? props.question.options[liActive].text : inputValue])
                    setInputValue('')
                    setLiActive(0)
                    }}>Вперед</button>
                </div>
        </>
    )
                  }
                

export default Quiz