---
title: 第三方工具
---

Screeps 擁有一個活躍的第三方開發社區，該社區已經構建了許多的工具、庫和 web 應用。如果您有一個工具想要在此處列出，請隨時編輯本文。

{% note warn 謹慎使用 %}

*   切勿將您的密碼洩露給第三方工具。
*   任何第三方工具都是使用非官方 API 構建的，並且可能隨時停止服務或更新。
*   任何第三方工具的運行風險均由您自己承擔 - 游戲開發者並不會對其進行審查，並且可能會導致無法預料的問題。
{% endnote %}

**譯者注**：下述項目中有很多已經停止更新多年了，請在使用前注意其最後更新時間。

## 語言支持

您可以設置一個外部編譯器以使用其他語言編寫您的 Screep AI。

### TypeScript

*   [screeps-typescript-starter](https://github.com/screepers/screeps-typescript-starter) 是想要使用 TypeScript 進行編程的玩家的起點。
*   [typed-screeps](https://github.com/screepers/typed-screeps) 是涵蓋了 Screeps API 的 TypeScript 聲明。

### Python

*   [screeps-starter-python](https://github.com/daboross/screeps-starter-python/) 是一個用於在 Python 上運行 Screeps 代碼的平台。

### Rust

*   [screeps-starter-rust](https://github.com/daboross/screeps-starter-rust) 是一個內測階段的平台，借助它您將可以使用 Rust 來編寫 Screeps 代碼。

### Kotlin

* [screeps-kotlin](https://github.com/exaV/screeps-kotlin) 是使用了 Kotlin 的游戲代碼示例。
* [screeps-kotlin-starter](https://github.com/exaV/screeps-kotlin-starter) 是想要使用 Kotlin 進行編程的玩家的起點。
* [screeps-kotlin-types](https://github.com/exaV/screeps-kotlin-types) 是涵蓋了 Screeps API 的 Kotlin 聲明。

## API 客戶端

該 Screeps API 並不是官方的，並且隨時可能更改。這些客戶端由社區維護，並用於生成本文中介紹的許多服務和程序。

*   [python](https://github.com/screepers/python-screeps)
*   [node](https://github.com/screepers/node-screeps-api)


## 應用

*   [Screeps Monitor](https://play.google.com/store/apps/details?id=com.danielscholte.screepsmonitor) 是一款 Android 應用，可為玩家提供帳戶和游戲統計信息，以及完整的消息客戶端和市場歷史記錄。（已失效）


## 備份

*   [screeps-backup](https://github.com/screepers/screeps-backup) 是一個用於備份還原內存及分段的簡單實用程序。


## 控制台

*   [screeps_console](https://github.com/screepers/screeps_console) 是使用 python 構建的獨立交互式控制台。它支持常見的控制台鍵盤快捷鍵，具有許多內置命令，並且具有明暗主題。同時也包括一個非交互式版本。


## 分析器

*   [gdborton's profiler](https://github.com/gdborton/screeps-profiler) 是基於函數包裝的檢查器，在發現性能問題時非常有用。


## 編程工具

*   [closure-compiler-externs](https://github.com/screepers/screeps-closure-compiler-externs) 定義了 Screeps API，以便閉包不會重寫這些調用。
*   [ScreepsAutocomplete](https://github.com/Garethp/ScreepsAutocomplete) 提供 Screeps API 的自動補全。
*   [screeps-server-mockup](https://github.com/Hiryus/screeps-server-mockup) 用於單元測試的私有服務器包。


## 通知

*   [Screeps Notify](https://github.com/screepers/screeps_notify) 提供一套游戲內接口，使玩家可以將消息發送到游戲外的服務器。它內置有SMS系統，並且支持將消息發送到任意 http 接口。


## 統計

Screeps 是不斷運行的，作為玩家不可能看到每件事的發生。還有一些問題並不會在玩家進行游戲的時候出現，而是在觀察長期趨勢時才會暴露出來。這就是為什麼 Screeps 中最流行的應用是用於跟蹤統計信息的。

*   [ScreepsPlus Grafana](https://screepspl.us/services/grafana) 是 [ags131]() 使用 Grafana 編寫的一個服務。它會通過代理來收集信息從而避免密碼洩露。
*   [screeps-stats](https://github.com/screepers/screeps-stats) 將控制台數據和統計信息存儲在 elasticsearch 中，並使用 kibana 進行可視化。該系統利用內存分段來減少存儲大量數據可能導致的游戲消耗。這是一項自托管服務。
*   [screeps-grafana](https://github.com/screepers/screeps-grafana) 是一個老牌統計工具。它使用 Grafana 進行前端展示。和 screeps-stats 一樣，它也是個自托管服務。
*   [screeps-ConsoleStats](https://github.com/screepers/screeps-ConsoleStats) 提供了無需外部服務的統計信息。


## 上傳工具

使用下列命令行程序將您的代碼推送至服務器。

*   [grunt-screeps](https://github.com/screeps/grunt-screeps) 由 Screeps 官方團隊編寫和維護。它使用 [Grunt](https://gruntjs.com/) 來將代碼推送到 screeps 服務器。
*   [gulp-screeps](https://github.com/screepers/gulp-screeps) 使用 [Gulp](http://gulpjs.com/) 將代碼推送到 screeps 服務器。


## Web 客戶端拓展

javascript 拓展插件，需要提前安裝諸如 [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) 和 [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) 之類的基礎插件。

*   [Alliance Overlay](https://raw.githubusercontent.com/LeagueOfAutomatedNations/loan-browser-ext/master/dist/alliance-overlay.user.js) 將 [League of Automated Nations](http://www.leagueofautomatednations.com/map) 的相關信息顯示在游戲地圖上。
*   [Room Claim Assistant](https://github.com/Esryok/screeps-browser-ext/raw/master/room-claim-assistant.user.js) 顏色拓展了 "Owner Control Level" 來使得房間的選擇更加輕松。它將 mineral 添加到了視圖中，將擁有兩個 source 的房間標記為綠色，已佔領或已預訂的房間標記為紅色，被其他玩家「簽名」的房間將標記為橙色。
*   [Visible Room Tracker](https://github.com/Esryok/screeps-browser-ext/blob/master/visible-room-tracker.user.js) 會自動設置您當前查看房間的 memory，使您能夠完成諸如」僅在需要時打開可視化「之類的操作。
*   [ScreepsSC](https://github.com/stybbe/Screeps-SC) 是一個 Chrome 擴展程序，它添加了新功能並在 Screeps 網站上提供了更多信息。 一些功能包括使市場歷史更具可讀性，添加戰斗雷達，讓用戶查看其他玩家的 creep 名字以及優化排行榜。