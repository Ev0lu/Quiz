import question_block from './data/main';
import'./App.scss';
import { useEffect, useState } from 'react';
import Quiz from './components/quiz';
import { toHaveAccessibleErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import logotype from './pics/logotype.svg'
import { useAsync } from "react-use";
import { Route, Routes, Link, Router } from 'react-router-dom';
function App(props) {



const [ip,setIp] = useState(0)
const [id,setId] = useState(0) 
const [questions, setQuestions] = useState(null)
const [answers,setAnswers] = useState([])
const [answersText, setAnswersText] = useState([])
const [userId, setUserId] = useState('')
const [url,setUrl] = useState('')
const getIpAddress = async () => {
  const response = await fetch("https://api.ipify.org/?format=json");
  const data = await response.json();
  return data.ip
};

const { value, loading, error } = useAsync(getIpAddress);
useEffect(() => {
  setIp(value)
  const fetchQuestion = async () => {
    const res = await fetch(`http://62.84.112.244/question/${id}`)
    const data = await res.json()
    setQuestions(data)
  }

  fetchQuestion()
}, [id])

{/* const postRequest = async () => {
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

} */}

const postRequest = async () => {
console.log(answersText)
  let answersStr = answers.toString()
  let answersTextStr = answersText.toString()
  console.log(answersTextStr)
  let user = {
    page_id: window.location.pathname,
    useragent: window.navigator.userAgent,
    ip_address: ip,
    question_id: id,
    answer_array: answersStr,
    answer_text: answersTextStr
  };
 
  await fetch('http://62.84.112.244/events/', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  setAnswers([])
  setAnswersText([])
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
                  <Routes>
                      <Route path="/" element={<Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />} />
                      <Route path="/1111_1111" element={<Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />} />
                      <Route path="/1111_1112" element={<Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />} />
                      <Route path="/1111_1113" element={<Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />} />
                      <Route path="/1111_1114" element={<Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />} />
                      <Route path="/1111_1115" element={<Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />} />
                      <Route path="/1111_1116" element={<Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />} />
                      <Route path="/1111_1117" element={<Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />} />
                      <Route path="/1111_1118" element={<Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />} />
                      <Route path="/1111_1119" element={<Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />} />
                      <Route path="/1111_1110" element={<Quiz setAnswers={setAnswers} answers={answers}  postRequest={postRequest} setId={setId} id={id} setAnswersText={setAnswersText} answersText={answersText} question={questions} />} />
                  </Routes>
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
