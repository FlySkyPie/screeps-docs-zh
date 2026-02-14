# PowerCreep  


Power Creep 是和您賬戶綁定的不朽「英雄」單位。其死後可以在任何 `PowerSpawn` 重生。你可以升級它們的能力（「powers」），可升級的等級取決於您的 Global Power Level。(查看 [`Game.gpl`](#Game.gpl))。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>存活時間</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>1,000 每級</td>
    </tr>
    <tr>
        <td><strong>容量</strong></td>
        <td>100 每級</td>
    </tr>    
    </tbody>
</table>

[可用 power 的完整列表](/power.html#Powers)

<h2 id="PowerCreep.create" class="api-property api-property--method  "><span class="api-property__name">PowerCreep.create</span><span class="api-property__args">(name, className)</span>
        <div class="api-property__cpu api-property__cpu--1" title="该方法具有较低的CPU开销。"></div>
        </h2>

```javascript
PowerCreep.create('PowerCreep1', POWER_CLASS.OPERATOR);
```

向您賬戶中添加新的 Power Creep 實例。在添加之後默認為未孵化狀態，使用 [`spawn`](#PowerCreep.spawn) 方法在游戲世界中生成它。

您的賬戶中擁有至少一個可用的 Power Level 才能執行該操作。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>新 power creep 的名字。最長不能超過 100 個字符。</p>
</td>
<tr><td><code>className</code></td><td>string</td><td><p>新 power creep 的類型，<code>POWER_CLASS</code> 常量之一。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NAME_EXISTS</code></td><td>-3</td><td><p>指定的 power creep 名稱已被使用。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>您的賬戶中沒有足夠的 Power Level。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>指定的 power creep 名稱超過長度，或者 power creep 的類型（class）無效。</p>
</td></tr>
</tbody></table>
 

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



<h2 id="carry" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">carry</span><span class="api-property__type">object</span></h2><div class="api-deprecated"><p>此属性已被弃用，将很快删除。</p>
</div>

[`Creep.store`](#Creep.store) 的別名。


<h2 id="carryCapacity" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">carryCapacity</span><span class="api-property__type">number</span></h2><div class="api-deprecated"><p>此属性已被弃用，将很快删除。</p>
</div>

[`Creep.store.getCapacity()`](#Store.getCapacity) 的別名。

<h2 id="className" class="api-property api-property--property  "><span class="api-property__name">className</span><span class="api-property__type">string</span></h2>
該 power creep 的類型，`POWER_CLASS` 常量之一。

<h2 id="deleteTime" class="api-property api-property--property  "><span class="api-property__name">deleteTime</span><span class="api-property__type">number</span></h2>
該 creep 被從賬戶中永久刪除的時間戳，否則為 undefined。

<h2 id="hits" class="api-property api-property--property  "><span class="api-property__name">hits</span><span class="api-property__type">number</span></h2>
該 creep 當前的 hit 生命值。

<h2 id="hitsMax" class="api-property api-property--property  "><span class="api-property__name">hitsMax</span><span class="api-property__type">number</span></h2>
該 creep 當前的最大生命值。

<h2 id="id" class="api-property api-property--property  "><span class="api-property__name">id</span><span class="api-property__type">string</span></h2>
一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。

<h2 id="level" class="api-property api-property--property  "><span class="api-property__name">level</span><span class="api-property__type">number</span></h2>
該 power creep 的等級。

<h2 id="memory" class="api-property api-property--property  "><span class="api-property__name">memory</span><span class="api-property__type">any</span></h2>

```javascript
creep.memory.task = 'building';
```

<code>Memory.powerCreeps[creep.name]</code> 的簡寫。您可以使用它來快速訪問該 creep 的特定內存數據對象。<a href="/global-objects.html#Memory-object">點此了解有關 memory 的更多信息</a>



<h2 id="my" class="api-property api-property--property  "><span class="api-property__name">my</span><span class="api-property__type">boolean</span></h2>
您是否為該 creep 的所有者。



<h2 id="name" class="api-property api-property--property  "><span class="api-property__name">name</span><span class="api-property__type">string</span></h2>
Power creep 的名字。您可以在創建一個新 power creep 時為其指定名稱，一旦指定無法修改（在 creep 存活時無法修改）。此名稱是 <a href="#Game.powerCreeps">Game.powerCreeps</a> 對象中指向該 creep 的哈希鍵。你可以使用它來快速訪問到該 creep。



<h2 id="owner" class="api-property api-property--property  "><span class="api-property__name">owner</span><span class="api-property__type">object</span></h2>
一個代表其擁有者信息的對象，包含以下屬性：

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>擁有者姓名。</p>
</td>
</tbody></table>


<h2 id="store" class="api-property api-property--property  "><span class="api-property__name">store</span><span class="api-property__type"><a href="#Store">Store</a></span></h2>

```javascript
if(creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    goHarvest(creep);
}
```

一個包含了該 creep 所攜帶資源的 [`Store`](#Store) 對象。

<h2 id="powers" class="api-property api-property--property  "><span class="api-property__name">powers</span><span class="api-property__type">object</span></h2>
可用的 power，一個使用 power ID 作為鍵的對象，包含以下屬性：

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>level</code></td><td>number</td><td><p>該 power 的等級。</p>
</td>
<tr><td><code>cooldown</code></td><td>number</td><td><p>剩余的冷卻時間，當 power creep 還沒有出生時為 undefined。</p>
</td>
</tbody></table>



<h2 id="saying" class="api-property api-property--property  "><span class="api-property__name">saying</span><span class="api-property__type">string</span></h2>
該 creep 在最後一 tick 說過的話。

<h2 id="shard" class="api-property api-property--property  "><span class="api-property__name">shard</span><span class="api-property__type">string</span></h2>
該 power creep 孵化到的 shard 名稱，或者為 undefined。

<h2 id="spawnCooldownTime" class="api-property api-property--property  "><span class="api-property__name">spawnCooldownTime</span><span class="api-property__type">number</span></h2>
```javascript
if(!(Game.powerCreeps['PowerCreep1'].spawnCooldownTime > Date.now())) {
    Game.powerCreeps['PowerCreep1'].spawn(powerSpawn);
}
```
在生成或者刪除 creep 時該時間戳可用。
在該 power creep 已經出生後為 undefined。

<h2 id="ticksToLive" class="api-property api-property--property  "><span class="api-property__name">ticksToLive</span><span class="api-property__type">number</span></h2>
在 creep 死亡並變為未孵化狀態前的剩余存活 tick 時長。在 creep 未孵化時該屬性為 undefined。



<h2 id="cancelOrder" class="api-property api-property--method  "><span class="api-property__name">cancelOrder</span><span class="api-property__args">(methodName)</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
creep.move(LEFT);
creep.cancelOrder('move');
// 該 creep 本 tick 將不會移動。
```

取消當前 tick 已經調用的操作。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>methodName</code></td><td>string</td><td><p>要取消的 creep 方法名稱。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>該操作已被成功取消。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該 creep 的所有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
<tr><td><code>ERR_NOT_FOUND</code></td><td>-5</td><td><p>要取消的方法名稱未找到。</p>
</td></tr>
</tbody></table>



<h2 id="delete" class="api-property api-property--method  "><span class="api-property__name">delete</span><span class="api-property__args">([cancel])</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
Game.powerCreeps['PowerCreep1'].delete();
```

從您的賬戶中永久刪除一個 power creep。在刪除時 creep 應處於未孵化狀態。該 creep 並不會被立刻刪除，而是會啟動一個 24 小時的刪除倒計時 (詳見 [`deleteTime`](#PowerCreep.deleteTime))。你可以通過調用 `delete(true)` 來取消刪除。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>cancel</code></td><td>boolean</td><td><p>將其設為 true 來取消之前的刪除計劃。</p>
</td>
</tbody></table>
 

### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的所有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 仍然存活在這個世界上。</p>
</td></tr>
</tbody></table>



<h2 id="drop" class="api-property api-property--method  "><span class="api-property__name">drop</span><span class="api-property__args">(resourceType, [amount])</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
creep.drop(RESOURCE_ENERGY);
```

```javascript
// 丟棄所有資源
for(const resourceType in creep.carry) {
	creep.drop(resourceType);
}
```

將資源丟棄到地上。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>resourceType</code></td><td>string</td><td><p><code>RESOURCE_*</code>常量之一。</p>
</td>
<tr><td><code>amount (可選)</code></td><td>number</td><td><p>要被丟棄的資源數量。如果為空，則所有該類型資源都會被丟棄。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個creep的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>該 creep 上攜帶的資源數量小於給定的 amount。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>resourceType 不是一個有效的 <code>RESOURCE_*</code> 常量。</p>
</td></tr>
</tbody></table>




```javascript
Game.powerCreeps['PowerCreep1'].usePower(PWR_GENERATE_OPS);
```


<h2 id="enableRoom" class="api-property api-property--method  "><span class="api-property__name">enableRoom</span><span class="api-property__args">(controller)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
powerCreep.enableRoom(powerCreep.room.controller);
```

在該房間啟用 power。房間控制器應位於相鄰的地塊上。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>controller</code></td><td><a href="#StructureController">StructureController</a></td><td><p>房間控制器。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個creep的擁有者。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個控制器建築。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
</tbody></table>



<h2 id="move" class="api-property api-property--method  "><span class="api-property__name">move</span><span class="api-property__args">(direction)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
creep.move(RIGHT);
```

```javascript
const path = creep.pos.findPathTo(Game.flags.Flag1);
if(path.length > 0) {
	creep.move(path[0].direction);
}
```

```javascript
creep1.move(TOP);
creep1.pull(creep2);
creep2.move(creep1);
```

使 creep 朝指定方向移動一個地塊。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>direction</code></td><td><a href="#Creep">Creep</a>|number</td><td><p>一個相鄰的 creep 或者下列常量之一：
                    <ul>
                        <li><code>TOP</code></li>
                        <li><code>TOP_RIGHT</code></li>
                        <li><code>RIGHT</code></li>
                        <li><code>BOTTOM_RIGHT</code></li>
                        <li><code>BOTTOM</code></li>
                        <li><code>BOTTOM_LEFT</code></li>
                        <li><code>LEFT</code></li>
                        <li><code>TOP_LEFT</code></li>
                    </ul></p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個creep的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標 creep 距離過遠。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>提供的方向不正確。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>該 creep 的疲勞(fatigue)計數器不為零。</p>
</td></tr>
</tbody></table>




<h2 id="moveByPath" class="api-property api-property--method  "><span class="api-property__name">moveByPath</span><span class="api-property__args">(path)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
const path = spawn.room.findPath(spawn, source);
creep.moveByPath(path);
```

```javascript
if(!creep.memory.path) {
    creep.memory.path = creep.pos.findPathTo(target);
}
creep.moveByPath(creep.memory.path);
```

使用預先定義的路徑進行移動。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>array|string</td><td><p><a href="#Room.findPath"><code>Room.findPath</code></a>、<a href="#RoomPosition.findPathTo"><code>RoomPosition.findPathTo</code></a> 或 <a href="#PathFinder.PathFinder-search"><code>PathFinder.search</code></a> 的返回值。數組和序列化的字符串都可以接受。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個creep的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
<tr><td><code>ERR_NOT_FOUND</code></td><td>-5</td><td><p>指定的路徑與該 creep 的位置不匹配。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p><code>path</code> 不是一個有效的路徑數組。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>該 creep 的疲勞(fatigue)計數器不為零。</p>
</td></tr>
</tbody></table>




<h2 id="moveTo" class="api-property api-property--method  "><span class="api-property__name">moveTo</span><span class="api-property__args">(x, y, [opts])<br>(target, [opts])</span>
        <div class="api-property__cpu api-property__cpu--3" title="这种方法的CPU成本很高。"></div>
        </h2>

```javascript
creep.moveTo(10, 20);
```

```javascript
creep.moveTo(Game.flags.Flag1);
```

```javascript
creep.moveTo(new RoomPosition(25, 20, 'W10N5'));
```

```javascript
creep.moveTo(pos, {reusePath: 50});
```

```javascript
// 優先使用緩存路徑進行移動
for(const name in Game.creeps) {
    Game.creeps[name].moveTo(target, {noPathFinding: true});
}

// 僅當有足夠 CPU 時才執行尋路
if(Game.cpu.tickLimit - Game.cpu.getUsed() > 20) {
    for(const name in Game.creeps) {
        Game.creeps[name].moveTo(target);
    }
}
```

在本房間內查詢到目標的最佳路徑並向目標移動。該方法是 <a href="#RoomPosition.findPathTo">pos.findPathTo( )</a> <a href="#Creep.move">move( )</a> 的調用簡寫。如果目標在其他房間，則相應的出口將被當做目標(在本房間中)。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>目標在 creep 所在房間中的 x 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>目標在 creep 所在房間中的 y 坐標。</p>
</td>
<tr><td><code>target</code></td><td>object</td><td><p>可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。 The position doesn&#39;t have to be in the same room with the creep.</p>
</td>
<tr><td><code>opts (可選)</code></td><td>object</td><td><p>包含可選項的對象：
                    <ul>
                        <li>
                            <div class="api-arg-title">reusePath</div>
                            <div class="api-arg-type">number</div>
                            <div class="api-arg-desc">此選項將緩存前方多個 tick 將要移動的路徑。該操作可以節省 cpu 時間，但是會導致 creep 的反應變慢。路徑被緩存到 creep 內存中的 <code>_move</code> 屬性裡。<code>reusePath</code> 的值定義了要緩存前方多少 tick 的移動路徑。默認值為 5。增加該值來節省更多的 CPU。減少該值來使移動更加連貫。設置為 0 來禁用路徑重用。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">serializeMemory</div>
                            <div class="api-arg-type">boolean</div>
                            <div class="api-arg-desc">如果 <code>reusePath</code> 啟用並且該值設為 true，重用的路徑將會使用 <a href="#Room.Room-serializePath"><code>Room.serializePath</code></a> 進行序列化並儲存在內存中。默認值為 true。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">noPathFinding</div>
                            <div class="api-arg-type">boolean</div>
                            <div class="api-arg-desc">如果該選擇設為 true 並且內存中沒有重用路徑時，<code>moveTo</code> 將會返回 <code>ERR_NOT_FOUND</code>。在某些情況下，這會節省大量的 CPU 時間。默認值為 false。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">visualizePathStyle</div>
                            <div class="api-arg-type">object</div>
                            <div class="api-arg-desc">使用 <a href="#RoomVisual.poly"><code>RoomVisual.poly</code></a> 來在 creep 的移動路線上畫一條線。你可以提供一個空對象或者自定義樣式參數。默認的樣式如下：
                                <pre class="language-javascript"><code>{
    fill: &#39;transparent&#39;,
    stroke: &#39;#fff&#39;,
    lineStyle: &#39;dashed&#39;,
    strokeWidth: .15,
    opacity: .1
}</code></pre>
                            </div>
                        </li>
                        <li>任何 <a href="#Room.findPath"><code>Room.findPath</code></a> 方法支持的可選項。</li>
                    </ul></p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個creep的擁有者。</p>
</td></tr>
<tr><td><code>ERR_NO_PATH</code></td><td>-2</td><td><p>沒有找到可以抵達目標的路徑。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
<tr><td><code>ERR_NOT_FOUND</code></td><td>-5</td><td><p>該 creep 沒有找到可重用的路徑。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>提供了無效目標。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>該 creep 的疲勞(fatigue)計數器不為零。</p>
</td></tr>
</tbody></table>




<h2 id="notifyWhenAttacked" class="api-property api-property--method  "><span class="api-property__name">notifyWhenAttacked</span><span class="api-property__args">(enabled)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
Game.powerCreeps['PC1'].notifyWhenAttacked(true);
```

當 creep 受到攻擊時切換自動通知。通知將發送到您的帳戶郵箱。默認情況下啟用。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>enabled</code></td><td>boolean</td><td><p>是否啟用通知。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個creep的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p><code>enable</code> 參數不是 boolean 值。</p>
</td></tr>
</tbody></table>



<h2 id="pickup" class="api-property api-property--method  "><span class="api-property__name">pickup</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
if(target) {
    if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

撿起一個物品 (如撿起一些能量)。目標必須在緊鄰 creep 的正方形區域中或者和 creep 在相同位置。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Resource">Resource</a></td><td><p>要撿起的目標對象。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個creep的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個有效的可拾取對象。</p>
</td></tr>
<tr><td><code>ERR_FULL</code></td><td>-8</td><td><p>該 creep 已無法存儲更多資源。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
</tbody></table>





<h2 id="rename" class="api-property api-property--method  "><span class="api-property__name">rename</span><span class="api-property__args">(name)</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
Game.powerCreeps['PC1'].rename('PC1X');
```

重命名 power creep。該 creep 必須尚未出生。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>name</code></td><td>string</td><td><p>power creep 的新名字。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該 creep 的所有者。</p>
</td></tr>
<tr><td><code>ERR_NAME_EXISTS</code></td><td>-3</td><td><p>指定的名稱已經被已存在的 power creep 使用。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>power creep 已經出生。</p>
</td></tr>
</tbody></table>




<h2 id="renew" class="api-property api-property--method  "><span class="api-property__name">renew</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
let powerBank = Game.getObjectById('XXX');
Game.powerCreeps['PowerCreep1'].renew(powerBank);

```

立刻使用一個 Power Spawn 或者附近的 Power Bank 恢復最大的存活時間。目標必須在相鄰的地塊上。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#StructurePowerBank">StructurePowerBank</a> | <a href="#StructurePowerSpawn">StructurePowerSpawn</a></td><td><p>目標建築。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個creep的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個有效的 power bank 對象。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
</tbody></table>




<h2 id="say" class="api-property api-property--method  "><span class="api-property__name">say</span><span class="api-property__args">(message, [public])</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
const hostiles = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 10);
if(hostiles.length > 0) {
    creep.say('OMG!😨');
    creep.moveTo(Game.spawns['Spawn1']);
}
else {
    doWork(creep);
}
```

在該 creep 上顯示帶有指定內容的可視對話氣泡。此信息只會顯示 1 tick。你可以通過 <code>saying</code> 屬性獲取說過的最後一條信息。允許使用任何有效的 Unicode 字符。包括 <a href="http://unicode.org/emoji/charts/emoji-style.txt" target="_blank">emoji</a>。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>message</code></td><td>string</td><td><p>要顯示的信息，最長 10 字符。</p>
</td>
<tr><td><code>public (可選)</code></td><td>boolean</td><td><p>設置為 true 來讓其他玩家也能看到該信息。默認為 false。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個creep的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
</tbody></table>




<h2 id="spawn" class="api-property api-property--method  "><span class="api-property__name">spawn</span><span class="api-property__args">(powerSpawn)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
Game.powerCreeps['PowerCreep1'].spawn(Game.getObjectById('XXX'));
```

使用指定的 Power Spawn 孵化該 power creep。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>powerSpawn</code></td><td><a href="#StructurePowerSpawn">StructurePowerSpawn</a></td><td><p>您的 Power Spawn 建築。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>您不是該 creep 或者 spawn 的所有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 已經出生了。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>指定的對象不是一個 Power Spawn。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>由於 power creep 仍在冷卻中導致其無法生成。</p>
</td></tr>
<tr><td><code>ERR_RCL_NOT_ENOUGH</code></td><td>-14</td><td><p>房間控制等級（RCL）不足以使用該 spawn。</p>
</td></tr>
</tbody></table>




<h2 id="suicide" class="api-property api-property--method  "><span class="api-property__name">suicide</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>



立刻殺死一個 power creep。這不會永久的刪除它，而是將其轉為未孵化狀態，
所以你可以重新 [`spawn`](#PowerCreep.spawn) 它。



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個creep的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
</tbody></table>




<h2 id="transfer" class="api-property api-property--method  "><span class="api-property__name">transfer</span><span class="api-property__args">(target, resourceType, [amount])</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
if(creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	creep.moveTo(storage);
}
```

```javascript
// 轉移所有資源
for(const resourceType in creep.carry) {
	creep.transfer(storage, resourceType);
}
```

將資源從該 creep 轉移至其他對象。目標必須在緊鄰 creep 的正方形區域中。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Creep">Creep</a>, <a href="#Structure">Structure</a></td><td><p>The target object.</p>
</td>
<tr><td><code>resourceType</code></td><td>string</td><td><p><code>RESOURCE_*</code>常量之一。</p>
</td>
<tr><td><code>amount (可選)</code></td><td>number</td><td><p>要轉移的資源數量。如果省略，將轉移攜帶的全部指定資源。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個creep的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>該 creep 沒有攜帶足夠的資源。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個能存放指定資源的有效對象。</p>
</td></tr>
<tr><td><code>ERR_FULL</code></td><td>-8</td><td><p>目標無法攜帶更多的資源。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>resourceType 不是 <code>RESOURCE_*</code> 常量之一，或者 amount 數量錯誤。</p>
</td></tr>
</tbody></table>




<h2 id="upgrade" class="api-property api-property--method  "><span class="api-property__name">upgrade</span><span class="api-property__args">(power)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
Game.powerCreeps['PowerCreep1'].upgrade(PWR_GENERATE_OPS);
```
升級該 creep，給它添加一個新的 power 能力或者升級已存在的 power 能力。
你賬戶中需要有一個空閒的 Power Level 才能執行該操作。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>power</code></td><td>number</td><td><p>要升級的 power，<code>PWR_*</code> 常量之一。</p>
</td>
</tbody></table>


### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該 creep 的所有者。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>您賬戶中的 Power Level 不足。</p>
</td></tr>
<tr><td><code>ERR_FULL</code></td><td>-8</td><td><p>該 creep 的等級不允許升級指定的 power，或者 creep 已經到達了最大等級。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>指定了無效的 power ID。</p>
</td></tr>
</tbody></table>



<h2 id="usePower" class="api-property api-property--method  "><span class="api-property__name">usePower</span><span class="api-property__args">(power, [target])</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
Game.powerCreeps['PowerCreep1'].usePower(PWR_GENERATE_OPS);
```

```javascript
Game.powerCreeps['PowerCreep1'].usePower(PWR_OPERATE_SPAWN, Game.spawns['Spawn1']);
```

在指定目標上附加該 creep 的 power。
你只能在沒有控制器或者 [power-enabled](#PowerCreep.enableRoom) 的控制器所在的房間中使用 power。
同一 tick 中只能使用一種 power，每個 `usePower` 調用都將覆蓋前一個。
如果目標擁有較低或相同等級的效果，則將已存在的效果覆蓋。如果已存在的效果等級更高，則返回一個錯誤碼。

[可用 power 的完整列表](/power.html#Powers)   


<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>power</code></td><td>number</td><td><p>要使用的 power 能力，<code>PWR_*</code>常量之一。</p>
</td>
<tr><td><code>target</code></td><td><a href="#RoomObject">RoomObject</a></td><td><p>房間中的指定目標。</p>
</td>
</tbody></table>


### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該 creep 的所有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 creep 還沒有出生。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>該 creep 沒有足夠的資源來使用這個 power。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>指定了無效的目標。</p>
</td></tr>
<tr><td><code>ERR_FULL</code></td><td>-8</td><td><p>目標擁有相同或更高等級的已激活效果。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>指定目標距離過遠。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>該房間控制器還沒有啟用 power。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>該 power 能力仍在冷卻中。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>該 creep 沒有指定的 power 能力。</p>
</td></tr>
</tbody></table>


<h2 id="withdraw" class="api-property api-property--method  "><span class="api-property__name">withdraw</span><span class="api-property__args">(target, resourceType, [amount])</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
if(creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	creep.moveTo(storage);
}
```

從建築(structure)或是墓碑(tombstone)中拿取資源。目標必須在緊鄰 creep 的正方形區域中。多個 creep 可以在同一 tick 裡從相同對象中拿取資源。你的 creep 同樣也可以從敵對建築/墓碑中拿取資源，如果它上面沒有敵對的 rampart 的話。

此方法不應該被用來在 creep 之間轉移資源。想要在 creep 之間轉移，請對攜帶資源的 creep 執行 [`transfer`](#Creep.transfer) 方法。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Structure">Structure</a>, <a href="#Tombstone">Tombstone</a></td><td><p>目標對象。</p>
</td>
<tr><td><code>resourceType</code></td><td>string</td><td><p><code>RESOURCE_*</code>常量之一。</p>
</td>
<tr><td><code>amount (可選)</code></td><td>number</td><td><p>被傳遞資源的數量。如果沒有這個參數，傳遞全部可用數量的資源。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是此 creep 的所有者，或者目標位於敵方 rampart 之下。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 power creep 還沒有出生。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>目標中沒有足夠數量的資源。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個能存儲指定資源的對象。</p>
</td></tr>
<tr><td><code>ERR_FULL</code></td><td>-8</td><td><p>此 creep 的存儲已經滿了。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>resourceType 不是 <code>RESOURCE_*</code> 常量之一, 或者 amount 數量錯誤。</p>
</td></tr>
</tbody></table>




