# Room

一個代表了你的單位和建築所在房間的對象。
它可以被用來「環顧四周」，查找路徑等。所有 `RoomObject` 都有一個鏈接到其所在房間 `Room` 實例的屬性 `room`。

{% api_property controller '<a href="#StructureController">StructureController</a>' %}



該房間中的控制器（Controller）建築，如果其不存在則返回 undefined。



{% api_property energyAvailable 'number' %}



本房間中所有 spawn 和 extension 中的可用能量總額。



{% api_property energyCapacityAvailable 'number' %}



本房間中所有 spawn 和 extension 的容量上限 <code>energyCapacity</code> 總額。


{% api_property memory 'any' %}

```javascript
room.memory.stage = 2;
```

<code>Memory.rooms[room.name]</code> 的簡寫。你可以用它來快速訪問到該房間特定的內存數據對象。<a href="/global-objects.html#Memory-object">點此了解有關內存的更多信息</a>。



{% api_property name 'string' %}



房間名稱。



{% api_property storage '<a href="#StructureStorage">StructureStorage</a>' %}



該房間中的 Storage 建築，如果其不存在則返回 undefined。



{% api_property terminal '<a href="#StructureTerminal">StructureTerminal</a>' %}



該房間中的 Terminal 建築，如果其不存在則返回 undefined。



{% api_property visual '<a href="#RoomVisual">RoomVisual</a>' %}


該房間的 <a href="#RoomVisual">RoomVisual</a> 對象。您可以使用該對象在房間中繪制簡單的形狀 (線條，圓，文本標簽)。



{% api_method Room.serializePath 'path' 1 %}

```javascript
const path = spawn.pos.findPathTo(source);
Memory.path = Room.serializePath(path);
creep.moveByPath(Memory.path);
```

將路徑數組序列化為適合存儲在內存中的短字符串形式。

{% api_method_params %}
path : array
<code><a href="#Room.findPath">Room.findPath</a></code> 返回的路徑數組。
{% endapi_method_params %}


### 返回值

參數路徑的序列化字符串。

{% api_method Room.deserializePath 'path' 1 %}

```javascript
const path = Room.deserializePath(Memory.path);
creep.moveByPath(path);
```

將短字符串形式的路徑反序列化為路徑數組。

{% api_method_params %}
path : string
一個序列化路徑字符串。
{% endapi_method_params %}


### 返回值

一個路徑數組

{% api_method createConstructionSite 'x, y, structureType, [name]|pos, structureType, [name]' A %}

```javascript
Game.rooms.sim.createConstructionSite(10, 15, STRUCTURE_ROAD);
```

```javascript
Game.rooms.sim.createConstructionSite(10, 15, STRUCTURE_SPAWN,
    'MySpawn2');
```

在指定位置創建一個新的 <a href="#ConstructionSite">ConstructionSite</a>。

{% api_method_params %}
x : number
X 坐標。
===
y : number
Y 坐標。
===
pos : object
可以為 <a href="#RoomPosition">RoomPosition</a>  對象或任何包含 <a href="#RoomPosition">RoomPosition</a> 的對象。
===
structureType : string
<code>STRUCTURE_*</code> 常量之一。
===
name (可選) : string
建築的名稱，該建築必須支持設置名字（當前僅有 spawn）。最長不能超過 100 個字符。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_INVALID_TARGET | T該建築無法被放置在指定位置。
ERR_FULL | 你已經放置了太多建築工地。其上限為 100。
ERR_INVALID_ARGS | 不正確的位置。
ERR_NOT_OWNER | 該房間被敵對玩家佔領（claim）或預定（reserve）。
ERR_RCL_NOT_ENOUGH | 房間控制器級別不足。<a href="/control.html">了解更多</a>
{% endapi_return_codes %}



{% api_method createFlag 'x, y, [name], [color], [secondaryColor]|pos, [name], [color], [secondaryColor]' A %}

