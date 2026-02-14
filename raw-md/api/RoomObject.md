# RoomObject

房間中所有具有坐標的對象。幾乎所有的游戲對象原型都是從`RoomObject`派生出來的。

<h2 id="effects" class="api-property api-property--property  "><span class="api-property__name">effects</span><span class="api-property__type">array</span></h2>
附加的效果，一個對象數組包含如下屬性：

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>power</code></td><td>number</td><td><p>被應用的效果id。可以是自然效果或者超能效果。</p>
</td>
<tr><td><code>level</code></td><td>number</td><td><p>被應用的效果等級。如果不是超能效果的話則不存在。</p>
</td>
<tr><td><code>ticksRemaining</code></td><td>number</td><td><p>多長時間之後會失去這個效果。</p>
</td>
</tbody></table>


<h2 id="pos" class="api-property api-property--property  "><span class="api-property__name">pos</span><span class="api-property__type"><a href="#RoomPosition">RoomPosition</a></span></h2>
 


表示該對象在房間中的坐標的對象。



<h2 id="room" class="api-property api-property--property  "><span class="api-property__name">room</span><span class="api-property__type"><a href="#Room">Room</a></span></h2>



Room 對象的鏈接。如果對象是標志或工地並且放置在你不可見的房間中，則可能為 undefined。


