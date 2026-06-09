# ネットワーク基本

## ip a

IPアドレスを確認する。

```bash
ip a
```

## ping

通信できるか確認する。

```bash
ping 8.8.8.8
ping google.com
```

## ss

通信中のポートを確認する。

```bash
ss -tuln
```

## curl

Webサーバーにアクセスできるか確認する。

```bash
curl https://example.com
```

## hostname

ホスト名を確認する。

```bash
hostname
```

## 学んだこと

インフラでは、サーバーがネットワークに正しく接続されているか確認する力が重要。  
IPアドレス、DNS、ポート、疎通確認の基本コマンドを理解することで、障害対応の基礎につながる。
