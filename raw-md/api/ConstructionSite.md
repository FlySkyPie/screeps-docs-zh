# ConstructionSite

一個正在建設中的工地。可以使用游戲界面右側的'Construct'按鈕創建工地或[`Room.createConstructionSite`](#Room.createConstructionSite)方法。

要在工地建造一個建築，需要給工人creep一些能量並執行[`Creep.build`](#Creep.build)動作。

如果想移除敵人的工地，只需讓一個creep踩在上面即可。

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
 

<h2 id="id" class="api-property api-property--property  "><span class="api-property__name">id</span><span class="api-property__type">string</span></h2>
 


全局唯一的對象標識。你可以通過調用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法取得對象實例。



<h2 id="my" class="api-property api-property--property  "><span class="api-property__name">my</span><span class="api-property__type">boolean</span></h2>



你是否擁有這個工地。



<h2 id="owner" class="api-property api-property--property  "><span class="api-property__name">owner</span><span class="api-property__type">object</span></h2>



建築擁有者信息，一個包含如下屬性的對象：

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>擁有者姓名。</p>
</td>
</tbody></table>



<h2 id="progress" class="api-property api-property--property  "><span class="api-property__name">progress</span><span class="api-property__type">number</span></h2>



當前建造進度。



<h2 id="progressTotal" class="api-property api-property--property  "><span class="api-property__name">progressTotal</span><span class="api-property__type">number</span></h2>



完成建造所需的建造總進度。



<h2 id="structureType" class="api-property api-property--property  "><span class="api-property__name">structureType</span><span class="api-property__type">string</span></h2>



<code>STRUCTURE_*</code>常量之一。



<h2 id="remove" class="api-property api-property--method  "><span class="api-property__name">remove</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>



刪除這個工地。



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個工地的擁有者，或者這不是你的房間。</p>
</td></tr>
</tbody></table>



