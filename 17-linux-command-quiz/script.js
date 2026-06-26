const quizData = [
  {
    question: "ファイルの種類を確認するコマンドは？",
    choices: ["ls", "file", "cat", "pwd"],
    answer: "file",
    explanation: "fileコマンドは、ファイルの中身を見て種類を判定するコマンドです。"
  },
  {
    question: "現在いるディレクトリを表示するコマンドは？",
    choices: ["cd", "pwd", "mkdir", "touch"],
    answer: "pwd",
    explanation: "pwdは、現在の作業ディレクトリを表示するコマンドです。"
  },
  {
    question: "ディスク容量を確認するコマンドは？",
    choices: ["free", "df", "ps", "top"],
    answer: "df",
    explanation: "dfは、ディスク容量や使用量を確認するコマンドです。"
  },
  {
    question: "メモリ使用量を確認するコマンドは？",
    choices: ["free", "chmod", "tar", "grep"],
    answer: "free",
    explanation: "freeは、メモリやswapの使用状況を確認するコマンドです。"
  },
  {
    question: "ファイルの権限を変更するコマンドは？",
    choices: ["chown", "chmod", "umask", "sudo"],
    answer: "chmod",
    explanation: "chmodは、読み取り・書き込み・実行権限を変更するコマンドです。"
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const explanationElement = document.getElementById("explanation");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function showQuestion() {
  const currentQuiz = quizData[currentIndex];

  answered = false;

  questionElement.textContent = currentQuiz.question;
  choicesElement.innerHTML = "";
  resultElement.textContent = "";
  explanationElement.textContent = "";

  currentQuiz.choices.forEach(function(choice) {
    const button = document.createElement("button");

    button.textContent = choice;
    button.classList.add("choice-btn");

    button.addEventListener("click", function() {
      checkAnswer(choice);
    });

    choicesElement.appendChild(button);
  });
}

function checkAnswer(selectedChoice) {
  if (answered) {
    return;
  }

  answered = true;

  const currentQuiz = quizData[currentIndex];

  if (selectedChoice === currentQuiz.answer) {
    score++;
    resultElement.textContent = "正解です";
    scoreElement.textContent = "スコア：" + score;
  } else {
    resultElement.textContent = "不正解です。正解は " + currentQuiz.answer + " です。";
  }

  explanationElement.textContent = currentQuiz.explanation;
}

nextButton.addEventListener("click", function() {
  if (currentIndex >= quizData.length) {
    currentIndex = 0;
    score = 0;
    scoreElement.textContent = "スコア：" + score;
    nextButton.textContent = "次の問題へ";
    showQuestion();
    return;
  }

  currentIndex++;

  if (currentIndex >= quizData.length) {
    showFinalResult();
  } else {
    showQuestion();
  }
});

function showFinalResult() {
  questionElement.textContent = "クイズ終了！";
  choicesElement.innerHTML = "";
  resultElement.textContent = quizData.length + "問中" + score + "問正解です。";
  explanationElement.textContent = "もう一度やる場合は、下のボタンを押してください。";
  nextButton.textContent = "もう一度やる";
}

showQuestion();									