```javascript
Game.rooms.sim.createFlag(5, 12, 'Flag1');
```

在指定位置創建一個新的 <a href="#Flag">Flag</a>。

{% api_method_params %}
x : number
X 坐標。
===
y : number
Y 坐標。
===
pos : object
可以為 <a href="#RoomPosition">RoomPosition</a>  對象或任何包含 <a href="#RoomPosition">RoomPosition</a> 的對象。
===
name (可選) : string
新旗幟的名稱。它應該是唯一的，即 <code>Game.flags</code> 不應該包含擁有相同名稱（哈希鍵）的其他旗幟。如果未定義，則會生成隨機名稱。最長不得超過 100 字符。
===
color (可選) : string
新旗幟的顏色。應為 <code>COLOR_*</code> 常量之一。默認值為 <code>COLOR_WHITE</code>。
===
secondaryColor (可選) : string
新旗幟的次要顏色。應為 <code>COLOR_*</code> 常量之一。默認值等於 <code>color</code> 屬性值。
{% endapi_method_params %}


### 返回值

新旗幟的名稱，或者下列錯誤碼之一：
{% api_return_codes %}
ERR_NAME_EXISTS | 該名稱已被現有的旗幟使用。
ERR_INVALID_ARGS | 位置、名稱或者顏色不正確。
ERR_FULL | 你放置了太多旗幟，每個玩家最多允許放置 10000 個旗幟。
{% endapi_return_codes %}



{% api_method find 'type, [opts]' 2 %}

```javascript
const targets = creep.room.find(FIND_DROPPED_RESOURCES);
if(targets.length) {
    creep.moveTo(targets[0]);
    creep.pickup(targets[0]);
}
```

```javascript
const extensions = Game.spawns['Spawn1'].room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: STRUCTURE_EXTENSION }
});
console.log('Spawn has '+extensions.length+' extensions available');
```

```javascript
const targets = creep.room.find(FIND_HOSTILE_CREEPS, {
    filter: function(object) {
        return object.getActiveBodyparts(ATTACK) == 0;
    }
});
```

查找房間中指定類型的所有對象。在應用自定義的 filter 之前，搜索結果會被自動緩存到指定的房間和類型，自動緩存將持續到本 tick 結束。

{% api_method_params %}
type : number
<code>FIND_*</code> 常量之一。
===
opts (可選) : object
包含下列可選項的對象：
					<ul>
						<li>
							<div class="api-arg-title">filter</div>
							<div class="api-arg-type">object, function, string</div>
							<div class="api-arg-desc">將會使用 <a href="https://lodash.com/docs#filter">Lodash.filter</a> 方法對結果列表進行篩選。</div>
						</li>
					</ul>

{% endapi_method_params %}


### 返回值

找到的對象數組

常量|類型|介紹
---|---|---
`FIND_EXIT_TOP` | RoomPosition | 位於房間頂部的出口位置。
`FIND_EXIT_RIGHT` | RoomPosition | 位於房間右側的出口位置。
`FIND_EXIT_BOTTOM` | RoomPosition | 位於房間底部的出口位置。
`FIND_EXIT_LEFT` | RoomPosition | 位於房間左側的出口位置。
`FIND_EXIT` | RoomPosition | 所有出口位置。
`FIND_CREEPS` | Creep | 所有 creep。
`FIND_MY_CREEPS` | Creep | 所有屬於您的 creep。
`FIND_HOSTILE_CREEPS` | Creep | 所有不屬於您的 creep。
`FIND_SOURCES_ACTIVE` | Source | 仍有能量的 source。
`FIND_SOURCES` | Source | 所有 source。
`FIND_DROPPED_RESOURCES` | Resource | 所有掉落的資源。
`FIND_STRUCTURES` | Structure | 所有建築。
`FIND_MY_STRUCTURES` | Structure | 所有屬於您的建築，不包含中立建築。
`FIND_HOSTILE_STRUCTURES` | Structure | 所有其他玩家的建築，不包含中立建築。
`FIND_FLAGS` | Flag | 所有旗幟。
`FIND_MY_SPAWNS` | StructureSpawn | 所有屬於您的 spawn。
`FIND_HOSTILE_SPAWNS` | StructureSpawn | 所有其他玩家的 spawn。
`FIND_CONSTRUCTION_SITES` | ConstructionSite | 所有建築工地。
`FIND_MY_CONSTRUCTION_SITES` | ConstructionSite | 所有屬於您的建築工地。
`FIND_HOSTILE_CONSTRUCTION_SITES` | ConstructionSite | 所有其他玩家的建築工地。
`FIND_MINERALS` | Mineral | 所有礦床。
`FIND_NUKES` | Nuke | 所有將落地的核彈。
`FIND_TOMBSTONES` | Tombstone | 所有墓碑。
`FIND_RUINS` | Ruin | 所有廢墟。

