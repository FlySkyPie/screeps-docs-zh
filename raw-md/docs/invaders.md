---
title: NPC 入侵者 
---

每個被開采的房間都有一個內置的計數器，終值大約為**100,000單位的能量**（再加上一些隨機因素）。當計數器達到終值，在房間的任意一個出入口會生產一個系統控制的 creep，其目標是獵殺你的 creep。它大部分時間不會理睬你的建築物，一旦某個建築物擋了它的道，它就會試圖摧毀該建築物。這些 creep 可以使用[攻擊(`attack`)](/api/#Creep.attack), [遠程攻擊(`rangedAttack`)](/api/#Creep.rangedAttack), 和 [拆毀(`dismantle`)](/api/#Creep.dismantle)，但是不會跨房間游走。

![](#invader.webp)

這些 creep 最重要的特點是只會出現在**通向中立房間的出口**，如果出口通向的房間被你（或者其他人）控制，或者是一個被預定的房間，creep 入侵者將不會出現在該的出口。如果該房間的所有的出口都是這種類型，那麼就不會產生任何入侵者

目前，NPC 入侵者的攻擊不會產生任何郵件提醒，因為即便在一個普通的開采房間中，一天內也會有若干次入侵。

## 襲擊

有 10% 幾率你會遇到不止一個入侵者，你將遇到 2 至 5 個結伴的入侵者。每個入侵者都會有各自的角色：近戰，遠程或者治療者。遠程攻擊者和近戰攻擊者的行為完全不同：他們會試圖和你的creep保持距離。治療者的作用是治療其他入侵成員。同樣的某些 creep 會受到 ![](//static.screeps.com/upload/mineral-icons/UH.png), ![](//static.screeps.com/upload/mineral-icons/KO.png), ![](//static.screeps.com/upload/mineral-icons/LO.png), ![](//static.screeps.com/upload/mineral-icons/ZH.png) 或 ![](//static.screeps.com/upload/mineral-icons/GO.png) 的強化。

## creep入侵者類型

有兩種 creep 入侵者類型：

*   輕型 creep，出現在中立、被預定和房間控制等級3以內的房間裡。
*   重型 creep，出現在房間控制等級4級及以上的房間裡。

<style>
.invaders td {
    border-top: 1px solid #333;
    background-color: #222;
    color: #ccc;
}
</style>

<table class=invaders>
<tbody>
<tr>
<td width="15%"> </td>
<td style="text-align: center;">RCL < 4</td>
<td style="text-align: center;">RCL ≧ 4</td>
</tr>
<tr>
<td style="text-align: left;">Melee</td>
<td style="text-align: center;">![](#smallMelee.webp)</td>
<td style="text-align: center;">![](#bigMelee.webp)</td>
</tr>
<tr>
<td style="text-align: left;">Ranged</td>
<td style="text-align: center;">![](#smallRanged.webp)</td>
<td style="text-align: center;">![](#bigRanged.webp)</td>
</tr>
<tr>
<td style="text-align: left;">Healer</td>
<td style="text-align: center;">![](#smallHealer.webp)</td>
<td style="text-align: center;">![](#bigHealer.webp)</td>
</tr>
</tbody>
</table>

## 測試

你可使用在右側面板上的 「Invasion」（入侵）控制器手動生成NPC入侵者，用來測試你的防御系統。

![](#chrome_2016-11-24_14-55-59.webp)

## 要塞 (Stronghold)

如果入侵者開始襲擊您的房間，請檢查您的區域地圖 &mdash; 他們的基地就在區塊內的某個房間內。該 NPC 要塞可以被攻擊和摧毀，一旦被摧毀，區塊內的所有房間將不再刷新入侵者，直到下一個要塞出現為止。

每個 NPC 要塞的建築上都有 `EFFECT_COLLAPSE_TIMER` 效果。當前一個要塞崩潰後，下一個會立刻出現在區塊的某個房間內。
如果您摧毀了要塞，它的廢墟 (ruins) 將會保留同樣的效果計時器，從而讓您在這段時間內免受 NPC 的進攻。

要塞的類型有很多種，每種類型都有不同的建築布局和防御 AI。您可以通過檢查 [`StructureInvaderCore`](/api/#StructureInvaderCore) 上的 `level` 屬性來估計該要塞的進攻難度。

![](#stronghold1.webp) ![](#stronghold5.webp)

我們還有另一個理由來征服一個 NPC 要塞 &mdash; 他的倉庫中存放著很多寶貴的資源。
每一個要塞都有數個 container。並且在你摧毀核心建築 (`StructureInvaderCore`) 之後，它的廢墟也會包含大量的資源。
以下是一個 5 級要塞戰利品的例子：

![](#stronghold_loot5.webp) ![](#stronghold_loot1.webp) ![](#stronghold_loot2.webp) ![](#stronghold_loot3.webp) ![](#stronghold_loot4.webp)

一個正常的 NPC 要塞不僅會在區塊中生成入侵者，並且每隔幾千 ticks 還會在臨近的中立（甚至是預定）房間內生成較小的要塞核心。
這種核心不會包含任何建築或者 creep。但是他會預定 (reserve) 房間的控制器，在摧毀它之前，您將無法從該房間采集能量。

![](img/invader-core-expand.gif)
