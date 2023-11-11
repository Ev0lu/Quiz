import logo from './logo.svg';
import'./App.scss';
import { useRef, useState } from 'react';
import Quiz from './el/quiz';


function App() {
const [id,setId] = useState(0) 
const [questions, setQuestions] = useState([
  { id: 1,
    type: "open",
    title: "Какое полное количество лет Вам исполнилось?",
    options: [""]
  },
  { id: 2,
    type: "dichotomous",
    title: "Ваш пол",
    options: [
      { opt_id: 0, text: "Мужской", chosen: false, resetOnChosen: true },
      { opt_id: 1, text: "Женский", chosen: false, resetOnChosen: true },
    ],
  },
  { id: 3,
    type: "dichotomous",
    title: "Укажите Ваше образование" ,
    options: [
      { opt_id: 0, text: "Начальное, неполное среднее", chosen: false, resetOnChosen: true },
      { opt_id: 1, text: "Начальное профессиональное (училище, лицей)", chosen: false, resetOnChosen: true },
      { opt_id: 2, text: "Среднее полное (средняя школа)", chosen: false, resetOnChosen: true },
      { opt_id: 3, text: "Среднее профессиональное (техникум, колледж)", chosen: false, resetOnChosen: true },
      { opt_id: 4, text: "Неполное высшее (3 курса ВУЗа)", chosen: false, resetOnChosen: true },
      { opt_id: 5, text: "Высшее", chosen: false, resetOnChosen: true },
      { opt_id: 6, text: "Несколько высших образований, ученая степень", chosen: false, resetOnChosen: true },
    ]
  },
  { id: 4,
    type: "multiple-not",
    title: "Род Вашей деятельности" ,
    options: [
      { opt_id: 0, text: "Ученик школы", chosen: false, resetOnChosen: true },
      { opt_id: 1, text: "Студент колледжа (техникума, училища, лицея)", chosen: false, resetOnChosen: true },
      { opt_id: 2, text: "Студент вуза", chosen: false, resetOnChosen: true },
      { opt_id: 3, text: "Учусь и работаю (трудоустроен официально)", chosen: false, resetOnChosen: true },
      { opt_id: 4, text: "Работаю с трудовой книжкой, не учусь", chosen: false, resetOnChosen: true },
      { opt_id: 5, text: "Работаю неофициально, не учусь", chosen: false, resetOnChosen: true },
      { opt_id: 99, text: "Другое", chosen: false, resetOnChosen: true },
    ]
  },
  { id: 5,
    type: "semantic_differential",
    title: "Оцените уровень своего интереса к политическим событиям по 10-балльной шкале, где 1 — полное отсутствие интереса к ним, 10 — максимальный уровень интереса",
    options: [
      { opt_id: 0, text: "1", chosen: false, resetOnChosen: true },
      { opt_id: 1, text: "2", chosen: false, resetOnChosen: true },
      { opt_id: 2, text: "3", chosen: false, resetOnChosen: true },
      { opt_id: 3, text: "4", chosen: false, resetOnChosen: true },
      { opt_id: 4, text: "5", chosen: false, resetOnChosen: true },
      { opt_id: 5, text: "6", chosen: false, resetOnChosen: true },
      { opt_id: 6, text: "7", chosen: false, resetOnChosen: true },
      { opt_id: 7, text: "8", chosen: false, resetOnChosen: true },
      { opt_id: 8, text: "9", chosen: false, resetOnChosen: true },
      { opt_id: 9, text: "10", chosen: false, resetOnChosen: true },
      { opt_id: 10, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
  },
  { id: 6,
    type: "multiple-not",
    title: "Из каких источников Вы получаете информацию о политических событиях?",
    options: [
      { opt_id: 0, text: "Телевидение", chosen: false },
      { opt_id: 1, text: "Печатные периодические издания", chosen: false },
      { opt_id: 2, text: "Радио", chosen: false },
      { opt_id: 3, text: "Друзья, знакомые", chosen: false },
      { opt_id: 4, text: "Родственники", chosen: false },
      { opt_id: 5, text: "Интернет-ресурсы", chosen: false },
      { opt_id: 6, text: "Рассылки по электронной почте", chosen: false },
      { opt_id: 99, text: "Другое", chosen: false },
      { opt_id: 8, text: "Не пользуюсь ни одним источником информации", chosen: false, resetOnChosen: true },
      { opt_id: 9, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
    ],
  },
  { id: 7,
    type: "dichotomous",
    title: "В какой степени Вы доверяете органам местной власти (местная администрация, муниципальный совет)? ",
    options: [
      { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
      { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
      { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
      { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
      { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
      { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
    ]
  },
  { id: 8,
    type: "dichotomous",
    title: "В какой степени Вы доверяете законодательному собранию региона, в котором Вы живете? ",
    options: [
      { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
      { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
      { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
      { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
      { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
      { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
    ]
  },
  { id: 9,
    type: "dichotomous",
    title: "В какой степени Вы доверяете главе Вашего региона ?",
    options: [
      { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
      { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
      { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
      { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
      { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
      { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
    ]
  },
])

const [answers,setAnswers] = useState([])



console.log(answers)

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
             <h1>Спасибо за прохождение квиза!</h1>
             </>
            }
         
        </section>
      </div>
    </div>
  );
 
}

export default App;
