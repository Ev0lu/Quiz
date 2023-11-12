import React, { useState } from 'react';

function Quiz(props) {
    const [inputValue, setInputValue] = useState('')
    const [liActive, setLiActive] = useState('none')
    const [hintIn, setHintIn] = useState('')
    function checkTyped() {
      if ((inputValue == '') && (liActive == 'none')) {
        setHintIn("err")
      } else if(((inputValue == '') || (liActive == 'none'))) {
        setHintIn("hintIn")
        props.setId(props.id+1)
        props.setAnswers([...props.answers, inputValue == '' ? props.question.options[liActive].text : inputValue])
       
      }
    }   
    
    const inputChange = e => {
      setInputValue(e.target.value)
    }
    return(
        <>
            <div className="quiz_title">
                <h1>{props.question.title}</h1>
              </div>
              {'select_options' in props.question == false
              ?
                  props.question.type != "semi-open"
                  ?
                      props.question.options != ""
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
                    :
                    <>
                    <div className="quiz_input">
                        <input defaultValue={inputValue}  onChange={(e) => setInputValue(e.target.value)}  type="text" className="input" />
                      </div> 
                          <div className="quiz_list">
                          <ul>
                            {props.question.options.map((item,index) => (
                              <li key={index} className={index == liActive ? 'current_li' : ''} onClick={() => setLiActive(index)}>{item.text}</li>
                            ))}
                          </ul>
                      </div>
                        
                      </>   
                  :
                                    <div include="form-input-select()">
                    <select value={inputValue} onChange={inputChange}>
                    <option value={""} disabled={true}>Выберите регион</option>
                    {props.question.select_options.map((item) => (
                             <option key={item}>{item}</option>
                            ))}
                    
                    </select>
                  </div>

                   
                    
                    }
              
                <div className={hintIn=='err' ? 'hint' : 'hintIn'}>
                  <p>Ваш ответ пуст</p>
                </div>
                
                
                    
                <div className="quiz_btn">
                  <button className='quiz_btn_el' onClick={() => {
                    checkTyped()
                    setInputValue('')
                    setLiActive('none')
                    }}>Вперед</button>
                </div>
        </>
    )
                  }
                

export default Quiz