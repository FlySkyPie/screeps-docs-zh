title: 資源
---

游戲中有 4 種資源：**能源(energy)**，**礦物(minerals)**，**超能(power)**和**商品(commodities)**。資源可以被采集，加工，在市場上交易，由 creeps 攜帶並存儲在建築物中。所有資源類型都有不同的用途，您只有在獲得最基本的資源（能源）的情況下才能開始游戲。

## 能量

<blockquote class="note info"><p><strong>從哪裡獲取:</strong> 絕大多數房間中都有的 <a href="/api/#Source"><code>Source</code></a> 結構. <br>
<strong>怎麼樣獲取:</strong> 派遣一個擁有 <code>WORK</code> 身體部件的 creep 來 <a href="/api/#Creep.harvest"><code>采集(harvest)</code></a> 它。<br>
<strong>用來干什麼:</strong> 孵化 creeps，建造建築。</p>
</blockquote> 

能量是 Screeps 世界中的主要建築材料。你的基地運轉依賴於能量。所以采集更多的能量對於每個領地都至關重要。你不僅可以從佔領的房間裡采集能量，同樣可以從其他房間裡采集能量來提高收入。

## 礦物

<blockquote class="note info"><p><strong>從哪裡獲取:</strong> 絕大多數房間中都有的 <a href="/api/#Mineral"><code>Mineral</code></a> 結構。 <br>
<strong>怎麼樣獲取:</strong> 建造一個 <a href="/api/#StructureExtractor"><code>StructureExtractor</code></a>, 然後派遣一個擁有 <code>WORK</code> 身體部件的 creep 來 <a href="/api/#Creep.harvest"><code>采集(harvest)</code></a> 它。<br>
<strong>用來干什麼:</strong> 強化 creep 的能力, 或者生產貿易商品。</p>
</blockquote>

通過開采及使用礦物，玩家可顯著的加速經濟發展及提高 creep 的工作效率。

礦物利用可分為三個步驟：

*   **開采基本元素**
*   **合成礦物**
*   **強化 Creep**

### 基本元素開采

下圖為游戲中所有的七種基本元素

![](img/minerals-01.png)
 
單個房間只會有一個元素礦產，所以若想獲得多種礦產，玩家則得控制多個房間或與其他玩家建立貿易關系。

