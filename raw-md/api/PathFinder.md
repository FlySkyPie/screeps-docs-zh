# PathFinder
 
 包含了在游戲中進行尋路的強大方法。這個模塊使用原生的高性能 C++ 代碼實現，並支持跨越多個房間的自定義尋路成本及路徑。

<h2 id="PathFinder.search" class="api-property api-property--method  "><span class="api-property__name">PathFinder.search</span><span class="api-property__args">(origin, goal, [opts])</span>
        <div class="api-property__cpu api-property__cpu--3" title="这种方法的CPU成本很高。"></div>
        </h2>

```javascript
  let creep = Game.creeps.John;

  let goals = _.map(creep.room.find(FIND_SOURCES), function(source) {
    // 我們沒辦法走到 source 上 -- 將 `range` 設置為 1
    // 所以我們將尋路至其旁邊
    return { pos: source.pos, range: 1 };
  });

  let ret = PathFinder.search(
    creep.pos, goals,
    {
      // 我們需要把默認的移動成本設置的更高一點
      // 這樣我們就可以在 roomCallback 裡把道路移動成本設置的更低
      plainCost: 2,
      swampCost: 10,

      roomCallback: function(roomName) {

        let room = Game.rooms[roomName];
        // 在這個示例中，`room` 始終存在
        // 但是由於 PathFinder 支持跨多房間檢索
        // 所以你要更加小心！
        if (!room) return;
        let costs = new PathFinder.CostMatrix;

        room.find(FIND_STRUCTURES).forEach(function(struct) {
          if (struct.structureType === STRUCTURE_ROAD) {
            // 相對於平原，尋路時將更傾向於道路
            costs.set(struct.pos.x, struct.pos.y, 1);
          } else if (struct.structureType !== STRUCTURE_CONTAINER &&
                     (struct.structureType !== STRUCTURE_RAMPART ||
                      !struct.my)) {
            // 不能穿過無法行走的建築
            costs.set(struct.pos.x, struct.pos.y, 0xff);
          }
        });

        // 躲避房間中的 creep
        room.find(FIND_CREEPS).forEach(function(creep) {
          costs.set(creep.pos.x, creep.pos.y, 0xff);
        });

        return costs;
      },
    }
  );

  let pos = ret.path[0];
  creep.move(creep.pos.getDirectionTo(pos));
```

在 <code>origin</code> 和 <code>goal</code> 之間查找最佳路徑。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>origin</code></td><td><a href="#RoomPosition">RoomPosition</a></td><td><p>起始位置。</p>
</td>
<tr><td><code>goal</code></td><td>object</td><td><p>一個或一組目標。如果提供了多個目標，則返回所有目標中移動成本最低的路徑。目標可以是一個 RoomPosition 或者包含下列定義的對象：</p>
<p><em><strong>重要：</strong></em> 請注意，如果您的目標是無法行走的（例如，一個 source），請至少將 <code>range</code> 設置成至少為 1。否則您將浪費很多 CPU 資源來查找一個無法到達的目標。
                    <ul>
                        <li>
                            <div class="api-arg-title">pos</div>
                            <div class="api-arg-type"><a href="#RoomPosition"><code>RoomPosition</code></a></div>
                            <div class="api-arg-desc">目標。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">range</div>
                            <div class="api-arg-type">number</div>
                            <div class="api-arg-desc"><code>pos</code> 周圍被當作目的地的范圍。默認為 0。</div>
                        </li>
                    </ul></p>
</td>
<tr><td><code>opts (可選)</code></td><td>object</td><td><p>一個包含其他尋路選項的對象。</p>
<ul>
    <li>
        <div class="api-arg-title">roomCallback</div>
        <div class="api-arg-type">function</div>
        <div class="api-arg-desc">該回調可以用來生成某些房間的 <a href="#PathFinder-CostMatrix"><code>CostMatrix</code></a>，並提供給 pathfinder 來增強尋路效果。該回調擁有一個 <code>roomName</code> 參數。在尋路搜索中，每個房間只會被執行一次回調。如果您要在 1 tick 內為單個房間執行多次尋路操作，可以考慮緩存您的 CostMatrix 來提高代碼運行效率。請閱讀下方的 CostMatrix 文檔來了解更多關於 CostMatrix 的信息。如果該回調返回 <code>false</code>，則對應的房間不會被搜索，並且該房間也不會加入到 <code>maxRooms</code>裡。</div>
    </li>
    <li>
        <div class="api-arg-title">plainCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">平原上的移動成本，默認為 1。</div>
    </li>
    <li>
        <div class="api-arg-title">swampCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">沼澤上的移動成本，默認為 5。</div>
    </li>
    <li>
        <div class="api-arg-title">flee</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">與其尋找<em>前往</em>目標的道路，不如尋找<em>遠離</em>目標的道路。返回遠離每個目標 <code>range</code> 的移動成本最低的路徑。默認為 false。</div>
    </li>
    <li>
        <div class="api-arg-title">maxOps</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">尋路所允許的最大消耗。你可以限制用於搜索路徑的 CPU 時間，基於 1 op ~ 0.001 CPU 的比例。默認值為 2000。</div>
    </li>
    <li>
        <div class="api-arg-title">maxRooms</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">尋路所允許的最大房間數。默認值為 16，最大值為 64。</div>
    </li>
    <li>
        <div class="api-arg-title">maxCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">尋路所允許的最大移動成本。如果 pathfinder 發現無論如何都找不到移動成本小於等於 <code>maxCost</code> 的路徑時，它將立即停止搜索。默認值為無窮大(Infinity)。</div>
    </li>
    <li>
        <div class="api-arg-title">heuristicWeight</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">應用於 A* 算法 <code>F = G + weight * H</code> 中的啟發式權重(weight)。在使用該選項之前您最好已經了解了 A* 算法的底層實現！默認值為 1.2。</div>
    </li>
</ul></td>
</tbody></table>



### 返回值

包含以下屬性的對象：

屬性 | 介紹
---|---
`path` | RoomPosition 對象數組。
`ops` | 尋路完成時的 operation 總消耗。
`cost` | 從 `plainCost`，`swampCost` 和任何給定的 CostMatrix 實例推導出的移動總成本。
`incomplete` | 如果 pathfinder 找不到完整的路徑的話，該值將為 true。注意，`path` 中依舊會有部分路徑，其中的不完整路徑代表在當前搜索限制下所能找到的最接近的路徑。	


<h2 id="PathFinder.use" class="api-property api-property--method  api-property--deprecated"><span class="api-property__name">PathFinder.use</span><span class="api-property__args">(isEnabled)</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>
<div class="api-deprecated"><p>此方法已被弃用，不久将被删除。</p>
</div> 

```javascript
PathFinder.use(true);
Game.creeps.John.moveTo(Game.spawns['Spawn1']);
```

指定是否在游戲中使用新的實驗性 pathfinder。該方法應在每個 tick 調用。它將影響以下方法的行為：<a href="#Room.findPath"><code>Room.findPath</code></a>, <a href="#RoomPosition.findPathTo"><code>RoomPosition.findPathTo</code></a>, <a href="#RoomPosition.findClosestByPath"><code>RoomPosition.findClosestByPath</code></a>, <a href="#Creep.moveTo"><code>Creep.moveTo</code></a>.

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>isEnabled</code></td><td>boolean</td><td><p>是否要激活新的 pathfinder。默認值為 <code>true</code>。</p>
</td>
</tbody></table>



