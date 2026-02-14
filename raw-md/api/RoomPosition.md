# RoomPosition

表示房間中指定位置的對象。房間中的每個 `RoomObject` 都通過其 `pos` 屬性鏈接到對應的 `RoomPosition` 上。可以使用 [`Room.getPositionAt`](#Room.getPositionAt) 或者構造函數創建自定義地點的位置對象。

<h2 id="constructor" class="api-property   "><span class="api-property__name">constructor</span><span class="api-property__args">(x, y, roomName)</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
const pos = new RoomPosition(10, 25, 'sim');

```

你可以使用其構造函數創建一個新的 <code>RoomPosition</code> 對象。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>房間中的 X 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>房間中的 Y 坐標。</p>
</td>
<tr><td><code>roomName</code></td><td>string</td><td><p>房間名稱。</p>
</td>
</tbody></table>




<h2 id="roomName" class="api-property api-property--property  "><span class="api-property__name">roomName</span><span class="api-property__type">string</span></h2>



所處房間的名稱。



<h2 id="x" class="api-property api-property--property  "><span class="api-property__name">x</span><span class="api-property__type">number</span></h2>



所處房間的 X 坐標。



<h2 id="y" class="api-property api-property--property  "><span class="api-property__name">y</span><span class="api-property__type">number</span></h2>



所處房間的 Y 坐標。


<h2 id="createConstructionSite" class="api-property api-property--method  "><span class="api-property__name">createConstructionSite</span><span class="api-property__args">(structureType, [name])</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
Game.flags['Flag1'].pos.createConstructionSite(STRUCTURE_ROAD);
```
```javascript
Game.flags['Flag1'].pos.createConstructionSite(STRUCTURE_SPAWN, 'MySpawn2');
```

在指定位置創建新的 <a href="#ConstructionSite">ConstructionSite</a>。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>structureType</code></td><td>string</td><td><p><code>STRUCTURE_*</code> 常量之一。</p>
</td>
<tr><td><code>name (可選)</code></td><td>string</td><td><p>建築的名稱，該建築必須支持設置名字（當前僅有 spawn）。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>該建築無法被放置在指定位置。</p>
</td></tr>
<tr><td><code>ERR_FULL</code></td><td>-8</td><td><p>你已經放置了太多建築工地。其上限為 100。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>不正確的位置。</p>
</td></tr>
<tr><td><code>ERR_RCL_NOT_ENOUGH</code></td><td>-14</td><td><p>房間控制器等級不足。<a href="/control.html">了解更多</a></p>
</td></tr>
</tbody></table>




<h2 id="createFlag" class="api-property api-property--method  "><span class="api-property__name">createFlag</span><span class="api-property__args">([name], [color], [secondaryColor])</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
creep.pos.createFlag('Flag1');
```

在指定位置創建一個新的 <a href="#Flag">Flag</a>。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>name (可選)</code></td><td>string</td><td><p>新旗幟的名稱。它應該是唯一的，即 <code>Game.flags</code> 不應該包含擁有相同名稱(哈希鍵)的不同旗幟。如果未定義，則會生成隨機名稱。最長不得超過 60 字符。</p>
</td>
<tr><td><code>color (可選)</code></td><td>string</td><td><p>新旗幟的顏色。應為 <code>COLOR_*</code> 常量之一。默認值為 <code>COLOR_WHITE</code>。</p>
</td>
<tr><td><code>secondaryColor (可選)</code></td><td>string</td><td><p>新旗幟的次要顏色。應為 <code>COLOR_*</code> 常量之一。默認值等於 <code>color</code> 屬性值。</p>
</td>
</tbody></table>



### 返回值

新旗幟的名稱，或者下列錯誤碼之一：
<br>

<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>ERR_NAME_EXISTS</code></td><td>-3</td><td><p>該名稱已被現有的旗幟使用。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>位置或者顏色不正確。</p>
</td></tr>
</tbody></table>




<h2 id="findClosestByPath" class="api-property api-property--method  "><span class="api-property__name">findClosestByPath</span><span class="api-property__args">(type, [opts])<br>(objects, [opts])</span>
        <div class="api-property__cpu api-property__cpu--3" title="这种方法的CPU成本很高。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>number</td><td><p>詳見 <a href="#Room.find">Room.find</a>。</p>
</td>
<tr><td><code>objects</code></td><td>array</td><td><p>要執行搜索的房間對象數組或者 <a href="#RoomPosition">RoomPosition</a> 對象數組。</p>
</td>
<tr><td><code>opts (可選)</code></td><td>object</td><td><p>一個對象，包含了尋路選項（詳見 <a href="#Room.findPath">Room.findPath</a>），或下列屬性：
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
                    </ul></p>
</td>
</tbody></table>



### 返回值

返回找到的最近對象，沒找到則返回 null。

<h2 id="findClosestByRange" class="api-property api-property--method  "><span class="api-property__name">findClosestByRange</span><span class="api-property__args">(type, [opts])<br>(objects, [opts])</span>
        <div class="api-property__cpu api-property__cpu--2" title="该方法的CPU开销中等。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>number</td><td><p>See <a href="#Room.find">Room.find</a>.</p>
</td>
<tr><td><code>objects</code></td><td>array</td><td><p>要執行搜索的房間對象數組或者 <a href="#RoomPosition">RoomPosition</a> 對象數組。</p>
</td>
<tr><td><code>opts (可選)</code></td><td>object</td><td><p>一個對象，包含下列選項：
                    <ul>
                        <li>
                            <div class="api-arg-title">filter</div>
                            <div class="api-arg-type">object, function, string</div>
                            <div class="api-arg-desc">只有通過篩選器的對象才會被使用，由 <a href="https://lodash.com/docs#filter">Lodash.filter</a> 執行篩選。</div>
                        </li>
                    </ul></p>
</td>
</tbody></table>



### 返回值

返回找到的最近對象，沒找到則返回 null。

<h2 id="findInRange" class="api-property api-property--method  "><span class="api-property__name">findInRange</span><span class="api-property__args">(type, range, [opts])<br>(objects, range, [opts])</span>
        <div class="api-property__cpu api-property__cpu--2" title="该方法的CPU开销中等。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>number</td><td><p>詳見 <a href="#Room.find">Room.find</a>。</p>
</td>
<tr><td><code>objects</code></td><td>array</td><td><p>要執行搜索的房間對象數組或者 <a href="#RoomPosition">RoomPosition</a> 對象數組。</p>
</td>
<tr><td><code>range</code></td><td>number</td><td><p>范圍距離（半徑）。</p>
</td>
<tr><td><code>opts (可選)</code></td><td>object</td><td><p>詳見 <a href="#Room.find">Room.find</a>。</p>
</td>
</tbody></table>



### 返回值

找到的對象數組。

<h2 id="findPathTo" class="api-property api-property--method  "><span class="api-property__name">findPathTo</span><span class="api-property__args">(x, y, [opts])<br>(target, [opts])</span>
        <div class="api-property__cpu api-property__cpu--3" title="这种方法的CPU成本很高。"></div>
        </h2>


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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>該房間中的 X 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>該房間中的 Y 坐標。</p>
</td>
<tr><td><code>target</code></td><td>object</td><td><p>可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。</p>
</td>
<tr><td><code>opts (可選)</code></td><td>object</td><td><p>一個對象，包含了尋路相關的選項標識 (查看 <a href="#Room.findPath">Room.findPath</a> 來獲得更多信息)。</p>
</td>
</tbody></table>



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


<h2 id="getDirectionTo" class="api-property api-property--method  "><span class="api-property__name">getDirectionTo</span><span class="api-property__args">(x,y)<br>(target)</span>
        <div class="api-property__cpu api-property__cpu--1" title="该方法具有较低的CPU开销。"></div>
        </h2>

```javascript
const direction = creep.pos.getDirectionTo(target);
creep.move(direction);
```

獲取到指定位置的直線方向。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>房間中的 X 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>房間中的 Y 坐標。</p>
</td>
<tr><td><code>target</code></td><td>object</td><td><p>可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。</p>
</td>
</tbody></table>



### 返回值

某一個方向常量的數字值。

<h2 id="getRangeTo" class="api-property api-property--method  "><span class="api-property__name">getRangeTo</span><span class="api-property__args">(x,y)<br>(target)</span>
        <div class="api-property__cpu api-property__cpu--1" title="该方法具有较低的CPU开销。"></div>
        </h2>

```javascript
const range = creep.pos.getRangeTo(target);
if(range <= 3) {
    creep.rangedAttack(target);
}
```

獲取到指定位置的線性范圍。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>房間中的 X 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>房間中的 Y 坐標。</p>
</td>
<tr><td><code>target</code></td><td>object</td><td><p>可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。</p>
</td>
</tbody></table>



### 返回值

到指定位置的地塊數。

<h2 id="inRangeTo" class="api-property api-property--method  "><span class="api-property__name">inRangeTo</span><span class="api-property__args">(x, y, range)<br>(target, range)</span>
        <div class="api-property__cpu api-property__cpu--1" title="该方法具有较低的CPU开销。"></div>
        </h2>

```javascript
if(creep.pos.inRangeTo(target, 3)) {
    creep.rangedAttack(target);
}
```

檢查該位置是否在其他位置的指定范圍內。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>房間中的 X 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>房間中的 Y 坐標。</p>
</td>
<tr><td><code>target</code></td><td><a href="#RoomPosition">RoomPosition</a></td><td><p>目標位置</p>
</td>
<tr><td><code>range</code></td><td>number</td><td><p>范圍距離（半徑）。</p>
</td>
</tbody></table>



### 返回值

一個布爾值。

<h2 id="isEqualTo" class="api-property api-property--method  "><span class="api-property__name">isEqualTo</span><span class="api-property__args">(x,y)<br>(target)</span>
        <div class="api-property__cpu api-property__cpu--1" title="该方法具有较低的CPU开销。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>房間中的 X 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>房間中的 Y 坐標。</p>
</td>
<tr><td><code>target</code></td><td>object</td><td><p>可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。</p>
</td>
</tbody></table>



### 返回值

一個布爾值。

<h2 id="isNearTo" class="api-property api-property--method  "><span class="api-property__name">isNearTo</span><span class="api-property__args">(x,y)<br>(target)</span>
        <div class="api-property__cpu api-property__cpu--1" title="该方法具有较低的CPU开销。"></div>
        </h2>

```javascript
if(creep.pos.isNearTo(target)) {
    creep.transfer(target, RESOURCE_ENERGY);
}
```

檢查該位置是否在緊鄰指定位置的正方形區域內。類似於 <code>inRangeTo(target, 1)</code>。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>房間中的 X 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>房間中的 Y 坐標。</p>
</td>
<tr><td><code>target</code></td><td>object</td><td><p>可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。</p>
</td>
</tbody></table>



### 返回值

一個布爾值。

<h2 id="look" class="api-property api-property--method  "><span class="api-property__name">look</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--2" title="该方法的CPU开销中等。"></div>
        </h2>

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


<h2 id="lookFor" class="api-property api-property--method  "><span class="api-property__name">lookFor</span><span class="api-property__args">(type)</span>
        <div class="api-property__cpu api-property__cpu--1" title="该方法具有较低的CPU开销。"></div>
        </h2>

```javascript
const found = Game.flags.Flag1.pos.lookFor(LOOK_CREEPS);
if(found.length && found[0].getActiveBodyparts(ATTACK) == 0) {
    creep.moveTo(found[0]);
}
```

獲取該位置上給定類型的對象列表。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>string</td><td><p><code>LOOK_*</code> 常量之一。</p>
</td>
</tbody></table>



### 返回值

在該位置上找到的指定類型的對象數組。
