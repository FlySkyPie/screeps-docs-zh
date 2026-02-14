
# StructureSpawn.Spawning

當前正在孵化的 creep 的詳細信息，可以通過[`StructureSpawn.spawning`](#StructureSpawn.spawning)屬性進行訪問。

<h2 id="directions" class="api-property api-property--property  "><span class="api-property__name">directions</span><span class="api-property__type">array<number></span></h2>

一個指示了出生方向的數組，參見 [`StructureSpawn.Spawning.setDirections`](#StructureSpawn.Spawning.setDirections).

<h2 id="name" class="api-property api-property--property  "><span class="api-property__name">name</span><span class="api-property__type">string</span></h2>

新 creep 的名字。

<h2 id="needTime" class="api-property api-property--property  "><span class="api-property__name">needTime</span><span class="api-property__type">number</span></h2>

完成孵化總共需要的時間。

<h2 id="remainingTime" class="api-property api-property--property  "><span class="api-property__name">remainingTime</span><span class="api-property__type">number</span></h2>

剩下的時間。

<h2 id="spawn" class="api-property api-property--property  "><span class="api-property__name">spawn</span><span class="api-property__type"><a href="#StructureSpawn">StructureSpawn</a></span></h2>

一個到對應 spawn 的鏈接。


<h2 id="cancel" class="api-property api-property--method  "><span class="api-property__name">cancel</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
Game.spawns['Spawn1'].spawning.cancel();
```

立即取消孵化。不返還消耗的資源。

### Return value

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該 spawn 的所有者。</p>
</td></tr>
</tbody></table>


<h2 id="setDirections" class="api-property api-property--method  "><span class="api-property__name">setDirections</span><span class="api-property__args">(directions)</span>
        <div class="api-property__cpu api-property__cpu--A" title="这个方法是一个改变游戏状态的动作。在返回OK代码的情况下，它的自然成本增加了0.2个CPU成本。"></div>
        </h2>

```javascript
Game.spawns['Spawn1'].spawning.setDirections([RIGHT, TOP_RIGHT]);
```

設置出生方向，以使它們在生成時應移動到的位置。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>directions</code></td><td>array&lt;number></td><td><p>包含如下方向常量的數組:
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


### Return value

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>你不是該 spawn 的所有者。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>無效的方向數組</p>
</td></tr>
</tbody></table>

