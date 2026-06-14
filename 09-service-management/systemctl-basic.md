# サービス管理

## 目的

Linuxでは、SSHやWebサーバーなどのサービスを `systemctl` で管理する。

インフラ作業では、サービスが起動しているか、自動起動が有効か、ポートで待ち受けているかを確認することが重要。

## サービスの状態確認

```bash
systemctl status ssh
## 実行メモ

`sudo systemctl restart ssh` を実行し、SSHサービスを再起動した。

`systemctl is-enabled ssh` を実行し、SSHサービスが自動起動設定されていることを確認した。

`systemctl is-active ssh` を実行し、SSHサービスが現在起動中であることを確認した。

`ss -tuln | grep :22` を実行し、SSHが22番ポートで待ち受けていることを確認した。

`systemctl status ssh` を実行し、`Active: active (running)` と表示されることを確認した。

また、`ssh systemctl restart ssh` と誤って入力すると、`systemctl` というホスト名にSSH接続しようとして `Could not resolve hostname systemctl` と表示されることを確認した。  
正しくは `sudo systemctl restart ssh` と入力する必要がある。