<img src="img/mining_minerals.png" align="right">右圖即為礦的示意圖（灰色圓形），其上的字母代表了其種類。礦上需要建造[Extractor（礦機）](/api/#StructureExtractor)（綠色虛線圓環，解鎖於房間控制等級 6 級）方可進行開采。礦機建造後，玩家的 Creep 便可像采集能量源般的對礦用 [`harvest`（采集）](/api/#Creep.harvest)並采取相應的元素。

### 礦物合成

基本元素本身無法被使用，得按照指定的合成路線被[**Lab（實驗室）**](/api/#StructureLab)轉化為化合物才能得以利用。

![](img/minerals-02.png)

完成一個反應需要三個 lab ：兩個提供底物，一個進行反應及收集產物，lab 的間距不得超過兩格。同一 lab 不可混合放置多種化合物，但卻能同時為多個反應提供底物。

<img src="img/2016-03-09_10-32-33.gif" align="right">

    var labs = room.find(FIND_MY_STRUCTURES, 
        {filter: {structureType: STRUCTURE_LAB}});

    labs[0].runReaction(labs[1], labs[2]);

    // 下一 tick ...

    console.log(labs[0].mineralType) // -> OH
    console.log(labs[1].mineralType) // -> O
    console.log(labs[2].mineralType) // -> H

### Creep 強化

lab 除了能跑反應，還可用其存著的化合物來強化 Creep 的部件。

玩家可用 [`StructureLab.boostCreep`](/api/#StructureLab.boostCreep) 來強化 Creep 的[部件](creeps.html)，各化合物的強化效果見下表。一個被強化過的部件能頂多個未被強化的部件。要想完全強化一個 creep ，玩家得逐一強化該 creep 的部件。 

強化一個部件需要 30 單位的化合物及 20 單位的能量，且一個部件只能被一種化合物強化。

<style>
.minerals,
.commodities {
    margin-top: 0 !important;
    border: 0 !important;
    width: 100%;
}
.minerals td,
.commodities td {
    border-top: 1px solid #333;
    color: #bbb;
    background-color: #22242b;
    font-size: 13px;
}
@media (min-width: 1280px) {
    .minerals td:first-child {
        white-space: nowrap;
    }
}
.minerals td:nth-child(2) {
    white-space: nowrap;
}
.minerals td:nth-child(3) {
    text-align: center;
}
.minerals td:nth-child(4) {
    min-width: 87px;
}
.minerals code {
    background-color: #333;
    color: #eee;
    word-break: break-all;
}
.minerals img,
.commodities img {
    margin-right: 5px;
    vertical-align: middle;
} 
.minerals__divider th {
    background-color: #333;
    color: #ffe099;
    text-align: center;
    font-size: 13px;
}
.minerals__head th,
.commodities__head th{
    background-color: #22242b;
    color: #ccc;
    font-weight: normal !important;
    font-size: 11px;
}

.commodities em {
    font-style: normal;
    color: #eaeaea;
}
.commodities td {
    padding: 10px 15px !important;
}
</style>

<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>礦物化合物</span>
<em>(點擊展開)</em>
</div>

<div class="collapsible-table__content">

<table class="minerals">
<colgroup>
<col></col>
<col></col>
<col></col>
<col></col>
</colgroup>
<tbody>
<tr class=minerals__head>
<th>名稱</th>
<th>化學式</th>
<th>合成時間</th>
<th>影響部件</th>
<th>效果</th>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">基本元素</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/OH.png)hydroxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/H.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>20</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZK.png)zynthium keanite</td>
<td>![](//static.screeps.com/upload/mineral-icons/Z.png) + ![](//static.screeps.com/upload/mineral-icons/K.png)</td>
<td>5</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UL.png)utrium lemergite</td>
<td>![](//static.screeps.com/upload/mineral-icons/U.png) + ![](//static.screeps.com/upload/mineral-icons/L.png)</td>
<td>5</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/G.png)ghodium</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZK.png) + ![](//static.screeps.com/upload/mineral-icons/UL.png)</td>
<td>5</td>
<td>—</td>
<td>—</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">一級化合物</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UH.png)utrium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/U.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`ATTACK`</td>
<td>+100% `attack` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UO.png)utrium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/U.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`WORK`</td>
<td>+200% `harvest` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KH.png)keanium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/K.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`CARRY`</td>
<td>+50 容量</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KO.png)keanium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/K.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`RANGED_ATTACK`</td>
<td>+100% `rangedAttack` 和 `rangedMassAttack` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LH.png)lemergium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/L.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>15</td>
<td>`WORK`</td>
<td>+50% `repair` 和 `build` 效率但不增加其能量消耗</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LO.png)lemergium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/L.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`HEAL`</td>
<td>+100% `heal` 和 `rangedHeal` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZH.png)zynthium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/Z.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>20</td>
<td>`WORK`</td>
<td>+100% `dismantle` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZO.png)zynthium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/Z.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`MOVE`</td>
<td>+100% [fatigue(疲勞值)](creeps.html#移動力) 減低速度</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GH.png)ghodium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/G.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`WORK`</td>
<td>+50% `upgradeController` 效率但不增加其能量消耗</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GO.png)ghodium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/G.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`TOUGH`</td>
<td>30% 傷害減免</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">二級化合物</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UH2O.png)utrium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/UH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`ATTACK`</td>
<td>+200% `attack` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UHO2.png)utrium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/UO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`WORK`</td>
<td>+400% `harvest` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KH2O.png)keanium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/KH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`CARRY`</td>
<td>+100 容量</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KHO2.png)keanium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/KO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`RANGED_ATTACK`</td>
<td>+200% `rangedAttack` 和 `rangedMassAttack` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LH2O.png)lemergium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/LH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>10</td>
<td>`WORK`</td>
<td>+80% `repair` 和 `build` 效率但不增加其能量消耗</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LHO2.png)lemergium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/LO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`HEAL`</td>
<td>+200% `heal` 和 `rangedHeal` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZH2O.png)zynthium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>40</td>
<td>`WORK`</td>
<td>+200% `dismantle` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZHO2.png)zynthium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`MOVE`</td>
<td>+200% [fatigue(疲勞值)](creeps.html#移動力) 減低速度</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GH2O.png)ghodium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/GH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>15</td>
<td>`WORK`</td>
<td>+80% `upgradeController` 效率但不增加其能量消耗</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GHO2.png)ghodium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/GO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>30</td>
<td>`TOUGH`</td>
<td>50% 傷害減免</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">三級化合物</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XUH2O.png)catalyzed utrium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/UH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`ATTACK`</td>
<td>+300% `attack` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XUHO2.png)catalyzed utrium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/UHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`WORK`</td>
<td>+600% `harvest` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XKH2O.png)catalyzed keanium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/KH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`CARRY`</td>
<td>+150 容量</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XKHO2.png)catalyzed keanium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/KHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`RANGED_ATTACK`</td>
<td>+300% `rangedAttack` 和 `rangedMassAttack` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XLH2O.png)catalyzed lemergium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/LH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>65</td>
<td>`WORK`</td>
<td>+100% `repair` 和 `build` 效率但不增加其能量消耗</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XLHO2.png)catalyzed lemergium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/LHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`HEAL`</td>
<td>+300% `heal` and `rangedHeal` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XZH2O.png)catalyzed zynthium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>160</td>
<td>`WORK`</td>
<td>+300% `dismantle` 效率</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XZHO2.png)catalyzed zynthium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`MOVE`</td>
<td>+300% [fatigue(疲勞值)](creeps.html#移動力) 減低速度</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XGH2O.png)catalyzed ghodium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/GH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>80</td>
<td>`WORK`</td>
<td>+100% `upgradeController` 效率但不增加其能量消耗</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XGHO2.png)catalyzed ghodium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/GHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>150</td>
<td>`TOUGH`</td>
<td>70% 傷害減免</td>
</tr>
</tbody>
</table>
</div>
</div>


