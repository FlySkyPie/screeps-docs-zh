# Ruin

<img src="img/ruin.png" alt="" align="right" />

一個被摧毀的建築。該對象允許其他單位在其上行走。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Decay</strong></td>
        <td>500 tick 除了某些情況外</td>
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



<h2 id="destroyTime" class="api-property api-property--property  "><span class="api-property__name">destroyTime</span><span class="api-property__type">number</span></h2>

該建築被摧毀的時間。

<h2 id="id" class="api-property api-property--property  "><span class="api-property__name">id</span><span class="api-property__type">string</span></h2>

一個唯一的對象標識。你可以使用 <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 方法獲取對象實例。

<h2 id="store" class="api-property api-property--property  "><span class="api-property__name">store</span><span class="api-property__type"><a href="#Store">Store</a></span></h2>

一個包含了該建築中所存儲資源的 [`Store`](#Store) 對象。

<h2 id="structure" class="api-property api-property--property  "><span class="api-property__name">structure</span><span class="api-property__type"><a href="#Structure">Structure</a> | <a href="#OwnedStructure">OwnedStructure</a></span></h2>

一個包含了已被摧毀建築基本信息的對象。


<h2 id="ticksToDecay" class="api-property api-property--property  "><span class="api-property__name">ticksToDecay</span><span class="api-property__type">number</span></h2>

該廢墟離老化消失還有多少 tick。



