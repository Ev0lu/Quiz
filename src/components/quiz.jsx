import React, { useState } from 'react';
import Likert from './likert';

function Quiz(props) {

    const [inputValue, setInputValue] = useState([])
    const [liActive, setLiActive] = useState([])
    const [hintIn, setHintIn] = useState('')
    const [flag, setFlag] = useState(0)

    const handleLiClick = (id) => {
      if (liActive.includes(id)) {
        setLiActive(liActive.filter((liId) => liId !== id));
      } else {
        setLiActive([...liActive, id]);
      }
    };
  
    const handleLiClickOne = (id) => {
      if (liActive.includes(id)) {
        setLiActive(liActive.filter((liId) => liId !== id));
      } else {
        setLiActive([id]);
      }
    };
  
    function checkTyped() {
      if ((inputValue == '') && (liActive.length == 0)) {
        setHintIn("err")
      } else if(((inputValue != '') || (liActive.length != 0))) {
        if (props.question.answers[liActive.at(-1)].pointer == '4A') {
          setFlag(1)
        }
        setHintIn("hintIn")
        setInputValue([])
        setLiActive('')
        if (flag == 1 && props.question.answers[liActive.at(-1)].pointer == "22") {
          props.setId('18')
          setFlag(0)
        } else {
          props.setId(props.question.answers[liActive.at(-1)].pointer)
        }
        
       
      }
    }   

    const handleInputChange = (id, value) => {
      if (value) {
        setLiActive([...liActive, id]);
      } else {
        setLiActive(liActive.filter((liId) => liId !== id));
      }
    };

    const handleInputChangeOne = (id, value) => {
      if (value) {
        setLiActive([id]);
      } else {
        setLiActive(liActive.filter((liId) => liId !== id));
      }
    };

  function getMultipleAnswer(text){
    props.setAnswers([...props.answers, text])
  }
  function getTextAnswer(text){
    props.setAnswersText([...props.answersText, text])
  }

    return(
        <>
          
          {props.question.type == "announcement"
            ?
                    <div className="quiz_title">
                    <h1>{props.question.text}</h1>

                    <div className="quiz_btn">
                                          <button className='quiz_btn_el' onClick={() => {
                                         
                                            props.setId(props.question.answers[0].pointer)

                                            }}>Вперед</button>
                                        </div>
                  </div>
            

            : props.question.type == "multiple"
            ?
                     
                    <div className="quiz_list">
                       <h1>{props.question.text}</h1>
                                      <ul>
                                        {Object.keys(props.question.answers).map((key => {
                                          const answer = props.question.answers[key]
                                          if (answer.type == "checkbox") {
                                              return (
                                                <li key={key} className={liActive.includes(key) ? "current_li" : ""} onClick={() => {
                                                  handleLiClick(key)
                                                  getMultipleAnswer(key)
                                                
                                                }}>{answer.text}</li>
                                              )
                                          } else if (answer.type == "text"){
                                            return(
                                              <input key={key} placeholder='Другое' defaultValue='' value={inputValue}   onChange={(e) => {
                                                setInputValue(e.target.value)
                                                handleInputChange(key, e.target.value)
                                                props.setAnswersText([e.target.value])
                                              }}  type="text" className="input" />
                                            )
                                          }
                                        }))}
                                          <div className={hintIn=='err' ? 'hint' : 'hintIn'}>
                                          <p>Ваш ответ пуст</p>
                                        </div>
                                      </ul>
                                      <div className="quiz_btn">
                                                  <button className='quiz_btn_el' onClick={() => {
                                                    checkTyped()
                                                    props.postRequest()

                                                    }}>Вперед</button>
                                                </div>

                    </div>
                          
                                     
            : props.question.type == "dichotomous"
            ?
            <div className="quiz_list">
            <h1>{props.question.text}</h1>
                           <ul>
                             {Object.keys(props.question.answers).map((key => {
                               const answer = props.question.answers[key]
                               if (answer.type == "radio") {
                                   return (
                                     <li key={key} className={liActive.includes(key) ? 'current_li' : ''} onClick={() => {
                                      handleLiClickOne(key)
                                       getMultipleAnswer(key)
                                     
                                     }}>{answer.text}</li>
                                   )
                               } else if (answer.type == "text"){
                                 return(
                                   <input key={key} placeholder={inputValue} defaultValue='' value={inputValue} onChange={(e) => {
                                    setInputValue(e.target.value)
                                    handleInputChange(key, e.target.value)
                                    props.setAnswersText([e.target.value])
                                  }}  type="text" className="input" />
                                 )
                               }
                             }))}
                               <div className={hintIn=='err' ? 'hint' : 'hintIn'}>
                                          <p>Ваш ответ пуст</p>
                                        </div>
                           </ul>
                           <div className="quiz_btn">
                                       <button className='quiz_btn_el' onClick={() => {
                                        checkTyped()
                                        props.postRequest()
                                         }}>Вперед</button>
                                     </div>

         </div>
                                                    
            : props.question.type == "multiple_exception"
            ?
                     
                    <div className="quiz_list">
                       <h1>{props.question.text}</h1>
                                      <ul>
                                        {Object.keys(props.question.answers).map((key => {
                                          const answer = props.question.answers[key]
                                          if (answer.type == "checkbox") {
                                              return (
                                                <li key={key} className={liActive.includes(key) ? "current_li" : ""} onClick={() => {
                                                  handleLiClick(key)
                                                  getMultipleAnswer(key)
                                                
                                                }}>{answer.text}</li>
                                              )
                                          } else if (answer.type == "text"){
                                            return(
                                              <input key={key}  placeholder={inputValue} defaultValue='' value={inputValue}  onChange={(e) => {
                                                setInputValue(e.target.value)
                                                handleInputChangeOne(key, e.target.value)
                                                props.setAnswersText([e.target.value])
                                              }}  type="text" className="input" />
                                            )
                                          } else if (answer.type == "exception"){
                                            return(
                                              <li key={key} className={liActive.includes(key) ? 'current_li' : ''} onClick={() => {
                                                 handleLiClickOne(key)
                                                 getMultipleAnswer(key)
                                               
                                               }}>{answer.text}</li>
                                            )
                                          }
                                        }))}
                                          <div className={hintIn=='err' ? 'hint' : 'hintIn'}>
                                          <p>Ваш ответ пуст</p>
                                        </div>
                                      </ul>
                                      <div className="quiz_btn">
                                                  <button className='quiz_btn_el' onClick={() => {
                                                    checkTyped()
                                                    props.postRequest()
                                                    }}>Вперед</button>
                                                </div>

                    </div>
                      
                  :
                  <>
                  <h1>{props.question.text}</h1>
                  <ul>
                             {Object.keys(props.question.answers).map((key => {
                               const answer = props.question.answers[key]
                               if (answer.type == "range") {
                                   return (
                                    <>
                                     <li key={key} className='quiz_likert_div'>{answer.text}

                                     </li>
                                     <Likert  getMultipleAnswer={getMultipleAnswer}/>
                                     
                                     </>
                                   )
                               }
                              }))}
                  </ul>

                  <div className="quiz_btn">
                                                    <button className='quiz_btn_el' onClick={() => {
                                                      setLiActive([0])
                                                      props.setId(props.question.answers[0].pointer)
                                                      props.postRequest()
                                                      }}>Вперед</button>
                                                </div>
                  </>
            
          }
            
              {/* 
              { props.question.type == "multiple"
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
              

                
                
                     */}



        </>
    )
                  }
                

export default Quiz