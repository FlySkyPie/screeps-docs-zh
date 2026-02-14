# StructureObserver

<img src="img/observer.png" alt="" align="right" /> 

為你的代碼提供遠處房間的視野。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>控制中心等級</strong></td>
    </tr>
    <tr>
        <td>1-7</td>
        <td>—</td>
    </tr>
    <tr>
        <td>8</td>
        <td>1 觀察者</td>
    </tr>
    <tr>
        <td><strong>建築成本</strong></td>
        <td>8,000</td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>500</td>
    </tr>
    <tr>
        <td><strong>觀察范圍</strong></td>
        <td>10個房間</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.md %}


{% api_method observeRoom 'roomName' A %}



為你的代碼提供遠處房間的視野。目標房間將在下一個tick可見。

{% api_method_params %}
roomName : string
目標房間名。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個建築的擁有者。
ERR_INVALID_ARGS | <code>roomName</code>參數不是一個有效的房間名。
ERR_NOT_IN_RANGE | 房間<code>roomName</code>不在觀察范圍內。
ERR_RCL_NOT_ENOUGH | 房間控制中心等級不足。
{% endapi_return_codes %}


