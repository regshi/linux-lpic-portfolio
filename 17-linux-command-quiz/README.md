# Linux Command Quiz

## 目的

LPIC学習で出てくるLinuxコマンドを、4択クイズ形式で復習するためのWebアプリ。

## 使用技術

- HTML
- CSS
- JavaScript

## 実行方法

`index.html` をブラウザで開く。

## 学習内容

- Linuxコマンドの意味を確認する
- LPICのコマンド問題に慣れる
- JavaScriptでクイズの表示、正誤判定、次の問題への切り替えを実装する

## 今後追加したい機能

- スコア表示
- 問題数の追加
- ランダム出題
- 間違えた問題の復習機能
- Ubuntu上のNginxで配信

## 実行記録：クイズアプリの終了処理を追加

### 作業内容

Linux Command Quiz アプリで、最後の問題が終わった後も最初の問題に戻り、問題が無限に出続ける状態を修正した。

### 修正前の状態

- 正解・不正解の表示はできていた
- 解説の表示もできていた
- ただし、最後の問題が終わると最初の問題に戻っていた
- そのため、クイズが終了せず無限に続く状態だった

### 原因

`currentIndex` が問題数を超えたときに、以下のように `0` に戻していたため。

```js
if (currentIndex >= quizData.length) {
  currentIndex = 0;
}

### 修正内容

最後の問題が終わったら、最終結果を表示する `showFinalResult()` 関数を追加した。

```js
function showFinalResult() {
  questionElement.textContent = "クイズ終了！";
  choicesElement.innerHTML = "";
  resultElement.textContent = quizData.length + "問中" + score + "問正解です。";
  explanationElement.textContent = "もう一度やる場合は、下のボタンを押してください。";
  nextButton.textContent = "もう一度やる";
}
```

また、「もう一度やる」ボタンを押したときに、スコアと問題番号を初期化して再スタートできるようにした。

### 動作確認

以下の動作を確認した。

- 選択肢を押すと正解・不正解が表示される
- 解説が表示される
- 正解時にスコアが増える
- 最後の問題後にクイズ終了画面が表示される
- 「もう一度やる」ボタンで最初から再スタートできる

### 学んだこと

- `currentIndex` は現在の問題番号を管理する変数
- `quizData.length` は問題数を表す
- `currentIndex >= quizData.length` で最後まで到達したか判定できる
- 関数を分けることで、終了画面の処理を整理できる

