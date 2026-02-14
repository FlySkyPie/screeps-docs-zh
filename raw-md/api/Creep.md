# Creep  


creep 是你的單位, creep 可以移動、采集能量、建造建築、攻擊其他 creep 以及執行其他動作。每個 creep 都由最多 50 個身體部件構成，身體部件的類型如下：

![](#bodyparts.webp)   

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



<h2 id="body" class="api-property api-property--property  "><span class="api-property__name">body</span><span class="api-property__type">array</span></h2>



一個描述了該 creep 身體部件的數組，每一個數組元素都擁有如下的屬性:

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>boost</code></td><td>string | undefined</td><td><p>如果該身體部件被強化(boost)了，則該屬性指定了強化所用的化合物類型。化合物為 <code>RESOURCE_*</code> 常量之一。 <a href="/resources.html">了解更多</a></p>
</td>
<tr><td><code>type</code></td><td>string</td><td><p>身體部件常量之一。</p>
</td>
<tr><td><code>hits</code></td><td>number</td><td><p>該身體部件剩余的生命值。</p>
</td>
</tbody></table>



<h2 id="carry" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">carry</span><span class="api-property__type">object</span></h2><div class="api-deprecated"><p>此屬性已被棄用，將很快刪除。</p>
</div>

[`Creep.store`](#Creep.store) 的別名。


<h2 id="carryCapacity" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">carryCapacity</span><span class="api-property__type">number</span></h2><div class="api-deprecated"><p>此屬性已被棄用，將很快刪除。</p>
</div>

[`Creep.store.getCapacity()`](#Store.getCapacity) 的別名。


<h2 id="fatigue" class="api-property api-property--property  "><span class="api-property__name">fatigue</span><span class="api-property__type">number</span></h2>



每次移動的疲勞值指示器，當該值大於零時 creep 無法移動。



<h2 id="hits" class="api-property api-property--property  "><span class="api-property__name">hits</span><span class="api-property__type">number</span></h2>



當前的 creep 生命值。



<h2 id="hitsMax" class="api-property api-property--property  "><span class="api-property__name">hitsMax</span><span class="api-property__type">number</span></h2>



該 creep 的最大生命值。



<h2 id="id" class="api-property api-property--property  "><span class="api-property__name">id</span><span class="api-property__type">string</span></h2>



一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。



<h2 id="memory" class="api-property api-property--property  "><span class="api-property__name">memory</span><span class="api-property__type">any</span></h2>

```javascript
creep.memory.task = 'building';
```

指向 <code>Memory.creeps[creep.name]</code> 的鏈接。你可以用它來快速訪問該 creep 的特定內存對象。 <a href="/global-objects.html#Memory-object">點此了解更多關於 memory 的信息</a>



<h2 id="my" class="api-property api-property--property  "><span class="api-property__name">my</span><span class="api-property__type">boolean</span></h2>



該 creep 屬於您還是其他人。



<h2 id="name" class="api-property api-property--property  "><span class="api-property__name">name</span><span class="api-property__type">string</span></h2>



creep 的名字。您可以在創建一個新的 creep 時給它取名，名稱一旦指定無法更改。此名稱是 <a href="#Game.creeps">Game.creeps</a> 對象中指向該 creep 對象的哈希鍵。你可以使用它來快速訪問到該 creep。



<h2 id="owner" class="api-property api-property--property  "><span class="api-property__name">owner</span><span class="api-property__type">object</span></h2>



該 creep 的所有者信息，包含以下屬性：

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>所有者姓名。</p>
</td>
</tbody></table>



<h2 id="saying" class="api-property api-property--property  "><span class="api-property__name">saying</span><span class="api-property__type">string</span></h2>


creep 所說的最後一句話。



<h2 id="spawning" class="api-property api-property--property  "><span class="api-property__name">spawning</span><span class="api-property__type">boolean</span></h2>



該 creep 是否仍在孵化中。

<h2 id="store" class="api-property api-property--property  "><span class="api-property__name">store</span><span class="api-property__type"><a href="#Store">Store</a></span></h2>

```javascript
if(creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    goHarvest(creep);
}
```

一個包含了該建築中所存儲的貨物的 [`Store`](#Store) 對象。


<h2 id="ticksToLive" class="api-property api-property--property  "><span class="api-property__name">ticksToLive</span><span class="api-property__type">number</span></h2>



該 creep 還有多少 tick 死亡。



<h2 id="attack" class="api-property api-property--method  "><span class="api-property__name">attack</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
if(target) {
    if(creep.attack(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

使用近戰攻擊其他 creep、超能(power) creep 或建築。需要 <code>ATTACK</code> 身體部件。如果目標在 rampart 中，則優先攻擊 rampart。目標必須與 creep 相鄰，如果目標是一個帶有 <code>ATTACK</code> 身體的 creep 並且沒有自己沒有在 rampart 中，則該目標會自動進行反擊。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>, <a href="#Structure">Structure</a></td><td><p>要攻擊的目標</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>這個目標不是一個有效的攻擊目標。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>這個 creep 身上沒有 <code>ATTACK</code> 部件。</p>
</td></tr>
</tbody></table>




<h2 id="attackController" class="api-property api-property--method  "><span class="api-property__name">attackController</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
if(creep.room.controller && !creep.room.controller.my) {
    if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

攻擊時，每個 <code>CLAIM</code> 身體部件都能使得房間控制器的降級計時器降低 300 tick，或者將預定計時器降低 1 tick。如果受到攻擊的控制器已經有所屬者，則接下來的 1000 tick 將無法升級(upgrade)或再次進行攻擊。目標必須與 creep 相鄰。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Structure">Structure</a></td><td><p>目標房間控制器對象。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>該目標不存在有效的所屬者或者預訂者對象。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>您必須等待控制器可以被再次攻擊。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>這個 creep 身上沒有 <code>CLAIM</code> 部件。</p>
</td></tr>
</tbody></table>




<h2 id="build" class="api-property api-property--method  "><span class="api-property__name">build</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
const target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
if(target) {
    if(creep.build(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

使用自己攜帶的能量來在目標工地上建造一個建築。需要 <code>WORK</code> 和 <code>CARRY</code> 身體部件。目標必須位於以 creep 為中心的 7*7 正方形區域內。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#ConstructionSite">ConstructionSite</a></td><td><p>待建造的目標工地。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>這個creep沒有攜帶任何能量。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>該目標不是一個有效的建築工地(construction site)或者此處無法建造建築(有可能是 creep 站在該地塊上導致的)。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>這個 creep 身上沒有 <code>WORK</code> 部件。</p>
</td></tr>
</tbody></table>




<h2 id="cancelOrder" class="api-property api-property--method  "><span class="api-property__name">cancelOrder</span><span class="api-property__args">(methodName)</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
creep.move(LEFT);
creep.cancelOrder('move');
// creep 本 tick 將不會移動
```

取消當前 tick 中給出的某個指令。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>methodName</code></td><td>string</td><td><p>需要被取消的 creep 方法名。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作被成功取消了。</p>
</td></tr>
<tr><td><code>ERR_NOT_FOUND</code></td><td>-5</td><td><p>找不到給出的指令名。</p>
</td></tr>
</tbody></table>




<h2 id="claimController" class="api-property api-property--method  "><span class="api-property__name">claimController</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
if(creep.room.controller) {
    if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

佔領一個中立的房間。需要 <code>CLAIM</code> 身體部件。目標必須與 creep 相鄰。你需要有對應的全局控制等級(Global Control Level)才能佔領新的房間。如果你沒有足夠的 GCL。請考慮 <a href="#reserveController">預定(reserving)</a> 該房間。<a href="/control.html#Global-Control-Level">點擊了解更多</a>

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#StructureController">StructureController</a></td><td><p>目標控制中心對象。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個有效的中立控制中心對象。</p>
</td></tr>
<tr><td><code>ERR_FULL</code></td><td>-8</td><td><p>你不能在新手區佔領超過3個房間。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>這個 creep 身上沒有 <code>CLAIM</code> 部件。</p>
</td></tr>
<tr><td><code>ERR_GCL_NOT_ENOUGH</code></td><td>-15</td><td><p>你的全局控制等級不足。</p>
</td></tr>
</tbody></table>




<h2 id="dismantle" class="api-property api-property--method  "><span class="api-property__name">dismantle</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Structure">Structure</a></td><td><p>目標建築。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個有效的建築對象。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>這個 creep 身上沒有 <code>WORK</code> 部件。</p>
</td></tr>
</tbody></table>




<h2 id="drop" class="api-property api-property--method  "><span class="api-property__name">drop</span><span class="api-property__args">(resourceType, [amount])</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>resourceType</code></td><td>string</td><td><p><code>RESOURCE_*</code> 常量之一。</p>
</td>
<tr><td><code>amount (可選)</code></td><td>number</td><td><p>丟棄資源的數量。如果沒有這個參數，丟棄全部資源。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>這個creep沒有足夠的資源。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>resourceType不是一個有效的<code>RESOURCE_*</code>常量。</p>
</td></tr>
</tbody></table>




<h2 id="generateSafeMode" class="api-property api-property--method  "><span class="api-property__name">generateSafeMode</span><span class="api-property__args">(controller)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
if(creep.generateSafeMode(creep.room.controller) == ERR_NOT_IN_RANGE) {
    creep.moveTo(creep.room.controller);
}

```

向房間控制器添加一個新的安全模式激活次數。creep 必須與房間控制器相鄰並且帶有 1000 ghodium 資源。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#StructureController">StructureController</a></td><td><p>目標控制中心。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>這個 creep 沒有足夠的 ghodium。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個有效的控制中心對象。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
</tbody></table>




<h2 id="getActiveBodyparts" class="api-property api-property--method  "><span class="api-property__name">getActiveBodyparts</span><span class="api-property__args">(type)</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>type</code></td><td>string</td><td><p>一個身體部件類型，下列身體部件類型常量之一：
                    <ul>
                        <li><code>MOVE</code></li>
                        <li><code>WORK</code></li>
                        <li><code>CARRY</code></li>
                        <li><code>ATTACK</code></li>
                        <li><code>RANGED_ATTACK</code></li>
                        <li><code>HEAL</code></li>
                        <li><code>TOUGH</code></li>
                    </ul></p>
</td>
</tbody></table>



### 返回值

身體部件的數量。

<h2 id="harvest" class="api-property api-property--method  "><span class="api-property__name">harvest</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
if(target) {
    if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

從 source 中采集能量或者從 mineral 或 deposit 中采集資源。需要 <code>WORK</code> 身體部件。如果 creep 有空余的 <code>CARRY</code> 身體，則會自動將采集到的資源轉移進去；否則將會掉落在地上。目標必須與 creep 相鄰。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Source">Source</a>, <a href="#Mineral">Mineral</a>, <a href="#Deposit">Deposit</a></td><td><p>要采集的對象。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該 creep 的所有者，或者其他玩家已經佔領或者預定了該房間的控制器。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_NOT_FOUND</code></td><td>-5</td><td><p>未找到 extractor。你必須建造一個 extractor 來開采礦物。<a href="/resources.html">了解更多</a></p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>目標中已經沒有可采集的能量或者礦物。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是有效的 source 或者 mineral 對象。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>extractor 仍在冷卻中。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>這個 creep 身上沒有 <code>WORK</code> 部件。</p>
</td></tr>
</tbody></table>




<h2 id="heal" class="api-property api-property--method  "><span class="api-property__name">heal</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a></td><td><p>目標 creep 對象。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是有效的 creep 對象。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>這個 creep 身上沒有 <code>HEAL</code> 部件。</p>
</td></tr>
</tbody></table>




<h2 id="move" class="api-property api-property--method  "><span class="api-property__name">move</span><span class="api-property__args">(direction)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
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

使 creep 朝指定方向移動一個地塊。需要 <code>MOVE</code> 身體部件，或者其他 creep 在其附近並<a href="#Creep.pull">拉動</a>該 creep。如果你對著一個相鄰 creep 調用了 <code>move</code> 方法，將會使本 creep 跳過 <code>ERR_TIRED</code> 和 <code>ERR_NO_BODYPART</code> 檢查; 否則將跳過 <code>ERR_NOT_IN_RANGE</code> 檢查。

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
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標 creep 距離過遠。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>提供的方向不正確。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>該 creep 的疲勞（fatigue）計數器不為零。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>該 creep 沒有 <code>MOVE</code> 身體部件。</p>
</td></tr>
</tbody></table>




<h2 id="moveByPath" class="api-property api-property--method  "><span class="api-property__name">moveByPath</span><span class="api-property__args">(path)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
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

使用預先定義的路徑進行移動。需要 <code>MOVE</code> 身體部件。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>path</code></td><td>array|string</td><td><p>從 <a href="#Room.findPath"><code>Room.findPath</code></a>, <a href="#RoomPosition.findPathTo"><code>RoomPosition.findPathTo</code></a> 或 <a href="#PathFinder.search"><code>PathFinder.search</code></a> 方法返回的路徑值，數組或序列字符串形式都可接受。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_NOT_FOUND</code></td><td>-5</td><td><p>指定的路徑與該 creep 的位置不匹配。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p><code>path</code> 不是一個有效的路徑數組。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>該 creep 的疲勞（fatigue）計數器不為零。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>該 creep 沒有 <code>MOVE</code> 身體部件。</p>
</td></tr>
</tbody></table>




<h2 id="moveTo" class="api-property api-property--method  "><span class="api-property__name">moveTo</span><span class="api-property__args">(x, y, [opts])<br>(target, [opts])</span>
        <div class="api-property__cpu api-property__cpu--3" title="這種方法的CPU成本很高。"></div>
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

在本房間內查詢到目標的最佳路徑並向目標移動。該方法是 <a href="#RoomPosition.findPathTo">pos.findPathTo( )</a> <a href="#Creep.move">move( )</a> 的調用簡寫。如果目標在其他房間，則相應的出口將被當做目標(在本房間中)。需要 <code>MOVE</code> 身體部件。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>目標在 creep 所在房間中的 x 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>目標在 creep 所在房間中的 y 坐標。</p>
</td>
<tr><td><code>target</code></td><td>object</td><td><p>可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。該位置不必和 creep 在同一房間。</p>
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
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_NO_PATH</code></td><td>-2</td><td><p>沒有找到可以抵達目標的路徑。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_NOT_FOUND</code></td><td>-5</td><td><p>該 creep 沒有找到可重用的路徑。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>提供了無效目標。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>該 creep 的疲勞（fatigue）計數器不為零。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>該 creep 沒有 <code>MOVE</code> 身體部件。</p>
</td></tr>
</tbody></table>




<h2 id="notifyWhenAttacked" class="api-property api-property--method  "><span class="api-property__name">notifyWhenAttacked</span><span class="api-property__args">(enabled)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
if(creep.memory.role == 'scout') {
	creep.notifyWhenAttacked(false);
}
else {
	creep.notifyWhenAttacked(true);
}
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
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p><code>enable</code> 參數不是 boolean 值。</p>
</td></tr>
</tbody></table>




<h2 id="pickup" class="api-property api-property--method  "><span class="api-property__name">pickup</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
if(target) {
    if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

撿起一個物品 (如撿起一些能量)。需要 <code>CARRY</code> 身體部件。目標必須與 creep 相鄰或者和 creep 在相同位置。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Resource">Resource</a></td><td><p>要撿起的目標對象。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個有效的可拾取對象。</p>
</td></tr>
<tr><td><code>ERR_FULL</code></td><td>-8</td><td><p>該 creep 已無法存儲更多資源。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
</tbody></table>




<h2 id="pull" class="api-property api-property--method  "><span class="api-property__name">pull</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Creep">Creep</a></td><td><p>目標 creep。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>提供了無效目標。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
</tbody></table>




<h2 id="rangedAttack" class="api-property api-property--method  "><span class="api-property__name">rangedAttack</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
const targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
if(targets.length > 0) {
    creep.rangedAttack(targets[0]);
}

```

遠程攻擊其他 creep 或者建築。需要 <code>RANGED_ATTACK</code> 身體部件。如果目標在 rampart 中，則 rampart 將被優先攻擊。目標必須位於以 creep 為中心的 7*7 正方形區域內。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>, <a href="#Structure">Structure</a></td><td><p>要攻擊的目標。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>這個目標不是一個有效的攻擊目標。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>該 creep 沒有 <code>RANGED_ATTACK</code> 身體部件。</p>
</td></tr>
</tbody></table>




<h2 id="rangedHeal" class="api-property api-property--method  "><span class="api-property__name">rangedHeal</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a></td><td><p>目標 creep 對象。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個有效的creep對象。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>這個 creep 身上沒有 <code>HEAL</code> 部件。</p>
</td></tr>
</tbody></table>




<h2 id="rangedMassAttack" class="api-property api-property--method  "><span class="api-property__name">rangedMassAttack</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
const targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
if(targets.length > 0) {
    creep.rangedMassAttack();
}
```

對以該 creep 為中心，3 格范圍內的所有敵方 creep 和建築進行攻擊。需要 <code>RANGED_ATTACK</code> 身體部件。對目標造成的傷害隨距離的增加而衰減。友方單位不會受到影響。



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>這個 creep 身上沒有 <code>RANGED_ATTACK</code> 部件。</p>
</td></tr>
</tbody></table>




<h2 id="repair" class="api-property api-property--method  "><span class="api-property__name">repair</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Structure">Structure</a></td><td><p>要修復的目標建築。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>該 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>該 creep 沒有攜帶任何能量。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個有效的 structure 對象。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>該 creep 身上沒有 <code>WORK</code> 部件。</p>
</td></tr>
</tbody></table>




<h2 id="reserveController" class="api-property api-property--method  "><span class="api-property__name">reserveController</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
if(creep.room.controller) {
    if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

暫時阻止其他玩家佔領該房間控制器並且將 source 的能量上限恢復至正常容量。每 tick 執行該命令都可以讓控制器的不可佔領時間增加，增加的 tick 等同於 <code>CLAIM</code> 身體部件的數量。最大的預定時間為 5,000 tick。目標必須與 creep 相鄰。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#StructureController">StructureController</a></td><td><p>要預定的目標控制器對象。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個有效的中立房間控制器對象。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>這個 creep 身上沒有 <code>CLAIM</code> 部件。</p>
</td></tr>
</tbody></table>




<h2 id="say" class="api-property api-property--method  "><span class="api-property__name">say</span><span class="api-property__args">(message, [public])</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
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
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
</tbody></table>




<h2 id="signController" class="api-property api-property--method  "><span class="api-property__name">signController</span><span class="api-property__args">(target, text)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
if(creep.room.controller) {
    if(creep.signController(creep.room.controller, "I'm going to claim this room in a few days. I warned ya!") == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

用對所有玩家可見的任意文本對控制器進行簽名。該文本將顯示在世界地圖的房間 UI 中。並可通過 api 進行訪問。你可以簽名無主甚至敵對玩家的控制器。目標必須與 creep 相鄰。傳遞一個空字符串來移除簽名。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#StructureController">StructureController</a></td><td><p>要簽名的目標控制器對象。</p>
</td>
<tr><td><code>text</code></td><td>string</td><td><p>簽名文本，最多 100 字符，之後的內容將被截斷。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是一個有效的控制器對象。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
</tbody></table>




<h2 id="suicide" class="api-property api-property--method  "><span class="api-property__name">suicide</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>



立刻殺死該 creep。



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
</tbody></table>




<h2 id="transfer" class="api-property api-property--method  "><span class="api-property__name">transfer</span><span class="api-property__args">(target, resourceType, [amount])</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
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

將資源從該 creep 轉移至其他對象。目標必須與 creep 相鄰。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>, <a href="#Structure">Structure</a></td><td><p>目標對象。</p>
</td>
<tr><td><code>resourceType</code></td><td>string</td><td><p><code>RESOURCE_*</code> 常量之一。</p>
</td>
<tr><td><code>amount (可選)</code></td><td>number</td><td><p>要轉移的資源數量。如果省略，將轉移攜帶的全部指定資源。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是這個 creep 的擁有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
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




<h2 id="upgradeController" class="api-property api-property--method  "><span class="api-property__name">upgradeController</span><span class="api-property__args">(target)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

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

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#StructureController">StructureController</a></td><td><p>要進行升級的目標控制器。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該 creep 或目標控制器的所有者。</p>
</td></tr>
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>這個creep沒有攜帶任何能量。</p>
</td></tr>
<tr><td><code>ERR_INVALID_TARGET</code></td><td>-7</td><td><p>目標不是有效的控制器對象，或控制器的升級被阻滯了。</p>
</td></tr>
<tr><td><code>ERR_NOT_IN_RANGE</code></td><td>-9</td><td><p>目標太遠了。</p>
</td></tr>
<tr><td><code>ERR_NO_BODYPART</code></td><td>-12</td><td><p>這個 creep 身上沒有 <code>WORK</code> 部件。</p>
</td></tr>
</tbody></table>




<h2 id="withdraw" class="api-property api-property--method  "><span class="api-property__name">withdraw</span><span class="api-property__args">(target, resourceType, [amount])</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
if(creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	creep.moveTo(storage);
}
```

從建築(structure)或是墓碑(tombstone)中拿取資源。目標必須與 creep 相鄰。多個 creep 可以在同一 tick 裡從相同對象中拿取資源。你的 creep 同樣也可以從敵對建築/墓碑中拿取資源，如果它上面沒有敵對的 rampart 的話。

此方法不應該被用來在 creep 之間轉移資源。想要在 creep 之間轉移，請對攜帶資源的 creep 執行 [`transfer`](#Creep.transfer) 方法。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>target</code></td><td><a href="#Structure">Structure</a>, <a href="#Tombstone">Tombstone</a>, <a href="#Ruin">Ruin</a></td><td><p>目標對象。</p>
</td>
<tr><td><code>resourceType</code></td><td>string</td><td><p><code>RESOURCE_*</code> 常量之一。</p>
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
<tr><td><code>ERR_BUSY</code></td><td>-4</td><td><p>這個 creep 依然在孵化中。</p>
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

