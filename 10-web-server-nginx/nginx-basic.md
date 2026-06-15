# Nginx Webサーバー構築

## 目的

UbuntuにNginxをインストールし、Webサーバーが起動しているか確認する。

インフラ作業では、Webサーバーのインストール、サービス管理、ポート確認、疎通確認が重要。

## Nginxとは

Nginxは、Webサーバーとして使われるソフトウェア。

ブラウザやcurlからHTTPリクエストを受け取り、Webページを返す役割を持つ。

## パッケージ情報の更新

```bash
sudo apt update
```

## Nginxのインストール

```bash
sudo apt install nginx
```

## Nginxサービスの状態確認

```bash
systemctl status nginx
```

## Nginxが起動しているか確認

```bash
systemctl is-active nginx
```

## 自動起動設定の確認

```bash
systemctl is-enabled nginx
```

## 80番ポートの確認

```bash
ss -tuln | grep :80
```

Webサーバーは通常、HTTP通信で80番ポートを使用する。

## curlでWebページを確認

```bash
curl http://localhost
```

Nginxの初期ページHTMLが表示されれば、Webサーバーが正常に動作している。

## 学んだこと

Nginxをインストールすると、Ubuntu上でWebサーバーを動かすことができる。

インフラ作業では、サービスが起動しているかだけでなく、ポートで待ち受けているか、実際にHTTPレスポンスが返るかまで確認する必要がある。
## 実行メモ

`sudo apt update` を実行し、パッケージ情報を更新した。

`sudo apt install nginx` を実行し、Nginxをインストールした。

`systemctl status nginx` を実行し、Nginxサービスが `active (running)` であることを確認した。

`systemctl is-active nginx` を実行し、Nginxが起動中であることを確認した。

`systemctl is-enabled nginx` を実行し、Nginxが自動起動設定されていることを確認した。

`ss -tuln | grep :80` を実行し、Nginxが80番ポートで待ち受けていることを確認した。

`curl http://localhost` を実行し、Nginxの初期ページHTMLが返ることを確認した。

この結果から、Ubuntu上でWebサーバーが正常に動作していることを確認できた。

## ブラウザでの動作確認

`ip a` を実行し、UbuntuのIPアドレスが `192.168.64.3` であることを確認した。

Macのブラウザから `http://192.168.64.3` にアクセスし、Nginxの初期ページが表示されることを確認した。

この結果から、Ubuntu上で起動しているNginx Webサーバーに、外部ブラウザからアクセスできることを確認した。
## MacからUbuntuへのSSH接続

Ubuntu側で `ip a` を実行し、IPアドレスが `192.168.64.3` であることを確認した。

Macのターミナルから以下を実行した。

```bash
ssh user@192.168.64.3
