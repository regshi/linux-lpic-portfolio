# Nginxカスタムページ作成

## 目的

Ubuntu上で動作しているNginxの公開ページを編集し、Mac側から表示確認を行う。

インフラ作業では、Webサーバーのドキュメントルートを理解し、実際にページが配信されるか確認することが重要。

## Nginxサービスの確認

```bash
systemctl is-active nginx
eof

## 実行時の注意

`/var/www/html/index.html` を編集するコマンドは、Ubuntu上で実行する必要がある。

最初にMac側のターミナルで実行してしまい、Macユーザーのパスワードが求められた。

その後、`ssh user@192.168.64.3` でUbuntuへ接続し直し、Ubuntu上で以下のコマンドを実行した。

```bash
echo '<h1>Linux Infra Portfolio</h1><p>Nginx custom page from Ubuntu server.</p>' | sudo tee /var/www/html/index.html
