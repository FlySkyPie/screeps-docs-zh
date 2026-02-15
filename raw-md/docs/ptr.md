---
title: 公共測試領域 (PTR)
---

公共測試領域 (Public Test Realm) 是一個獨立的游戲服務器, 擁有單獨的世界數據, 玩家腳本, Memory 和設置。 它的創建有兩個目的:

1) 測試主服務器將發生的變化和新的特性,

2) 為玩家提供一個平台，以便在一個多房間環境中安全地測試他們的腳本。
---

---

<div style="text-align: center">

<p><strong style="font-size: 20px; background: #eee; padding: 10px 40px;">[鏈接](https://screeps.com/ptr/)</strong></p>

<p>[更新日志](https://screeps.com/forum/category/8/)</p>

<p>[API 參考](http://docs-ptr.screeps.com/api/)</p> 
</div>
---

---

世界模式和模擬模式都在 PTR 上可用。 所有的游戲世界數據會在每周一 UTC 0:00 從主服務器復制到 PTR, 舊的 PTR 數據(包括玩家腳本) 會被清除。 **不要將 PTR 用於長期存儲代碼!**

PTR 不接受新賬戶注冊。 每次當數據被從主服務器復制到 PTR 時, 現有的玩家賬戶也會被復制。 默認情況下，您的帳戶 CPU 訂閱處於停用狀態。單擊 [訂購頁面](https://screeps.com/ptr/#!/order) 上的激活按鈕以啟用免費的 PTR 訂閱, 訂閱將持續到下一次 PTR 重置。

請留意, 在 PTR 中建造任何 structure 僅需要 1 energy, controller 的升級需要 1000 energy。 它允許快速創造測試所需的基礎架構。

如果您使用 [grunt-screeps](/commit.html) 來從本地計算機提交腳本, 您可以通過添加 <code style="white-space: nowrap;">ptr: true</code> 選項來提交您的代碼至 PTR

PTR 引擎代碼的更改會定期部署至 npm 上私有服務器軟件包的 `ptr` 分支, 因此您可以用以下命令在本地運行:

```
npm install screeps@ptr
``` 
