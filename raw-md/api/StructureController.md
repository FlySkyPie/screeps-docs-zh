# StructureController

<img src="img/controller.png" alt="" align="right" />

佔領(claim) 這個建築來控制其所在的房間。控制器無法被攻擊或摧毀。

你可以通過 [`Room.controller`](#Room.controller) 屬性來快速訪問到它。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <th><strong>等級</strong></th>
        <th>升級至下個等級</th>
        <th>降級時間</th>
    </tr>
    <tr>
        <td>1</td>
        <td>200 energy</td>
        <td>20,000 ticks</td>
    </tr>
    <tr>
        <td>2</td>
        <td>45,000 energy</td>
        <td>10,000 ticks</td>
    </tr>
    <tr>
        <td>3</td>
        <td>135,000 energy</td>
        <td>20,000 ticks</td>
    </tr>
    <tr>
        <td>4</td>
        <td>405,000 energy</td>
        <td>40,000 ticks</td>
    </tr>
    <tr>
        <td>5</td>
        <td>1,215,000 energy</td>
        <td>80,000 ticks</td>
    </tr>
    <tr>
        <td>6</td>
        <td>3,645,000 energy</td>
        <td>120,000 ticks</td>
    </tr>
    <tr>
        <td>7</td>
        <td>10,935,000 energy</td>
        <td>150,000 ticks</td>
    </tr>
    <tr>
        <td>8</td>
        <td>—</td>
        <td>200,000 ticks</td>
    </tr>
    </tbody>
</table>
	
### 安全模式
	
<table class=gameplay-info>
    <tbody>
    <tr>
        <td style="width:60px;"><strong>效果</strong></td>
        <td>阻止本房間中的所有敵對 creep 的 <code>attack</code>, <code>rangedAttack</code>, <code>rangedMassAttack</code>, <code>dismantle</code>, <code>heal</code>, <code>rangedHeal</code>, <code>attackController</code> and <code>withdraw</code> 方法。以及敵對 Power Creep 的 <code>enableRoom</code> 和 <code>usePower</code> 方法。同一時間內只能有一個房間激活安全模式。<br/>
    當安全模式被激活時，所有的敵對 creep 都將變透明並且可通過, 您的 creep 可以自由的穿過他們 (反之亦然)。</td>
    </tr>
    <tr>
        <td style="width:60px;"><strong>持續時間</strong></td>
        <td>20,000 ticks</td>
    </tr>
    <tr>
        <td style="width:60px;"><strong>冷卻時間</strong></td>
        <td>50,000 ticks (新手區 (Novice Areas) 以及您第一個房間的初始安全模式都沒有冷卻時間)</td>
    </tr>
    <tr>
        <td style="width:60px;"><strong>獲取途徑</strong></td>
        <td>
            <ul>
                <li>每次控制器升級時提供一次可用次數</li>
                <li>可以使用 1,000 ghodium 化合物來生成一個可用次數</li>
                <li>控制器降級時將會重置所有可用次數</li>
            </ul>
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

<p></p><h2 id="my" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#OwnedStructure">OwnedStructure</a></div><span class="api-property__name">my</span><span class="api-property__type">boolean</span></h2><p></p>
<p></p><p>是否是你擁有的建築。</p><p></p>
<p></p><h2 id="owner" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#OwnedStructure">OwnedStructure</a></div><span class="api-property__name">owner</span><span class="api-property__type">object</span></h2><p></p>
<p></p><p>建築擁有者信息，一個包含如下屬性的對象：</p><p></p>
<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>擁有者姓名。</p>
</td>
</tr></tbody></table>



<h2 id="isPowerEnabled" class="api-property api-property--property  "><span class="api-property__name">isPowerEnabled</span><span class="api-property__type">boolean</span></h2>
該房間是否啟用了超能 (power)。使用 [`PowerCreep.enableRoom`](#PowerCreep.enableRoom) 來啟用超能。

<h2 id="level" class="api-property api-property--property  "><span class="api-property__name">level</span><span class="api-property__type">number</span></h2>



當前的控制器等級，從 0 到 8。



<h2 id="progress" class="api-property api-property--property  "><span class="api-property__name">progress</span><span class="api-property__type">number</span></h2>



當前控制器升級到下個等級的進度。



<h2 id="progressTotal" class="api-property api-property--property  "><span class="api-property__name">progressTotal</span><span class="api-property__type">number</span></h2>



控制器升級到下個等級所需的總進度。



<h2 id="reservation" class="api-property api-property--property  "><span class="api-property__name">reservation</span><span class="api-property__type">object</span></h2>



如果控制器被預定，則該對象表示預定的信息:

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>預定了該房間的玩家名稱。</p>
</td>
<tr><td><code>ticksToEnd</code></td><td>number</td><td><p>預定時間還有多少 tick 結束。</p>
</td>
</tbody></table>



<h2 id="safeMode" class="api-property api-property--property  "><span class="api-property__name">safeMode</span><span class="api-property__type">number</span></h2>



安全模式還有多少 tick 結束。沒激活安全模式時返回 undefined。



<h2 id="safeModeAvailable" class="api-property api-property--property  "><span class="api-property__name">safeModeAvailable</span><span class="api-property__type">number</span></h2>



可用的安全模式激活次數。



<h2 id="safeModeCooldown" class="api-property api-property--property  "><span class="api-property__name">safeModeCooldown</span><span class="api-property__type">number</span></h2>



安全模式的冷卻時間還有多少 tick。冷卻結束前將無法激活安全模式，當安全模式沒有冷卻時返回 undefined。



<h2 id="sign" class="api-property api-property--property  "><span class="api-property__name">sign</span><span class="api-property__type">object</span></h2>



如果控制器被簽名，則該對象表示簽名的信息：

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>將控制器簽名的玩家名稱。</p>
</td>
<tr><td><code>text</code></td><td>string</td><td><p>簽名的文本內容。</p>
</td>
<tr><td><code>time</code></td><td>number</td><td><p>進行簽名的游戲 tick 時間。</p>
</td>
<tr><td><code>datetime</code></td><td>Date</td><td><p>進行簽名的現實時間。</p>
</td>
</tbody></table>



<h2 id="ticksToDowngrade" class="api-property api-property--property  "><span class="api-property__name">ticksToDowngrade</span><span class="api-property__type">number</span></h2>



該控制器還有多少 tick 將要降級。當控制器升級或者降級時, 該計時器將被設置為總降級時間的 50%。可以使用 <code><a href="#Creep.upgradeController">Creep.upgradeController</a></code> 來增加該計時器的時間。控制器想要升級必須先保證該計時器滿額。



<h2 id="upgradeBlocked" class="api-property api-property--property  "><span class="api-property__name">upgradeBlocked</span><span class="api-property__type">number</span></h2>



還有多少 tick 就能從控制器被攻擊從而無法升級的狀態中恢復過來。在此期間安全模式也不可用。



<h2 id="activateSafeMode" class="api-property api-property--method  "><span class="api-property__name">activateSafeMode</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
room.controller.activateSafeMode();
```

激活安全模式 (如果有的話)。



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該控制器的所有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>已經有其他房間處於安全模式下了。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>沒有足夠的可用激活次數。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>上一個安全模式仍在冷卻中，或者控制器正處於 <code>upgradeBlocked</code> 狀態，或者控制器的降級計時器已經超過了 50% + 5000 tick 甚至更久。</p>
</td></tr>
</tbody></table>




<h2 id="unclaim" class="api-property api-property--method  "><span class="api-property__name">unclaim</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
room.controller.unclaim();
```

放棄該房間，使得控制器重新變為中立狀態。



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該控制器的所有者。</p>
</td></tr>
</tbody></table>