{% api_method findExitTo 'room' 3 %}

```javascript
const exitDir = creep.room.findExitTo(anotherCreep.room);
const exit = creep.pos.findClosestByRange(exitDir);
creep.moveTo(exit);

// 或簡寫為：
creep.moveTo(anotherCreep);
creep.moveTo(new RoomPosition(25,25, anotherCreep.pos.roomName));
```

找到通往另一個房間的出口方向。請注意，房間之間的移動不需要此方法，您只需將另一個房間中的目標傳遞給 <a href="#Creep.moveTo"><code>Creep.moveTo</code></a> 方法即可。

{% api_method_params %}
room : string, <a href="#Room">Room</a>
其他房間的名稱或者房間對象。
{% endapi_method_params %}


### 返回值

出口方向常量，下列之一：

* `FIND_EXIT_TOP`
* `FIND_EXIT_RIGHT`
* `FIND_EXIT_BOTTOM`
* `FIND_EXIT_LEFT`

或者下列錯誤碼之一：
{% api_return_codes %}
ERR_NO_PATH | 無法找到路徑。
ERR_INVALID_ARGS | 不正確的位置。
{% endapi_return_codes %}



{% api_method findPath 'fromPos, toPos, [opts]' 3 %}

```javascript
const path = creep.room.findPath(creep.pos, targetPos);
creep.move(path[0].direction);
```

```javascript
PathFinder.use(true);
const path = creep.room.findPath(creep.pos, targetPos, {
    costCallback: function(roomName, costMatrix) {
	    if(roomName == 'W1N5') {
		    // 將其他 creep 所處位置設置為可通過
			costMatrix.set(anotherCreep.pos.x, anotherCreep.pos.y, 0);
			// 將旗幟的位置設置為障礙
			costMatrix.set(flag.pos.x, flag.pos.y, 255);
			// 將位置 (25,20) 的移動成本設置為 50
			costMatrix.set(25, 20, 50);
		}
	}
});

```

```javascript
let path = creep.room.findPath(creep.pos, targetPos, {maxOps: 200});
if( !path.length || !targetPos.isEqualTo(path[path.length - 1]) ) {
    path = creep.room.findPath(creep.pos, targetPos, {
		maxOps: 1000, ignoreDestructibleStructures: true
	});
}
if( path.length ) {
    creep.move(path[0].direction);
}
```

使用跳點搜索算法 (<a href="http://en.wikipedia.org/wiki/Jump_point_search" target="_blank">Jump Point Search</a>) 在 fromPos 和 toPos 之間找到房間內的最佳路徑。