**譯者注：**元素、化合物名稱的各單詞取首及為其符號簡寫，中文譯名見下表。


<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>礦物中譯名</span>
<em>(點擊展開)</em>
</div>

<div class="collapsible-table__content">

<table class="minerals">
<colgroup>
<col></col>
<col></col>
</colgroup>
<tbody>
<tr class=minerals__head>
<th>原名</th>
<th>譯名</th>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">基本元素</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/H.png) HYDROGEN</td>
<td>氫</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/O.png) OXYGEN</td>
<td>氧</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/U.png) UTRIUM</td>
<td>奧純</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/K.png) KEANIUM</td>
<td>克安</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/L.png) LEMERGIUM</td>
<td>靈摩</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/Z.png) ZYNTHIUM</td>
<td>仁笛</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/X.png) CATALYST</td>
<td>萃托</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/G.png) GHODIUM</td>
<td>寇丁</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">一級化合物</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZK.png) zynthium keanite</td>
<td>仁克</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UL.png) utrium lemergite</td>
<td>奧靈</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/OH.png) hydroxide</td>
<td>氫氧</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UH.png) utrium hydride</td>
<td>氫化奧純</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UO.png) utrium oxide</td>
<td>氧化奧純</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">二級化合物</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UH2O.png) utrium acid</td>
<td>奧純酸</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UHO2.png) utrium alkalide</td>
<td>奧純鹼</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">三級化合物</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XUH2O.png) catalyzed utrium acid</td>
<td>萃奧純酸</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XUHO2.png) catalyzed utrium alkalide</td>
<td>萃奧純鹼</td>
</tr>
</tbody>
</table>
</div>
</div>


## 商品

<blockquote class="note info"><p><strong>從哪裡獲取:</strong> 高速公路房間中的 <a href="/api/#StructurePowerBank"><code>Deposit</code></a> 結構. <br>
<strong>怎麼樣獲取:</strong> 派遣一個包含 <code>WORK</code> 身體部件的 creep 來 <a href="/api/#Creep.harvest"><code>采集</code></a> 它。<br>
<strong>用來干什麼:</strong> 生產交易商品來賺取積分 (credits)。</p>
</blockquote> 

商品是 NPC 市場交易者最感興趣的資源。這些資源除了被出售和賺取 credits 外沒有其他任何作用。 生產高級商品是游戲中最賺錢的業務。

### 采集

您可以從「高速公路」房間中的沉積物中提取原始資源，「高速公路」是指地圖上不同區域之間的房間。有4種原始資源：金屬(Metal)，硅(Silicon)，生物質(Biomass)，迷霧(Mist)。 它們在世界地圖上並不是均勻分布的：每個地圖象限（西北，東北，西南，東南）一種資源類型。

![](img/commodities.png)

與礦物不同，這些沉積物(deposits)在采集(harvest)時會耗盡：采集的數量越多，其冷卻時間也就越長。當您停止采集一段時間後，沉積物將會消失並重新出現在附近的其他地方。此外，如果某區塊的沉積物都被消耗到一定水平之下，則會出現新的沉積物。

### 基礎商品

