title: 控制
---

## 全局控制等級 （Global Control Level; 縮寫：GCL）

為了擴展你在游戲世界中的疆土，你需要提升的一個主要指標是 **Global Control Level**（GCL）。他的主要影響有：

* **您的 CPU 限制**。在官方服務器上，您將在開始游戲時獲得 20 點 CPU 限額，您可以用其控制少量的單位。如果您通過使用 「CPU Unlock」 來解除了您的 CPU 限額，那麼每提升一個 GCL 等級就可以多獲得 10 點 CPU 資源，直到達到最大的 300 CPU 限制。
* **控制房間數量**。比如說你想要控制 3 個房間就需要 3 級的 GCL。



你當前的 GCL 等級在 [overview 頁面](https://screeps.com/a/#!/overview) 顯示.

![](img/gcl-cpu.png)

## 房間控制等級 （Room Control Level; 縮寫：RCL）

如果想要在房間裡建造設施，首先需要控制這個房間。在大多數房間裡都有一個被稱為 **房間控制器**（Room Controller）的特殊裝置。你第一個房間裡的房間控制器默認歸你所有，其他的中立房間控制器可以通過帶有 `CLAIM` 部件的 creep [佔有](/api/#Creep.claimController)以取得房間控制權。

![](img/c1.png)

新佔領的房間控制器可以讓你在該房間建造一個 Spawn。如果需要建造額外的 Spawn 或者其他擴展就需要通過 [`Creep.upgradeController`](/api/#Creep.upgradeController)給控制器輸入能量來提升房間控制器等級 （Room Controller Level，RCL）。

![](img/c2.png)

## RCL 等級對應可建造建築

<table>
<tbody>
<tr>
<th style="width: 10%;">RCL</th>
<th style="width: 15%;">升級所需能量</th>
<th>建築</th>
</tr>
<tr>
<td>0</td>
<td>—</td>
<td>Roads, 5 Containers</td>
</tr>
<tr>
<td>1</td>
<td>200</td>
<td>Roads, 5 Containers, 1 Spawn</td>
</tr>
<tr>
<td>2</td>
<td>45,000</td>
<td>Roads, 5 Containers, 1 Spawn, 5 Extensions (50 容量), Ramparts (300K 最大生命值), Walls</td>
</tr>
<tr>
<td>3</td>
<td>135,000</td>
<td>Roads, 5 Containers, 1 Spawn, 10 Extensions (50 容量), Ramparts (1M 最大生命值), Walls, 1 Tower</td>
</tr>
<tr>
<td>4</td>
<td>405,000</td>
<td>Roads, 5 Containers, 1 Spawn, 20 Extensions (50 容量), Ramparts (3M 最大生命值), Walls, 1 Tower, Storage</td>
</tr>
<tr>
<td>5</td>
<td>1,215,000</td>
<td>Roads, 5 Containers, 1 Spawn, 30 Extensions (50 容量), Ramparts (10M 最大生命值), Walls, 2 Towers, Storage, 2 Links</td>
</tr>
<tr>
<td>6</td>
<td>3,645,000</td>
<td>Roads, 5 Containers, 1 Spawn, 40 Extensions (50 容量), Ramparts (30M 最大生命值), Walls, 2 Towers, Storage, 3 Links, Extractor, 3 Labs, Terminal</td>
</tr>
<tr>
<td>7</td>
<td>10,935,000</td>
<td>Roads, 5 Containers, 2 Spawns, 50 Extensions (100 容量), Ramparts (100M 最大生命值), Walls, 3 Towers, Storage, 4 Links, Extractor, 6 Labs, Terminal, Factory</td>
</tr>
<tr>
<td>8</td>
<td>—</td>
<td>Roads, 5 Containers, 3 Spawns, 60 Extensions (200 容量), Ramparts (300M 最大生命值), Walls, 6 Towers, Storage, 6 Links, Extractor, 10 Labs, Terminal, Factory, Observer, Power Spawn, Nuker</td>
</tr>
</tbody>
</table>

## 攻擊控制器

控制器無法被攻擊或毀壞。然而，控制器在沒有受到 [`upgradeController`](/api/#Creep.upgradeController) 的作用下會緩慢降級，比如說 RCL1 的時候 20,000 個游戲 tick 會降一級，具體的降級規則看 [`StructureController`](/api/#StructureController)。當 RCL 等級降為 0 時，該房間控制器即變為中立，其他玩家就可以佔領了。

當然你可以通過 [`attackController`](/api/#Creep.attackController) 影響別人的 RC 降級計時器。

![](/img/controllerDowngrade.png)

## 提升GCL

升級 GCL 需要向控制器中注入能量，GCL 與控制器的級別是同步增長的，即便控制器已經滿級，往控制器中注入能量依舊會使 GCL 上漲。。

一旦 GCL 級別提升就不會再降下來，即使游戲輸到一個房間都不剩了。重新開始游戲時 GCL 仍然還是那麼多，可以讓你領先在起跑線上。

如果一個房間所需的 GCL 比你的高，你仍然可以[保留（reserve）](/api/#Creep.reserveController)它的控制器。此外，保留中立房間的控制器能夠將能源恢復到最大容量。
