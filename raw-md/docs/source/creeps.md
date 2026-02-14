title: Creeps
---

和其他 RTS 游戲一樣，你的可控制單位被稱為 **Creep**。但是 Screeps 炫酷的地方在於共有 7 種**身體部件**可為你所用以構建你的專屬 Creep，每個單位上最多可以有 50 個部件。可以利用此機制構造出不同類型的 Creep：普通工人，能夠在幾個 tick 內建造或修復結構的巨型建築機器，大容量運輸單位，快速廉價的偵察兵，裝備精良的具有再生能力的戰斗機等。沒有做不到，只有想不到。

![](img/bodyparts.png)

不過要注意的是 Creep 的生命時間只有 1500 個游戲 tick （大約 30-60 分鐘，具體取決於每個游戲 tick 的時長），然後它會死掉。 因此，你不僅需要控制現有的 Creep，還需要設計 Creep 的更替方式。

標准的 Spawn 只能產生花費不超過 **300 單位能量**的基本 Creep。想要生產高級的 Creep 就需要建造 **Spawn 擴展**（Extension），每個 Spawn 擴展可使 Spawn 的**能量存儲容量多 50**，從而允許生產更高級的 Creep 。

Spawn擴展的放置位置不重要，只需要和 Spawn 在一個房間裡就行了，並且一個擴展可以被多個 Spawn 共同使用。生產 Creep 前需要 Spawn 和擴展裡有足夠多的能量。

一個房間裡可以放置的擴展數量取決於房間的控制水平。詳細的說明在[控制](/control.html)裡。

## Creeps 能力

每個 Creep 的能力由 Creep 的構造部件決定：

*   <code style="background: #333; color: #ffe56d;">WORK</code> – 收集能量，建造和修復結構，升級控制器的能力。
*   <code style="background: #333; color: #a9b7c6;">MOVE</code> – 移動的能力。
*   <code style="background: #333; color: #777;">CARRY</code> – 運輸能源的能力。
*   <code style="background: #333; color: #f93842;">ATTACK</code> – 短距離攻擊的能力。
*   <code style="background: #333; color: #5d80b2;">RANGED_ATTACK</code> – 長距離攻擊的能力。
*   <code style="background: #333; color: #65fd62;">HEAL</code> – 治療其他單位的能力。
*   <code style="background: #333; color: #b99cfb;">CLAIM</code> - 控制領土的能力。
*   <code style="background: #333; color: #fff;">TOUGH</code> – 「空」部件，唯一作用就是承受傷害。


每種能力的強弱取決於對應部件的數量。以工作效率為例，有 3 個 `WORK` 部件的 Creep 的工件效率是只有一個 `WORK` 部件的 3 倍。這同樣適用於其他部件。

## 移動力

除了 `MOVE` 外， Creep 的每一個構造部件都有重量：帶的部件越多，移動速度越慢。每個部件（除了 `MOVE`）都都會產生疲勞值：在道路上為 1 點，平原上為 2 點，沼澤裡為 10 點。每一個 MOVE 部件每個游戲 tick 會減少 2  點疲勞值，當 Creep 的疲勞值大於 0 時無法移動。

<blockquote class="note info"><p>如果要保證 Creep 每個游戲 tick 能移動一格，需要計算除 <code>MOVE</code> 外的所有部件的疲勞值總和並使 <code>MOVE</code> 減少的疲勞值不低於這個總和。</p>
</blockquote>

換句話說，一個 `MOVE` 部件在每個 tick 可以移動其他部件一個方格。如果一個 Creep 的 `MOVE` 部件不足，他的移動力會按比例減速，這可以通過疲勞度來看出。


值得注意的是，沒有搬運資源的 `CARRY` 部件是不會產生疲勞的。

幾個小例子，在平原上運動時（每個部件移動一格產生2點疲勞值）：

*   Creep `[CARRY, WORK, MOVE]` 在沒有搬運能量的時候一個 tick 可以跑 1 格，搬了能量以後 2 個 tick 才能跑 1 格。
*   Creep `[TOUGH, ATTACK, ATTACK, MOVE, MOVE, MOVE]` 將以滿速（1 個 tick 一格）行動。
*   Creep `[TOUGH, ATTACK, ATTACK, MOVE, MOVE]` 根據向上取整原則 2 個 tick 移動 1 格。

## 傷害

每個 Creep 可以承受的傷害總量由部件總數決定，每個部件可以增加 100 點耐久。被攻擊時，排在前面的部件會被優先攻擊，當部件完全損毀時，Creep 就不再有對應能力了。
