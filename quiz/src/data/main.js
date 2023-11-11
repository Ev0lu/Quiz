var question_block = new Vue({
  el: '#poll_block',
  data: {
    other_seen: false,
    counter: 1,
    age: "",
    other_answer: "",
    userAgent: navigator.userAgent,
    ip_adress: null,
    page_id: "3e02c3123dec",
    answer_array: [],

    questions: [
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
    { id: 10,
      type: "dichotomous",
      title: "В какой степени Вы доверяете Федеральному парламенту (Государственная дума, Совет Федерации)? ",
      options: [
        { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 11,
      type: "dichotomous",
      title: "В какой степени Вы доверяете Правительству Российской Федерации? ",
      options: [
        { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 12,
      type: "dichotomous",
      title: "В какой степени Вы доверяете Премьер-министру М.В. Мишустину? ",
      options: [
        { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 13,
      type: "dichotomous",
      title: "В какой степени Вы доверяете Президенту России В.В. Путину? ",
      options: [
        { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 14,
      type: "dichotomous",
      title: "В какой степени Вы доверяете Полиции? ",
      options: [
        { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 15,
      type: "dichotomous",
      title: "В какой степени Вы доверяете Росгвардии? ",
      options: [
        { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 16,
      type: "dichotomous",
      title: "В какой степени Вы доверяете Армии? ",
      options: [
        { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 17,
      type: "dichotomous",
      title: "В какой степени Вы доверяете ФСБ? ",
      options: [
        { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 18,
      type: "dichotomous",
      title: "В какой степени Вы доверяете общественным организациям, движениям? ",
      options: [
        { opt_id: 0, text: "Не доверяю абсолютно", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Скорее, не доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "В чем-то доверяю, в чем-то нет", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Скорее, доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "Полностью доверяю", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 19,
      type: "multiple-not",
      title: "Скажите, пожалуйста, какие политические взгляды Вам наиболее близки? ",
      options: [
        { opt_id: 0, text: "Анархистские", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Коммунистические", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "Консервативные", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Либеральные", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "Националистические", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "Социал-демократические", chosen: false, resetOnChosen: true },
        { opt_id: 99, text: "Другие", chosen: false },
        { opt_id: 7, text: "Не имею политических убеждений", chosen: false, resetOnChosen: true },
        { opt_id: 8, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 20,
      type: "semi-open",
      title: "Какая партия в России, на Ваш взгляд, в наибольшей степени выражает интересы таких людей, как Вы? Напишите название партии или фамилию представляющего её политика ",
      options: [
        { opt_id: 0, text: "Таких нет", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 21,
      type: "semi-open",
      title: "Напишите, пожалуйста, фамилии политических деятелей, журналистов, обозревателей, блогеров, чье мнение Вам интересно ",
      options: [
        { opt_id: 0, text: "Таких нет", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
      ]
    },
    { id: 22,
      type: "dichotomous",
      title: "В каком направлении идут дела в нашем государстве в настоящее время?",
      options: [
        { opt_id: 0, text: "В правильном направлении", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Скорее в правильном направлении", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "Какие-то в правильном, какие-то нет", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Скорее, в неправильном направлении", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "В неправильном направлении", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
        ]
    },
    { id: 23,
      type: "multiple-not",
      title: "К каким действиям Вы готовы прибегнуть для защиты своих интересов в случае их нарушения? (Отметьте все варианты, соответствующие Вашему мнению)",
      options: [
        { opt_id: 0, text: "Обращение в государственные органы", chosen: false, resetOnChosen: false },
        { opt_id: 1, text: "Обращение в общественные организации", chosen: false, resetOnChosen: false },
        { opt_id: 2, text: "Участие в санкционированных акциях", chosen: false, resetOnChosen: false },
        { opt_id: 3, text: "Участие в выборах", chosen: false, resetOnChosen: false },
        { opt_id: 4, text: "Участие в работе политических партий", chosen: false, resetOnChosen: false },
        { opt_id: 5, text: "Участие в работе общественных организаций", chosen: false, resetOnChosen: false },
        { opt_id: 6, text: "Участие в несанкционированных акциях протеста", chosen: false, resetOnChosen: false },
        { opt_id: 7, text: "Использование личных связей и вознаграждения", chosen: false, resetOnChosen: false },
        { opt_id: 8, text: "Материальная поддержка политиков, их проектов", chosen: false, resetOnChosen: false },
        { opt_id: 9, text: "Обсуждение и репосты в социальных сетях", chosen: false, resetOnChosen: false },
        { opt_id: 99, text: "Другое", chosen: false, resetOnChosen: false },
        { opt_id: 11, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
        ]
    },
    { id: 24,
      type: "multiple-not",
      title: "Какие ценности в жизни наиболее близки лично Вам (отметить не более 5 вариантов)",
      options: [
        { opt_id: 0, text: "Авторитетность", chosen: false, resetOnChosen: false },
        { opt_id: 1, text: "Бескорыстие", chosen: false, resetOnChosen: false },
        { opt_id: 2, text: "Благополучие", chosen: false, resetOnChosen: false },
        { opt_id: 3, text: "Высокие доходы", chosen: false, resetOnChosen: false },
        { opt_id: 4, text: "Жизнь человека", chosen: false, resetOnChosen: false },
        { opt_id: 5, text: "Инициативность", chosen: false, resetOnChosen: false },
        { opt_id: 6, text: "Личный успех", chosen: false, resetOnChosen: false },
        { opt_id: 8, text: "Независимость", chosen: false, resetOnChosen: false },
        { opt_id: 9, text: "Общение", chosen: false, resetOnChosen: false },
        { opt_id: 10, text: "Работа", chosen: false, resetOnChosen: false },
        { opt_id: 11, text: "Самопожертвование", chosen: false, resetOnChosen: false },
        { opt_id: 12, text: "Семья", chosen: false, resetOnChosen: false },
        { opt_id: 13, text: "Хорошие отношения с людьми", chosen: false, resetOnChosen: false },
        { opt_id: 99, text: "Другое", chosen: false },
        { opt_id: 15, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
        ]
    },
    { id: 25,
      type: "multiple-not",
      title: "Что для Вас ближе (отметьте не более 5 вариантов)?",
      options: [
        { opt_id: 0, text: "Законность", chosen: false, resetOnChosen: false },
        { opt_id: 1, text: "Интересы Вашей этнической группы", chosen: false, resetOnChosen: false },
        { opt_id: 2, text: "Интересы государства", chosen: false, resetOnChosen: false },
        { opt_id: 3, text: "Интересы отдельных граждан", chosen: false, resetOnChosen: false },
        { opt_id: 4, text: "Порядок", chosen: false, resetOnChosen: false },
        { opt_id: 5, text: "Права человека", chosen: false, resetOnChosen: false },
        { opt_id: 6, text: "Реформы в обществе", chosen: false, resetOnChosen: false },
        { opt_id: 8, text: "Свобода", chosen: false, resetOnChosen: false },
        { opt_id: 9, text: "Сохранение традиций", chosen: false, resetOnChosen: false },
        { opt_id: 10, text: "Справедливость", chosen: false, resetOnChosen: false },
        { opt_id: 99, text: "Другое", chosen: false },
        { opt_id: 15, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
        ]
    },
    { id: 26,
      type: "dichotomous",
      title: "Оцените уровень Ваших доходов. Продолжите фразу: «Мне хватает денежных средств …»",
      options: [
        { opt_id: 0, text: "Денег нет даже на продукты питания", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Только на продукты питания", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "На питание, повседневные траты и одежду", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "На бытовые товары длительного пользования", chosen: false, resetOnChosen: true },
        { opt_id: 4, text: "На машину или дачу", chosen: false, resetOnChosen: true },
        { opt_id: 5, text: "На приобретение жилья", chosen: false, resetOnChosen: true },
        { opt_id: 99, text: "Другое", chosen: false, resetOnChosen: true },
        { opt_id: 7, text: "Затрудняюсь ответить", chosen: false, resetOnChosen: true },
        ]
    },
    { id: 27,
      type: "dichotomous",
      title: "В каком типе населенного пункта Вы живете?",
      options: [
        { opt_id: 0, text: "Мегаполис, областной центр, крупный город", chosen: false, resetOnChosen: true },
        { opt_id: 1, text: "Небольшой город", chosen: false, resetOnChosen: true },
        { opt_id: 2, text: "Поселок городского типа", chosen: false, resetOnChosen: true },
        { opt_id: 3, text: "Село, деревня, хутор", chosen: false, resetOnChosen: true },
        ]
    },
    { id: 28,
      type: "select",
      title: "Регион Вашего проживания",
      options: [],
      select_options: [
        "Москва",
        "Санкт-Петербург",
        "Севастополь",
        "Алтайский край",
        "Амурская область",
        "Архангельская область",
        "Астраханская область",
        "Белгородская область",
        "Брянская область",
        "Владимирская область",
        "Волгоградская область",
        "Вологодская область",
        "Воронежская область",
        "Донецкая народная республика",
        "Еврейская автономная область",
        "Забайкальский край",
        "Запорожская область",
        "Ивановская область",
        "Иркутская область",
        "Кабардино-Балкарская республика",
        "Калининградская область",
        "Калужская область",
        "Камчатский край",
        "Карачаево-Черкесская республика",
        "Кемеровская область",
        "Кировская область",
        "Костромская область",
        "Краснодарский край",
        "Красноярский край",
        "Курганская область",
        "Курская область",
        "Ленинградская область",
        "Липецкая область",
        "Луганская народная республика",
        "Магаданская область",
        "Московская область",
        "Мурманская область",
        "Ненецкий автономный округ",
        "Нижегородская область",
        "Новгородская область",
        "Новосибирская область",
        "Омская область",
        "Оренбургская область",
        "Орловская область",
        "Пензенская область",
        "Пермский край",
        "Приморский край",
        "Псковская область",
        "Республика Адыгея",
        "Республика Алтай",
        "Республика Башкортостан",
        "Республика Бурятия",
        "Республика Дагестан",
        "Республика Ингушетия",
        "Республика Калмыкия",
        "Республика Карелия",
        "Республика Коми",
        "Республика Крым",
        "Республика Марий Эл",
        "Республика Мордовия",
        "Республика Якутия (Саха)",
        "Республика Северная Осетия — Алания",
        "Республика Татарстан",
        "Республика Тыва (Тува)",
        "Республика Хакасия",
        "Ростовская область",
        "Рязанская область",
        "Самарская область",
        "Саратовская область",
        "Сахалинская область",
        "Свердловская область",
        "Смоленская область",
        "Ставропольский край",
        "Тамбовская область",
        "Тверская область",
        "Томская область",
        "Тульская область",
        "Тюменская область",
        "Удмуртская республика",
        "Ульяновская область",
        "Хабаровский край",
        "Ханты-Мансийский автономный округ",
        "Херсонская область",
        "Челябинская область",
        "Чеченская республика",
        "Чувашская республика",
        "Чукотский автономный округ",
        "Ямало-Ненецкий автономный округ",
        "Ярославская область",
      ]
    },
    ]
  },
  mounted() {axios
    .get("http://ifconfig.me/ip")
    .then(response => (this.ip_adress = response.data))},

  methods: {
    chose: function () {
      this.questions.options.chosen = !this.questions.options.chosen
    },
    other_input: function () {
      this.other_seen = !this.other_seen },
    next: function () {
      if (Number(this.age) > 36) {
        this.counter=29
      }
      if (this.counter==1) {
        this.other_answer = this.age
      }
      const event = {
        page_id: this.page_id,
        useragent: this.userAgent,
        ip_adress: this.ip_adress,
        question: this.counter,
        answer_array: this.answer_array.join(', '),
        other_answer: this.other_answer,
      }
      const API_URL = 'http://127.0.0.1:8000/events/' + this.page_id + '/items/'
      const headers = {
       "Content-Type": "application/json",
      }
      const body = JSON.stringify(event)
      fetch(API_URL, {
          body,
          headers,
          method: "post",
      })

      this.counter++,
      this.other_seen = false
      this.other_answer = ""
      this.answer_array = []
    },
    back: function () {
      this.counter--,
      this.complete_score = (this.counter / 28 * 100).toFixed(0).toString() + '%'
      this.other_seen = false
      this.other_answer = ""
    },
    handleOptionClick (question, option) {
      this.answer_array.push(option.opt_id)
      if (option.opt_id==99) {
        this.other_seen = !this.other_seen
      }
      option.chosen = !option.chosen
      if (option.resetOnChosen && option.opt_id!=99) {
        this.other_seen = false
        if (option.chosen) {
          question.options.filter(
            o => o !== option
          ).forEach(o => {
            o.chosen = false
            }
          )
        }
      } else {
        if (option.chosen) {
          question.options.filter(
            o => o.resetOnChosen
          ).forEach(o => {
            o.chosen = false
            }
          )
        }
      }
    }
  }
}
)
