# Nginxカスタムページ作成

## 目的

Ubuntu上で動作しているNginxの公開ページを編集し、Mac側から表示確認を行う。

インフラ作業では、Webサーバーのドキュメントルートを理解し、実際にページが配信されるか確認することが重要。

## Nginxサービスの確認

```bash
systemctl is-active nginx
eof
