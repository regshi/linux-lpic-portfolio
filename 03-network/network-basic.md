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

## トラブルシューティングメモ

`ping -c 4 8.8.8.8` を実行したところ、最初は `Network is unreachable` と表示された。

`ip a` を確認すると、ネットワークインターフェース `enp0s1` は存在していたが、IPv4アドレスが割り当てられていなかった。

`ip route` を確認したところ、default route も表示されていなかった。

`/etc/netplan/50-cloud-init.yaml` を確認すると、`dhcp4: true` になっており、Ubuntu側ではDHCPによるIPv4自動取得設定になっていた。

そのため、UTM側のネットワーク設定を確認したところ、ネットワークモードがブリッジになっていた。

UTMのネットワークモードを共有ネットワークに変更したところ、`enp0s1` に `192.168.64.3` のIPv4アドレスが割り当てられた。

`ip route` で `default via 192.168.64.1 dev enp0s1` が表示され、外部ネットワークへの経路が設定されていることを確認した。

最後に `ping -c 4 8.8.8.8` を実行し、`4 packets transmitted, 4 received, 0% packet loss` となったため、外部ネットワーク接続が成功したことを確認した。
