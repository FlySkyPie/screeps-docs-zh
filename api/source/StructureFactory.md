# StructureFactory

<img src="img/factory.png" alt="" align="right" />

使用基礎礦物和其他商品(commodities)來生產貿易商品。點擊 [本文](/resources.html#Commodities) 來了解有關商品的更多信息。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>控制器等級</strong></td>
    </tr>
    <tr>
        <td>1-6</td>
        <td>—</td>
    </tr>
    <tr>
        <td>7-8</td>
        <td>1 factory</td>
    </tr>
    <tr>
        <td><strong>生產花費</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>1000</td>
    </tr>
    <tr>
        <td><strong>容量</strong></td>
        <td>50,000</td>
    </tr>
    <tr>
        <td><strong>生產冷卻</strong></td>
        <td>取決於生產的資源</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.md %} 

{% api_property cooldown 'number' %}



還有多少 tick 才能進行下一次生產。

{% api_property level number %}

```javascript
if(!factory.level) {
    Game.powerCreeps['MyOperator1'].usePower(PWR_OPERATE_FACTORY, factory);
}
```

工廠的等級，可以通過 `PWR_OPERATE_FACTORY` 超能來給一個新建的工廠設置等級。
一旦被設置，等級將無法再次更改。

{% api_property store '<a href="#Store">Store</a>' %}

一個包含了該建築中所存儲的貨物的 [`Store`](#Store) 對象。



{% api_property storeCapacity 'number' '{"deprecated": true}' %}
                                                                                                               
[`.store.getCapacity()`](#Store.getCapacity) 的別名。

{% api_method produce 'resourceType' A %}

```javascript
factory.produce(RESOURCE_UTRIUM_BAR);
```

生產指定商品。工廠存儲中應該包含所有的生產用料。

{% api_method_params %}
resourceType : string
<code>RESOURCE_*</code> 常量之一。
{% endapi_method_params %}


### 返回值

下列返回碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該控制器的所有者。
ERR_RCL_NOT_ENOUGH | 房間控制器等級不足以使用該建築。
ERR_NOT_ENOUGH_RESOURCES | 生產所需的資源數量不足。
ERR_INVALID_ARGS | 提供的參數不正確。
ERR_INVALID_TARGET | 此工廠無法生產該等級的商品。
ERR_TIRED | 工廠仍在冷卻。
ERR_BUSY | 無法通過 `PWR_OPERATE_FACTORY` 超能來操作此工廠。
ERR_FULL | 此工廠的存儲已無法容納要生產的商品。
{% endapi_return_codes %}
