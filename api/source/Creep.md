# Creep  


creep 是你的單位, creep 可以移動、采集能量、建造建築、攻擊其他 creep 以及執行其他動作。每個 creep 都由最多 50 個身體部件構成，身體部件的類型如下：

![](img/bodyparts.png)   

<table class="table gameplay-info">
    <tbody>
    <tr>
        <th style="width: 20%;">身體部件</th>
        <th style="width: 10%;">孵化成本</th>
        <th>每個部件效果</th>
    </tr>
    <tr>
        <td><code style="background: #333; color: #a9b7c6;">MOVE</code></td>
        <td>50</td>
        <td>每 tick 減少 2 點疲憊值</td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #ffe56d;">WORK</code></td>
        <td>100</td>
        <td>
            <p>每 tick 從能量源采集 2 單位能量。</p>
            <p>每 tick 從礦區采集 1 單位礦物。</p>
            <p>每 tick 增加工地建設進度 5 點，花費 5 單位能量。</p>
            <p>每 tick 增加建築 100 耐久度，花費 1 單位能量。</p>
            <p>每 tick 拆減建築 50 點耐久，並返還 0.25 單位能量。</p>
            <p>每 tick 提高控制器升級進度 1 點，花費 1 單位能量。</p>
        </td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #777;">CARRY</code></td>
        <td>50</td>
        <td>攜帶最多 50 單位資源。</td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #f93842;">ATTACK</code></td>
        <td>80</td>
        <td>對相鄰的 creep 或建築造成 30 點傷害。</td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #5d80b2;">RANGED_ATTACK</code></td>
        <td>150</td>
        <td>
            <p>單個目標時，每 tick 對 creep 或建築造成 10 點傷害，范圍為 3 格。</p>
            <p>多個目標時，每 tick 對范圍內所有 creep 與建築造成 1-4-10 點傷害，具體傷害取決於距離，范圍為 3 格。</p>
        </td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #65fd62;">HEAL</code></td>
        <td>250</td>
        <td>治療對象可為自己或其它 creep。自愈或治療相鄰 creep 時每 tick 恢復 12 點耐久，一定距離內遠程治療每 tick 恢復 4 點耐久。</td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #b99cfb;">CLAIM</code></td>
        <td>600</td>
        <td>
            <p>佔領一個中立房間的控制器。</p>
            <p>每部件每 tick 使己方對中立房間控制器的預定時間增加 1 tick，或使其他玩家的預定時間減少 1 tick。</p>
            <p>每部件每 tick 使其他玩家控制器降級計數器加速 300 tick。</p>
            <p>注：擁有該部件的 creep 壽命只有 600 tick，且無法被 renew。</p>
        </td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #fff;">TOUGH</code></td>
        <td>10</td>
        <td>無附加效果，唯一作用是增加 creep 的最大耐久值。可被強化以承受更多傷害。</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.md %}


{% api_property body array %}



一個描述了該 creep 身體部件的數組，每一個數組元素都擁有如下的屬性:

{% api_method_params %}
boost : string | undefined
如果該身體部件被強化(boost)了，則該屬性指定了強化所用的化合物類型。化合物為 <code>RESOURCE_*</code> 常量之一。 <a href="/resources.html">了解更多</a>
===
type : string
身體部件常量之一。
===
hits : number
該身體部件剩余的生命值。
{% endapi_method_params %}


{% api_property carry object '{"deprecated": true}' %}

