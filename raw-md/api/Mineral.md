# Mineral

礦床。在建有 extractor 建築時可以通過帶有 `WORK` 身體部件的 creep 采集。
點擊 [本文](/resources.html) 來了解更多關於 mineral 的信息。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>再生容量</strong></td>
        <td><code>DENSITY_LOW</code>: 15,000 <br /> <code>DENSITY_MODERATE</code>: 35,000<br /> <code>DENSITY_HIGH</code>: 70,000 <br /> <code>DENSITY_ULTRA</code>: 100,000</td>
    </tr>
    <tr>
        <td><strong>再生時間</strong></td>
        <td>50,000 ticks</td>
    </tr>
    <tr>
        <td><strong>豐度(Density)改變機率</strong></td>
        <td><code>DENSITY_LOW</code>: 100% 機率改變<br /> <code>DENSITY_MODERATE</code>: 5% 機率改變<br /> <code>DENSITY_HIGH</code>: 5% 機率改變<br /> <code>DENSITY_ULTRA</code>: 100% 機率改變</td>
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


<h2 id="density" class="api-property api-property--property  "><span class="api-property__name">density</span><span class="api-property__type">number</span></h2>



礦床豐度。豐度越高其容量越大。一旦再生時間 (<code>ticksToRegeneration</code>) 降為 0，該礦床的豐度將被重置為 <code>DENSITY_*</code> 常量之一。



<h2 id="mineralAmount" class="api-property api-property--property  "><span class="api-property__name">mineralAmount</span><span class="api-property__type">number</span></h2>



資源的剩余容量。



<h2 id="mineralType" class="api-property api-property--property  "><span class="api-property__name">mineralType</span><span class="api-property__type">string</span></h2>



資源類型， <code>RESOURCE_*</code> 常量之一。



<h2 id="id" class="api-property api-property--property  "><span class="api-property__name">id</span><span class="api-property__type">string</span></h2>



一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。



<h2 id="ticksToRegeneration" class="api-property api-property--property  "><span class="api-property__name">ticksToRegeneration</span><span class="api-property__type">number</span></h2>



礦床容量將要恢復滿額的剩余時間。


