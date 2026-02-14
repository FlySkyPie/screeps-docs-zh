# Game    

包含所有游戲信息的主要全局游戲對象。


{% api_property Game.constructionSites 'object&lt;string, <a href="#ConstructionSite">ConstructionSite</a>&gt;' %}


包含你所有施工工地的 hash，並以 id 作為關鍵字。


{% api_property Game.cpu 'object' %}


包含有關 CPU 使用率信息的對象，具有以下屬性：


{% api_method_params %}
limit : number
你在當前指定 shard 的CPU限制。
===
tickLimit : number
當前游戲 tick 可用的 CPU 時間。
<br>通常它高於 <code>Game.cpu.limit</code>. <a href="/cpu-limit.html">了解更多</a>
===
bucket : number
在你的 <a href="/cpu-limit.html#Bucket">bucket</a> 中累積的未使用的 CPU 數量。
===
shardLimits : object<br>&lt;string,number&gt;
包含了每個 shard cpu 上限的對象，以 shard 名稱為關鍵字。你可以使用 [`setShardLimits`](#Game.setShardLimits)
 方法重設他們。
===
unlocked : boolean 
您的賬戶是否已經解鎖了完整的 CPU。
===
unlockedTime : number 
您賬戶解鎖完整 CPU 時的 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime#Syntax">UNIX 毫秒時間戳</a>。當您賬戶的完整 CPU 未解鎖或未使用 subscription 時該屬性未定義。

{% endapi_method_params %}


{% api_property Game.creeps 'object&lt;string, <a href="#Creep">Creep</a>&gt;' %}

```javascript
for(const i in Game.creeps) {
    Game.creeps[i].moveTo(flag);
}
```

包含你所有 creep 的 hash，並以 creep 名作為關鍵字。


{% api_property Game.flags 'object&lt;string, <a href="#Flag">Flag</a>&gt;' %}

```javascript
creep.moveTo(Game.flags.Flag1);
```

包含你所有 flag 的 hash，以 flag 名作為關鍵字。


{% api_property Game.gcl 'object' %}


你的<a href="/control.html#Global-Control-Level">全局控制等級（Global Control Level）</a>的對象，具有以下屬性：

{% api_method_params %}
level : number
當前的等級。
===
progress : number
到下一個等級當前的進展。
===
progressTotal : number
到下一個等級所需的進展。
{% endapi_method_params %}

{% api_property Game.gpl 'object' %}

你的全局能量等級（Global Power Level）</a>的對象，具有以下屬性：

{% api_method_params %}
level : number
當前的等級。
===
progress : number
到下一個等級當前的進展。
===
progressTotal : number
到下一個等級所需的進展。
{% endapi_method_params %}


{% api_property Game.map object %}


表示世界地圖的全局對象。 請參照此[文檔](#Game-map)。


{% api_property Game.market object %}


表示游戲內市場的全局對象。 請參照此[文檔](#Game-market) 


{% api_property Game.powerCreeps 'object&lt;string, <a href="#PowerCreep">PowerCreep</a>&gt;' %}

```javascript
Game.powerCreeps['PC1'].moveTo(flag);
```

包含你所有超能 creep 的 hash，以 creep 名稱為鍵。從這裡也可以訪問到未孵化的超能 creep。 


{% api_property Game.resources 'object' %}


表示你賬戶中全局資源的對象，例如 pixel 或 cpu unlock。每個對象的關鍵字都是一個資源常量，值是資源量。


{% api_property Game.rooms 'object&lt;string, <a href="#Room">Room</a>&gt;' %}


包含所有對你可用的房間的 hash，以房間名作為關鍵字。一個房間在你有一個 creep 或者自有建築在其中時可見。


{% api_property Game.shard 'object' %}

表示當前正在執行腳本的 shard 的對象。

{% api_method_params %}
name : string
shard 的名稱。
===
type : string
目前總是等於 `normal`.
===
ptr : boolean
這個 shard 是否為 [PTR](/ptr.html).
{% endapi_method_params %}

{% api_property Game.spawns 'object&lt;string, <a href="#StructureSpawn">StructureSpawn</a>&gt;' %}

```javascript
for(const i in Game.spawns) {
    Game.spawns[i].createCreep(body);
}
```

包含你所有 spawn 的 hash，以 spawn 名作為關鍵字。


{% api_property Game.structures 'object&lt;string, <a href="#Structure">Structure</a>&gt;' %}


包含你所有 structures 的 hash，以 structures 名作為關鍵字。


{% api_property Game.time 'number' %}

```javascript
console.log(Game.time);
```

系統游戲 tick 計數。他在每個 tick 自動遞增。點此<a href="/game-loop.html">了解更多</a>。


{% api_method Game.cpu.getHeapStatistics '' 1 %}

```javascript
let heap = Game.cpu.getHeapStatistics();
console.log(`Used ${heap.total_heap_size} / ${heap.heap_size_limit}`);
```

*這個方法只在**虛擬機**在你的[賬戶運行時設置](https://screeps.com/a/#!/account/runtime)中被設為 **Isolated** 時可用* 

使用此方法獲取虛擬機的堆統計信息。 返回值幾乎與 Node.js 函數 [`v8.getHeapStatistics()`](https://nodejs.org/dist/latest-v8.x/docs/api/v8.html#v8_v8_getheapstatistics)相同。 此函數返回一個附加屬性： `externally_allocated_size`，它是當前分配的內存總量，不包含在 v8 堆中，但會計入此隔離的內存限制。 超過一定大小的 `ArrayBuffer` 實例是外部分配的，將在此計算。



### 返回值

以下列格式返回具有堆統計信息的對象：

```javascript-content
{
  "total_heap_size": 29085696,
  "total_heap_size_executable": 3670016,
  "total_physical_size": 26447928,
  "total_available_size": 319649520,
  "used_heap_size": 17493824,
  "heap_size_limit": 343932928,
  "malloced_memory": 8192,
  "peak_malloced_memory": 1060096,
  "does_zap_garbage": 0,
  "externally_allocated_size": 38430000
}
```


{% api_method Game.cpu.getUsed '' 1 %}

```javascript
if(Game.cpu.getUsed() > Game.cpu.tickLimit / 2) {
    console.log("Used half of CPU already!");
}
```

```javascript
for(const name in Game.creeps) {
    const startCpu = Game.cpu.getUsed();

    // creep logic goes here

    const elapsed = Game.cpu.getUsed() - startCpu;
    console.log('Creep '+name+' has used '+elapsed+' CPU time');
}

```

獲取當前游戲開始時使用的 CPU 時間總量。在模擬模式下始終返回 0.


### 返回值

以浮點數返回當前使用的 CPU 時間。


{% api_method Game.cpu.halt '' 1 %}

```javascript
Game.cpu.halt();
```

*這個方法只在**虛擬機**在你的[賬戶運行時設置](https://screeps.com/a/#!/account/runtime)中被設為 **Isolated** 時可用* 

重置你的運行環境並擦除堆內存中的所有數據。

{% api_method Game.cpu.setShardLimits 'limits' 1 %}

```javascript
Game.cpu.setShardLimits({shard0: 20, shard1: 10});
```

分配 CPU 限制到不同的 shard。CPU總量應保持等於 [`Game.cpu.shardLimits`](#Game.cpu)。此方法每 12 小時只能使用一次。

{% api_method_params %}
limits : object&lt;string, number&gt;
表示每個 shard 的 CPU 值，與 `Game.cpu.shardLimits` 格式相同。
{% endapi_method_params %}


### 返回值

以下代碼之一：
{% api_return_codes %}
OK | 該操作已成功安排。
ERR_BUSY | 12 小時的冷卻時間尚未結束。
ERR_INVALID_ARGS | 該參數不是有效的 shard 限制對象。
{% endapi_return_codes %}


{% api_method Game.cpu.unlock '' 1 %}

```javascript
if(Game.cpu.unlockedTime && ((Game.cpu.unlockedTime - Date.now()) < 1000*60*60*24)) {
    Game.cpu.unlock();
}
```

為您的賬戶解鎖 24 小時的完整 CPU。該方法將消耗一個您賬戶中的 CPU unlock（詳見 [`Game.resources`](#Game.resources)）。
如果之前尚未激活過完整 CPU。則可能需要一點時間（5 分鐘之內）來為您的賬戶應用解鎖。

### 返回值

下列返回值之一：
{% api_return_codes %}
OK | 該操作已成功安排。
ERR_FULL | 您的 CPU 已經使用了 subscription 解鎖.
ERR_NOT_ENOUGH_RESOURCES | 您的賬戶沒有足夠的 `cpuUnlock` 資源。
{% endapi_return_codes %}

{% api_method Game.cpu.generatePixel '' 3 %}

```javascript
if(Game.cpu.bucket == 10000) {
    Game.cpu.generatePixel();
}
```

從您的 bucket 中取出 10000 CPU 來生成一點 pixel 資源。


{% api_return_codes %}
OK | 該操作已成功安排。
ERR_NOT_ENOUGH_RESOURCES | 您的 bucket 中沒有足夠的 CPU。
{% endapi_return_codes %}


{% api_method Game.getObjectById 'id' 1 %}

```javascript
creep.memory.sourceId = creep.pos.findClosestByRange(FIND_SOURCES).id;
const source = Game.getObjectById(creep.memory.sourceId);
```

獲取具有唯一指定 ID 的對象。 它可以是任何類型的游戲對象。 只能訪問您可見的房間內的物體。

{% api_method_params %}
id : string
The unique identificator.
{% endapi_method_params %}


### 返回值

返回一個對象實例，若找不到則返回 null。

{% api_method Game.notify 'message, [groupInterval]' A %}

```javascript
if(creep.hits < creep.memory.lastHits) {
    Game.notify('Creep '+creep+' has been attacked at '+creep.pos+'!');
}
creep.memory.lastHits = creep.hits;
```

```javascript
if(Game.spawns['Spawn1'].energy == 0) {
    Game.notify(
        'Spawn1 is out of energy',
        180  // group these notifications for 3 hours
    );
}

```

向你的個人資料中的郵件發送信息。由此，你可以在游戲中的任何場合為自己設置通知。你最多可以安排 20 個通知。在模擬模式中不可用。

{% api_method_params %}
message : string
將在消息中發送的自定義文本。最大長度為 1000 個字符。
===
groupInterval : number
如果被設為 0 (默認), 通知將被立即安排。 否早他將於其他通知編組，並在指定的時間（分鐘）寄出。
{% endapi_method_params %}
