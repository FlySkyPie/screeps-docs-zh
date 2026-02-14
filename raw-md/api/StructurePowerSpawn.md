# StructurePowerSpawn

<img src="img/powerSpawn.png" alt="" align="right" />

提煉超能 (power) 並注冊到您的賬戶當中，可以孵化擁有獨一無二能力的超能 creep (仍在開發中)。
點擊[本文](/power.html)查看跟多有關超能的信息。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>控制器等級</strong></td>
    </tr>
    <tr>
        <td>1-7</td>
        <td>—</td>
    </tr>
    <tr>
        <td>8</td>
        <td>1 power spawn</td>
    </tr>
    <tr>
        <td><strong>建造花費</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>容量</strong></td>
        <td>5,000 energy units, 100 power units</td>
    </tr>
    <tr>
        <td><strong>提煉花費</strong></td>
        <td>1 power 消耗 50 energy</td>
    </tr>
    <tr>
        <td><strong>提煉速度</strong></td>
        <td>每 tick 1 power</td>
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




<h2 id="energy" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">energy</span><span class="api-property__type">number</span></h2><div class="api-deprecated"><p>此屬性已被棄用，將很快刪除。</p>
</div>
                                                                
[`.store[RESOURCE_ENERGY]`](#StructureExtension.store) 的別名。



<h2 id="energyCapacity" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">energyCapacity</span><span class="api-property__type">number</span></h2><div class="api-deprecated"><p>此屬性已被棄用，將很快刪除。</p>
</div>
                                                                                                                
[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity) 的別名。



<h2 id="power" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">power</span><span class="api-property__type">number</span></h2><div class="api-deprecated"><p>此屬性已被棄用，將很快刪除。</p>
</div>
                                                               
[`.store[RESOURCE_POWER]`](#StructureExtension.store) 的別名。



<h2 id="powerCapacity" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">powerCapacity</span><span class="api-property__type">number</span></h2><div class="api-deprecated"><p>此屬性已被棄用，將很快刪除。</p>
</div>
                                                                                                               
[`.store.getCapacity(RESOURCE_POWER)`](#Store.getCapacity) 的別名。

<h2 id="store" class="api-property api-property--property  "><span class="api-property__name">store</span><span class="api-property__type"><a href="#Store">Store</a></span></h2>

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```


一個包含了該建築中所存儲的貨物的 [`Store`](#Store) 對象。


<h2 id="processPower" class="api-property api-property--method  "><span class="api-property__name">processPower</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>



將超能 (power) 資源注冊到您的賬戶當中。注冊超能允許開發超能 creep 的技能。



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個建築的擁有者。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>這個建築沒有足夠的能量或者超能資源。</p>
</td></tr>
<tr><td><code>ERR_RCL_NOT_ENOUGH</code></td><td>-14</td><td><p>房間控制中心等級不足。</p>
</td></tr>
</tbody></table>


