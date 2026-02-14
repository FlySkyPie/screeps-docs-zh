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

{% api_method PowerCreep.create 'name, className' 1 %}

```javascript
PowerCreep.create('PowerCreep1', POWER_CLASS.OPERATOR);
```

向您賬戶中添加新的 Power Creep 實例。在添加之後默認為未孵化狀態，使用 [`spawn`](#PowerCreep.spawn) 方法在游戲世界中生成它。

您的賬戶中擁有至少一個可用的 Power Level 才能執行該操作。

{% api_method_params %}
name : string
新 power creep 的名字。最長不能超過 100 個字符。
===
className : string
新 power creep 的類型，`POWER_CLASS` 常量之一。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_ENOUGH_RESOURCES | 您的賬戶中沒有足夠的 Power Level。
ERR_INVALID_ARGS | 指定的 power creep 名稱超過長度，或者 power creep 的類型（class）無效。
ERR_NAME_EXISTS | 指定的 power creep 名稱已被使用。
{% endapi_return_codes %} 

{% page inherited/RoomObject.md %}


{% api_property carry object '{"deprecated": true}' %}

[`Creep.store`](#Creep.store) 的別名。


{% api_property carryCapacity number '{"deprecated": true}' %}

[`Creep.store.getCapacity()`](#Store.getCapacity) 的別名。

{% api_property className string %}
該 power creep 的類型，`POWER_CLASS` 常量之一。

{% api_property deleteTime number %}
該 creep 被從賬戶中永久刪除的時間戳，否則為 undefined。

{% api_property hits number %}
該 creep 當前的 hit 生命值。

{% api_property hitsMax number %}
該 creep 當前的最大生命值。

{% api_property id string %}
一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。

{% api_property level number %}
該 power creep 的等級。

{% api_property memory any %}

```javascript
creep.memory.task = 'building';
```

<code>Memory.powerCreeps[creep.name]</code> 的簡寫。您可以使用它來快速訪問該 creep 的特定內存數據對象。<a href="/global-objects.html#Memory-object">點此了解有關 memory 的更多信息</a>



{% api_property my boolean %}
您是否為該 creep 的所有者。



{% api_property name string %}
Power creep 的名字。您可以在創建一個新 power creep 時為其指定名稱，一旦指定無法修改（在 creep 存活時無法修改）。此名稱是 <a href="#Game.powerCreeps">Game.powerCreeps</a> 對象中指向該 creep 的哈希鍵。你可以使用它來快速訪問到該 creep。



{% api_property owner object %}
一個代表其擁有者信息的對象，包含以下屬性：

{% api_method_params %}
username : string
擁有者姓名。
{% endapi_method_params %}

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    goHarvest(creep);
}
```

一個包含了該 creep 所攜帶資源的 [`Store`](#Store) 對象。

{% api_property powers object %}
可用的 power，一個使用 power ID 作為鍵的對象，包含以下屬性：

{% api_method_params %}
level : number
該 power 的等級。
===
cooldown : number
剩余的冷卻時間，當 power creep 還沒有出生時為 undefined。
{% endapi_method_params %}


{% api_property saying string %}
該 creep 在最後一 tick 說過的話。

{% api_property shard string %}
該 power creep 孵化到的 shard 名稱，或者為 undefined。

{% api_property spawnCooldownTime number %}
```javascript
if(!(Game.powerCreeps['PowerCreep1'].spawnCooldownTime > Date.now())) {
    Game.powerCreeps['PowerCreep1'].spawn(powerSpawn);
}
```
在生成或者刪除 creep 時該時間戳可用。
在該 power creep 已經出生後為 undefined。

{% api_property ticksToLive number %}
在 creep 死亡並變為未孵化狀態前的剩余存活 tick 時長。在 creep 未孵化時該屬性為 undefined。



{% api_method cancelOrder 'methodName' 0 %}

```javascript
creep.move(LEFT);
creep.cancelOrder('move');
// 該 creep 本 tick 將不會移動。
```

取消當前 tick 已經調用的操作。

{% api_method_params %}
methodName : string
要取消的 creep 方法名稱。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 該操作已被成功取消。
ERR_NOT_OWNER | 你不是該 creep 的所有者。
ERR_BUSY | 該 power creep 還沒有出生。
ERR_NOT_FOUND | 要取消的方法名稱未找到。
{% endapi_return_codes %}


{% api_method delete '[cancel]' A %}

```javascript
Game.powerCreeps['PowerCreep1'].delete();
```

從您的賬戶中永久刪除一個 power creep。在刪除時 creep 應處於未孵化狀態。該 creep 並不會被立刻刪除，而是會啟動一個 24 小時的刪除倒計時 (詳見 [`deleteTime`](#PowerCreep.deleteTime))。你可以通過調用 `delete(true)` 來取消刪除。

{% api_method_params %}
cancel : boolean
將其設為 true 來取消之前的刪除計劃。
{% endapi_method_params %} 

### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的所有者。
ERR_BUSY | 該 power creep 仍然存活在這個世界上。
{% endapi_return_codes %}


{% api_method drop 'resourceType, [amount]' A %}

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

{% api_method_params %}
resourceType : string
<code>RESOURCE_*</code>常量之一。
===
amount (可選) : number
要被丟棄的資源數量。如果為空，則所有該類型資源都會被丟棄。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個creep的擁有者。
ERR_BUSY | 該 power creep 還沒有出生。
ERR_INVALID_ARGS | resourceType 不是一個有效的 <code>RESOURCE_*</code> 常量。
ERR_NOT_ENOUGH_RESOURCES | 該 creep 上攜帶的資源數量小於給定的 amount。
{% endapi_return_codes %}



```javascript
Game.powerCreeps['PowerCreep1'].usePower(PWR_GENERATE_OPS);
```


{% api_method enableRoom 'controller' A %}

```javascript
powerCreep.enableRoom(powerCreep.room.controller);
```

在該房間啟用 power。房間控制器應位於相鄰的地塊上。

{% api_method_params %}
controller : <a href="#StructureController">StructureController</a>
房間控制器。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個creep的擁有者。
ERR_INVALID_TARGET | 目標不是一個控制器建築。
ERR_NOT_IN_RANGE | 目標太遠了。
{% endapi_return_codes %}


{% api_method move 'direction' A %}

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

{% api_method_params %}
direction : <a href="#Creep">Creep</a>|number
一個相鄰的 creep 或者下列常量之一：
					<ul>
						<li><code>TOP</code></li>
						<li><code>TOP_RIGHT</code></li>
						<li><code>RIGHT</code></li>
						<li><code>BOTTOM_RIGHT</code></li>
						<li><code>BOTTOM</code></li>
						<li><code>BOTTOM_LEFT</code></li>
						<li><code>LEFT</code></li>
						<li><code>TOP_LEFT</code></li>
					</ul>

{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個creep的擁有者。
ERR_BUSY | 該 power creep 還沒有出生。
ERR_TIRED | 該 creep 的疲勞(fatigue)計數器不為零。
ERR_INVALID_ARGS | 提供的方向不正確。
ERR_NOT_IN_RANGE | 目標 creep 距離過遠。
{% endapi_return_codes %}



{% api_method moveByPath 'path' A %}

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

{% api_method_params %}
path : array|string
<a href="#Room.findPath"><code>Room.findPath</code></a>、<a href="#RoomPosition.findPathTo"><code>RoomPosition.findPathTo</code></a> 或 <a href="#PathFinder.PathFinder-search"><code>PathFinder.search</code></a> 的返回值。數組和序列化的字符串都可以接受。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個creep的擁有者。
ERR_BUSY | 該 power creep 還沒有出生。
ERR_NOT_FOUND | 指定的路徑與該 creep 的位置不匹配。
ERR_INVALID_ARGS | <code>path</code> 不是一個有效的路徑數組。
ERR_TIRED | 該 creep 的疲勞(fatigue)計數器不為零。
{% endapi_return_codes %}



{% api_method moveTo 'x, y, [opts]|target, [opts]' 3 %}

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

{% api_method_params %}
x : number
目標在 creep 所在房間中的 x 坐標。
===
y : number
目標在 creep 所在房間中的 y 坐標。
===
target : object
可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。 The position doesn't have to be in the same room with the creep.
===
opts (可選) : object
包含可選項的對象：
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
    fill: 'transparent',
    stroke: '#fff',
    lineStyle: 'dashed',
    strokeWidth: .15,
    opacity: .1
}</code></pre>
							</div>
						</li>
						<li>任何 <a href="#Room.findPath"><code>Room.findPath</code></a> 方法支持的可選項。</li>
					</ul>

{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個creep的擁有者。
ERR_BUSY | 該 power creep 還沒有出生。
ERR_TIRED | 該 creep 的疲勞(fatigue)計數器不為零。
ERR_INVALID_TARGET | 提供了無效目標。
ERR_NO_PATH | 沒有找到可以抵達目標的路徑。
ERR_NOT_FOUND | 該 creep 沒有找到可重用的路徑。
{% endapi_return_codes %}



{% api_method notifyWhenAttacked 'enabled' A %}

```javascript
Game.powerCreeps['PC1'].notifyWhenAttacked(true);
```

當 creep 受到攻擊時切換自動通知。通知將發送到您的帳戶郵箱。默認情況下啟用。

{% api_method_params %}
enabled : boolean
是否啟用通知。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個creep的擁有者。
ERR_BUSY | 該 power creep 還沒有出生。
ERR_INVALID_ARGS | <code>enable</code> 參數不是 boolean 值。
{% endapi_return_codes %}


{% api_method pickup 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
if(target) {
    if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

撿起一個物品 (如撿起一些能量)。目標必須在緊鄰 creep 的正方形區域中或者和 creep 在相同位置。

{% api_method_params %}
target : <a href="#Resource">Resource</a>
要撿起的目標對象。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個creep的擁有者。
ERR_BUSY | 該 power creep 還沒有出生。
ERR_INVALID_TARGET | 目標不是一個有效的可拾取對象。
ERR_FULL | 該 creep 已無法存儲更多資源。
ERR_NOT_IN_RANGE | 目標太遠了。
{% endapi_return_codes %}




{% api_method rename 'name' 0 %}

```javascript
Game.powerCreeps['PC1'].rename('PC1X');
```

重命名 power creep。該 creep 必須尚未出生。

{% api_method_params %}
name : string
power creep 的新名字。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該 creep 的所有者。
ERR_BUSY | power creep 已經出生。
ERR_NAME_EXISTS | 指定的名稱已經被已存在的 power creep 使用。
{% endapi_return_codes %}



{% api_method renew 'target' A %}

```javascript
let powerBank = Game.getObjectById('XXX');
Game.powerCreeps['PowerCreep1'].renew(powerBank);

```

立刻使用一個 Power Spawn 或者附近的 Power Bank 恢復最大的存活時間。目標必須在相鄰的地塊上。

{% api_method_params %}
target : <a href="#StructurePowerBank">StructurePowerBank</a> | <a href="#StructurePowerSpawn">StructurePowerSpawn</a>
目標建築。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個creep的擁有者。
ERR_BUSY | 該 power creep 還沒有出生。
ERR_INVALID_TARGET | 目標不是一個有效的 power bank 對象。
ERR_NOT_IN_RANGE | 目標太遠了。
{% endapi_return_codes %}



{% api_method say 'message, [public]' 0 %}

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

{% api_method_params %}
message : string
要顯示的信息，最長 10 字符。
===
public (可選) : boolean
設置為 true 來讓其他玩家也能看到該信息。默認為 false。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個creep的擁有者。
ERR_BUSY | 該 power creep 還沒有出生。
{% endapi_return_codes %}



{% api_method spawn 'powerSpawn' A %}

```javascript
Game.powerCreeps['PowerCreep1'].spawn(Game.getObjectById('XXX'));
```

使用指定的 Power Spawn 孵化該 power creep。

{% api_method_params %}
powerSpawn : <a href="#StructurePowerSpawn">StructurePowerSpawn</a>
您的 Power Spawn 建築。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 您不是該 creep 或者 spawn 的所有者。
ERR_BUSY | 該 power creep 已經出生了。
ERR_RCL_NOT_ENOUGH | 房間控制等級（RCL）不足以使用該 spawn。
ERR_INVALID_TARGET | 指定的對象不是一個 Power Spawn。
ERR_TIRED | 由於 power creep 仍在冷卻中導致其無法生成。
{% endapi_return_codes %}



{% api_method suicide '' A %}



立刻殺死一個 power creep。這不會永久的刪除它，而是將其轉為未孵化狀態，
所以你可以重新 [`spawn`](#PowerCreep.spawn) 它。



### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個creep的擁有者。
ERR_BUSY | 該 power creep 還沒有出生。
{% endapi_return_codes %}



{% api_method transfer 'target, resourceType, [amount]' A %}

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

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#Structure">Structure</a>
The target object.
===
resourceType : string
<code>RESOURCE_*</code>常量之一。
===
amount (可選) : number
要轉移的資源數量。如果省略，將轉移攜帶的全部指定資源。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個creep的擁有者。
ERR_BUSY | 該 power creep 還沒有出生。
ERR_NOT_ENOUGH_RESOURCES | 該 creep 沒有攜帶足夠的資源。
ERR_INVALID_TARGET | 目標不是一個能存放指定資源的有效對象。
ERR_FULL | 目標無法攜帶更多的資源。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_INVALID_ARGS | resourceType 不是 <code>RESOURCE_*</code> 常量之一，或者 amount 數量錯誤。
{% endapi_return_codes %}



{% api_method upgrade 'power' A %}

```javascript
Game.powerCreeps['PowerCreep1'].upgrade(PWR_GENERATE_OPS);
```
升級該 creep，給它添加一個新的 power 能力或者升級已存在的 power 能力。
你賬戶中需要有一個空閒的 Power Level 才能執行該操作。

{% api_method_params %}
power : number
要升級的 power，`PWR_*` 常量之一。
{% endapi_method_params %}

### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該 creep 的所有者。
ERR_NOT_ENOUGH_RESOURCES | 您賬戶中的 Power Level 不足。
ERR_FULL | 該 creep 的等級不允許升級指定的 power，或者 creep 已經到達了最大等級。
ERR_INVALID_ARGS | 指定了無效的 power ID。
{% endapi_return_codes %}


{% api_method usePower 'power, [target]' A %}

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


{% api_method_params %}
power : number
要使用的 power 能力，`PWR_*`常量之一。
===
target : <a href="#RoomObject">RoomObject</a>
房間中的指定目標。
{% endapi_method_params %}

### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該 creep 的所有者。
ERR_BUSY | 該 creep 還沒有出生。
ERR_NO_BODYPART | 該 creep 沒有指定的 power 能力。
ERR_TIRED | 該 power 能力仍在冷卻中。
ERR_NOT_ENOUGH_RESOURCES | 該 creep 沒有足夠的資源來使用這個 power。
ERR_INVALID_TARGET | 指定了無效的目標。
ERR_NOT_IN_RANGE | 指定目標距離過遠。
ERR_INVALID_ARGS | 該房間控制器還沒有啟用 power。
ERR_FULL | 目標擁有相同或更高等級的已激活效果。
{% endapi_return_codes %}

{% api_method withdraw 'target, resourceType, [amount]' A %}

```javascript
if(creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	creep.moveTo(storage);
}
```

從建築(structure)或是墓碑(tombstone)中拿取資源。目標必須在緊鄰 creep 的正方形區域中。多個 creep 可以在同一 tick 裡從相同對象中拿取資源。你的 creep 同樣也可以從敵對建築/墓碑中拿取資源，如果它上面沒有敵對的 rampart 的話。

此方法不應該被用來在 creep 之間轉移資源。想要在 creep 之間轉移，請對攜帶資源的 creep 執行 [`transfer`](#Creep.transfer) 方法。

{% api_method_params %}
target : <a href="#Structure">Structure</a>, <a href="#Tombstone">Tombstone</a>
目標對象。
===
resourceType : string
<code>RESOURCE_*</code>常量之一。
===
amount (可選) : number
被傳遞資源的數量。如果沒有這個參數，傳遞全部可用數量的資源。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是此 creep 的所有者，或者目標位於敵方 rampart 之下。
ERR_BUSY | 該 power creep 還沒有出生。
ERR_NOT_ENOUGH_RESOURCES | 目標中沒有足夠數量的資源。
ERR_INVALID_TARGET | 目標不是一個能存儲指定資源的對象。
ERR_FULL | 此 creep 的存儲已經滿了。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_INVALID_ARGS | resourceType 不是 <code>RESOURCE_*</code> 常量之一, 或者 amount 數量錯誤。
{% endapi_return_codes %}



