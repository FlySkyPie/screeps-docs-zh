# StructureWall

<img src="img/wall.png" alt="" align="right" />

阻擋所有creep的移動。
玩家可以在已控制的房間中建造可破壞的構築牆。
有些房間還包含不可破壞的構築牆，將新手區或重生區與世界其他地方隔開，又或將新手/重生區劃分為較小的區域。不可破壞的構築牆沒有`hits`屬性。
	
<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>控制中心等級</strong></td>
        <td>2</td>
    </tr>
    <tr>
        <td><strong>建造成本</strong></td>
        <td>1</td>
    </tr>
    <tr>
        <td><strong>建造完成時的生命值</strong></td>
        <td>1</td>
    </tr>
    <tr>
        <td><strong>最大生命值</strong></td>
        <td>300,000,000</td>
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

<p></p><h2 id="hits" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#Structure">Structure</a></div><span class="api-property__name">hits</span><span class="api-property__type">number</span></h2><p></p>
<p>當前這個建築的當前生命值。</p>
<h2 id="hitsMax" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#Structure">Structure</a></div><span class="api-property__name">hitsMax</span><span class="api-property__type">number</span></h2>
<p>這個建築的最大生命值。</p>
<h2 id="id" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#Structure">Structure</a></div><span class="api-property__name">id</span><span class="api-property__type">string</span></h2>
<p>一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。</p>
<h2 id="structureType" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#Structure">Structure</a></div><span class="api-property__name">structureType</span><span class="api-property__type">string</span></h2>
<p><code>STRUCTURE_*</code>常量之一。</p>
<h2 id="destroy" class="api-property api-property--method api-property--inherited "><div class="api-property__inherited">繼承自 <a href="#Structure">Structure</a></div><span class="api-property__name">destroy</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>
<p>立即摧毀這個建築。</p>
<h3 id="返回值"><a href="#返回值" class="headerlink" title="返回值"></a>返回值</h3><p>如下錯誤碼之一：
<table class="api-return-codes"><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個建築的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>敵對creep在這個房間中。</p>
</td></tr>
</tbody></table>
</p>
<h2 id="isActive" class="api-property api-property--method api-property--inherited "><div class="api-property__inherited">繼承自 <a href="#Structure">Structure</a></div><span class="api-property__name">isActive</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--2" title="該方法的CPU開銷中等。"></div>
        </h2>
<p>檢查這個建築是否可用。如果房間控制等級不足，這個方法會返回false，並且這個建築會在游戲中紅色高亮。</p>
<h3 id="返回值-1"><a href="#返回值-1" class="headerlink" title="返回值"></a>返回值</h3><p>布爾值。</p>
<h2 id="notifyWhenAttacked" class="api-property api-property--method api-property--inherited "><div class="api-property__inherited">繼承自 <a href="#Structure">Structure</a></div><span class="api-property__name">notifyWhenAttacked</span><span class="api-property__args">(enabled)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>
<p>切換這個建築受到攻擊時的自動通知。通知會發送到你的賬戶郵箱。默認開啟。</p>
<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p>是否啟用通知。</p>
</td>
</tr></tbody></table>

<h3 id="返回值-2"><a href="#返回值-2" class="headerlink" title="返回值"></a>返回值</h3><p>如下錯誤碼之一：
<table class="api-return-codes"><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個建築的擁有者。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p><code>enable</code>參數不是一個布爾值。</p>
</td></tr>
</tbody></table>
</p>