[`Creep.store`](#Creep.store) 的別名。


{% api_property carryCapacity number '{"deprecated": true}' %}

[`Creep.store.getCapacity()`](#Store.getCapacity) 的別名。


{% api_property fatigue number %}



每次移動的疲勞值指示器，當該值大於零時 creep 無法移動。



{% api_property hits number %}



當前的 creep 生命值。



{% api_property hitsMax number %}



該 creep 的最大生命值。



{% api_property id string %}



一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。



{% api_property memory any %}

```javascript
creep.memory.task = 'building';
```

指向 <code>Memory.creeps[creep.name]</code> 的鏈接。你可以用它來快速訪問該 creep 的特定內存對象。 <a href="/global-objects.html#Memory-object">點此了解更多關於 memory 的信息</a>



{% api_property my boolean %}



該 creep 屬於您還是其他人。



{% api_property name string %}



creep 的名字。您可以在創建一個新的 creep 時給它取名，名稱一旦指定無法更改。此名稱是 <a href="#Game.creeps">Game.creeps</a> 對象中指向該 creep 對象的哈希鍵。你可以使用它來快速訪問到該 creep。



{% api_property owner object %}



該 creep 的所有者信息，包含以下屬性：

{% api_method_params %}
username : string
所有者姓名。
{% endapi_method_params %}


{% api_property saying string %}


creep 所說的最後一句話。



{% api_property spawning boolean %}



該 creep 是否仍在孵化中。

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    goHarvest(creep);
}
```

一個包含了該建築中所存儲的貨物的 [`Store`](#Store) 對象。


{% api_property ticksToLive number %}



該 creep 還有多少 tick 死亡。



{% api_method attack 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
if(target) {
    if(creep.attack(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

使用近戰攻擊其他 creep、超能(power) creep 或建築。需要 <code>ATTACK</code> 身體部件。如果目標在 rampart 中，則優先攻擊 rampart。目標必須與 creep 相鄰，如果目標是一個帶有 <code>ATTACK</code> 身體的 creep 並且沒有自己沒有在 rampart 中，則該目標會自動進行反擊。

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>, <a href="#Structure">Structure</a>
要攻擊的目標
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_TARGET | 這個目標不是一個有效的攻擊目標。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NO_BODYPART | 這個 creep 身上沒有 <code>ATTACK</code> 部件。
{% endapi_return_codes %}



{% api_method attackController 'target' A %}

```javascript
if(creep.room.controller && !creep.room.controller.my) {
    if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

攻擊時，每個 <code>CLAIM</code> 身體部件都能使得房間控制器的降級計時器降低 300 tick，或者將預定計時器降低 1 tick。如果受到攻擊的控制器已經有所屬者，則接下來的 1000 tick 將無法升級(upgrade)或再次進行攻擊。目標必須與 creep 相鄰。

{% api_method_params %}
target : <a href="#Structure">Structure</a>
目標房間控制器對象。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_TARGET | 該目標不存在有效的所屬者或者預訂者對象。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NO_BODYPART | 這個 creep 身上沒有 <code>CLAIM</code> 部件。
ERR_TIRED | 您必須等待控制器可以被再次攻擊。
{% endapi_return_codes %}



{% api_method build 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
if(target) {
    if(creep.build(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

使用自己攜帶的能量來在目標工地上建造一個建築。需要 <code>WORK</code> 和 <code>CARRY</code> 身體部件。目標必須位於以 creep 為中心的 7*7 正方形區域內。

{% api_method_params %}
target : <a href="#ConstructionSite">ConstructionSite</a>
待建造的目標工地。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_NOT_ENOUGH_RESOURCES | 這個creep沒有攜帶任何能量。
ERR_INVALID_TARGET | 該目標不是一個有效的建築工地(construction site)或者此處無法建造建築(有可能是 creep 站在該地塊上導致的)。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NO_BODYPART | 這個 creep 身上沒有 <code>WORK</code> 部件。
{% endapi_return_codes %}



{% api_method cancelOrder 'methodName' 0 %}

```javascript
creep.move(LEFT);
creep.cancelOrder('move');
// creep 本 tick 將不會移動
```

取消當前 tick 中給出的某個指令。

{% api_method_params %}
methodName : string
需要被取消的 creep 方法名。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作被成功取消了。
ERR_NOT_FOUND | 找不到給出的指令名。
{% endapi_return_codes %}



{% api_method claimController 'target' A %}

```javascript
if(creep.room.controller) {
    if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

佔領一個中立的房間。需要 <code>CLAIM</code> 身體部件。目標必須與 creep 相鄰。你需要有對應的全局控制等級(Global Control Level)才能佔領新的房間。如果你沒有足夠的 GCL。請考慮 <a href="#reserveController">預定(reserving)</a> 該房間。<a href="/control.html#Global-Control-Level">點擊了解更多</a>

{% api_method_params %}
target : <a href="#StructureController">StructureController</a>
目標控制中心對象。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_TARGET | 目標不是一個有效的中立控制中心對象。
ERR_FULL | 你不能在新手區佔領超過3個房間。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NO_BODYPART | 這個 creep 身上沒有 <code>CLAIM</code> 部件。
ERR_GCL_NOT_ENOUGH | 你的全局控制等級不足。
{% endapi_return_codes %}



{% api_method dismantle 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_STRUCTURES,
	{filter: {structureType: STRUCTURE_WALL}});
if(target) {
    if(creep.dismantle(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

拆解任意可以建造的建築（即使是敵人的）並且返回 50% 其修理所花的能量。需要 <code>WORK</code> 身體部件。如果 creep 有空余的 <code>CARRY</code> 身體部件，則會直接將能量轉移進去；否則能量將掉落在地上。目標必須與 creep 相鄰。

**譯者注**：拆解效率和 `WORK` 部件的數量正相關。

{% api_method_params %}
target : <a href="#Structure">Structure</a>
目標建築。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_TARGET | 目標不是一個有效的建築對象。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NO_BODYPART | 這個 creep 身上沒有 <code>WORK</code> 部件。
{% endapi_return_codes %}



{% api_method drop 'resourceType, [amount]' A %}

```javascript
creep.drop(RESOURCE_ENERGY);
```

```javascript
// 丟棄身上所有資源
for(const resourceType in creep.carry) {
	creep.drop(resourceType);
}
```

將資源丟棄到地上。

{% api_method_params %}
resourceType : string
<code>RESOURCE_*</code> 常量之一。
===
amount (可選) : number
丟棄資源的數量。如果沒有這個參數，丟棄全部資源。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_ARGS | resourceType不是一個有效的<code>RESOURCE_*</code>常量。
ERR_NOT_ENOUGH_RESOURCES | 這個creep沒有足夠的資源。
{% endapi_return_codes %}



{% api_method generateSafeMode 'controller' A %}

```javascript
if(creep.generateSafeMode(creep.room.controller) == ERR_NOT_IN_RANGE) {
    creep.moveTo(creep.room.controller);
}

```

向房間控制器添加一個新的安全模式激活次數。creep 必須與房間控制器相鄰並且帶有 1000 ghodium 資源。

{% api_method_params %}
target : <a href="#StructureController">StructureController</a>
目標控制中心。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_NOT_ENOUGH_RESOURCES | 這個 creep 沒有足夠的 ghodium。
ERR_INVALID_TARGET | 目標不是一個有效的控制中心對象。
ERR_NOT_IN_RANGE | 目標太遠了。
{% endapi_return_codes %}



{% api_method getActiveBodyparts 'type' 0 %}

```javascript
const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
    filter: function(object) {
        return object.getActiveBodyparts(ATTACK) == 0;
    }
});
if(target) {
    creep.moveTo(target);
}
```

獲取指定類型可用的身體部件數量。完全毀壞的部件不會被計算。

{% api_method_params %}
type : string
一個身體部件類型，下列身體部件類型常量之一：
					<ul>
						<li><code>MOVE</code></li>
						<li><code>WORK</code></li>
						<li><code>CARRY</code></li>
						<li><code>ATTACK</code></li>
						<li><code>RANGED_ATTACK</code></li>
						<li><code>HEAL</code></li>
						<li><code>TOUGH</code></li>
					</ul>

{% endapi_method_params %}


### 返回值

身體部件的數量。

{% api_method harvest 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
if(target) {
    if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

從 source 中采集能量或者從 mineral 或 deposit 中采集資源。需要 <code>WORK</code> 身體部件。如果 creep 有空余的 <code>CARRY</code> 身體，則會自動將采集到的資源轉移進去；否則將會掉落在地上。目標必須與 creep 相鄰。

{% api_method_params %}
target : <a href="#Source">Source</a>, <a href="#Mineral">Mineral</a>, <a href="#Deposit">Deposit</a>
要采集的對象。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該 creep 的所有者，或者其他玩家已經佔領或者預定了該房間的控制器。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_NOT_FOUND | 未找到 extractor。你必須建造一個 extractor 來開采礦物。<a href="/resources.html">了解更多</a>
ERR_NOT_ENOUGH_RESOURCES | 目標中已經沒有可采集的能量或者礦物。
ERR_INVALID_TARGET | 目標不是有效的 source 或者 mineral 對象。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_TIRED | extractor 仍在冷卻中。
ERR_NO_BODYPART | 這個 creep 身上沒有 <code>WORK</code> 部件。
{% endapi_return_codes %}



{% api_method heal 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
    filter: function(object) {
        return object.hits < object.hitsMax;
    }
});
if(target) {
    if(creep.heal(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

治療自己或者其他 creep。這將恢復目標 creep 受損身體部件的功能，並恢復已損失的生命值(hits)。需要 <code>HEAL</code> 身體部件。目標必須與 creep 相鄰。

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>
目標 creep 對象。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_TARGET | 目標不是有效的 creep 對象。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NO_BODYPART | 這個 creep 身上沒有 <code>HEAL</code> 部件。
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

使 creep 朝指定方向移動一個地塊。需要 <code>MOVE</code> 身體部件，或者其他 creep 在其附近並<a href="#Creep.pull">拉動</a>該 creep。如果你對著一個相鄰 creep 調用了 <code>move</code> 方法，將會使本 creep 跳過 <code>ERR_TIRED</code> 和 <code>ERR_NO_BODYPART</code> 檢查; 否則將跳過 <code>ERR_NOT_IN_RANGE</code> 檢查。

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
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_TIRED | 該 creep 的疲勞（fatigue）計數器不為零。
ERR_NO_BODYPART | 該 creep 沒有 <code>MOVE</code> 身體部件。
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

使用預先定義的路徑進行移動。需要 <code>MOVE</code> 身體部件。

{% api_method_params %}
path : array|string
從 <a href="#Room.findPath"><code>Room.findPath</code></a>, <a href="#RoomPosition.findPathTo"><code>RoomPosition.findPathTo</code></a> 或 <a href="#PathFinder.search"><code>PathFinder.search</code></a> 方法返回的路徑值，數組或序列字符串形式都可接受。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_NOT_FOUND | 指定的路徑與該 creep 的位置不匹配。
ERR_INVALID_ARGS | <code>path</code> 不是一個有效的路徑數組。
ERR_TIRED | 該 creep 的疲勞（fatigue）計數器不為零。
ERR_NO_BODYPART | 該 creep 沒有 <code>MOVE</code> 身體部件。
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

在本房間內查詢到目標的最佳路徑並向目標移動。該方法是 <a href="#RoomPosition.findPathTo">pos.findPathTo( )</a> <a href="#Creep.move">move( )</a> 的調用簡寫。如果目標在其他房間，則相應的出口將被當做目標(在本房間中)。需要 <code>MOVE</code> 身體部件。

{% api_method_params %}
x : number
目標在 creep 所在房間中的 x 坐標。
===
y : number
目標在 creep 所在房間中的 y 坐標。
===
target : object
可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。該位置不必和 creep 在同一房間。
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
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_TIRED | 該 creep 的疲勞（fatigue）計數器不為零。
ERR_NO_BODYPART | 該 creep 沒有 <code>MOVE</code> 身體部件。
ERR_INVALID_TARGET | 提供了無效目標。
ERR_NO_PATH | 沒有找到可以抵達目標的路徑。
ERR_NOT_FOUND | 該 creep 沒有找到可重用的路徑。
{% endapi_return_codes %}



{% api_method notifyWhenAttacked 'enabled' A %}

```javascript
if(creep.memory.role == 'scout') {
	creep.notifyWhenAttacked(false);
}
else {
	creep.notifyWhenAttacked(true);
}
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
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
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

撿起一個物品 (如撿起一些能量)。需要 <code>CARRY</code> 身體部件。目標必須與 creep 相鄰或者和 creep 在相同位置。

{% api_method_params %}
target : <a href="#Resource">Resource</a>
要撿起的目標對象。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_TARGET | 目標不是一個有效的可拾取對象。
ERR_FULL | 該 creep 已無法存儲更多資源。
ERR_NOT_IN_RANGE | 目標太遠了。
{% endapi_return_codes %}



{% api_method pull 'target' 0 %}

```javascript
creep1.move(TOP);
creep1.pull(creep2);
creep2.move(creep1);
```

```javascript
const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
    filter: function(object) {
        return (object.getActiveBodyparts(MOVE) == 0) && 
            object.memory.destinationId &&
            !object.pos.isNearTo(Game.getObjectById(object.memory.destinationId));
    }
});
if(target) {
    if(creep.pull(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    } else {
        target.move(creep);
        if(creep.pos.isNearTo(Game.getObjectById(target.memory.destinationId))) {
            creep.move(creep.pos.getDirectionTo(target));
        } else {
            creep.moveTo(Game.getObjectById(target.memory.destinationId));
        }
    }
}
```

幫助其他 creep 跟隨該 creep。目標 creep 移動產生的疲勞值將由該 creep 承擔。需要 <code>MOVE</code> 身體部件。目標必須與 creep 相鄰。該 creep 必須<a href="#Creep.move">移動</a>到其他地方，目標 creep 也必須朝該 creep 移動。

{% api_method_params %}
target : <a href="#Creep">Creep</a>
目標 creep。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_TARGET | 提供了無效目標。
ERR_NOT_IN_RANGE | 目標太遠了。
{% endapi_return_codes %}



{% api_method rangedAttack 'target' A %}

```javascript
const targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
if(targets.length > 0) {
    creep.rangedAttack(targets[0]);
}

```

遠程攻擊其他 creep 或者建築。需要 <code>RANGED_ATTACK</code> 身體部件。如果目標在 rampart 中，則 rampart 將被優先攻擊。目標必須位於以 creep 為中心的 7*7 正方形區域內。

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>, <a href="#Structure">Structure</a>
要攻擊的目標。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_TARGET | 這個目標不是一個有效的攻擊目標。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NO_BODYPART | 該 creep 沒有 <code>RANGED_ATTACK</code> 身體部件。
{% endapi_return_codes %}



{% api_method rangedHeal 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
    filter: function(object) {
        return object.hits < object.hitsMax;
    }
});
if(target) {
    creep.moveTo(target);
    if(creep.pos.isNearTo(target)) {
        creep.heal(target);
    }
    else {
        creep.rangedHeal(target);
    }
}
```

遠程治療其他 creep。這將恢復目標 creep 受損身體部件的功能，並恢復已損失的生命值(hits)。需要 <code>HEAL</code> 身體部件。目標必須位於以 creep 為中心的 7*7 正方形區域內。

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>
目標 creep 對象。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_TARGET | 目標不是一個有效的creep對象。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NO_BODYPART | 這個 creep 身上沒有 <code>HEAL</code> 部件。
{% endapi_return_codes %}



{% api_method rangedMassAttack '' A %}

```javascript
const targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
if(targets.length > 0) {
    creep.rangedMassAttack();
}
```

對以該 creep 為中心，3 格范圍內的所有敵方 creep 和建築進行攻擊。需要 <code>RANGED_ATTACK</code> 身體部件。對目標造成的傷害隨距離的增加而衰減。友方單位不會受到影響。



### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_NO_BODYPART | 這個 creep 身上沒有 <code>RANGED_ATTACK</code> 部件。
{% endapi_return_codes %}



{% api_method repair 'target' A %}

```javascript
const targets = creep.room.find(FIND_STRUCTURES, {
    filter: object => object.hits < object.hitsMax
});

targets.sort((a,b) => a.hits - b.hits);

if(targets.length > 0) {
    if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(targets[0]);
    }
}
```

使用攜帶的能量修復受損建築。需要 <code>WORK</code> 和 <code>CARRY</code> 身體部件。目標必須位於以 creep 為中心的 7*7 正方形區域內。

{% api_method_params %}
target : <a href="#Structure">Structure</a>
要修復的目標建築。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 該 creep 依然在孵化中。
ERR_NOT_ENOUGH_RESOURCES | 該 creep 沒有攜帶任何能量。
ERR_INVALID_TARGET | 目標不是一個有效的 structure 對象。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NO_BODYPART | 該 creep 身上沒有 <code>WORK</code> 部件。
{% endapi_return_codes %}



{% api_method reserveController 'target' A %}

```javascript
if(creep.room.controller) {
    if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

暫時阻止其他玩家佔領該房間控制器並且將 source 的能量上限恢復至正常容量。每 tick 執行該命令都可以讓控制器的不可佔領時間增加，增加的 tick 等同於 <code>CLAIM</code> 身體部件的數量。最大的預定時間為 5,000 tick。目標必須與 creep 相鄰。

{% api_method_params %}
target : <a href="#StructureController">StructureController</a>
要預定的目標控制器對象。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_TARGET | 目標不是一個有效的中立房間控制器對象。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NO_BODYPART | 這個 creep 身上沒有 <code>CLAIM</code> 部件。
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
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
{% endapi_return_codes %}



{% api_method signController 'target, text' A %}

```javascript
if(creep.room.controller) {
    if(creep.signController(creep.room.controller, "I'm going to claim this room in a few days. I warned ya!") == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

用對所有玩家可見的任意文本對控制器進行簽名。該文本將顯示在世界地圖的房間 UI 中。並可通過 api 進行訪問。你可以簽名無主甚至敵對玩家的控制器。目標必須與 creep 相鄰。傳遞一個空字符串來移除簽名。

{% api_method_params %}
target : <a href="#StructureController">StructureController</a>
要簽名的目標控制器對象。
===
text : string
簽名文本，最多 100 字符，之後的內容將被截斷。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_INVALID_TARGET | 目標不是一個有效的控制器對象。
ERR_NOT_IN_RANGE | 目標太遠了。
{% endapi_return_codes %}



{% api_method suicide '' A %}



立刻殺死該 creep。



### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
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

將資源從該 creep 轉移至其他對象。目標必須與 creep 相鄰。

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>, <a href="#Structure">Structure</a>
目標對象。
===
resourceType : string
<code>RESOURCE_*</code> 常量之一。
===
amount (可選) : number
要轉移的資源數量。如果省略，將轉移攜帶的全部指定資源。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個 creep 的擁有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_NOT_ENOUGH_RESOURCES | 該 creep 沒有攜帶足夠的資源。
ERR_INVALID_TARGET | 目標不是一個能存放指定資源的有效對象。
ERR_FULL | 目標無法攜帶更多的資源。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_INVALID_ARGS | resourceType 不是 <code>RESOURCE_*</code> 常量之一，或者 amount 數量錯誤。
{% endapi_return_codes %}



{% api_method upgradeController 'target' A %}

```javascript
if(creep.room.controller) {
    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

使用攜帶的能量將您的控制器升級到新的等級。升級控制器將同時提高你的全局控制等級(Global Control Level)。需要 <code>WORK</code> 和 <code>CARRY</code> 身體部件。目標必須位於以 creep 為中心的 7*7 正方形區域內。

一個完全升級的 8 級控制器每 tick 最多接受 15 能量的升級，無論 creep 的能力有沒有超過。該值限制了當前 tick 所有 creep 執行 <code>upgradeController</code> 積累的總能量值。可以使用 <a href="/resources.html">ghodium 化合物強化</a> 來提高此上限。

升級控制器會把它的 `ticksToDowngrade` 計時器提高 100 tick。該計時器必須填滿才能提升控制器等級。

{% api_method_params %}
target : <a href="#StructureController">StructureController</a>
要進行升級的目標控制器。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該 creep 或目標控制器的所有者。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_NOT_ENOUGH_RESOURCES | 這個creep沒有攜帶任何能量。
ERR_INVALID_TARGET | 目標不是有效的控制器對象，或控制器的升級被阻滯了。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NO_BODYPART | 這個 creep 身上沒有 <code>WORK</code> 部件。
{% endapi_return_codes %}



{% api_method withdraw 'target, resourceType, [amount]' A %}

```javascript
if(creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	creep.moveTo(storage);
}
```

從建築(structure)或是墓碑(tombstone)中拿取資源。目標必須與 creep 相鄰。多個 creep 可以在同一 tick 裡從相同對象中拿取資源。你的 creep 同樣也可以從敵對建築/墓碑中拿取資源，如果它上面沒有敵對的 rampart 的話。

此方法不應該被用來在 creep 之間轉移資源。想要在 creep 之間轉移，請對攜帶資源的 creep 執行 [`transfer`](#Creep.transfer) 方法。

{% api_method_params %}
target : <a href="#Structure">Structure</a>, <a href="#Tombstone">Tombstone</a>, <a href="#Ruin">Ruin</a>
目標對象。
===
resourceType : string
<code>RESOURCE_*</code> 常量之一。
===
amount (可選) : number
被傳遞資源的數量。如果沒有這個參數，傳遞全部可用數量的資源。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是此 creep 的所有者，或者目標位於敵方 rampart 之下。
ERR_BUSY | 這個 creep 依然在孵化中。
ERR_NOT_ENOUGH_RESOURCES | 目標中沒有足夠數量的資源。
ERR_INVALID_TARGET | 目標不是一個能存儲指定資源的對象。
ERR_FULL | 此 creep 的存儲已經滿了。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_INVALID_ARGS | resourceType 不是 <code>RESOURCE_*</code> 常量之一, 或者 amount 數量錯誤。
{% endapi_return_codes %}