{% api_method_params %}
fromPos : <a href="#RoomPosition">RoomPosition</a>
起始位置。
===
toPos : <a href="#RoomPosition">RoomPosition</a>
結束位置。
===
opts (可選) : object
包含下列尋路可選項的對象：
<ul>
    <li>
        <div class="api-arg-title">ignoreCreeps</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">將其他 creep 所處的地塊視作可通行的。在附近有大量移動的 creep 或者其他一些情況時會很有用。默認值為 false。</div>
    </li>
    <li>
        <div class="api-arg-title">ignoreDestructibleStructures</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">將可破壞的建築 (constructed walls, ramparts, spawns, extensions) 所在的地塊視作可通行的。默認為 false。</div>
    </li>
    <li>
        <div class="api-arg-title">ignoreRoads</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">無視道路。啟用該項將加快搜索速度。默認值為 false。僅當新的 <a href="#PathFinder"><code>PathFinder</code></a> 啟用時才可用。</div>
    </li>
    <li>
        <div class="api-arg-title">costCallback</div>
        <div class="api-arg-type">function(string, CostMatrix)</div>
        <div class="api-arg-desc">你可以使用該回調在搜索過程中為任意房間修改 <a href="#PathFinder-CostMatrix"><code>CostMatrix</code></a>。回調接受兩個參數，<code>roomName</code> 和 <code>costMatrix</code>。使用 <code>costMatrix</code> 實例來修改地形移動成本。如果你從回調中返回了一個新的 matrix。它將會代替內置的緩存 matrix。僅當新的 <a href="#PathFinder"><code>PathFinder</code></a> 啟用時才可用。</div>
    </li>
    <li>
        <div class="api-arg-title">ignore</div>
        <div class="api-arg-type">array</div>
        <div class="api-arg-desc">一個數組，其元素為房間中的對象或者 <a href="#RoomPosition">RoomPosition</a> 對象，在搜索時會將該數組中的對象位置視作可通行的地塊。當啟用新的 <a href="#PathFinder"><code>PathFinder</code></a> 時無法使用。（請用 <code>costCallback</code> 選項代替）。</div>
    </li>
    <li>
        <div class="api-arg-title">avoid</div>
        <div class="api-arg-type">array</div>
        <div class="api-arg-desc">一個數組，其元素為房間中的對象或者 <a href="#RoomPosition">RoomPosition</a> 對象，在搜索時會將該數組中的對象位置視作無法通行的地塊。當啟用新的 <a href="#PathFinder"><code>PathFinder</code></a> 時無法使用。（請用 <code>costCallback</code> 選項代替）。</div>
    </li>
    <li>
        <div class="api-arg-title">maxOps</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">用於尋路的消耗上限。你可以限制在尋路上花費的 CPU 時間，基於 1 op ~ 0.001 CPU 的比例。默認值為 2000。</div>
    </li>
    <li>
        <div class="api-arg-title">heuristicWeight</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">應用於 A\* 算法 <code>F = G + weight \* H</code> 中的啟發式權重(weight)。在使用該選項之前您最好已經了解了 A\* 算法的底層實現！默認值為 1.2。</div>
    </li>
    <li>
        <div class="api-arg-title">serialize</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">如果為 true，將會使用 <code><a href="#Room.serializePath">Room.serializePath</a></code> 對結果路徑進行序列化。默認值為 false。</div>
    </li>
    <li>
        <div class="api-arg-title">maxRooms</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">尋路所允許的最大房間數。默認值為 16。僅當新的 <a href="#PathFinder"><code>PathFinder</code></a> 啟用時才可用。</div>
    </li>
    <li>
        <div class="api-arg-title">range</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">找到到達位於目標指定線性區域內位置的路徑。默認值為 0.</div>
    </li>
    <li>
        <div class="api-arg-title">plainCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">平原地形的移動成本。默認為 1。</div>
    </li>
    <li>
        <div class="api-arg-title">swampCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">沼澤地形的移動成本。默認為 5。</div>
    </li>
</ul>

{% endapi_method_params %}


### 返回值

一個數組，其元素為如下形式的路徑步驟：

```javascript-content
[
    { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
    { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
    { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT },
    ...
]
```

{% api_method getEventLog '[raw]' 1 %}

```javascript
// 追蹤特定 creep 執行的事件
_.filter(creep.room.getEventLog(), {objectId: creep.id});
```

