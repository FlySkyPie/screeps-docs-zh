# RoomPosition

表示房間中指定位置的對象。房間中的每個 `RoomObject` 都通過其 `pos` 屬性鏈接到對應的 `RoomPosition` 上。可以使用 [`Room.getPositionAt`](#Room.getPositionAt) 或者構造函數創建自定義地點的位置對象。

{% api_method constructor 'x, y, roomName' 0 %}

```javascript
const pos = new RoomPosition(10, 25, 'sim');

```

你可以使用其構造函數創建一個新的 <code>RoomPosition</code> 對象。

{% api_method_params %}
x : number
房間中的 X 坐標。
===
y : number
房間中的 Y 坐標。
===
roomName : string
房間名稱。
{% endapi_method_params %}



{% api_property roomName 'string' %}



所處房間的名稱。



{% api_property x 'number' %}



所處房間的 X 坐標。



{% api_property y 'number' %}



所處房間的 Y 坐標。


{% api_method createConstructionSite 'structureType, [name]' A %}

```javascript
Game.flags['Flag1'].pos.createConstructionSite(STRUCTURE_ROAD);
```
```javascript
Game.flags['Flag1'].pos.createConstructionSite(STRUCTURE_SPAWN, 'MySpawn2');
```

在指定位置創建新的 <a href="#ConstructionSite">ConstructionSite</a>。

{% api_method_params %}
structureType : string
<code>STRUCTURE_*</code> 常量之一。
===
name (可選) : string
建築的名稱，該建築必須支持設置名字（當前僅有 spawn）。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_INVALID_TARGET | 該建築無法被放置在指定位置。
ERR_FULL | 你已經放置了太多建築工地。其上限為 100。
ERR_INVALID_ARGS | 不正確的位置。
ERR_RCL_NOT_ENOUGH | 房間控制器等級不足。<a href="/control.html">了解更多</a>
{% endapi_return_codes %}



{% api_method createFlag '[name], [color], [secondaryColor]' A %}

```javascript
creep.pos.createFlag('Flag1');
```

在指定位置創建一個新的 <a href="#Flag">Flag</a>。

{% api_method_params %}
name (可選) : string
新旗幟的名稱。它應該是唯一的，即 <code>Game.flags</code> 不應該包含擁有相同名稱(哈希鍵)的不同旗幟。如果未定義，則會生成隨機名稱。最長不得超過 60 字符。
===
color (可選) : string
新旗幟的顏色。應為 <code>COLOR_*</code> 常量之一。默認值為 <code>COLOR_WHITE</code>。
===
secondaryColor (可選) : string
新旗幟的次要顏色。應為 <code>COLOR_*</code> 常量之一。默認值等於 <code>color</code> 屬性值。
{% endapi_method_params %}


### 返回值

新旗幟的名稱，或者下列錯誤碼之一：
<br>

{% api_return_codes %}
ERR_NAME_EXISTS | 該名稱已被現有的旗幟使用。
ERR_INVALID_ARGS | 位置或者顏色不正確。
{% endapi_return_codes %}



{% api_method findClosestByPath 'type, [opts]|objects, [opts]' 3 %}

```javascript
const target = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
creep.moveTo(target);
```

```javascript
const target = creep.pos.findClosestByPath(FIND_MY_SPAWNS, {maxOps: 500});
creep.moveTo(target);
```

```javascript
const target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
    filter: function(object) {
        return object.getActiveBodyparts(ATTACK) == 0;
    }
});
```

```javascript
const target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
    filter: { owner: { username: 'Invader' } }
});
```

```javascript
const targets = [
    Game.creeps.John,
    Game.creeps.Mike,
    room.getPositionAt(10,10)
];
const closest = creep.pos.findClosestByPath(targets);
```

查找到該位置路徑最短的對象。使用<a href="http://en.wikipedia.org/wiki/Jump_point_search" target="_blank">跳點搜索（Jump Point Search）算法</a>和 <a href="http://en.wikipedia.org/wiki/Dijkstra">Dijkstra's 算法</a>進行搜索。

{% api_method_params %}
type : number
詳見 <a href="#Room.find">Room.find</a>。
===
objects : array
要執行搜索的房間對象數組或者 <a href="#RoomPosition">RoomPosition</a> 對象數組。
===
opts (可選) : object
一個對象，包含了尋路選項（詳見 <a href="#Room.findPath">Room.findPath</a>），或下列屬性：
					<ul>
						<li>
							<div class="api-arg-title">filter</div>
							<div class="api-arg-type">object, function, string</div>
							<div class="api-arg-desc">只有通過篩選器的對象才會被使用，由 <a href="https://lodash.com/docs#filter">Lodash.filter</a> 執行篩選。</div>
						</li>
						<li>
							<div class="api-arg-title">algorithm</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">下列常量之一：
								<ul>
									<li><code>astar</code> 當可能存在的目標相對較少時運行速度更快；</li>
									<li><code>dijkstra</code> 當可能存在的目標較多或者附近就有最近的目標時，速度會更快。</li>
								</ul>
								默認算法是使用啟發法自行決定的。</div>
						</li>
					</ul>

{% endapi_method_params %}


### 返回值

返回找到的最近對象，沒找到則返回 null。

{% api_method findClosestByRange 'type, [opts]|objects, [opts]' 2 %}

```javascript
const target = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
creep.moveTo(target);
```

```javascript
const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
    filter: function(object) {
        return object.getActiveBodyparts(ATTACK) == 0;
    }
});
```

```javascript
const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
    filter: { owner: { username: 'Invader' } }
});
```

```javascript
const targets = [
    Game.creeps.John,
    Game.creeps.Mike,
    room.getPositionAt(10,10)
];
const closest = creep.pos.findClosestByRange(targets);
```

查找到該位置線性距離最短的對象。

{% api_method_params %}
type : number
See <a href="#Room.find">Room.find</a>.
===
objects : array
要執行搜索的房間對象數組或者 <a href="#RoomPosition">RoomPosition</a> 對象數組。
===
opts (可選) : object
一個對象，包含下列選項：
					<ul>
						<li>
							<div class="api-arg-title">filter</div>
							<div class="api-arg-type">object, function, string</div>
							<div class="api-arg-desc">只有通過篩選器的對象才會被使用，由 <a href="https://lodash.com/docs#filter">Lodash.filter</a> 執行篩選。</div>
						</li>
					</ul>

{% endapi_method_params %}


### 返回值

返回找到的最近對象，沒找到則返回 null。

{% api_method findInRange 'type, range, [opts]|objects, range, [opts]' 2 %}

```javascript
const targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
if(targets.length > 0) {
    creep.rangedAttack(targets[0]);
}
```

```javascript
const targets = [
    Game.creeps.John,
    Game.creeps.Mike,
    room.getPositionAt(10,10)
];
const inRangeTargets = creep.pos.findInRange(targets, 3);
```

查找在指定線性范圍中的所有對象。

{% api_method_params %}
type : number
詳見 <a href="#Room.find">Room.find</a>。
===
objects : array
要執行搜索的房間對象數組或者 <a href="#RoomPosition">RoomPosition</a> 對象數組。
===
range : number
范圍距離（半徑）。
===
opts (可選) : object
詳見 <a href="#Room.find">Room.find</a>。
{% endapi_method_params %}


### 返回值

找到的對象數組。

{% api_method findPathTo 'x, y, [opts]|target, [opts]' 3 %}


```javascript
const path = creep.pos.findPathTo(target);
creep.move(path[0].direction);
```

```javascript
let path = creep.pos.findPathTo(target, {maxOps: 200});
if( !path.length || !target.equalsTo(path[path.length - 1]) ) {
    path = creep.pos.findPathTo(target,
        {maxOps: 1000, ignoreDestructibleStructures: true});
}
if( path.length ) {
    creep.move(path[0].direction);
}
```

使用 <a href="http://en.wikipedia.org/wiki/Jump_point_search" target="_blank">跳點搜索（Jump Point Search）算法</a>查找到指定位置的最佳路徑。該方法是 <a href="#Room.findPath">Room.findPath</a> 的簡寫。如果目標在其他房間，則相應的出口將被作為目標。

{% api_method_params %}
x : number
該房間中的 X 坐標。
===
y : number
該房間中的 Y 坐標。
===
target : object
可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。
===
opts (可選) : object
一個對象，包含了尋路相關的選項標識 (查看 <a href="#Room.findPath">Room.findPath</a> 來獲得更多信息)。
{% endapi_method_params %}


### 返回值

一個如下格式的路徑步驟（path step）數組：
```javascript-content
[
    { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
    { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
    { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT },
    ...
]    
```


{% api_method getDirectionTo 'x,y|target' 1 %}

```javascript
const direction = creep.pos.getDirectionTo(target);
creep.move(direction);
```

獲取到指定位置的直線方向。

{% api_method_params %}
x : number
房間中的 X 坐標。
===
y : number
房間中的 Y 坐標。
===
target : object
可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。
{% endapi_method_params %}


### 返回值

某一個方向常量的數字值。

{% api_method getRangeTo 'x,y|target' 1 %}

```javascript
const range = creep.pos.getRangeTo(target);
if(range <= 3) {
    creep.rangedAttack(target);
}
```

獲取到指定位置的線性范圍。

{% api_method_params %}
x : number
房間中的 X 坐標。
===
y : number
房間中的 Y 坐標。
===
target : object
可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。
{% endapi_method_params %}


### 返回值

到指定位置的地塊數。

{% api_method inRangeTo 'x, y, range|target, range' 1 %}

```javascript
if(creep.pos.inRangeTo(target, 3)) {
    creep.rangedAttack(target);
}
```

檢查該位置是否在其他位置的指定范圍內。

{% api_method_params %}
x : number
房間中的 X 坐標。
===
y : number
房間中的 Y 坐標。
===
target : <a href="#RoomPosition">RoomPosition</a>
目標位置
===
range : number
范圍距離（半徑）。
{% endapi_method_params %}


### 返回值

一個布爾值。

{% api_method isEqualTo 'x,y|target' 1 %}

```javascript
if(creep.pos.isEqualTo(10,25)) {
    creep.move(RIGHT);
}
```

```javascript
if(creep.pos.isEqualTo(Game.flags.Flag1)) {
    creep.move(RIGHT);
}
```

檢查該位置是否和指定位置相同。

{% api_method_params %}
x : number
房間中的 X 坐標。
===
y : number
房間中的 Y 坐標。
===
target : object
可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。
{% endapi_method_params %}


### 返回值

一個布爾值。

{% api_method isNearTo 'x,y|target' 1 %}

```javascript
if(creep.pos.isNearTo(target)) {
    creep.transfer(target, RESOURCE_ENERGY);
}
```

檢查該位置是否在緊鄰指定位置的正方形區域內。類似於 <code>inRangeTo(target, 1)</code>。

{% api_method_params %}
x : number
房間中的 X 坐標。
===
y : number
房間中的 Y 坐標。
===
target : object
可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。
{% endapi_method_params %}


### 返回值

一個布爾值。

{% api_method look '' 2 %}

```javascript
const look = Game.flags.Flag1.pos.look();
look.forEach(function(lookObject) {
    if(lookObject.type == LOOK_CREEPS &&
       lookObject[LOOK_CREEPS].getActiveBodyparts(ATTACK) == 0) {
        creep.moveTo(lookObject.creep);
    }
});
```

獲取位於該位置的對象列表。



### 返回值

如下格式的數組，元素為位於該位置的所有對象。

```javascript-content
[
    { type: 'creep', creep: {...} },
    { type: 'structure', structure: {...} },
    ...
    { type: 'terrain', terrain: 'swamp' }
]
```


{% api_method lookFor 'type' 1 %}

```javascript
const found = Game.flags.Flag1.pos.lookFor(LOOK_CREEPS);
if(found.length && found[0].getActiveBodyparts(ATTACK) == 0) {
    creep.moveTo(found[0]);
}
```

獲取該位置上給定類型的對象列表。

{% api_method_params %}
type : string
<code>LOOK_*</code> 常量之一。
{% endapi_method_params %}


### 返回值

在該位置上找到的指定類型的對象數組。
