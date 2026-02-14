# StructurePortal

<img src="img/portal.png" alt="" align="right" />

一個非玩家建築。立刻將你的 creep 傳送至一個遙遠房間的出口位置。傳送門會在每個區塊的中央房間隨機刷新。</p>

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>穩定時間</strong></td>
        <td>10 天</td>
    </tr>
    <tr>
        <td><strong>老化時間</strong></td>
        <td>30,000 ticks</td>
    </tr>
    </tbody>
</table>

{% page inherited/Structure.md %}


{% api_property destination '<a href="#RoomPosition">RoomPosition</a> | object' %}

如果這是個**通往其他房間** 的傳送門，則該屬性為指向目的地房間出口位置的 `RoomPosition` 對象。

如果這是個**通往其他 shard** 的傳送門，則該屬性為一個包含了 `shard` 和 `room` 字符串屬性的對象。無法確定其具體出口位置，creep 會被隨機傳送到目標房間的任意空閒位置。



{% api_property ticksToDecay 'number' %}



還有多少 tick 就要因老化而失去生命值，當傳送門穩定時其值為 undefined。


