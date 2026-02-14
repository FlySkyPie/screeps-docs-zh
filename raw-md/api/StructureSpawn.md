# StructureSpawn

<img src="img/spawn.png" alt="" align="right" /> 

母巢 (spawn) 是你的殖民地中心。此建築可以創建、更新和回收 creeps 。
你能通過 [`Game.spawns`](#Game.spawns) 這個hash list 訪問所有的母巢 (spawn) 。
母巢 (spawn) 每 tick 會生產少許能量，以免玩家陷入無 creep 可用、無 creep 可造的困境。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>控制等級 (Controller level) </strong></td>
    </tr>
    <tr>
        <td>1-6</td>
        <td>1 spawn</td>
    </tr>
    <tr>
        <td>7</td>
        <td>2 spawns</td>
    </tr>
    <tr>
        <td>8</td>
        <td>3 spawns</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>15,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>Capacity</strong></td>
        <td>300</td>
    </tr>
    <tr>
        <td><strong>Spawn time</strong></td>
        <td>3 ticks 每 body 組件</td>
    </tr>
    <tr>
        <td><strong>Energy auto-regeneration</strong></td>
        <td>當房間內的能量（所有的母巢和擴展中）低於300 時，母巢每 tick 會自動生成 1 單位的能量。</td>
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

[`.store[RESOURCE_ENERGY]`](#StructureExtension.store) 的別名.



<h2 id="energyCapacity" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">energyCapacity</span><span class="api-property__type">number</span></h2><div class="api-deprecated"><p>此属性已被弃用，将很快删除。</p>
</div>

[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity) 的別名.



<h2 id="memory" class="api-property api-property--property  "><span class="api-property__name">memory</span><span class="api-property__type">any</span></h2>

```javascript
spawn.memory.queue = [];
```

<code>Memory.spawns[spawn.name]</code> 的一個簡寫。您可以使用它來快速訪問母巢 (spawn) 的特定內存數據對象。 <a href="/global-objects.html#Memory-object">了解更多關於 memory</a>



<h2 id="name" class="api-property api-property--property  "><span class="api-property__name">name</span><span class="api-property__type">string</span></h2>



Spawn 的名字。在創建新母巢 (spawn) 時賦予，一但創建就無法更改，除非拆除重造。此名稱是一個散列鍵，用於通過 <a href="#Game.spawns">Game.spawns</a> 對象訪問。



<h2 id="spawning" class="api-property api-property--property  "><span class="api-property__name">spawning</span><span class="api-property__type"><a href="#StructureSpawn-Spawning">StructureSpawn.Spawning</a></span></h2>



如果母巢 (spawn) 正在孵化一個新的 creep ， 母巢 (spawn) 將包含一個 [`StructureSpawn.Spawning`](#StructureSpawn-Spawning) 對象，否則為 null。


<h2 id="store" class="api-property api-property--property  "><span class="api-property__name">store</span><span class="api-property__type"><a href="#Store">Store</a></span></h2>

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```


一個 [`Store`](#Store) 對象，它包含這個建築的所有貨物。

<h2 id="canCreateCreep" class="api-property api-property--method  api-property--deprecated"><span class="api-property__name">canCreateCreep</span><span class="api-property__args">(body, [name])</span>
        <div class="api-property__cpu api-property__cpu--1" title="该方法具有较低的CPU开销。"></div>
        </h2>
<div class="api-deprecated"><p>此方法已被弃用，不久将被删除。 請使用 <a href="#StructureSpawn.spawnCreep"><code>StructureSpawn.spawnCreep</code></a> 的 <code>dryRun</code> 標志代替。</p>
</div>

```javascript
if(spawn.canCreateCreep(body, name) == OK) {
    spawn.createCreep(body, name);
}
```

檢查是否可以創建 creep。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>body</code></td><td>array&lt;string&gt;</td><td><p>描述新 creep』s body 的數組。應該包含1至50個元素（以下常量之一）:</p>
<ul>
<li><code>WORK</code></li>
<li><code>MOVE</code></li>
<li><code>CARRY</code></li>
<li><code>ATTACK</code></li>
<li><code>RANGED_ATTACK</code></li>
<li><code>HEAL</code></li>
<li><code>TOUGH</code></li>
<li><code>CLAIM</code></li>
</ul>
</td>
<tr><td><code>name (可選)</code></td><td>string</td><td><p>新 creep 的名字。最長不能超過 100 個字符。它應該是唯一的 creep 名稱, 所以 <code>Game.creeps</code> 對象不應該包含另一個同名的 creep (hash key)。如果沒有定義，將生成一個隨機名稱。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>可以創建具有給定 body 和名稱的 creep。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該 spawn 的所有者。</p>
</td></tr>
<tr><td><code>ERR_NAME_EXISTS</code></td><td>-3</td><td><p>已經有一個叫這個名字的 creep 了。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個母巢 (spawn) 已經在孵化另一個 creep 了。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_ENERGY</code></td><td>-6</td><td><p>這個母巢 (spawn) 和它的擴展 (extension) 包含的能量不足以孵化具有給定 body 的 creep。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>Body 沒有被恰當地描述。</p>
</td></tr>
<tr><td><code>ERR_RCL_NOT_ENOUGH</code></td><td>-14</td><td><p>您的房間控制器級別不足以使用此 spawn。</p>
</td></tr>
</tbody></table>




<h2 id="createCreep" class="api-property api-property--method  api-property--deprecated"><span class="api-property__name">createCreep</span><span class="api-property__args">(body, [name], [memory])</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>
<div class="api-deprecated"><p>此方法已被弃用，不久将被删除。 請使用 <a href="#StructureSpawn.spawnCreep"><code>StructureSpawn.spawnCreep</code></a> 代替。</p>
</div>

```javascript
Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], 'Worker1');
```

```javascript
Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], null,
    {role: 'harvester'});
