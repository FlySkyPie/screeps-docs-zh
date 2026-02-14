# StructureRampart

<img src="img/rampart.png" alt="" align="right" />

阻擋敵方 creep 的移動。並防御本格空間上的我方建築和 creep。可以當做可控門來進行使用。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan=2><strong>控制器等級</strong></td>
    </tr>
    <tr>
        <td>1</td>
        <td>—</td>
    </tr>
    <tr>
        <td>2</td>
        <td>最大生命值: 300,000 hits</td>
    </tr>
    <tr>
        <td>3</td>
        <td>最大生命值: 1,000,000 hits</td>
    </tr>
    <tr>
        <td>4</td>
        <td>最大生命值: 3,000,000 hits</td>
    </tr>
    <tr>
        <td>5</td>
        <td>最大生命值: 10,000,000 hits</td>
    </tr>
    <tr>
        <td>6</td>
        <td>最大生命值: 30,000,000 hits</td>
    </tr>
    <tr>
        <td>7</td>
        <td>最大生命值: 100,000,000 hits</td>
    </tr>
    <tr>
        <td>8</td>
        <td>最大生命值: 300,000,000 hits</td>
    </tr>
    <tr>
        <td><strong>花費</strong></td>
        <td>1</td>
    </tr>
    <tr>
        <td><strong>建造完成時的生命值</strong></td>
        <td>1</td>
    </tr>
    <tr>
        <td><strong>老化</strong></td>
        <td>每 100 ticks 失去 300 hits</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.md %}


{% api_property isPublic 'boolean' %}


當值為 false (默認) 時。只有你的 creep 能通過。當值為 true 時，任何玩家的 creep 都可以通過。



{% api_property ticksToDecay 'number' %}


還有多少 tick 就要因老化而失去生命值。



{% api_method setPublic 'isPublic' A %}



將該 rampart 的狀態設置為開放，從而允許其他玩家的 creep 通過。

{% api_method_params %}
isPublic : boolean
該 rampart 是否開放
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個建築的擁有者。
{% endapi_return_codes %}


