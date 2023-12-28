import question_block from './data/main';
import'./App.scss';
import { useEffect, useState } from 'react';
import Quiz from './components/quiz';
import { toHaveAccessibleErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import logotype from './pics/logotype.svg'

function App() {

const [ip,setIp] = useState(0)
const [id,setId] = useState(0) 
const [questions, setQuestions] = useState(null)
const [answers,setAnswers] = useState([])
const [answersText, setAnswersText] = useState([])




useEffect(() => {
  const fetchQuestion = async () => {
    const res = await fetch(`http://62.84.112.244/question/${id}`)
    const data = await res.json()
    setQuestions(data)
    console.log(answers)
  }
  const fetchIp = async () => {
    const res = await fetch('https://ipapi.co/json/')
    const data = await res.json()
    setIp(data) 
  }
  fetchIp()
  fetchQuestion()
}, [id])

const postRequest = async () => {
    let user = {
      page_id: "string",
      useragent: window.navigator.userAgent,
      ip_address: ip,
      question_id: id,
      answer_array: answers,
      answer_text: answersText
    };
    await fetch('http://62.84.112.244/events/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    });

}

  return (
    <div className="app">
      <div className="app_inner">
         <div className="itmo_logo">
          <img src={logotype}></img>
          </div>
        <section className="quiz">
        
            {questions !== null
              ?
             <div className="quiz_inner">
                <Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />
                </div>
                :
                <h1></h1>
            }
         
        </section>
      </div>
    </div>
  );
 
}

export default App;