```javascript
// 查找針對您的 creep 和建築的所有敵對行動
_.forEach(Game.rooms, room => {
    let eventLog = room.getEventLog();
    let attackEvents = _.filter(eventLog, {event: EVENT_ATTACK});
    attackEvents.forEach(event => {
        let target = Game.getObjectById(event.data.targetId);
        if(target && target.my) {
            console.log(event);
        }
    });
});
```

返回該房間中前一個 tick 發生的事件數組。

{% api_method_params %}
raw : boolean
如果該參數為 false 或者未定義，則本方法將會返回使用 `JSON.parse` 解析後的對象，在首次訪問時可能會造成一些 CPU 消耗（返回值會被緩存以方便後續調用）。如果 `raw` 為 true。則原始的 JSON 字符串將會被返回。
{% endapi_method_params %}


### 返回值

事件數組。每個事件都代表一個游戲動作，其格式如下：

```javascript-content
{
    event: EVENT_ATTACK,
    objectId: '54bff72ab32a10f73a57d017',
    data: { /* ... */ }
}
```

不同類型事件的 `data` 屬性都是不相同的，詳見下表：
<table>
    <tr>
        <th>事件</th><th>介紹</th>
    </tr>
    <tr>
        <td>`EVENT_ATTACK`</td>
        <td>
            一個 creep 或者建築攻擊了另一個對象。
            <ul>
                <li>`targetId` - 目標對象 ID</li>
                <li>`damage` - 造成的 hit 傷害量</li>
                <li>`attackType` - 下列常量之一：
                    <ul>
                        <li>`EVENT_ATTACK_TYPE_MELEE` - creep 使用 [attack](#Creep.attack) 進行了攻擊</li>
                        <li>`EVENT_ATTACK_TYPE_RANGED` - creep 使用 [rangedAttack](#Creep.rangedAttack) 進行了攻擊，或者 tower 使用 [attack](#StructureTower.attack) 進行了攻擊</li>
                        <li>`EVENT_ATTACK_TYPE_RANGED_MASS` - creep 使用 [rangedMassAttack](#Creep.rangedMassAttack) 進行了攻擊</li>
                        <li>`EVENT_ATTACK_TYPE_DISMANTLE` - creep 使用 [dismantle](#Creep.dismantle) 進行了攻擊</li>
                        <li>`EVENT_ATTACK_TYPE_HIT_BACK` - creep 反擊了其他 creep 的 [attack](#Creep.attack) 攻擊</li>
                        <li>`EVENT_ATTACK_TYPE_NUKE` - 核彈著陸</li>
                    </ul>
                </li></ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_OBJECT_DESTROYED`</td>
        <td>
            一個游戲對象被摧毀或是被消滅。
            <ul><li>`type` - 被摧毀對象的類型</li></ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_ATTACK_CONTROLLER`</td>
        <td>一個 creep 在該房間執行了 [`attackController`](#Creep.attackController)</td>
    </tr>
    <tr>
        <td>`EVENT_BUILD`</td>
        <td>
            一個 creep 在該房間執行了 [`build`](#Creep.build)。
            <ul>
                <li>`targetId` - 目標對象的 ID</li>
                <li>`amount` - 取得的建造進度</li>
                <li>`energySpent` - 此次行動消耗的能量</li></ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_HARVEST`</td>
        <td>
            一個 creep 在該房間執行了 [`harvest`](#Creep.harvest)。
            <ul>
                <li>`targetId` - 目標對象的 ID</li>
                <li>`amount` - 資源采集量</li></ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_HEAL`</td>
        <td>
            一個 creep 或者 tower 治療了另一個 creep。
            <ul>
                <li>`targetId` - 目標對象的 ID</li>
                <li>`amount` - hit 治療量</li>
                <li>`healType` - 下列常量之一:
                    <ul>
                        <li>`EVENT_HEAL_TYPE_MELEE` - 一個 creep 使用 [heal](#Creep.heal) 進行了治療</li>
                        <li>`EVENT_HEAL_TYPE_RANGED` - 一個 creep 使用 [rangedHeal](#Creep.rangedHeal)進行了治療，或者一個 tower 使用 [heal](#StructureTower.heal) 進行了治療</li>
                    </ul>
                </li></ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_REPAIR`</td>
        <td>
            一個 creep 或者 tower 修復了建築。
            <ul>
                <li>`targetId` - 目標對象 ID</li>
                <li>`amount` - hit 修復量</li>
                <li>`energySpent` - 此次行動消耗的能量</li></ul>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_RESERVE_CONTROLLER`</td>
        <td>
            一個 creep 在該房間執行了 [`reserveController`](#Creep.reserveController)。
            <ul>
                <li>`amount` - 取得的預定時間</li></ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_UPGRADE_CONTROLLER`</td>
        <td>
            一個 creep 在該房間執行了 [`upgradeController`](#Creep.upgradeController)。
            <ul>
                <li>`amount` - 獲得的控制點數（control points）</li>
                <li>`energySpent` - 此次行動消耗的能量</li></ul>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_EXIT`</td>
        <td>
            一個 creep 移動到了其他房間。
            <ul>
                <li>`room` - 目標房間的名稱</li>
                <li>`x`, `y` - creep 將要出現在其他房間的坐標位置</li></ul>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_TRANSFER`</td>
        <td>
            一個 link 執行了 [`transferEnergy`](https://docs.screeps.com/api/#StructureLink.transferEnergy) 或者一個 creep 執行了 [`transfer`](#Creep.transfer) 或 [`withdraw`](#Creep.withdraw)。
            <ul>
                <li>`targetId` - 目標對象 ID</li>
                <li>`resourceType` - 被轉移的資源類型</li>
                <li>`amount` - 被轉移的資源總量</li>
            </ul>
        </td>
    </tr>
</table>

{% api_method getPositionAt 'x, y' 1 %}

```javascript
const pos = Game.rooms.sim.getPositionAt(5,12);
const source = pos.findClosestByRange(FIND_SOURCES_ACTIVE);
```

獲取指定位置的 <a href="#RoomPosition">RoomPosition</a>  對象。

{% api_method_params %}
x : number
X 坐標。
===
y : number
Y 坐標。
{% endapi_method_params %}


### 返回值

一個
<a href="#RoomPosition">RoomPosition</a>
對象，如果無法獲取則返回 null。

{% api_method getTerrain '' 0 %}

```javascript
const terrain = Game.rooms['W1N1'].getTerrain();
switch(terrain.get(10,15)) {
    case TERRAIN_MASK_WALL:
        break;
    case TERRAIN_MASK_SWAMP:
        break;
    case 0:
        break;
}
```

獲取一個 <a href="#Room-Terrain">`Room.Terrain`</a> 對象，可以用它來快速訪問房間內的靜態地形數據。即使沒有指定房間的視野，您依舊可以使用該方法訪問它的地形數據，該方法適用於游戲世界中的所有房間。

### 返回值

返回一個新的 <a href="#Room-Terrain">`Room.Terrain`</a> 對象。

{% api_method lookAt 'x, y|target' 2 %}

```javascript
const look = creep.room.lookAt(target);
look.forEach(function(lookObject) {
    if(lookObject.type == LOOK_CREEPS &&
       lookObject[LOOK_CREEPS].getActiveBodyparts(ATTACK) == 0) {
        creep.moveTo(lookObject.creep);
    }
});
```

獲取指定房間位置的對象數組。

{% api_method_params %}
x : number
該房間中的 X 坐標。
===
y : number
該房間中的 Y 坐標。
===
target : object
可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。
{% endapi_method_params %}


### 返回值

一個位於指定位置的對象數組，格式如下：

```javascript-content
[
    { type: 'creep', creep: {...} },
    { type: 'structure', structure: {...} },
    ...
    { type: 'terrain', terrain: 'swamp' }
]
```


{% api_method lookAtArea 'top, left, bottom, right, [asArray]' 2 %}

```javascript
const look = creep.room.lookAtArea(10,5,11,7);
```

獲取指定房間區域內的對象列表。

{% api_method_params %}
top : number
區域頂部邊界的 Y 坐標。
===
left : number
區域左側邊界的 X 坐標。
===
bottom : number
區域底部邊界的 Y 坐標。
===
right : number
區域右側邊界的 X 坐標。
===
asArray (可選) : boolean
設為 true 來獲得純數組形式。
{% endapi_method_params %}


### 返回值

如果 `asArray` 值為 false 或者未定義，則該方法以如下格式返回指定區域內的對象：

```javascript-content
// 10,5,11,7

{
    10: {
        5: [{ type: 'creep', creep: {...} },
            { type: 'terrain', terrain: 'swamp' }],
        6: [{ type: 'terrain', terrain: 'swamp' }],
        7: [{ type: 'terrain', terrain: 'swamp' }]
    },
    11: {
        5: [{ type: 'terrain', terrain: 'plain' }],
        6: [{ type: 'structure', structure: {...} },
            { type: 'terrain', terrain: 'swamp' }],
        7: [{ type: 'terrain', terrain: 'wall' }]
    }
}
```

如果 `asArray` 值為 true，則該方法以如下格式返回指定區域內的對象數組：

```javascript-content
[
    {x: 5, y: 10, type: 'creep', creep: {...}},
    {x: 5, y: 10, type: 'terrain', terrain: 'swamp'},
    {x: 6, y: 10, type: 'terrain', terrain: 'swamp'},
    {x: 7, y: 10, type: 'terrain', terrain: 'swamp'},
    {x: 5, y: 11, type: 'terrain', terrain: 'plain'},
    {x: 6, y: 11, type: 'structure', structure: {...}},
    {x: 6, y: 11, type: 'terrain', terrain: 'swamp'},
    {x: 7, y: 11, type: 'terrain', terrain: 'wall'}
]
```


{% api_method lookForAt 'type, x, y|type, target' 1 %}

```javascript
const found = creep.room.lookForAt(LOOK_CREEPS, target);
if(found.length && found[0].getActiveBodyparts(ATTACK) == 0) {
    creep.moveTo(found[0]);
}
```

在指定位置查找指定類型的對象。

{% api_method_params %}
type : string
<code>LOOK_*</code> 常量之一。
===
x : number
該房間中的 X 坐標。
===
y : number
該房間中的 Y 坐標。
===
target : object
可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。
{% endapi_method_params %}


### 返回值

在指定位置找到的指定類型的對象數組。

{% api_method lookForAtArea 'type, top, left, bottom, right, [asArray]' 1 %}

```javascript
const look = creep.room.lookForAtArea(LOOK_STRUCTURES,10,5,11,7);
```

在指定房間區域查找指定類型的對象列表。

{% api_method_params %}
type : string
<code>LOOK_*</code> 常量之一
===
top : number
區域頂部邊界的 Y 坐標。
===
left : number
區域左側邊界的 X 坐標。
===
bottom : number
區域底部邊界的 Y 坐標。
===
right : number
區域右側邊界的 X 坐標。
===
asArray (可選) : boolean
設為 true 來獲得純數組形式。
{% endapi_method_params %}


### 返回值

如果 `asArray` 值為 false 或者未定義，則該方法以如下格式返回指定區域內的對象：

```javascript-content
// 10,5,11,7

{
    10: {
        5: [{...}],
        6: undefined,
        7: undefined
    },
    11: {
        5: undefined,
        6: [{...}, {...}],
        7: undefined
    }
}
```

如果 `asArray` 值為 true，則該方法以如下格式返回指定區域內的對象數組：

```javascript-content
[
	{x: 5, y: 10, structure: {...}},
	{x: 6, y: 11, structure: {...}},
	{x: 6, y: 11, structure: {...}}
]
```
