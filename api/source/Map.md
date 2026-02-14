# Game.map

世界地圖對象，用於在房間之間導航。


{% api_method Game.map.describeExits 'roomName' 1 %}

```javascript
const exits = Game.map.describeExits('W8N3');
```

根據給定的房間名列出所有可用的出口。

{% api_method_params %}
roomName : string
房間名。
{% endapi_method_params %}


### 返回值

出口信息按照以下格式給出，在房間不存在時返回null。

```javascript-content
{
    "1": "W8N4",    // TOP
    "3": "W7N3",    // RIGHT
	"5": "W8N2",    // BOTTOM
	"7": "W9N3"     // LEFT
}
```


{% api_method Game.map.findExit 'fromRoom, toRoom, [opts]' 3 %}

```javascript
if(creep.room != anotherRoomName) {
    const exitDir = Game.map.findExit(creep.room, anotherRoomName);
    const exit = creep.pos.findClosestByRange(exitDir);
    creep.moveTo(exit);
}
else {
    // 到另一個房間的某處去
}
```

```javascript
creep.moveTo(new RoomPosition(25, 25, anotherRoomName));
```

查找從給定房間到另一個房間的出口方向。

{% api_method_params %}
fromRoom : string, <a href="#Room">Room</a>
起點房間名或房間對象。
===
toRoom : string, <a href="#Room">Room</a>
終點房間名或房間對象。
===
opts (可選) : object
包含尋路選項的對象。參見<code><a href="#findRoute">findRoute</a></code>。
{% endapi_method_params %}


### 返回值

房間方向常量，下列之一：

* `FIND_EXIT_TOP`
* `FIND_EXIT_RIGHT`
* `FIND_EXIT_BOTTOM`
* `FIND_EXIT_LEFT`
			
或下列錯誤碼：
{% api_return_codes %}
ERR_NO_PATH | 找不到路徑。
ERR_INVALID_ARGS | 位置不正確。
{% endapi_return_codes %}



{% api_method Game.map.findRoute 'fromRoom, toRoom, [opts]' 3 %}

```javascript
const route = Game.map.findRoute(creep.room, anotherRoomName);
if(route.length > 0) {
    console.log('Now heading to room '+route[0].room);
    const exit = creep.pos.findClosestByRange(route[0].exit);
    creep.moveTo(exit);
}
```

```javascript
const route = Game.map.findRoute(creep.room, anotherRoomName, {
	routeCallback(roomName, fromRoomName) {
		if(roomName == 'W10S10') {	// 回避這個房間
			return Infinity;
		}
		return 1;
	}});
```

```javascript
let from = new RoomPosition(25, 25, 'E1N1');
let to = new RoomPosition(25, 25, 'E4N1');

// 使用`findRoute`計算路徑的高階計劃，優先選擇大路和自有房間
let allowedRooms = { [ from.roomName ]: true };
Game.map.findRoute(from.roomName, to.roomName, {
	routeCallback(roomName) {
		let parsed = /^[WE]([0-9]+)[NS]([0-9]+)$/.exec(roomName);
		let isHighway = (parsed[1] % 10 === 0) || 
		                (parsed[2] % 10 === 0);
		let isMyRoom = Game.rooms[roomName] &&
			Game.rooms[roomName].controller &&
			Game.rooms[roomName].controller.my;
		if (isHighway || isMyRoom) {
			return 1;
		} else {
			return 2.5;
		}
	}
}).forEach(function(info) {
	allowedRooms[info.room] = true;
});

// 調用PathFinder, 只允許訪問`findRoute`中的房間
let ret = PathFinder.search(from, to, {
	roomCallback(roomName) {
		if (allowedRooms[roomName] === undefined) {
			return false;
		}
	}
});

console.log(ret.path);
```

查找從給定房間到另一個房間的路徑。

{% api_method_params %} 
fromRoom : string, <a href="#Room">Room</a>
起點房間名或房間對象。
===
toRoom : string, <a href="#Room">Room</a>
終點房間名或房間對象。
===
opts (可選) : object
包含下列選項的對象：
					<ul>
						<li>
							<div class="api-arg-title">routeCallback</div>
							<div class="api-arg-type">function</div>
							<div class="api-arg-desc">這個回調函數接受兩個參數： <code>function(roomName, fromRoomName)</code>。 它可以用來計算進入一個房間的開銷。你可以用它實現優先進入自己的房間或者回避某些房間等功能。你應該返回一個浮點數開銷，或者返回<code>Infinity</code>代表不可進入。</div>
						</li>
					</ul>
				
{% endapi_method_params %}


### 返回值

