# StructureInvaderCore

<img src="img/invaderCore.png" alt="" align="right" />

該 NPC 建築是 NPC 要塞的控制中心，並且也統治著本區塊中的所有入侵者。它會孵化要塞中的 NPC 守衛，重新裝填 tower 以及修復建築。
當它存在的時候，本區塊中的所有房間都將會生成入侵者。它其中也儲藏著一些有價值的資源，當您摧毀該建築時，就可以從它的廢墟（ruin）中搜刮這些資源。

一個入侵者核心 (Invader Core) 包含兩個生命周期階段：部署階段和活動階段。當它剛剛出現在本區塊的某個隨機房間中時，會包含一個 `ticksToDeploy` 屬性，
周圍在其周圍的開放 rampart，並且也不會執行任何操作。在該階段中，它將無法被攻擊 (效果 `EFFECT_INVULNERABILITY` 生效)。當 `ticksToDeploy` 計時器結束的時候，它將解除無法被攻擊的狀態，並會在周圍生成建築和孵化 creep。與此同時，它將獲得 `EFFECT_COLLAPSE_TIMER` 效果，在該計時器結束時，該要塞將會被移除。

一個活動的入侵者核心會在其相鄰的中立房間中生成等級為 0 的小型入侵者核心。這些較小的核心會出現在房間控制器的附近，並且只會攻擊（attack）和預定（reserve）房間控制器。一個入侵者核心一生中最多只能產生 42 個小型核心。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>生命值</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td><strong>部署時間</strong></td>
        <td>5,000 ticks</td>
    </tr>
    <tr>
        <td><strong>活躍時間</strong></td>
        <td>75,000 tick 以及 10% 的隨機浮動</td>
    </tr>
    <tr>
        <td><strong>小型核心生成間隔</strong></td>
        <td>
            <b>要塞等級 1</b>: 4000 ticks<br>
            <b>要塞等級 2</b>: 3500 ticks<br>
            <b>要塞等級 3</b>: 3000 ticks<br>
            <b>要塞等級 4</b>: 2500 ticks<br>
            <b>要塞等級 5</b>: 2000 ticks<br>
        </td>
    </tr>
    
    
    </tbody>
</table>

{% page inherited/OwnedStructure.md %}


{% api_property level 'number' %}
                                                                
此要塞的等級。該等級也決定了戰利品的數量和質量。

{% api_property ticksToDeploy 'number' %}
                                                                                                                
部署階段的計時器，在要塞尚未部署完成時顯示，否則為 undefined。

{% api_property spawning '<a href="#StructureSpawn-Spawning">StructureSpawn.Spawning</a>' %}

如果該核心正在孵化一個新的 creep，該屬性將會包含一個 [`StructureSpawn.Spawning`](#StructureSpawn-Spawning) 對象，否則將為 null。
