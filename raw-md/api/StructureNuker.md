# StructureNuker

<img src="img/nuke.png" alt="" align="right" />

向其他房間發射一枚核彈，對著落區域造成大量傷害。
發射後需要時間冷卻且需重新裝填能量和 ghodium 資源。
發射後將會在目標房間位置創建一個對任何玩家可見的 [Nuke](#Nuke) 對象，直至其著陸。
已發射的核彈無法移動或者取消。核彈不能從新手房間發射或者發射向新手房間。放置到 StructureNuker 中的資源無法被取出 (withdraw)。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2" style="width: 70px;"><strong>控制器等級</strong></td>
    </tr>
    <tr>
        <td>1-7</td>
        <td>—</td>
    </tr>
    <tr>
        <td>8</td>
        <td>1 nuke</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>建造花費</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>生命值</strong></td>
        <td>1,000</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>攻擊范圍</strong></td>
        <td>10 rooms</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>發射花費</strong></td>
        <td>300,000 energy<br /> 5,000 ghodium</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>發射冷卻</strong></td>
        <td>100,000 ticks</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>著陸時間</strong></td>
        <td>50,000 ticks</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>效果</strong></td>
        <td>立刻清除所有的 creep，建築工地(construction site)和掉落的資源，即使它位於 rampart 之下。並對建築造成如下傷害：
            <ul>
                <li>對著落位置造成 10,000,000 hits 傷害。</li>
                <li>對周圍 5x5 區域中的建築造成 5,000,000 hits 傷害。</li>
            </ul>
            <p>注意，您可以將來自多個不同房間的核彈疊加到同一位置來增強傷害。</p>
            <p>Nuke 著落不會產生墓碑（tombstone）和遺跡（ruin），並且會銷毀房間中所有存在的墓碑和遺跡。</p>
            <p>如果核彈著落時房間正處於安全模式，則會立刻取消安全模式，並將安全模式的冷卻時間重置為 0。</p>
            <p>房間控制器將會觸發 <code>upgradeBlocked</code> 計時，這意味著在接下來的 200 tick 中將無法再次使用安全模式。</p>
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




<h2 id="energy" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">energy</span><span class="api-property__type">number</span></h2><div class="api-deprecated"><p>此属性已被弃用，将很快删除。</p>
</div>

[`.store[RESOURCE_ENERGY]`](#StructureExtension.store) 的別名。



<h2 id="energyCapacity" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">energyCapacity</span><span class="api-property__type">number</span></h2><div class="api-deprecated"><p>此属性已被弃用，将很快删除。</p>
</div>

[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity) 的別名。



<h2 id="ghodium" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">ghodium</span><span class="api-property__type">number</span></h2><div class="api-deprecated"><p>此属性已被弃用，将很快删除。</p>
</div>

[`.store[RESOURCE_GHODIUM]`](#StructureExtension.store) 的別名。



<h2 id="ghodiumCapacity" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">ghodiumCapacity</span><span class="api-property__type">number</span></h2><div class="api-deprecated"><p>此属性已被弃用，将很快删除。</p>
</div>

[`.store.getCapacity(RESOURCE_GHODIUM)`](#Store.getCapacity) 的別名。



<h2 id="cooldown" class="api-property api-property--property  "><span class="api-property__name">cooldown</span><span class="api-property__type">number</span></h2>



下次發射前還需多少 tick 的冷卻時間。


<h2 id="store" class="api-property api-property--property  "><span class="api-property__name">store</span><span class="api-property__type"><a href="#Store">Store</a></span></h2>

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```


一個包含了該建築中所存儲資源的 [`Store`](#Store) 對象。



<h2 id="launchNuke" class="api-property api-property--method  "><span class="api-property__name">launchNuke</span><span class="api-property__args">(pos)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
nuker.launchNuke(new RoomPosition(20,30, 'W1N1'));
```

向指定位置發射核彈。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>pos</code></td><td><a href="#RoomPosition">RoomPosition</a></td><td><p>目標房間位置</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個建築的擁有者。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>該建築沒有足夠的能量和/或 ghodium。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>nuke 無法發射至指定的 RoomPosition（見 <a href="/start-areas.html">起始區域</a>）</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標房間超出打擊范圍。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>目標不是有效的 RoomPosition。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>該建築仍在冷卻。</p>
</td></tr>
<tr><td><code>ERR_RCL_NOT_ENOUGH</code></td><td>-14</td><td><p>房間控制中心等級不足。</p>
</td></tr>
</tbody></table>



