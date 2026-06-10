# パッケージ管理

## 目的

Linuxでは、必要なソフトウェアをパッケージとして管理する。  
Ubuntuでは主に `apt` コマンドを使って、パッケージの更新、インストール、削除を行う。

インフラ作業では、SSHサーバー、Webサーバー、監視ツールなどを導入するため、パッケージ管理の理解が重要。

## apt update

パッケージ情報を更新する。

```bash
sudo apt update
```

これは、インストール可能なパッケージの一覧情報を最新にするコマンド。

## apt upgrade

インストール済みパッケージを更新する。

```bash
sudo apt upgrade
```

システムに入っているパッケージを新しいバージョンに更新する。

## apt install

パッケージをインストールする。

```bash
sudo apt install パッケージ名
```

例：

```bash
sudo apt install openssh-server
```

## apt remove

パッケージを削除する。

```bash
sudo apt remove パッケージ名
```

## apt purge

パッケージと設定ファイルを削除する。

```bash
sudo apt purge パッケージ名
```

`remove` は主に本体を削除し、`purge` は設定ファイルも含めて削除する。

## apt autoremove

不要になったパッケージを削除する。

```bash
sudo apt autoremove
```

依存関係で入ったが、現在は不要になったパッケージを削除できる。

## インストール済みパッケージを確認する

```bash
apt list --installed
```

## パッケージを検索する

```bash
apt search パッケージ名
```

例：

```bash
apt search nginx
```

## パッケージ情報を確認する

```bash
apt show パッケージ名
```

例：

```bash
apt show openssh-server
```

## 学んだこと

Ubuntuでは `apt` を使ってソフトウェアを管理する。  
インフラ作業では、必要なサービスをインストールしたり、セキュリティ更新を適用したりするために、パッケージ管理の理解が重要。

特に `apt update` と `apt upgrade` の違いを理解することが大切だと学んだ。
## 実行メモ

`sudo apt update` を実行し、パッケージ情報を更新した。

`apt search nginx` を実行し、Nginx関連のパッケージを検索した。

`apt show openssh-server` を実行し、OpenSSH Serverパッケージの詳細情報を確認した。

`apt list --installed | grep openssh` を実行し、OpenSSH関連のパッケージがインストールされていることを確認した。

確認できた主なパッケージは以下の通り。

```text
openssh-client
openssh-server
openssh-sftp-server