出售原始資源可能不是很賺錢。這就是為什麼最好建造一個 [**工廠(Factory)**](/api/#StructureFactory) (在 RCL 7 時解鎖)，以便 [生產(`produce`)](/api/#StructureFactory.produce) 更復雜的商品的原因。

剛剛建立的工廠是沒有等級的，這意味著它只能從各種現有資源中生產幾種基本商品（下表中的「每一級」商品）。它們還可以用於以「壓縮」任何資源。

<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>壓縮商品</span>
<em>(點擊展開)</em>
![](img/commodities1.png)
</div>

<div class="collapsible-table__content"> 
<table class="commodities">
<tbody>
<tr class=commodities__head>
<th>產品</th><th>工廠等級</th><th>材料</th><th>冷卻</th>
</tr> 
<tr><td><img src="//static.screeps.com/upload/mineral-icons/utrium_bar.png">Utrium bar&nbsp;&times;&nbsp;<em>100</em></td><td>全等級通用</td><td>![](//static.screeps.com/upload/mineral-icons/U.png)Utrium&nbsp;&times;&nbsp;<em>500</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/lemergium_bar.png">Lemergium bar&nbsp;&times;&nbsp;<em>100</em></td><td>全等級通用</td><td>![](//static.screeps.com/upload/mineral-icons/L.png)Lemergium&nbsp;&times;&nbsp;<em>500</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/zynthium_bar.png">Zynthium bar&nbsp;&times;&nbsp;<em>100</em></td><td>全等級通用</td><td>![](//static.screeps.com/upload/mineral-icons/Z.png)Zynthium&nbsp;&times;&nbsp;<em>500</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/keanium_bar.png">Keanium bar&nbsp;&times;&nbsp;<em>100</em></td><td>全等級通用</td><td>![](//static.screeps.com/upload/mineral-icons/K.png)Keanium&nbsp;&times;&nbsp;<em>500</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/ghodium_melt.png">Ghodium melt&nbsp;&times;&nbsp;<em>100</em></td><td>全等級通用</td><td>![](//static.screeps.com/upload/mineral-icons/G.png)Ghodium&nbsp;&times;&nbsp;<em>500</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/oxidant.png">Oxidant&nbsp;&times;&nbsp;<em>100</em></td><td>全等級通用</td><td>![](//static.screeps.com/upload/mineral-icons/O.png)Oxygen&nbsp;&times;&nbsp;<em>500</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/reductant.png">Reductant&nbsp;&times;&nbsp;<em>100</em></td><td>全等級通用</td><td>![](//static.screeps.com/upload/mineral-icons/H.png)Hydrogen&nbsp;&times;&nbsp;<em>500</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/purifier.png">Purifier&nbsp;&times;&nbsp;<em>100</em></td><td>全等級通用</td><td>![](//static.screeps.com/upload/mineral-icons/X.png)Catalyst&nbsp;&times;&nbsp;<em>500</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/battery.png">Battery&nbsp;&times;&nbsp;<em>50</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>600</em></td><td>10&nbsp;ticks</td></tr>
</tbody>
</table>

</div>
</div>
 
您也可以在需要時解壓它們來恢復原始資源。
 
 <div class="collapsible-table">
 
 <div class="collapsible-table__header">
 <i class="fa fa-plus-square"></i>
 <span>解壓商品</span>
 <em>(點擊展開)</em>
 ![](img/commodities2.png)
 </div>
 
 <div class="collapsible-table__content">
 <table class="commodities">
 <tr class="commodities__head"><th>產品</th><th>工廠等級</th><th>材料</th><th>冷卻</th></tr> 
 <tr><td>![](//static.screeps.com/upload/mineral-icons/U.png)Utrium&nbsp;&times;&nbsp;<em>500</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/utrium_bar.png">Utrium bar&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/L.png)Lemergium&nbsp;&times;&nbsp;<em>500</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/lemergium_bar.png">Lemergium bar&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/Z.png)Zynthium&nbsp;&times;&nbsp;<em>500</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/zynthium_bar.png">Zynthium bar&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/K.png)Keanium&nbsp;&times;&nbsp;<em>500</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/keanium_bar.png">Keanium bar&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/G.png)Ghodium&nbsp;&times;&nbsp;<em>500</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/ghodium_melt.png">Ghodium melt&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/O.png)Oxygen&nbsp;&times;&nbsp;<em>500</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/oxidant.png">Oxidant&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/H.png)Hydrogen&nbsp;&times;&nbsp;<em>500</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/reductant.png">Reductant&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>![](//static.screeps.com/upload/mineral-icons/X.png)Catalyst&nbsp;&times;&nbsp;<em>500</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/purifier.png">Purifier&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>500</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/battery.png">Battery&nbsp;&times;&nbsp;<em>50</em></td><td>10&nbsp;ticks</td></tr>
 </table> 

 </div>
 </div>

當您獲得區域性沉積資源後，您就可以開始使用他們來生產其他基本商品。
 
<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>基本區域性商品</span>
<em>(點擊展開)</em>
![](img/commodities3.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>產品</th><th>工廠等級</th><th>材料</th><th>冷卻</th></tr> 
<tr><td><img src="//static.screeps.com/upload/mineral-icons/wire.png">Wire&nbsp;&times;&nbsp;<em>20</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/utrium_bar.png">Utrium bar&nbsp;&times;&nbsp;<em>20</em><br><img src="//static.screeps.com/upload/mineral-icons/silicon.png">Silicon&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/cell.png">Cell&nbsp;&times;&nbsp;<em>20</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/lemergium_bar.png">Lemergium bar&nbsp;&times;&nbsp;<em>20</em><br><img src="//static.screeps.com/upload/mineral-icons/biomass.png">Biomass&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;ticks</td>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/alloy.png">Alloy&nbsp;&times;&nbsp;<em>20</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/zynthium_bar.png">Zynthium bar&nbsp;&times;&nbsp;<em>20</em><br><img src="//static.screeps.com/upload/mineral-icons/metal.png">Metal&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/condensate.png">Condensate&nbsp;&times;&nbsp;<em>20</em></td><td>全等級通用</td><td><img src="//static.screeps.com/upload/mineral-icons/keanium_bar.png">Keanium bar&nbsp;&times;&nbsp;<em>20</em><br><img src="//static.screeps.com/upload/mineral-icons/mist.png">Mist&nbsp;&times;&nbsp;<em>100</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;ticks</td></tr>
</table>
</div>
</div>

上述的所有商品都可以從任何等級的工廠中生產。

### 高級商品
  
只有 [操作員(Operators)](power.html#Power-Creeps) 和它的 `OPERATE_FACTORY` 能力才能使工廠全功率運作。
當一個操作員對一個沒有等級的工廠使用了他的能力後，工廠的等級就會被鎖定到和能力相同的等級，並且超能效果會停留在工廠上。
該能力會使得工廠可以生產對應等級的商品。
即工廠只能生產該等級的商品或者」全等級通用「商品。
一旦進行了設置，該工廠的等級將無法被修改。
當效果持續時間結束後，工廠將不再工作，但是其等級依舊會保留（依舊可以生產」全等級通用「商品）。
此時您就需要使用操作員使用相同等級的能力來重新激活它。
注意，工廠的等級無法被其他等級的超能修改，只有重新建造才能改變工廠的等級。
  
每一個高等級的商品都需要其對應產業鏈上的低等級產品才能進行生產。游戲裡一共有四條產業鏈，每種類型的新資源對應其中的一條：
**機械(Mechanical)** (消耗金屬), **電子(Electronical)** (消耗硅), **生物(Biological)** (消耗生物質), **奧秘(Mystical)** (消耗迷霧), 以及常規商品。 
這些貨物是市場上最值錢。

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>常規高等商品</span>
<em>(點擊展開)</em>
![](img/commodities4.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>產品</th><th>工廠等級</th><th>材料</th><th>冷卻</th></tr> 
<tr><td><img src="//static.screeps.com/upload/mineral-icons/composite.png">Composite&nbsp;&times;&nbsp;<em>20</em></td><td>Lvl 1</td><td><img src="//static.screeps.com/upload/mineral-icons/utrium_bar.png">Utrium bar&nbsp;&times;&nbsp;<em>20</em><br><img src="//static.screeps.com/upload/mineral-icons/zynthium_bar.png">Zynthium bar&nbsp;&times;&nbsp;<em>20</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>20</em></td><td>50&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/crystal.png">Crystal&nbsp;&times;&nbsp;<em>6</em></td><td>Lvl 2</td><td><img src="//static.screeps.com/upload/mineral-icons/lemergium_bar.png">Lemergium bar&nbsp;&times;&nbsp;<em>6</em><br><img src="//static.screeps.com/upload/mineral-icons/keanium_bar.png">Keanium bar&nbsp;&times;&nbsp;<em>6</em><br><img src="//static.screeps.com/upload/mineral-icons/purifier.png">Purifier&nbsp;&times;&nbsp;<em>6</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>45</em></td><td>21&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/liquid.png">Liquid&nbsp;&times;&nbsp;<em>12</em></td><td>Lvl 3</td><td><img src="//static.screeps.com/upload/mineral-icons/oxidant.png">Oxidant&nbsp;&times;&nbsp;<em>12</em><br><img src="//static.screeps.com/upload/mineral-icons/reductant.png">Reductant&nbsp;&times;&nbsp;<em>12</em><br><img src="//static.screeps.com/upload/mineral-icons/ghodium_melt.png">Ghodium melt&nbsp;&times;&nbsp;<em>12</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>90</em></td><td>60&nbsp;ticks</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>機械 (Mechanical) 產業鏈</span>
<em>(點擊展開)</em>
![](img/commodities5.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>產品</th><th>工廠等級</th><th>材料</th><th>冷卻</th></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/tube.png">Tube&nbsp;&times;&nbsp;<em>2</em></td><td>Lvl 1</td><td><img src="//static.screeps.com/upload/mineral-icons/alloy.png">Alloy&nbsp;&times;&nbsp;<em>40</em><br><img src="//static.screeps.com/upload/mineral-icons/zynthium_bar.png">Zynthium bar&nbsp;&times;&nbsp;<em>16</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>8</em></td><td>45&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/fixtures.png">Fixtures</td><td>Lvl 2</td><td><img src="//static.screeps.com/upload/mineral-icons/composite.png">Composite&nbsp;&times;&nbsp;<em>20</em><br><img src="//static.screeps.com/upload/mineral-icons/alloy.png">Alloy&nbsp;&times;&nbsp;<em>41</em><br><img src="//static.screeps.com/upload/mineral-icons/oxidant.png">Oxidant&nbsp;&times;&nbsp;<em>161</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>8</em></td><td>115&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/frame.png">Frame</td><td>Lvl 3</td><td><img src="//static.screeps.com/upload/mineral-icons/fixtures.png">Fixtures&nbsp;&times;&nbsp;<em>2</em><br><img src="//static.screeps.com/upload/mineral-icons/tube.png">Tube&nbsp;&times;&nbsp;<em>4</em><br><img src="//static.screeps.com/upload/mineral-icons/reductant.png">Reductant&nbsp;&times;&nbsp;<em>330</em><br><img src="//static.screeps.com/upload/mineral-icons/zynthium_bar.png">Zynthium bar&nbsp;&times;&nbsp;<em>31</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>16</em></td><td>125&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/hydraulics.png">Hydraulics</td><td>Lvl 4</td><td><img src="//static.screeps.com/upload/mineral-icons/liquid.png">Liquid&nbsp;&times;&nbsp;<em>150</em><br><img src="//static.screeps.com/upload/mineral-icons/fixtures.png">Fixtures&nbsp;&times;&nbsp;<em>3</em><br><img src="//static.screeps.com/upload/mineral-icons/tube.png">Tube&nbsp;&times;&nbsp;<em>15</em><br><img src="//static.screeps.com/upload/mineral-icons/purifier.png">Purifier&nbsp;&times;&nbsp;<em>208</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/machine.png">Machine</td><td>Lvl 5</td><td><img src="//static.screeps.com/upload/mineral-icons/hydraulics.png">Hydraulics&nbsp;&times;&nbsp;<em>1</em><br><img src="//static.screeps.com/upload/mineral-icons/frame.png">Frame&nbsp;&times;&nbsp;<em>2</em><br><img src="//static.screeps.com/upload/mineral-icons/fixtures.png">Fixtures&nbsp;&times;&nbsp;<em>3</em><br><img src="//static.screeps.com/upload/mineral-icons/tube.png">Tube&nbsp;&times;&nbsp;<em>12</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;ticks</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>生物 (Biological) 產業鏈</span>
<em>(點擊展開)</em>
![](img/commodities6.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>產品</th><th>工廠等級</th><th>材料</th><th>冷卻</th></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/phlegm.png">Phlegm&nbsp;&times;&nbsp;<em>2</em></td><td>Lvl 1</td><td><img src="//static.screeps.com/upload/mineral-icons/cell.png">Cell&nbsp;&times;&nbsp;<em>20</em><br><img src="//static.screeps.com/upload/mineral-icons/oxidant.png">Oxidant&nbsp;&times;&nbsp;<em>36</em><br><img src="//static.screeps.com/upload/mineral-icons/lemergium_bar.png">Lemergium bar&nbsp;&times;&nbsp;<em>16</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>8</em></td><td>35&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/tissue.png">Tissue&nbsp;&times;&nbsp;<em>2</em></td><td>Lvl 2</td><td><img src="//static.screeps.com/upload/mineral-icons/phlegm.png">Phlegm&nbsp;&times;&nbsp;<em>10</em><br><img src="//static.screeps.com/upload/mineral-icons/cell.png">Cell&nbsp;&times;&nbsp;<em>10</em><br><img src="//static.screeps.com/upload/mineral-icons/reductant.png">Reductant&nbsp;&times;&nbsp;<em>110</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>16</em></td><td>164&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/muscle.png">Muscle</td><td>Lvl 3</td><td><img src="//static.screeps.com/upload/mineral-icons/tissue.png">Tissue&nbsp;&times;&nbsp;<em>3</em><br><img src="//static.screeps.com/upload/mineral-icons/phlegm.png">Phlegm&nbsp;&times;&nbsp;<em>3</em><br><img src="//static.screeps.com/upload/mineral-icons/zynthium_bar.png">Zynthium bar&nbsp;&times;&nbsp;<em>50</em><br><img src="//static.screeps.com/upload/mineral-icons/reductant.png">Reductant&nbsp;&times;&nbsp;<em>50</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>16</em></td><td>250&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/organoid.png">Organoid</td><td>Lvl 4</td><td><img src="//static.screeps.com/upload/mineral-icons/muscle.png">Muscle&nbsp;&times;&nbsp;<em>1</em><br><img src="//static.screeps.com/upload/mineral-icons/tissue.png">Tissue&nbsp;&times;&nbsp;<em>5</em><br><img src="//static.screeps.com/upload/mineral-icons/purifier.png">Purifier&nbsp;&times;&nbsp;<em>208</em><br><img src="//static.screeps.com/upload/mineral-icons/oxidant.png">Oxidant&nbsp;&times;&nbsp;<em>256</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/organism.png">Organism</td><td>Lvl 5</td><td><img src="//static.screeps.com/upload/mineral-icons/organoid.png">Organoid&nbsp;&times;&nbsp;<em>1</em><br><img src="//static.screeps.com/upload/mineral-icons/liquid.png">Liquid&nbsp;&times;&nbsp;<em>150</em><br><img src="//static.screeps.com/upload/mineral-icons/tissue.png">Tissue&nbsp;&times;&nbsp;<em>6</em><br><img src="//static.screeps.com/upload/mineral-icons/cell.png">Cell&nbsp;&times;&nbsp;<em>310</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;ticks</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>電子 (Electronical) 產業鏈</span>
<em>(點擊展開)</em>
![](img/commodities7.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>產品</th><th>工廠等級</th><th>材料</th><th>冷卻</th></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/switch.png">Switch&nbsp;&times;&nbsp;<em>5</em></td><td>Lvl 1</td><td><img src="//static.screeps.com/upload/mineral-icons/wire.png">Wire&nbsp;&times;&nbsp;<em>40</em><br><img src="//static.screeps.com/upload/mineral-icons/oxidant.png">Oxidant&nbsp;&times;&nbsp;<em>95</em><br><img src="//static.screeps.com/upload/mineral-icons/utrium_bar.png">Utrium bar&nbsp;&times;&nbsp;<em>35</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>20</em></td><td>70&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/transistor.png">Transistor</td><td>Lvl 2</td><td><img src="//static.screeps.com/upload/mineral-icons/switch.png">Switch&nbsp;&times;&nbsp;<em>4</em><br><img src="//static.screeps.com/upload/mineral-icons/wire.png">Wire&nbsp;&times;&nbsp;<em>15</em><br><img src="//static.screeps.com/upload/mineral-icons/reductant.png">Reductant&nbsp;&times;&nbsp;<em>85</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>8</em></td><td>59&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/microchip.png">Microchip</td><td>Lvl 3</td><td><img src="//static.screeps.com/upload/mineral-icons/transistor.png">Transistor&nbsp;&times;&nbsp;<em>2</em><br><img src="//static.screeps.com/upload/mineral-icons/composite.png">Composite&nbsp;&times;&nbsp;<em>50</em><br><img src="//static.screeps.com/upload/mineral-icons/wire.png">Wire&nbsp;&times;&nbsp;<em>117</em><br><img src="//static.screeps.com/upload/mineral-icons/purifier.png">Purifier&nbsp;&times;&nbsp;<em>25</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>16</em></td><td>250&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/circuit.png">Circuit</td><td>Lvl 4</td><td><img src="//static.screeps.com/upload/mineral-icons/microchip.png">Microchip&nbsp;&times;&nbsp;<em>1</em><br><img src="//static.screeps.com/upload/mineral-icons/transistor.png">Transistor&nbsp;&times;&nbsp;<em>5</em><br><img src="//static.screeps.com/upload/mineral-icons/switch.png">Switch&nbsp;&times;&nbsp;<em>4</em><br><img src="//static.screeps.com/upload/mineral-icons/oxidant.png">Oxidant&nbsp;&times;&nbsp;<em>115</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/device.png">Device</td><td>Lvl 5</td><td><img src="//static.screeps.com/upload/mineral-icons/circuit.png">Circuit&nbsp;&times;&nbsp;<em>1</em><br><img src="//static.screeps.com/upload/mineral-icons/microchip.png">Microchip&nbsp;&times;&nbsp;<em>3</em><br><img src="//static.screeps.com/upload/mineral-icons/crystal.png">Crystal&nbsp;&times;&nbsp;<em>110</em><br><img src="//static.screeps.com/upload/mineral-icons/ghodium_melt.png">Ghodium melt&nbsp;&times;&nbsp;<em>150</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;ticks</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>奧秘 (Mystical) 產業鏈</span>
<em>(點擊展開)</em>
![](img/commodities8.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>產品</th><th>工廠等級</th><th>材料</th><th>冷卻</th></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/concentrate.png">Concentrate&nbsp;&times;&nbsp;<em>3</em></td><td>Lvl 1</td><td><img src="//static.screeps.com/upload/mineral-icons/condensate.png">Condensate&nbsp;&times;&nbsp;<em>30</em><br><img src="//static.screeps.com/upload/mineral-icons/keanium_bar.png">Keanium bar&nbsp;&times;&nbsp;<em>15</em><br><img src="//static.screeps.com/upload/mineral-icons/reductant.png">Reductant&nbsp;&times;&nbsp;<em>54</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>12</em></td><td>41&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/extract.png">Extract&nbsp;&times;&nbsp;<em>2</em></td><td>Lvl 2</td><td><img src="//static.screeps.com/upload/mineral-icons/concentrate.png">Concentrate&nbsp;&times;&nbsp;<em>10</em><br><img src="//static.screeps.com/upload/mineral-icons/condensate.png">Condensate&nbsp;&times;&nbsp;<em>30</em><br><img src="//static.screeps.com/upload/mineral-icons/oxidant.png">Oxidant&nbsp;&times;&nbsp;<em>60</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>16</em></td><td>128&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/spirit.png">Spirit</td><td>Lvl 3</td><td><img src="//static.screeps.com/upload/mineral-icons/extract.png">Extract&nbsp;&times;&nbsp;<em>2</em><br><img src="//static.screeps.com/upload/mineral-icons/concentrate.png">Concentrate&nbsp;&times;&nbsp;<em>6</em><br><img src="//static.screeps.com/upload/mineral-icons/reductant.png">Reductant&nbsp;&times;&nbsp;<em>90</em><br><img src="//static.screeps.com/upload/mineral-icons/purifier.png">Purifier&nbsp;&times;&nbsp;<em>20</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>16</em></td><td>200&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/emanation.png">Emanation</td><td>Lvl 4</td><td><img src="//static.screeps.com/upload/mineral-icons/spirit.png">Spirit&nbsp;&times;&nbsp;<em>2</em><br><img src="//static.screeps.com/upload/mineral-icons/extract.png">Extract&nbsp;&times;&nbsp;<em>2</em><br><img src="//static.screeps.com/upload/mineral-icons/concentrate.png">Concentrate&nbsp;&times;&nbsp;<em>3</em><br><img src="//static.screeps.com/upload/mineral-icons/keanium_bar.png">Keanium bar&nbsp;&times;&nbsp;<em>112</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;ticks</td></tr>
<tr><td><img src="//static.screeps.com/upload/mineral-icons/essence.png">Essence</td><td>Lvl 5</td><td><img src="//static.screeps.com/upload/mineral-icons/emanation.png">Emanation&nbsp;&times;&nbsp;<em>1</em><br><img src="//static.screeps.com/upload/mineral-icons/spirit.png">Spirit&nbsp;&times;&nbsp;<em>3</em><br><img src="//static.screeps.com/upload/mineral-icons/crystal.png">Crystal&nbsp;&times;&nbsp;<em>110</em><br><img src="//static.screeps.com/upload/mineral-icons/ghodium_melt.png">Ghodium melt&nbsp;&times;&nbsp;<em>150</em><br><img src="//static.screeps.com/upload/mineral-icons/energy.png">Energy&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;ticks</td></tr>
</table>
</div>
</div>


## 超能

<blockquote class="note info"><p><strong>從哪裡獲取:</strong> &quot;高速公路&quot;房間中的 <a href="/api/#StructurePowerBank"><code>StructurePowerBank</code></a> 建築. <br>
<strong>怎麼樣獲取:</strong> 摧毀該結構並搜刮掉落的資源<br>
<strong>用來干什麼:</strong> 創造超能 creep。</p>
</blockquote> 

查看該文章來了解更多信息: [超能](power.html).