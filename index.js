setInterval(function() {
  const star = document.createElement("div");
  star.classList.add("star");
  const size = Math.random() * 3 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = "0px";
  star.style.opacity = Math.random();
  document.body.appendChild(star);
  setTimeout(() => {
    star.remove();
  }, 5000);
}, 100);

const quiz = [
  {
    question: 'В каком году был Эрбол в России',
    answer: [2017, 2015, 2021, 2018],
    correct: 2018
  },
  {
    question: 'Любимый блюда',
    answer: ["Шаурма", "Манты", "Курдак", "Лагман"],
    correct: "Курдак"
  },
  {
    question: 'Любимый кино',
    answer: ["Аватар", "Властилин колец" , "Бригада", "Человек паук"],
    correct: "Властилин колец"
  },
  {
    question: 'Любимый цвет',
    answer: ["Синий", "Желтый", "Черный", "Розовый"],
    correct: "Синий"
  },
  {
    question: 'Какой телефоном пользует Эрбол',
    answer: ["Redmi", "iPhone", "Samsung", "Honor"],
    correct: "Redmi"
  },
  {
    question: 'Любимый персонаж в аниме наруто',
    answer: ["Наруто", "Итачи", "Обито", "Шикамару"],
    correct: "Обито"
  },
  {
    question: 'Сколько ему лет',
    answer: [18, 22, 27, 21],
    correct: 21
  },
  {
    question: 'Эрбола был девушки если был сколько',
    answer: [1, 7, 0, 4],
    correct: 0
  },
  {
    question: 'в каком году получиль права',
    answer: [2020, 2022, 2019, 2021],
    correct: 2021
  },
  {
    question: 'Как ты оцениваешь свой друга',
    answer: ['друг', "Хороший друг", "друг", "Друг"],
    correct: "Хороший друг"
  },
];


let currentQuestion = 0;
let score = 0;

function showQuestion() {
  if(currentQuestion >= quiz.length) {
    showResult();
    return;
  }

  const q = quiz[currentQuestion];

  document.getElementById("question").textContent = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answer.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-btn"); // вот тут класс


    btn.onclick = function() {
      checkAnswer(answer, btn);
    };

    answersDiv.appendChild(btn);
  });
}

function checkAnswer(userAnswer, buttonClicked) {
  const correctAnswer = quiz[currentQuestion].correct;

  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(btn => btn.disabled = true);

  if (userAnswer === correctAnswer) {
    score += 10;
    buttonClicked.classList.add("correct-answer");

  } else {
    buttonClicked.classList.add("wrong-answer");
  }

  buttons.forEach(btn => {
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct-answer");
    }
  });

  document.getElementById("score").style.display = "block";
  document.getElementById("score").textContent = "Ваши баллы: " + score;

  currentQuestion++;

  setTimeout(() => {
    document.getElementById("result").textContent = "";
    showQuestion();
  }, 1000);
}

function showResult() {
  console.log("showResult запустилась")
  document.getElementById("question").textContent = "Викторина закончена!";
  document.getElementById("answers").textContent = "";
  document.getElementById("result").textContent = "Ваш итоговый счет:" + score;
}

//showQuestion();

document.getElementById('start-btn').addEventListener('click', () => {
  // Скрываем стартовый экран
  document.getElementById('start-screen').style.display = 'none';
  // Показываем экран с тестом
  document.getElementById('quiz-screen').style.display = 'block';

  // Запускаем тест
  showQuestion();
});
