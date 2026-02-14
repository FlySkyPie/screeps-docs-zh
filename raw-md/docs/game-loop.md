title: 理解游戲循環、游戲時間、ticks
---

Screeps 是個實時游戲。它游戲時間不等同於現實時間，而是自從開服以來所有 tick 的總和。當下的游戲時間可用([`Game.time`](/api/#Game.time))獲得，這個時間只會隨著游戲的發展而增加。

就像其他大部分游戲一樣， screeps 是由無窮無盡的 "tick"（循環、回合）拼接而成的。每 tick 內，服務器會輪番處理所有玩家寫在 `main` 裡的指令，只有當處理完後才會進入下 tick。

接下來我們來介紹單個 tick 的三個階段，及初始、執行、結束階段。

![](img/game-loop.png)

在**初始階段**，服務器會重建所有的游戲對象 (object) 和記錄這 tick 的游戲狀態。比如 creep 的位置，被下令拆除的建築，或是 creep 及建築資源的存量 ([`creep.carry()`](api/#Creep.carry) / [`StructureExtension.energy()`](api/#StructureExtension.energy) / [`StructureContainer.store()`](api/#StructureContainer.store))。

在**執行階段**，玩家代碼的 `main` 及它所調用的模塊會被執行，但部分改變游戲狀態的指令並不會立即執行。如果玩家在同 tick 內先用了 `移動` ([`creep.move()`](api/#Creep.move)) 再用了 `攻擊` ([`creep.attack()`](api/#Creep.attack))，creep 發出攻擊的位置將會是移動前的位置，因為 creep 的位置屬性 ([`creep.pos`](api/#Creep.pos)) 只能在初始階段改變。

在**結束階段**，服務器會處理那些改變游戲狀態的指令，然後被傳達到下 tick 的初始階段。如果玩家給了相互沖突的指令，像是多個 creep 嘗試跑到同一位置，或是邊修理邊拆除，這些指令會按照[優先級](/simultaneous-actions.html)執行。但是玩家之間的指令並不一定會造成沖突，比如不同玩家的低血量 creep 相互攻擊可能會導致他們同時戰死。

## 更多

*   玩家代碼 `main` 的執行時間被 CPU 所限制(見[`Game.cpuLimit`](/api/#Game.cpuLimit))

*   已使用 CPU 可由[`Game.getUsedCpu`](/api/#Game.getUsedCpu)獲得。
*   游戲內 tick 的耗時是由服務器吞吐量決定的。
*   所有運行游戲對象及變量在每 tick 後都會被清除重建(見[全局對象](/global-objects.html))
*   由控制台輸入的指令遵循同樣的規則：所以控制台輸入的指令會在 `main` 之後執行。

## 參見

*   [什麼是CPU限制](/cpu-limit.html)
*   [服務器結構簡覽](/architecture.html)
