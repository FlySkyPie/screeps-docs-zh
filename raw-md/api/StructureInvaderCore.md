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
<h2 id="destroy" class="api-property api-property--method api-property--inherited "><div class="api-property__inherited">继承自 <a href="#Structure">Structure</a></div><span class="api-property__name">destroy</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
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
<h2 id="isActive" class="api-property api-property--method api-property--inherited "><div class="api-property__inherited">继承自 <a href="#Structure">Structure</a></div><span class="api-property__name">isActive</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--2" title="该方法的CPU开销中等。"></div>
        </h2>
<p>檢查這個建築是否可用。如果房間控制等級不足，這個方法會返回false，並且這個建築會在游戲中紅色高亮。</p>
<h3 id="返回值-1"><a href="#返回值-1" class="headerlink" title="返回值"></a>返回值</h3><p>布爾值。</p>
<h2 id="notifyWhenAttacked" class="api-property api-property--method api-property--inherited "><div class="api-property__inherited">继承自 <a href="#Structure">Structure</a></div><span class="api-property__name">notifyWhenAttacked</span><span class="api-property__args">(enabled)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
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

<p></p><h2 id="my" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#OwnedStructure">OwnedStructure</a></div><span class="api-property__name">my</span><span class="api-property__type">boolean</span></h2><p></p>
<p></p><p>是否是你擁有的建築。</p><p></p>
<p></p><h2 id="owner" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#OwnedStructure">OwnedStructure</a></div><span class="api-property__name">owner</span><span class="api-property__type">object</span></h2><p></p>
<p></p><p>建築擁有者信息，一個包含如下屬性的對象：</p><p></p>
<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>擁有者姓名。</p>
</td>
</tr></tbody></table>




<h2 id="level" class="api-property api-property--property  "><span class="api-property__name">level</span><span class="api-property__type">number</span></h2>
                                                                
此要塞的等級。該等級也決定了戰利品的數量和質量。

<h2 id="ticksToDeploy" class="api-property api-property--property  "><span class="api-property__name">ticksToDeploy</span><span class="api-property__type">number</span></h2>
                                                                                                                
部署階段的計時器，在要塞尚未部署完成時顯示，否則為 undefined。

<h2 id="spawning" class="api-property api-property--property  "><span class="api-property__name">spawning</span><span class="api-property__type"><a href="#StructureSpawn-Spawning">StructureSpawn.Spawning</a></span></h2>

如果該核心正在孵化一個新的 creep，該屬性將會包含一個 [`StructureSpawn.Spawning`](#StructureSpawn-Spawning) 對象，否則將為 null。
