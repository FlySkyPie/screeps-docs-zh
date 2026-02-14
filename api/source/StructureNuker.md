# StructureNuker

<img src="img/nuke.png" alt="" align="right" />

向其他房間發射一枚核彈，對著落區域造成大量傷害。
發射後需要時間冷卻且需重新裝填能量和 ghodium 資源。
發射後將會在目標房間位置創建一個對任何玩家可見的 [Nuke](#Nuke) 對象，直至其著陸。
已發射的核彈無法移動或者取消。核彈不能從新手房間發射或者發射向新手房間。放置到 StructureNuker 中的資源無法被取出 (withdraw)。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2" style="width: 70px;"><strong>控制器等級</strong></td>
    </tr>
    <tr>
        <td>1-7</td>
        <td>—</td>
    </tr>
    <tr>
        <td>8</td>
        <td>1 nuke</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>建造花費</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>生命值</strong></td>
        <td>1,000</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>攻擊范圍</strong></td>
        <td>10 rooms</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>發射花費</strong></td>
        <td>300,000 energy<br /> 5,000 ghodium</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>發射冷卻</strong></td>
        <td>100,000 ticks</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>著陸時間</strong></td>
        <td>50,000 ticks</td>
    </tr>
    <tr>
        <td style="width: 70px;"><strong>效果</strong></td>
        <td>立刻清除所有的 creep，建築工地(construction site)和掉落的資源，即使它位於 rampart 之下。並對建築造成如下傷害：
            <ul>
                <li>對著落位置造成 10,000,000 hits 傷害。</li>
                <li>對周圍 5x5 區域中的建築造成 5,000,000 hits 傷害。</li>
            </ul>
            <p>注意，您可以將來自多個不同房間的核彈疊加到同一位置來增強傷害。</p>
            <p>Nuke 著落不會產生墓碑（tombstone）和遺跡（ruin），並且會銷毀房間中所有存在的墓碑和遺跡。</p>
            <p>如果核彈著落時房間正處於安全模式，則會立刻取消安全模式，並將安全模式的冷卻時間重置為 0。</p>
            <p>房間控制器將會觸發 <code>upgradeBlocked</code> 計時，這意味著在接下來的 200 tick 中將無法再次使用安全模式。</p>
        </td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.md %}


{% api_property energy 'number' '{"deprecated": true}' %}

[`.store[RESOURCE_ENERGY]`](#StructureExtension.store) 的別名。



{% api_property energyCapacity 'number' '{"deprecated": true}' %}

[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity) 的別名。



{% api_property ghodium 'number' '{"deprecated": true}' %}

[`.store[RESOURCE_GHODIUM]`](#StructureExtension.store) 的別名。



{% api_property ghodiumCapacity 'number' '{"deprecated": true}' %}

[`.store.getCapacity(RESOURCE_GHODIUM)`](#Store.getCapacity) 的別名。



{% api_property cooldown 'number' %}



下次發射前還需多少 tick 的冷卻時間。


{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```


一個包含了該建築中所存儲資源的 [`Store`](#Store) 對象。



{% api_method launchNuke 'pos' A %}

```javascript
nuker.launchNuke(new RoomPosition(20,30, 'W1N1'));
```

向指定位置發射核彈。

{% api_method_params %}
pos : <a href="#RoomPosition">RoomPosition</a>
目標房間位置
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個建築的擁有者。
ERR_NOT_ENOUGH_RESOURCES | 該建築沒有足夠的能量和/或 ghodium。
ERR_INVALID_ARGS | 目標不是有效的 RoomPosition。
ERR_INVALID_TARGET | nuke 無法發射至指定的 RoomPosition（見 [起始區域](/start-areas.html)）
ERR_NOT_IN_RANGE | 目標房間超出打擊范圍。
ERR_TIRED | 該建築仍在冷卻。
ERR_RCL_NOT_ENOUGH | 房間控制中心等級不足。
{% endapi_return_codes %}