如下格式的路徑數組：

```javascript-content
[
    { exit: FIND_EXIT_RIGHT, room: 'arena21' },
    { exit: FIND_EXIT_BOTTOM, room: 'arena22' },
    ...
]
```

或如下錯誤碼之一：
{% api_return_codes %}
ERR_NO_PATH | 找不到路徑。
{% endapi_return_codes %}



{% api_method Game.map.getRoomLinearDistance 'roomName1, roomName2, [continuous]' 0 %}

```javascript
Game.map.getRoomLinearDistance('W1N1', 'W4N2'); // 3
Game.map.getRoomLinearDistance('E65S55','W65S55', false) // 131
Game.map.getRoomLinearDistance('E65S55','W65S55', true) // 11
```

獲取兩個房間之間直線距離（房間數）。你可以使用這個函數估算使用終端發送資源的能源開銷，或用於使用觀察者和核武器。

{% api_method_params %}
roomName1 : string
第一個房間名。
===
roomName2 : string
第二個房間名。
===
continuous (可選) : boolean
是否視世界地圖為在邊界連續。 如果要計算交易或終端發送開銷，請設置為true。 默認值為false。
{% endapi_method_params %}


### 返回值

給定兩個房間之間的房間數。


{% api_method Game.map.getRoomTerrain 'roomName' 0 %}

```javascript
const terrain = Game.map.getRoomTerrain("E2S7");
switch(terrain.get(10,15)) {
    case TERRAIN_MASK_WALL:
        break;
    case TERRAIN_MASK_SWAMP:
        break;
    case 0:
        break;
}
```

獲取<a href="#Room-Terrain">`Room.Terrain` </a>對象，快捷訪問靜態地形數據。此方法適用於所有房間，哪怕是無法訪問的房間。

{% api_method_params %}
roomName : string
房間名。
{% endapi_method_params %}


### 返回值

一個新<a href="#Room-Terrain">`Room.Terrain`</a>對象。


{% api_method Game.map.getTerrainAt 'x, y, roomName|pos' 1 '{"deprecated": "請使用更高效的方法[`Game.map.getRoomTerrain`](#Game.map.getRoomTerrain)替代."}'%}

```javascript
console.log(Game.map.getTerrainAt(25,20,'W10N10'));
```

```javascript
console.log(Game.map.getTerrainAt(new RoomPosition(25,20,'W10N10'));
```

獲取指定房間坐標的地形類型。此方法適用於所有房間，哪怕是無法訪問的房間。

{% api_method_params %}
x : number
房間內X坐標。
===
y : number
房間內Y坐標。
===
roomName : string
房間名。
===
pos : <a href="#RoomPosition">RoomPosition</a>
坐標對象。
{% endapi_method_params %}


### 返回值

下列字符串值：
<ul>
				<li><code>plain</code></li>
				<li><code>swamp</code></li>
				<li><code>wall</code></li>
			</ul>


{% api_method Game.map.getWorldSize 0 %}

返回世界尺寸，即世界對角之間的房間數。例如對於一個從 W50N50 至 E50S50 的世界這個方法返回102。

{% api_method Game.map.isRoomAvailable 'roomName' 2 '{"deprecated": "Please use [`Game.map.getRoomStatus`](#Game.map.getRoomStatus) instead."}'%}

```javascript
if(Game.map.isRoomAvailable(room.name)) {
    creep.moveTo(room.getPositionAt(25,25));
}
```

檢查一個房間是否可以進入。

{% api_method_params %}
roomName : string
The room name.
{% endapi_method_params %}


### 返回值

布爾值

{% api_method Game.map.getRoomStatus 'roomName' 2 %}

```javascript
if(Game.map.getRoomStatus(room.name).status == 'normal') {
    nuker.launchNuke(room.getPositionAt(25,25));
}
```

獲取指定房間的開放狀態。點擊 [本文](/start-areas.html) 了解更多起始區域的相關信息。

{% api_method_params %}
roomName : string
房間名
{% endapi_method_params %}


### 返回值

包含如下屬性的對象：

屬性 | 類型 | 介紹
---|---
`status` | string | 下列字符串之一：<ul><li><code>normal</code> &ndash; 該房間沒有限制 </li><li><code>closed</code> &ndash; 該房間未啟用（not available）</li><li><code>novice</code> &ndash; 該房間是新手區的一部分 </li><li><code>respawn</code> &ndash; 該房間是重生區的一部分</li></ul>
`timestamp` | number | 狀態終止時間 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime#Syntax">UNIX 毫秒時間戳</a>。如果房間狀態沒有終止時間，則該屬性為 null。

