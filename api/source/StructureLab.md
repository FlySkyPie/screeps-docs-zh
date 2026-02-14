# StructureLab

<img src="img/lab.png" alt="" align="right" />

使用基礎礦物生產化合物，強化(boost) creep 和清除強化。
點擊[本文](/resources.html)來了解更多關於礦物的信息。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>控制器等級</strong></td>
    </tr>
    <tr>
        <td>1-5</td>
        <td>—</td>
    </tr>
    <tr>
        <td>6</td>
        <td>3 labs</td>
    </tr>
    <tr>
        <td>7</td>
        <td>6 labs</td>
    </tr>
    <tr>
        <td>8</td>
        <td>10 labs</td>
    </tr>
    <tr>
        <td><strong>建造花費</strong></td>
        <td>50,000</td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>500</td>
    </tr>
    <tr>
        <td><strong>容量</strong></td>
        <td>3000 單位礦物，2000 單位能量</td>
    </tr>
    <tr>
        <td><strong>產品</strong></td>
        <td>每次反應生成 5 單位化合物</td>
    </tr>
    <tr>
        <td><strong>反應冷卻</strong></td>
        <td>取決於反應類型 (詳見[本文](/resources.html))</td>
    </tr>
    <tr>
        <td><strong>到輸入 lab 的距離</strong></td>
        <td>2 格之內</td>
    </tr>
    <tr>
        <td><strong>強化消耗</strong></td>
        <td>每個身體部件消耗 30 單位礦物，20 單位能量</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.md %}

{% api_property cooldown 'number' %}



下次反應或者清除強化之前還需等待多少 tick 的冷卻。



{% api_property energy 'number' '{"deprecated": true}' %}
                                                                
[`.store[RESOURCE_ENERGY]`](#StructureExtension.store) 的別名。



{% api_property energyCapacity 'number' '{"deprecated": true}' %}
                                                                                                                
[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity) 的別名。



{% api_property mineralAmount 'number' '{"deprecated": true}' %}
                                                                       
[`lab.store[lab.mineralType]`](#StructureExtension.store) 的別名。



{% api_property mineralType 'string' %}



該 lab 儲存的礦物類型。lab 同一時間內只能儲存一種類型的礦物。



{% api_property mineralCapacity 'number' '{"deprecated": true}' %}
                                                                                                                 
[`lab.store.getCapacity(lab.mineralType || yourMineral)`](#Store.getCapacity) 的別名。


{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```


一個包含了該建築中所存儲資源的 [`Store`](#Store) 對象。


{% api_method boostCreep 'creep, [bodyPartsCount]' A %}



使用存儲中的礦物強化 creep 的身體部件。creep 必須在相鄰與 lab 的正方形區域內。

{% api_method_params %}
creep : <a href="#Creep">Creep</a>
目標 creep。
===
bodyPartsCount (可選) : number
要強化的指定身體部件的數量。<code>TOUGH</code> 身體部件始終是從左到右進行強化，而其他部件則是從右到左。如果未指定，則對所有合適的身體部件進行強化。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 您不是該 lab 的所有者。
ERR_NOT_FOUND | lab 中存放的礦物類型無法強化該 creep 的任何身體部件。
ERR_NOT_ENOUGH_RESOURCES | lab 中沒有足夠的能量或者礦物。
ERR_INVALID_TARGET | 目標不是有效的 creep 對象。
ERR_NOT_IN_RANGE | 目標距離過遠。
ERR_RCL_NOT_ENOUGH | 房間控制器等級不足。
{% endapi_return_codes %}


{% api_method reverseReaction 'lab1, lab2' A %}


將化合物還原為其反應底物。同一個輸出 lab 可以和多個輸入 lab 進行反應。

{% api_method_params %}
lab1 : <a href="#StructureLab">StructureLab</a>
第一個輸出 lab。
===
lab2 : <a href="#StructureLab">StructureLab</a>
第二個輸出 lab。
{% endapi_method_params %}


### 返回值

下列返回值之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 您不是該 lab 的所有者。
ERR_NOT_ENOUGH_RESOURCES | 源 lab 中沒有足夠的資源。
ERR_INVALID_TARGET | 目標不是有效的 lab 對象。
ERR_FULL | 有輸出 lab 無法存放更多資源。
ERR_NOT_IN_RANGE | 目標距離過遠。
ERR_INVALID_ARGS | 該資源無法進行還原。
ERR_TIRED | 該 lab 尚在冷卻。
ERR_RCL_NOT_ENOUGH | 房間控制器等級不足。
{% endapi_return_codes %}



{% api_method runReaction 'lab1, lab2' A %}



使用另外兩個 lab 中的礦物作為底物來生產化合物。同一個輸入 lab 可以給多個輸出 lab 提供底物。

{% api_method_params %}
lab1 : <a href="#StructureLab">StructureLab</a> (lab)
第一個輸入 lab。
===
lab2 : <a href="#StructureLab">StructureLab</a> (lab)
第二個輸入 lab。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 您不是該 lab 的所有者。
ERR_NOT_ENOUGH_RESOURCES | 輸入 lab 沒有足夠的資源。
ERR_INVALID_TARGET | 目標不是有效的 lab 對象。
ERR_FULL | 目標無法接受更多資源。
ERR_NOT_IN_RANGE | 目標距離過遠。
ERR_INVALID_ARGS | 無法使用輸入 lab 中的資源進行反應。
ERR_TIRED | 該 lab 仍在冷卻中。
ERR_RCL_NOT_ENOUGH | 房間控制器等級不足。
{% endapi_return_codes %}


{% api_method unboostCreep 'creep' A %}


立刻從 creep 身上移除強化並將強化所需的 50% 化合物丟棄在地面上，該操作不會關心 creep 的剩余存活時間。creep 必須在緊鄰 lab 的正方形區域內。清除強化所需的冷卻時間等於生產強化該 creep 所需化合物的總時間。

{% api_method_params %}
creep : <a href="#Creep">Creep</a>
目標 creep。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 您不是該 lab 或者目標 creep 的所有者。
ERR_INVALID_TARGET | 目標不是有效的 creep 對象。
ERR_TIRED | 該 lab 仍在冷卻當中。
ERR_NOT_IN_RANGE | 目標太遠了。
ERR_NOT_FOUND | 目標沒有強化過的身體部件。
ERR_RCL_NOT_ENOUGH | 房間控制器等級不足。
{% endapi_return_codes %}
