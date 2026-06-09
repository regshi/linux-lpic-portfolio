## 実行メモ

`systemctl status ssh` を実行し、SSHサービスの状態を確認した。

結果として、`Active: active (running)` と表示され、SSHサービスが起動していることを確認した。

また、`Server listening on 0.0.0.0 port 22` と表示され、SSHが22番ポートで待ち受けていることを確認した。

## ローカルホストへのSSH接続

`ssh user@localhost` を実行し、Ubuntu上のSSHサーバーへ自分自身から接続した。

初回接続時は接続先の確認が表示されたため、`yes` を入力した。

パスワード認証後、SSH接続に成功した。

`whoami` を実行し、接続中のユーザーが `user` であることを確認した。

`hostname` を実行し、接続先のホスト名が `ubuntu-srv` であることを確認した。
