const quizData = [
  {
    question: "ファイルの種類を確認するコマンドは？",
    choices: ["ls", "file", "cat", "pwd"],
    answer: "file",
    explanation: "fileコマンドは、ファイルの中身を見て種類を判定するコマンドです。"
  },
  {
    question: "現在のディレクトリを表示するコマンドは？",
    choices: ["cd", "pwd", "mkdir", "touch"],
    answer: "pwd",
    explanation: "pwdは、現在いるディレクトリのパスを表示するコマンドです。"
  },
  {
    question: "ディスク容量を確認するコマンドは？",
    choices: ["free", "df", "ps", "top"],
    answer: "df",
    explanation: "dfコマンドは、ファイルシステムのディスク使用量を確認します。"
  },
  {
    question: "メモリ使用量を確認するコマンドは？",
    choices: ["free", "chmod", "tar", "grep"],
    answer: "free",
    explanation: "freeコマンドは、メモリやswapの使用状況を確認します。"
  },
  {
    question: "ファイルやディレクトリの権限を変更するコマンドは？",
    choices: ["chown", "chmod", "umask", "sudo"],
    answer: "chmod",
    explanation: "chmodは、読み取り・書き込み・実行権限を変更するコマンドです。"
  }
];

let currentIndex = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const explanationElement = document.getElementById("explanation");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
  const currentQuiz = quizData[currentIndex];

  questionElement.textContent = currentQuiz.question;
  choicesElement.innerHTML = "";
  resultElement.textContent = "";
  explanationElement.textContent = "";

  currentQuiz.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choice-btn");

    button.addEventListener("click", () => {
      checkAnswer(choice);
    });

    choicesElement.appendChild(button);
  });
}

function checkAnswer(selectedChoice) {
  const currentQuiz = quizData[currentIndex];

  if (selectedChoice === currentQuiz.answer) {
    resultElement.textContent = "正解です";
  } else {
    resultElement.textContent = `不正解です。正解は ${currentQuiz.answer} です。`;
  }

  explanationElement.textContent = currentQuiz.explanation;
}

nextButton.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= quizData.length) {
    currentIndex = 0;
  }

  showQuestion();
});

showQuestion();
