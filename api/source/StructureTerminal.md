# StructureTerminal

<img src="img/terminal.png" alt="" align="right" />

終端可以發送任意資源到另一個房間的終端。目標終端可以屬於任何一個玩家。
每個事務都需要額外消耗能量（無論傳輸資源類型如何），
可以使用[`Game.market.calcTransactionCost`](#Game.market.calcTransactionCost)計算所需能量。
例如，從W0N0發送1000單位礦物到W10N5需要消耗742單位能量。
你可以使用[`Game.market`](#Game.market)對象跟蹤你的收入和支出事務。
一個房間只會有一個終端，所以可以通過[`Room.terminal`](#Room.terminal)屬性訪問。

終端可以用於[交易系統](/market.html).

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>控制中心等級</strong></td>
    </tr>
    <tr>
        <td>1-5</td>
        <td>—</td>
    </tr>
    <tr>
        <td>6-8</td>
        <td>1 terminal</td>
    </tr>
    <tr>
        <td><strong>建築成本</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>3,000</td>
    </tr>
    <tr>
        <td><strong>容量</strong></td>
        <td>300,000</td>
    </tr>
    <tr>
        <td><strong>冷卻時間</strong></td>
        <td>10 ticks</td>
    </tr>
    </tbody>
</table> 

{% page inherited/OwnedStructure.md %}

{% api_property cooldown 'number' %}

這個終端不能調用[`StructureTerminal.send`](#StructureTerminal.send)或[`Game.market.deal`](#Game.market.deal)的剩余tick。


{% api_property store '<a href="#Store">Store</a>' %}

A [`Store`](#Store) object that contains cargo of this structure.


{% api_property storeCapacity 'number' '{"deprecated": true}' %}
                                                                              
An alias for [`.store.getCapacity()`](#Store.getCapacity).

{% api_method send 'resourceType, amount, destination, [description]' A %}

```javascript
Game.rooms['W1N1'].terminal.send(RESOURCE_UTRIUM, 100, 'W2N3',
	'trade contract #1');
```

發送資源給指定房間的終端

{% api_method_params %}
resourceType : string
<code>RESOURCE_*</code> 常量之一。
===
amount : number
發送資源數量。
===
destination : string
目標房間名稱。這個房間不需要對你可見。
===
description (可選) : string
這個事務的備注。它只對收件人可見。最大長度100字符。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個建築的擁有者。
ERR_NOT_ENOUGH_RESOURCES | 這個建築沒有對應數量的資源。
ERR_INVALID_ARGS | 無效參數。
ERR_TIRED | 這個終端依然在冷卻中。
{% endapi_return_codes %}

