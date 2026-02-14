# StructureTower
	
<img src="img/tower.png" alt="" align="right" />

遠程攻擊creep，治療creep，或維修建築。房間裡的任意對象都可以指定為它的目標。然而，效果線性地取決距離。每一個動作都會消耗能量。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>Controller level</strong></td>
    </tr>
    <tr>
        <td>1-2</td>
        <td>—</td>
    </tr>
    <tr>
        <td>3-4</td>
        <td>1個塔</td>
    </tr>
    <tr>
        <td>5-6</td>
        <td>2個塔</td>
    </tr>
    <tr>
        <td>7</td>
        <td>3個塔</td>
    </tr>
    <tr>
        <td>8</td>
        <td>6個塔</td>
    </tr>
    <tr>
        <td><strong>建築成本</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>3,000</td>
    </tr>
    <tr>
        <td><strong>容量</strong></td>
        <td>1,000</td>
    </tr>
    <tr>
        <td><strong>每個動作能量消耗</strong></td>
        <td>10</td>
    </tr>
    <tr>
        <td><strong>攻擊效果</strong></td>
        <td>從距離 ≦5 的 600 點到距離 ≧20 的 150 點</td>
    </tr>
    <tr>
        <td><strong>治療效果</strong></td>
        <td>從距離 ≦5 的 400 點到距離 ≧20 的 100 點</td>
    </tr>
    <tr>
        <td><strong>維修效果</strong></td>
        <td>從距離 ≦5 的 800 點到距離 ≧20 的 200 點</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.md %}


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


一個代表這該結構所存儲能量的 [`Store`](#Store) 對象。


{% api_method attack 'target' A %}



遠程攻擊房間裡的任意 creep、超能 creep 或房間內的結構。

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>, <a href="#Structure">Structure</a>
目標creep。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個建築的擁有者。
ERR_NOT_ENOUGH_ENERGY | 這個塔沒有足夠的能量。
ERR_INVALID_TARGET | 這個目標不是一個有效的攻擊目標。
ERR_RCL_NOT_ENOUGH | 房間控制等級不足。
{% endapi_return_codes %}



{% api_method heal 'target' A %}



遠程治療房間裡的任意 creep 或超能 creep。

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>
The target creep.
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個建築的擁有者。
ERR_NOT_ENOUGH_ENERGY | 這個塔沒有足夠的能量。
ERR_INVALID_TARGET | 這個目標不是一個有效的creep對象。
ERR_RCL_NOT_ENOUGH | 房間控制等級不足。
{% endapi_return_codes %}



{% api_method repair 'target' A %}



遠程維修房間裡的任意建築。

{% api_method_params %}
target : <a href="#Structure">Structure</a>
目標建築。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個建築的擁有者。
ERR_NOT_ENOUGH_ENERGY | 這個塔沒有足夠的能量。
ERR_INVALID_TARGET | 這個目標不是一個有效的可維修對象。
ERR_RCL_NOT_ENOUGH | 房間控制中心等級不足。
{% endapi_return_codes %}

