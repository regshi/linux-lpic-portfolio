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
  }, 
  {
    question: "現在のディレクトリの中身を表示するコマンドは？",
    choices: ["pwd", "cd", "ls", "rm"],
    answer: "ls",
    explanation: "ls は、現在のディレクトリにあるファイルやディレクトリを表示するコマンドです。"
  },
  {
    question: "現在いるディレクトリを表示するコマンドは？",
    choices: ["pwd", "ls", "cat", "touch"],
    answer: "pwd",
    explanation: "pwd は、現在作業しているディレクトリの場所を表示します。"
  },
  {
    question: "ディレクトリを移動するコマンドは？",
    choices: ["mkdir", "cd", "cp", "mv"],
    answer: "cd",
    explanation: "cd は、作業するディレクトリを移動するときに使います。"
  },
  {
    question: "空のファイルを作成するコマンドは？",
    choices: ["touch", "cat", "less", "grep"],
    answer: "touch",
    explanation: "touch は、空のファイルを作成したり、ファイルの更新日時を変更したりするコマンドです。"
  },
  {
    question: "ファイルの中身を表示するコマンドは？",
    choices: ["cat", "mkdir", "rmdir", "chmod"],
    answer: "cat",
    explanation: "cat は、ファイルの内容をターミナルに表示するコマンドです。"
  },
  {
    question: "ディレクトリを作成するコマンドは？",
    choices: ["rm", "mkdir", "cp", "pwd"],
    answer: "mkdir",
    explanation: "mkdir は、新しいディレクトリを作成するコマンドです。"
  },
  {
    question: "ファイルやディレクトリをコピーするコマンドは？",
    choices: ["mv", "cp", "rm", "ls"],
    answer: "cp",
    explanation: "cp は、ファイルやディレクトリをコピーするコマンドです。"
  },
  {
    question: "ファイル名の変更や移動に使うコマンドは？",
    choices: ["mv", "cp", "touch", "cat"],
    answer: "mv",
    explanation: "mv は、ファイルの移動や名前変更に使うコマンドです。"
  },
  {
    question: "ファイルを削除するコマンドは？",
    choices: ["rm", "rmdir", "delete", "clear"],
    answer: "rm",
    explanation: "rm は、ファイルを削除するコマンドです。使用には注意が必要です。"
  },
  {
    question: "画面をきれいにするコマンドは？",
    choices: ["clear", "clean", "reset", "cls"],
    answer: "clear",
    explanation: "clear は、ターミナルの表示をクリアするコマンドです。"
  },
  {
    question: "文字列を検索するコマンドは？",
    choices: ["grep", "find", "cat", "pwd"],
    answer: "grep",
    explanation: "grep は、ファイル内やコマンド結果から指定した文字列を検索するコマンドです。"
  },
  {
    question: "ファイルやディレクトリを探すコマンドは？",
    choices: ["find", "grep", "ls", "cd"],
    answer: "find",
    explanation: "find は、指定した条件でファイルやディレクトリを検索するコマンドです。"
  },
  {
    question: "コマンドの使い方を確認するコマンドは？",
    choices: ["man", "cat", "touch", "clear"],
    answer: "man",
    explanation: "man は、コマンドのマニュアルを表示するコマンドです。"
  },
  {
    question: "過去に入力したコマンド履歴を表示するコマンドは？",
    choices: ["history", "log", "record", "past"],
    answer: "history",
    explanation: "history は、過去に実行したコマンドの履歴を表示します。"
  },
  {
    question: "ファイルの権限を変更するコマンドは？",
    choices: ["chmod", "chown", "passwd", "sudo"],
    answer: "chmod",
    explanation: "chmod は、ファイルやディレクトリの権限を変更するコマンドです。"
  },
  {
    question: "ファイルの所有者を変更するコマンドは？",
    choices: ["chown", "chmod", "touch", "mv"],
    answer: "chown",
    explanation: "chown は、ファイルやディレクトリの所有者を変更するコマンドです。"
  },
  {
    question: "実行中のプロセスを表示するコマンドは？",
    choices: ["ps", "pwd", "cp", "rm"],
    answer: "ps",
    explanation: "ps は、現在実行中のプロセスを表示するコマンドです。"
  },
  {
    question: "プロセスを終了させるコマンドは？",
    choices: ["kill", "stop", "exit", "delete"],
    answer: "kill",
    explanation: "kill は、指定したプロセスにシグナルを送って終了させるコマンドです。"
  },
  {
    question: "CPUやメモリ使用状況をリアルタイムで確認するコマンドは？",
    choices: ["top", "cat", "ls", "mkdir"],
    answer: "top",
    explanation: "top は、CPUやメモリ、プロセスの状態をリアルタイムで確認するコマンドです。"
  },
  {
    question: "ディスクの空き容量を確認するコマンドは？",
    choices: ["df", "du", "free", "ls"],
    answer: "df",
    explanation: "df は、ファイルシステムごとのディスク使用量や空き容量を表示するコマンドです。"
  },
  {
    question: "ディレクトリやファイルの使用容量を確認するコマンドは？",
    choices: ["du", "df", "pwd", "file"],
    answer: "du",
    explanation: "du は、ファイルやディレクトリが使用している容量を確認するコマンドです。"
  },
  {
    question: "ファイルを圧縮・展開・まとめるときに使うコマンドは？",
    choices: ["tar", "zipper", "pack", "merge"],
    answer: "tar",
    explanation: "tar は、複数のファイルを1つにまとめたり、展開したりするときに使います。"
  },
  {
    question: "ファイルの先頭部分を表示するコマンドは？",
    choices: ["head", "tail", "less", "cat"],
    answer: "head",
    explanation: "head は、ファイルの先頭部分を表示するコマンドです。"
  },
  {
    question: "ファイルの末尾部分を表示するコマンドは？",
    choices: ["tail", "head", "grep", "find"],
    answer: "tail",
    explanation: "tail は、ファイルの末尾部分を表示するコマンドです。ログ確認でもよく使われます。"
  },
  {
    question: "ファイルの内容を1画面ずつ表示するコマンドは？",
    choices: ["less", "cat", "touch", "mkdir"],
    answer: "less",
    explanation: "less は、長いファイルの内容を1画面ずつ確認するときに使います。"
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
