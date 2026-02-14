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

{% page inherited/OwnedStructure.md %}


{% api_property energy 'number' '{"deprecated": true}' %}

[`.store[RESOURCE_ENERGY]`](#StructureExtension.store) 的別名.



{% api_property energyCapacity 'number' '{"deprecated": true}' %}

[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity) 的別名.



{% api_property memory 'any' %}

```javascript
spawn.memory.queue = [];
```

<code>Memory.spawns[spawn.name]</code> 的一個簡寫。您可以使用它來快速訪問母巢 (spawn) 的特定內存數據對象。 <a href="/global-objects.html#Memory-object">了解更多關於 memory</a>



{% api_property name 'string' %}



Spawn 的名字。在創建新母巢 (spawn) 時賦予，一但創建就無法更改，除非拆除重造。此名稱是一個散列鍵，用於通過 <a href="#Game.spawns">Game.spawns</a> 對象訪問。



{% api_property spawning '<a href="#StructureSpawn-Spawning">StructureSpawn.Spawning</a>' %}



如果母巢 (spawn) 正在孵化一個新的 creep ， 母巢 (spawn) 將包含一個 [`StructureSpawn.Spawning`](#StructureSpawn-Spawning) 對象，否則為 null。


{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```


一個 [`Store`](#Store) 對象，它包含這個建築的所有貨物。

{% api_method canCreateCreep 'body, [name]' 1 '{"deprecated": "請使用 [`StructureSpawn.spawnCreep`](#StructureSpawn.spawnCreep) 的 `dryRun` 標志代替。"}' %}

```javascript
if(spawn.canCreateCreep(body, name) == OK) {
    spawn.createCreep(body, name);
}
```

檢查是否可以創建 creep。

{% api_method_params %}
body : array&lt;string&gt;
描述新 creep』s body 的數組。應該包含1至50個元素（以下常量之一）:

* `WORK`
* `MOVE`
* `CARRY`
* `ATTACK`
* `RANGED_ATTACK`
* `HEAL`
* `TOUGH`
* `CLAIM`

===
name (可選) : string
新 creep 的名字。最長不能超過 100 個字符。它應該是唯一的 creep 名稱, 所以 <code>Game.creeps</code> 對象不應該包含另一個同名的 creep (hash key)。如果沒有定義，將生成一個隨機名稱。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 可以創建具有給定 body 和名稱的 creep。
ERR_NOT_OWNER | 你不是該 spawn 的所有者。
ERR_NAME_EXISTS | 已經有一個叫這個名字的 creep 了。
ERR_BUSY | 這個母巢 (spawn) 已經在孵化另一個 creep 了。
ERR_NOT_ENOUGH_ENERGY | 這個母巢 (spawn) 和它的擴展 (extension) 包含的能量不足以孵化具有給定 body 的 creep。
ERR_INVALID_ARGS | Body 沒有被恰當地描述。
ERR_RCL_NOT_ENOUGH | 您的房間控制器級別不足以使用此 spawn。
{% endapi_return_codes %}



{% api_method createCreep 'body, [name], [memory]' A '{"deprecated": "請使用 [`StructureSpawn.spawnCreep`](#StructureSpawn.spawnCreep) 代替。"}' %}

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

{% api_method_params %}
body : array&lt;string&gt;
描述新 creep』s body 的數組。應該包含1至50個元素（以下常量之一）

* `WORK`
* `MOVE`
* `CARRY`
* `ATTACK`
* `RANGED_ATTACK`
* `HEAL`
* `TOUGH`
* `CLAIM`

===
name (可選) : string
新 creep 的名字。最長不能超過 100 個字符。它應該是唯一的 creep 名稱, 所以 <code>Game.creeps</code> 對象不應該包含另一個同名的 creep (hash key)。如果沒有定義，將生成一個隨機名稱。

===
memory (可選) : any
一個新 creep 的 memory 。如果提供，它將立即存儲到<code>Memory.creeps[name]</code>。
{% endapi_method_params %}


### 返回值

產生一個新的 creep 會遇到這些錯誤代碼之一:
{% api_return_codes %}
ERR_NOT_OWNER | 你不是該 spawn 的所有者。
ERR_NAME_EXISTS | 已經有一個叫這個名字的 creep 了。
ERR_BUSY | 這個母巢已經在孵化另一個 creep 了。
ERR_NOT_ENOUGH_ENERGY | 這個母巢和他的擴展包含的能量不足以孵化具有給定 body 的 creep。
ERR_INVALID_ARGS | Body 沒有被恰當地描述。
ERR_RCL_NOT_ENOUGH | 您的房間控制器級別不足以使用此 spawn。
{% endapi_return_codes %}



{% api_method spawnCreep 'body, name, [opts]' A %}

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

{% api_method_params %}
body : array&lt;string&gt;
描述新 creep』s body 的數組。應該包含1至50個元素（以下常量之一）

* `WORK`
* `MOVE`
* `CARRY`
* `ATTACK`
* `RANGED_ATTACK`
* `HEAL`
* `TOUGH`
* `CLAIM`

===
name : string
新 creep 的名字。最長不能超過 100 個字符。它應是個獨一無二的 creep 名以保證 <code>Game.creeps</code> 不含有重名的的 creep 。

===
opts (可選) : object
為孵化進程提供附加選項的對象。
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
</ul>
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該母巢 (spawn) 的所有者。
ERR_NAME_EXISTS | 已經有一個叫這個名字的 creep 了。
ERR_BUSY | 這個母巢 (spawn) 已經在孵化另一個 creep 了。
ERR_NOT_ENOUGH_ENERGY | 這個母巢 (spawn) 和他的擴展包含的能量不足以孵化具有給定 body 的 creep。
ERR_INVALID_ARGS | Body 沒有被恰當地描述。
ERR_RCL_NOT_ENOUGH | 您的房間控制器級別不足以使用此 spawn。
{% endapi_return_codes %}



{% api_method recycleCreep 'target' A %}



 殺死 creep ，並視其剩余壽命而掉落最多100％的資源用於其繁殖和增強。目標應該在相鄰的方塊上。每個身體部位的能量回收限制在125個單位。

{% api_method_params %}
target : <a href="#Creep">Creep</a>
目標 creep 對象。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 您不是此母巢 (spawn) 或目標 creep 的所有者。
ERR_INVALID_TARGET | 指定的目標不是一個 creep 對象。
ERR_NOT_IN_RANGE | 目標 creep 太遠了。
ERR_RCL_NOT_ENOUGH | 您的房間控制器級別不足以使用此 spawn。
{% endapi_return_codes %}



{% api_method renewCreep 'target' A %}


增加目標 creep 的剩余生存時間。目標應在相鄰的方格處。spawn 不應忙於孵化過程，且不能包含 CLAIM 身體部件。每次執行都會增加 creep 的計時器，根據此公式按 ticks 數計算：

```javascript-content
floor(600/body_size)
```

每次執行所需的能量由以下公式確定:

```javascript-content
ceil(creep_cost/2.5/body_size)
```

更新 creep 會移除所有的增益。

{% api_method_params %}
target : <a href="#Creep">Creep</a>
目標 creep 對象。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該母巢 (spawn) 或者該 creep 的所有者。
ERR_BUSY | 這個母巢 (spawn) 已經在孵化另一個 creep 了。
ERR_NOT_ENOUGH_ENERGY | 這個母巢 (spawn) 和他的擴展 (extension) 包含的能量不足以孵化具有給定 body 的 creep。
ERR_INVALID_TARGET | 指定的目標不是一個 creep 對象，或者其攜帶有 CLAIM 身體部件。
ERR_FULL | 目標計時器的時間已經滿了。
ERR_NOT_IN_RANGE | 目標 creep 太遠了。
ERR_RCL_NOT_ENOUGH | 您的房間控制器級別不足以使用此 spawn。
{% endapi_return_codes %}