```

```javascript
const result = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE]);

if(_.isString(result)) {
    console.log('The name is: '+result);
}
else {
    console.log('Spawn error: '+result);
}
```
啟動 creep 孵化過程。所需的能量可以從房間裡的所有母巢和擴展中提取出來。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>body</code></td><td>array&lt;string&gt;</td><td><p>描述新 creep』s body 的數組。應該包含1至50個元素（以下常量之一）</p>
<ul>
<li><code>WORK</code></li>
<li><code>MOVE</code></li>
<li><code>CARRY</code></li>
<li><code>ATTACK</code></li>
<li><code>RANGED_ATTACK</code></li>
<li><code>HEAL</code></li>
<li><code>TOUGH</code></li>
<li><code>CLAIM</code></li>
</ul>
</td>
<tr><td><code>name (可選)</code></td><td>string</td><td><p>新 creep 的名字。最長不能超過 100 個字符。它應該是唯一的 creep 名稱, 所以 <code>Game.creeps</code> 對象不應該包含另一個同名的 creep (hash key)。如果沒有定義，將生成一個隨機名稱。</p>
</td>
<tr><td><code>memory (可選)</code></td><td>any</td><td><p>一個新 creep 的 memory 。如果提供，它將立即存儲到<code>Memory.creeps[name]</code>。</p>
</td>
</tbody></table>



### 返回值

產生一個新的 creep 會遇到這些錯誤代碼之一:
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該 spawn 的所有者。</p>
</td></tr>
<tr><td><code>ERR_NAME_EXISTS</code></td><td>-3</td><td><p>已經有一個叫這個名字的 creep 了。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個母巢已經在孵化另一個 creep 了。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_ENERGY</code></td><td>-6</td><td><p>這個母巢和他的擴展包含的能量不足以孵化具有給定 body 的 creep。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>Body 沒有被恰當地描述。</p>
</td></tr>
<tr><td><code>ERR_RCL_NOT_ENOUGH</code></td><td>-14</td><td><p>您的房間控制器級別不足以使用此 spawn。</p>
</td></tr>
</tbody></table>




<h2 id="spawnCreep" class="api-property api-property--method  "><span class="api-property__name">spawnCreep</span><span class="api-property__args">(body, name, [opts])</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Worker1');
```

```javascript
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Worker1', {
    memory: {role: 'harvester'}
});
```

```javascript
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Worker1', {
    energyStructures: [
        Game.spawns['Spawn1'],
        Game.getObjectById('anExtensionId')
    ]
});
```

```javascript
var testIfCanSpawn = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE],
    'Worker1', { dryRun: true });
```

