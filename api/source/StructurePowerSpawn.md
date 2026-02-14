# StructurePowerSpawn

<img src="img/powerSpawn.png" alt="" align="right" />

提煉超能 (power) 並注冊到您的賬戶當中，可以孵化擁有獨一無二能力的超能 creep (仍在開發中)。
點擊[本文](/power.html)查看跟多有關超能的信息。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>控制器等級</strong></td>
    </tr>
    <tr>
        <td>1-7</td>
        <td>—</td>
    </tr>
    <tr>
        <td>8</td>
        <td>1 power spawn</td>
    </tr>
    <tr>
        <td><strong>建造花費</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>容量</strong></td>
        <td>5,000 energy units, 100 power units</td>
    </tr>
    <tr>
        <td><strong>提煉花費</strong></td>
        <td>1 power 消耗 50 energy</td>
    </tr>
    <tr>
        <td><strong>提煉速度</strong></td>
        <td>每 tick 1 power</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.md %}


{% api_property energy 'number' '{"deprecated": true}' %}
                                                                
[`.store[RESOURCE_ENERGY]`](#StructureExtension.store) 的別名。



{% api_property energyCapacity 'number' '{"deprecated": true}' %}
                                                                                                                
[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity) 的別名。



{% api_property power 'number' '{"deprecated": true}' %}
                                                               
[`.store[RESOURCE_POWER]`](#StructureExtension.store) 的別名。



{% api_property powerCapacity 'number' '{"deprecated": true}' %}
                                                                                                               
[`.store.getCapacity(RESOURCE_POWER)`](#Store.getCapacity) 的別名。

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```


一個包含了該建築中所存儲的貨物的 [`Store`](#Store) 對象。


{% api_method processPower '' A %}



將超能 (power) 資源注冊到您的賬戶當中。注冊超能允許開發超能 creep 的技能。



### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個建築的擁有者。
ERR_NOT_ENOUGH_RESOURCES | 這個建築沒有足夠的能量或者超能資源。
ERR_RCL_NOT_ENOUGH | 房間控制中心等級不足。
{% endapi_return_codes %}

