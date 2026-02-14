
# StructureSpawn.Spawning

當前正在孵化的 creep 的詳細信息，可以通過[`StructureSpawn.spawning`](#StructureSpawn.spawning)屬性進行訪問。

{% api_property directions 'array<number>' %}

一個指示了出生方向的數組，參見 [`StructureSpawn.Spawning.setDirections`](#StructureSpawn.Spawning.setDirections).

{% api_property name 'string' %}

新 creep 的名字。

{% api_property needTime 'number' %}

完成孵化總共需要的時間。

{% api_property remainingTime 'number ' %}

剩下的時間。

{% api_property spawn '<a href="#StructureSpawn">StructureSpawn</a>' %}

一個到對應 spawn 的鏈接。


{% api_method cancel '' A %}

```javascript
Game.spawns['Spawn1'].spawning.cancel();
```

立即取消孵化。不返還消耗的資源。

### Return value

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該 spawn 的所有者。
{% endapi_return_codes %}

{% api_method setDirections 'directions' A %}

```javascript
Game.spawns['Spawn1'].spawning.setDirections([RIGHT, TOP_RIGHT]);
```

設置出生方向，以使它們在生成時應移動到的位置。

{% api_method_params %}
directions : array&lt;number>
包含如下方向常量的數組:
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

### Return value

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該 spawn 的所有者。
ERR_INVALID_ARGS | 無效的方向數組
{% endapi_return_codes %}