啟動 creep 孵化過程。所需的能量量可以從房間裡的所有母巢和擴展中提取出來。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>body</code></td><td>array&lt;string&gt;</td><td><p>描述新 creep』s body 的數組。應該包含1至50個元素（以下常量之一）</p>
<ul>
<li><code>WORK</code></li>
<li><code>MOVE</code></li>
<li><code>CARRY</code></li>
<li><code>ATTACK</code></li>
<li><code>RANGED_ATTACK</code></li>
<li><code>HEAL</code></li>
<li><code>TOUGH</code></li>
<li><code>CLAIM</code></li>
</ul>
</td>
<tr><td><code>name</code></td><td>string</td><td><p>新 creep 的名字。最長不能超過 100 個字符。它應是個獨一無二的 creep 名以保證 <code>Game.creeps</code> 不含有重名的的 creep 。</p>
</td>
<tr><td><code>opts (可選)</code></td><td>object</td><td><p>為孵化進程提供附加選項的對象。</p>
<ul>
    <li>
        <div class="api-arg-title">memory</div>
        <div class="api-arg-type">any</div>
        <div class="api-arg-desc">一個新 creep 的 memory 。如果提供，它將立即存儲到<code>Memory.creeps[name]</code>。</div>
    </li>
    <li>
        <div class="api-arg-title">energyStructures</div>
        <div class="api-arg-type">array</div>
        <div class="api-arg-desc">孵化時使用能量的 spawns/extensions 數組，建築將按順序使用其中的能量。</div>
    </li>
    <li>
        <div class="api-arg-title">dryRun</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">如果「dryRun」為 true，則操作將僅檢查是否可以孵化 creep。</div>
    </li>
    <li>
            <div class="api-arg-title">directions</div>
            <div class="api-arg-type">array<number></div>
            <div class="api-arg-desc">設置 creep 出生時移動的方向，是一個帶有以下常量的數組:
                                          <ul>
                                              <li><code>TOP</code></li>
                                              <li><code>TOP_RIGHT</code></li>
                                              <li><code>RIGHT</code></li>
                                              <li><code>BOTTOM_RIGHT</code></li>
                                              <li><code>BOTTOM</code></li>
                                              <li><code>BOTTOM_LEFT</code></li>
                                              <li><code>LEFT</code></li>
                                              <li><code>TOP_LEFT</code></li>
                                          </ul></div>
        </li>
</ul></td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該母巢 (spawn) 的所有者。</p>
</td></tr>
<tr><td><code>ERR_NAME_EXISTS</code></td><td>-3</td><td><p>已經有一個叫這個名字的 creep 了。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個母巢 (spawn) 已經在孵化另一個 creep 了。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_ENERGY</code></td><td>-6</td><td><p>這個母巢 (spawn) 和他的擴展包含的能量不足以孵化具有給定 body 的 creep。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>Body 沒有被恰當地描述。</p>
</td></tr>
<tr><td><code>ERR_RCL_NOT_ENOUGH</code></td><td>-14</td><td><p>您的房間控制器級別不足以使用此 spawn。</p>
</td></tr>
</tbody></table>




<h2 id="recycleCreep" class="api-property api-property--method  "><span class="api-property__name">recycleCreep</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>



 殺死 creep ，並視其剩余壽命而掉落最多100％的資源用於其繁殖和增強。目標應該在相鄰的方塊上。每個身體部位的能量回收限制在125個單位。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Creep">Creep</a></td><td><p>目標 creep 對象。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>您不是此母巢 (spawn) 或目標 creep 的所有者。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>指定的目標不是一個 creep 對象。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標 creep 太遠了。</p>
</td></tr>
<tr><td><code>ERR_RCL_NOT_ENOUGH</code></td><td>-14</td><td><p>您的房間控制器級別不足以使用此 spawn。</p>
</td></tr>
</tbody></table>




<h2 id="renewCreep" class="api-property api-property--method  "><span class="api-property__name">renewCreep</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>


增加目標 creep 的剩余生存時間。目標應在相鄰的方格處。spawn 不應忙於孵化過程，且不能包含 CLAIM 身體部件。每次執行都會增加 creep 的計時器，根據此公式按 ticks 數計算：

```javascript-content
floor(600/body_size)
```

每次執行所需的能量由以下公式確定:

```javascript-content
ceil(creep_cost/2.5/body_size)
```

更新 creep 會移除所有的增益。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Creep">Creep</a></td><td><p>目標 creep 對象。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該母巢 (spawn) 或者該 creep 的所有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個母巢 (spawn) 已經在孵化另一個 creep 了。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_ENERGY</code></td><td>-6</td><td><p>這個母巢 (spawn) 和他的擴展 (extension) 包含的能量不足以孵化具有給定 body 的 creep。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>指定的目標不是一個 creep 對象，或者其攜帶有 CLAIM 身體部件。</p>
</td></tr>
<tr><td><code>ERR_FULL</code></td><td>-8</td><td><p>目標計時器的時間已經滿了。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標 creep 太遠了。</p>
</td></tr>
<tr><td><code>ERR_RCL_NOT_ENOUGH</code></td><td>-14</td><td><p>您的房間控制器級別不足以使用此 spawn。</p>
</td></tr>
</tbody></table>

