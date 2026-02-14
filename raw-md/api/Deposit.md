# Deposit

<img src="img/deposit.png" alt="" align="right" />

生產商品所需的稀有資源儲備。 可以通過帶有 `WORK` 身體部位的 creep 來收獲。
每次采集操作都會觸發冷卻時間，冷卻時間會隨著時間的流逝而越來越長。

點擊 [本文](/resources.html) 了解更多關於 deposits 的信息。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>冷卻</strong></td> 
        <td>`0.001 * totalHarvested ^ 1.2`<td>
    </tr>
    <tr>
        <td><strong>老化</strong></td>
        <td>50,000 ticks after appearing or last harvest operation</td>
    </tr>
    </tbody>
</table>

<p></p><h2 id="effects" class="api-property api-property--property  "><span class="api-property__name">effects</span><span class="api-property__type">array</span></h2><p></p>
<p>附加的效果，一個包含如下屬性的對象數組：</p>
<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>effect</code></td><td>number</td><td><p>該附加效果的 ID。可以是自然效果 ID 或者 Power ID。</p>
</td>
</tr><tr><td><code>level (可選)</code></td><td>number </td><td><p>該附加效果的 Power 等級。如果效果不是 Power 效果則不存在該屬性。</p>
</td>
</tr><tr><td><code>ticksRemaining</code></td><td>number</td><td><p>多長時間之後會失去這個效果。</p>
</td>
</tr></tbody></table>

<h2 id="pos" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#RoomObject">RoomObject</a></div><span class="api-property__name">pos</span><span class="api-property__type"><a href="#RoomPosition">RoomPosition</a></span></h2>
<p>表示該對象在房間中的坐標的對象。</p>
<h2 id="room" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#RoomObject">RoomObject</a></div><span class="api-property__name">room</span><span class="api-property__type"><a href="#Room">Room</a></span></h2>
<p>Room對象的鏈接。如果對象是標志或工地並且放置在你不可見的房間中，則可能為undefined。</p>


<h2 id="cooldown" class="api-property api-property--property  "><span class="api-property__name">cooldown</span><span class="api-property__type">number</span></h2>


下一次采集前還要冷卻多少 tick。


<h2 id="depositType" class="api-property api-property--property  "><span class="api-property__name">depositType</span><span class="api-property__type">string</span></h2>


deposit 類型, 以下常量之一:

```javascript-content
RESOURCE_MIST
RESOURCE_BIOMASS
RESOURCE_METAL
RESOURCE_SILICON
```

<h2 id="id" class="api-property api-property--property  "><span class="api-property__name">id</span><span class="api-property__type">string</span></h2>

唯一的對象標識符。您可以使用 <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 方法通過其 <code>id</code> 檢索對象實例。 。


<h2 id="lastCooldown" class="api-property api-property--property  "><span class="api-property__name">lastCooldown</span><span class="api-property__type">number</span></h2>


該結構上次采集的冷卻時間。


<h2 id="ticksToDecay" class="api-property api-property--property  "><span class="api-property__name">ticksToDecay</span><span class="api-property__type">number</span></h2>


該結構還有多少 tick 就要因老化而消失。
