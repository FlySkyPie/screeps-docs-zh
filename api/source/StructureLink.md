# StructureLink

<img src="img/link.png" alt="" align="right" /> 

將能量遠程傳輸到同一房間的另一個 Link 中。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>控制器等級</strong></td>
    </tr>
    <tr>
        <td>1-4</td>
        <td>—</td>
    </tr>
    <tr>
        <td>5</td>
        <td>2 links</td>
    </tr>
    <tr>
        <td>6</td>
        <td>3 links</td>
    </tr>
    <tr>
        <td>7</td>
        <td>4 links</td>
    </tr>
    <tr>
        <td>8</td>
        <td>6 links</td>
    </tr>
    <tr>
        <td><strong>建造花費</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>1,000</td>
    </tr>
    <tr>
        <td><strong>容量</strong></td>
        <td>800</td>
    </tr>
    <tr>
        <td><strong>冷卻時間</strong></td>
        <td>該 Link 到目標的線性距離每格增加 1 tick 冷卻。</td>
    </tr>
    <tr>
        <td><strong>能量傳輸損耗</strong></td>
        <td>3%</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.md %}


{% api_property cooldown 'number' %}



下次傳輸之前還需多少 tick 的冷卻。



{% api_property energy 'number' '{"deprecated": true}' %}
                                                                
[`.store[RESOURCE_ENERGY]`](#StructureExtension.store) 的別名。



{% api_property energyCapacity 'number' '{"deprecated": true}' %}
                                                                                                                
[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity) 的別名。

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```


一個包含了該建築中所存儲資源的 [`Store`](#Store) 對象。



{% api_method transferEnergy 'target, [amount]' A %}

```javascript
const linkFrom = Game.rooms['W1N1'].lookForAt('structure', 10, 25)[0];

const linkTo = linkFrom.pos.findInRange(FIND_MY_STRUCTURES, 2,
    {filter: {structureType: STRUCTURE_LINK}})[0];

linkFrom.transferEnergy(linkTo);
```

將能量遠程傳輸到同一房間中任何位置的另一個 Link 中。

{% api_method_params %}
target : <a href="#StructureLink">StructureLink</a>
目標對象。
===
amount (可選) : number
將要傳輸的能量值。如果省略，所有能量都將被傳輸。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該 link 的所有者。
ERR_NOT_ENOUGH_RESOURCES | 這個建築內的資源少於給定的數量。
ERR_INVALID_TARGET | 目標不是一個有效的 StructureLink 對象。
ERR_FULL | 目標無法接受更多能量。
ERR_INVALID_ARGS | 資源數量不正確。
ERR_TIRED | 該 link 仍在冷卻中。
ERR_RCL_NOT_ENOUGH | 房間控制器等級不足以使用該 link。
ERR_NOT_IN_RANGE | 目標太遠了。
{% endapi_return_codes %}


