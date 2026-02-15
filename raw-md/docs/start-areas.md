---
title: 開始區域
---

## 新手區
 
為了保護新玩家的發展起步，我們定期會在地圖上劃出臨時區域。在地圖上這些新手區會被標<font color="green"><b>綠</b></font>且當鼠標指針移動到區域內時，會彈出寫有 「**Novice Area**」 （新手區）字樣的標簽

![](#novice.webp)

以下為新手區的額外規則：

*   此區域由一條不間斷的、不可摧毀的外牆環繞。沒有玩家可以逾越此牆。[重生](respawn.html)是唯一進入新手區方法。
*   只有 [GCL](/control.html#提升GCL) 小於等於 3 的玩家才可在此區域出生。
*   玩家最多只能 [claim （佔領）](/api/#Creep.claimController) 3 房間，但房間 [reservation（預定）](/api/#Creep.reserveController) 數不受限。
*   啟用 [safe mode （安全模式）](/defense.html) 沒有冷卻時間。
*   無法使用 [Nukers （核彈發射井）](/api/#StructureNuker)。

當新手區倒計時結束，環繞新手區的牆將消失，房間不再被標綠，且額外規則解除。此刻，新手區回歸為世界的一部分。區內玩家可選擇向其他區域擴張，同時也得面對區外世界玩家的威脅。

大多數新手保護區由一個 sector （9x9 房間）構成。除了環繞整個 sector 的外牆，還有「十」字型的內牆將這個 sector 隔成 4 個小區。內牆會比外牆先消失，意味著一開始玩家只能在其小區內活動，幾天後內牆消失才可以進入其他的小區。

## 重生區

類似新手區，地圖上存在**重生區**（ Respawn Areas ），在地圖上被標<font color="blue"><b>藍</b></font>，與新手區不同的是，這些重生區只禁止使用[Nukers （核彈發射井）](/api/#StructureNuker)。任何 [GCL](control.html) 的玩家均可在此區域重生並佔領其所 GCL 所允許的房間。

![chrome_2017-03-06_14-40-11.png](#chrome_2017-03-06_14-40-11.webp)

## 開始區域的規劃

我們將會持續觀察新手及重生區的玩家數並按需添加開始區域。開始區域一般會選址在較為空曠的 sector ，並不排除已有玩家的 sector 。

<blockquote class="note info"><p>如果玩家所在 sector 被規劃成了開始區域，玩家可<a href="/api/#Creep.reserveController">reserve （保留）</a>其不想被包括進開始區域的房間。</p>
</blockquote>

所有將被規劃為開始區域的中立房間會被標注以下消息：

![chrome_2017-03-08_13-01-20.png](#chrome_2017-03-08_13-01-20.webp)

玩家可用游戲常數 `SYSTEM_USERNAME`, `SIGN_NOVICE_AREA`, 和 `SIGN_RESPAWN_AREA` 來在其代碼中以檢測房間是否被規劃為開始區域。
**譯者注：**若游戲將玩家所在的 sector 被規劃為未來的開始區域，則其將會避開玩家的房間及使其通向外界的房間。
