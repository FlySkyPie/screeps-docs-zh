# Flag

一個旗幟，旗幟可以用來標記房間中的一個特定的地點。旗幟只對其所有者可見。你最多只能擁有 10,000 個旗幟。

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

 
<h2 id="color" class="api-property api-property--property  "><span class="api-property__name">color</span><span class="api-property__type">number</span></h2>

旗幟的主要顏色。<code>COLOR_*</code> 常量之一。



<h2 id="memory" class="api-property api-property--property  "><span class="api-property__name">memory</span><span class="api-property__type">any</span></h2>



指向 <code>Memory.flags[flag.name]</code> 的鏈接。你可以使用它來快速訪問到該旗幟的內存數據對象。



<h2 id="name" class="api-property api-property--property  "><span class="api-property__name">name</span><span class="api-property__type">string</span></h2>

 

旗幟的名稱。你可以在創建新的旗幟時為其指定名字，名字一旦確定無法修改。創建之後會以該名稱為鍵，旗幟對象為值存放在 <a href="#Game.flags">Game.flags</a> 對象中。名稱最長不能超過 100 字符。



<h2 id="secondaryColor" class="api-property api-property--property  "><span class="api-property__name">secondaryColor</span><span class="api-property__type">number</span></h2>



旗幟的次要顏色。<code>COLOR_*</code> 常量之一。



<h2 id="remove" class="api-property api-property--method  "><span class="api-property__name">remove</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>



移除該旗幟。



### 返回值

永遠返回
OK
。

<h2 id="setColor" class="api-property api-property--method  "><span class="api-property__name">setColor</span><span class="api-property__args">(color, [secondaryColor])</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
Game.flags.Flag1.setColor(COLOR_GREEN, COLOR_WHITE);
```

給旗幟設置一個新顏色

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>color</code></td><td>string</td><td><p>旗幟的主要顏色。<code>COLOR_*</code> 常量之一。</p>
</td>
<tr><td><code>secondaryColor (可選)</code></td><td>string</td><td><p>旗幟的次要顏色。<code>COLOR_*</code> 常量之一。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p><code>color</code> 或者 <code>secondaryColor</code> 不是一個有效的 <code>COLOR_*</code> 常量。</p>
</td></tr>
</tbody></table>




<h2 id="setPosition" class="api-property api-property--method  "><span class="api-property__name">setPosition</span><span class="api-property__args">(x,y)<br>(pos)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
Game.flags.Flag1.setPosition(10,20);
```

```javascript
Game.flags.Flag1.setPosition( new RoomPosition(10, 20, 'W3S5') );
```

給旗幟設置一個新的位置。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>相同房間內的 x 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>相同房間內的 y 坐標。</p>
</td>
<tr><td><code>pos</code></td><td>object</td><td><p>可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>提供了無效的目標。</p>
</td></tr>
</tbody></table>



