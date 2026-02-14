# Tombstone

<img src="img/tombstone.gif" alt="" align="right" />

死亡creep的遺物。這個對象不阻礙行走。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>消失</strong></td>
        <td>死去的creep每個身體部件5 tick</td>
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


<h2 id="creep" class="api-property api-property--property  "><span class="api-property__name">creep</span><span class="api-property__type"><a href="#Creep">Creep</a> | <a href="#PowerCreep">PowerCreep</a></span></h2>

```javascript
room.find(FIND_TOMBSTONES).forEach(tombstone => {
    if(tombstone.creep.my) {
        console.log(`My creep died with ID=${tombstone.creep.id} ` +
             `and role=${Memory.creeps[tombstone.creep.name].role}`);   
    }    
});
```
```javascript
room.find(FIND_TOMBSTONES).forEach(tombstone => {
    if(tombstone.creep instanceof PowerCreep) {
        console.log(`Power creep died here`);   
    }    
});
````

一個內含死亡creep或超能creep的對象。

<h2 id="deathTime" class="api-property api-property--property  "><span class="api-property__name">deathTime</span><span class="api-property__type">number</span></h2>

死亡時間。

<h2 id="id" class="api-property api-property--property  "><span class="api-property__name">id</span><span class="api-property__type">string</span></h2>

一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。


<h2 id="store" class="api-property api-property--property  "><span class="api-property__name">store</span><span class="api-property__type"><a href="#Store">Store</a></span></h2>

一個表示該結構所存儲資源的 [`Store`](#Store) 對象。


<h2 id="ticksToDecay" class="api-property api-property--property  "><span class="api-property__name">ticksToDecay</span><span class="api-property__type">number</span></h2>

這個墓碑消失的剩余時間。



