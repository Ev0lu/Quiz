import question_block from './data/main';
import'./App.scss';
import { useState } from 'react';
import Quiz from './components/quiz';


function App() {
const [id,setId] = useState(0) 
const [questions, setQuestions] = useState(question_block.data.questions)

const [answers,setAnswers] = useState([])

  return (
    <div className="app">
      <div className="app_inner">
        <section className="quiz">
            {id != questions.length
             ?
             <div className="quiz_inner">
                <Quiz setAnswers={setAnswers} answers={answers} setId={setId} id={id} question={questions[id]} />
                </div>
             :
             <>
             <h1>Спасибо за прохождение квиза!{console.log(answers)}</h1>
             </>
            }
         
        </section>
      </div>
    </div>
  );
 
}

export default App;
