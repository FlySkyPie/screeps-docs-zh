---
title: Ubuntu 上使用 MongoDB 和 Redis 搭建私人服務器
貢獻者:
    名字: tedivm
    鏈接: https://github.com/tedivm
    日期: 2018-02-07
---

Screeps 游戲引擎是 [開源](https://github.com/screeps/screeps) 的, 因此允許任何人自己運行私人服務器。 Screeps 的 Steam 客戶端甚至提供了一套工具以簡化創建私人服務器的步驟

對於想要運行沒有桌面環境系統(比如在 Linode 或是 AWS 上運行)的玩家, 需要一些額外的工作才能獲得一個穩定的服務器, 特別是內建的 LokiJS 引擎不能很好地隨著時間推移擴展。這篇教程會知道您使用 MongoDB 和 Redis 在專有環境中安裝 Screeps。


## 先決條件

### 服務器

這篇文章假設用戶運行 Ubuntu 16。建議服務器至少有兩個 CPU 內核和 2GB 內存, 盡管對於單個用戶和幾個 bot 來說，單核並擁有 2GB 內存的機器會在合理的 tick 速度運行
由於系統往往非常佔用 CPU, 因此建議您避免使用不提供常量 CPU 的 "burstable" 服務器, 比如 AWS t2 系列。


### 構建工具

以下步驟將需要一些常見的構建和開發工具，我們將在此處安裝。

```shell
sudo apt install -y build-essential tcl git
```


### 安裝 Node.js

主要游戲世界在 Node.js 8 上運行, 但是 Ubuntu 只提供了一個更老的版本, Node.js 6。幸運的是, 我們可以使用另一個 apt 存儲庫來獲得最新版本

```shell
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt install -y nodejs
```


### 安裝 MongoDB

Ubuntu 存儲庫中的 MongoDB 版本非常老。 MongoDB維護一個包含更新版本的apt存儲庫, 因此第一步是配置它。

```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt update
```

現在我們可以安裝 MongoDB

```shell
sudo apt-get install -y mongodb-org
```

默認情況下 MongoDB 不會在系統啟動時運行, 所以我們繼續修復它。

```shell
sudo systemctl start mongod
sudo systemctl enable mongod
```


### 安裝 Redis

與上面的 MongoDB 示例一樣, Redis 的發行版版本非常過時, 但在這種情況下, 可以使用PPA而不是項目的官方apt存儲庫。 這個 PPA 維護得很好, 甚至被 redis 開發人員"祝福"了。


`software-properties-common` 提供了 `add-apt-repository`, 允許我們跳過幾個配置 PPA 的手動步驟。

```bash
sudo apt install software-properties-common
sudo add-apt-repository ppa:chris-lea/redis-server
sudo apt update
sudo apt install redis-server
```

就是這樣! Redis 服務器非常簡單, apt 包會負責它保持運行。


## Screeps 服務器

## 創建 Screeps 用戶


我們將在接下來的步驟中創建一個新的用戶, `screeps`, 然後將服務器設置在那個用戶和用戶組下。由於這個用戶不會擁有 sudo 權限並不需要登錄, 我們將不為它設置密碼。

```shell
sudo adduser --disabled-password --gecos "" screeps
```

接下來我們將切換到那個用戶並完成安裝的剩下部分。由於我們不能直接通過它登錄, 我們需要用 `su` 命令來切換用戶。 您會希望在想要以 `screeps` 用戶身份運行的任何時候記住這一點, 例如在服務器上調試或安裝新 mod 時。

```shell
sudo su screeps
```

### 配置服務器環境

現在先決條件已經滿足並有了新用戶, 我們可以為您的游戲世界創建獨一無二的服務器環境。

在這個步驟中, 你會需要一個 Steam API Key, 你可以在 [這裡](https://steamcommunity.com/dev/apikey) 免費獲取。

```shell
mkdir ~/world
cd ~/world
npm install screeps
npx screeps init
```

`Init` 指令創建了服務器配置文件 `.screepsrc`。 您應該仔細閱讀這個已經很好地創建的文件, 您唯一可能想要更改的內容是 `runners_cnt` 和 `processors_cnt`。 在相對較小的系統中(比如 2 個 CPU 核心), 您需要將它們設置成你可用的核心數量, 但是在更大的系統上, 您可能會想保留 1-2 個 空余的核心給 MongoDB 使用。 如果您想在一台服務器上運行多個游戲世界, 您應該確保限制每個世界的 `runners_cnt` 和 `processors_cnt` 以確保它們的總和不會超過您系統上的處理器數量。


### 安裝服務器 Mod

我們將安裝幾個 mod 以啟用新的後端並使得服務器更容易使用和管理

* [screepsmod-mongo](https://github.com/ScreepsMods/screepsmod-mongo) 用 MongoDB 和 Redis 的存儲解決方案替換內置的 LokiJS。
* [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth) 允許玩家設置登錄密碼, 允許通過第三方工具登錄。
* [screepsmod-tickrate](https://github.com/ScreepsMods/screepsmod-tickrate) 允許服務器管理員通過 screeps cli 更改最小 tick 速度。
* [screepsmod-admin-utils](https://github.com/ScreepsMods/screepsmod-admin-utils) 為 screeps cli 添加了一些有用的功能。
* [screepsmod-features](https://github.com/ScreepsMods/screepsmod-features) 公開了服務器支持功能的列表。

我們可以用一個簡單的命令(以 `screeps` 用戶運行)同時安裝以上 Mod。

```shell
npm install screepsmod-mongo screepsmod-auth screepsmod-tickrate screepsmod-admin-utils screepsmod-features
```

然後確認 `mods.json` 文件如下:

```json
{
  "mods": [
    "node_modules/screepsmod-mongo/index.js",
    "node_modules/screepsmod-auth/index.js",
    "node_modules/screepsmod-tickrate/index.js",
    "node_modules/screepsmod-admin-utils/index.js",
    "node_modules/screepsmod-features/index.js"
  ],
  "bots": {
    "simplebot": "node_modules/@screeps/simplebot/src"
  }
}
```

### 初始化數據庫

由於我們更改了默認的存儲引擎, 我們需要初始化新的數據庫。

在一個終端中您需要手動啟動 Screeps 服務器。 你仍然需要以 `screeps` 用戶運行。

```bash
cd ~/world
npx screeps start
```

現在在另一個終端中打開 Screeps CLI 工具並重置數據

```bash
sudo su screeps
cd ~/world
npx screeps cli
> system.resetAllData()
```

現在您應該在第一個終端中停止 Screeps 服務器

這是您需要通過 `screeps` 用戶做的最後一件事, 我們現在可以切換回主要用戶。

```bash
exit
```

### 配置服務

現在我們有了一個正常運行的 Screeps 服務器, 我們回想要確保它保持運行, 包括在重啟系統後。 由於我們運行 Ubuntu 16, 我們可以通過一個簡單的 systemd 服務文件來實現這個目的。

作為 root 用戶 (不是 `screeps`!) 打開 `/etc/systemd/system/screeps-world.service`。

```shell
sudo nano /etc/systemd/system/screeps-world.service
```

寫入以下內容:

```ini
[Unit]
Description=Screeps Server (world)
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
WorkingDirectory=/home/screeps/world
ExecStart=/home/screeps/world/node_modules/screeps/bin/screeps.js start
User=screeps
Group=screeps

[Install]
WantedBy=multi-user.target
```


這個文件告訴系統 Screeps 服務器需要網絡, 應該以 `screeps` 用戶和用戶組運行, 以及啟動服務器的文件路徑和啟動服務器的指令。

告訴 systemd 加載我們創建的新服務:

```shell
sudo systemctl daemon-reload
```

現在我們可以啟動服務器, 並告訴 systemd 永遠在啟動機器後啟動它。

```shell
sudo systemctl start screeps-world
sudo systemctl enable screeps-world
```
