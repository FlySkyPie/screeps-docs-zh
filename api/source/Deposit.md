# Deposit

<img src="img/deposit.png" alt="" align="right" />

生產商品所需的稀有資源儲備。 可以通過帶有 `WORK` 身體部位的 creep 來收獲。
每次采集操作都會觸發冷卻時間，冷卻時間會隨著時間的流逝而越來越長。

點擊 [本文](/resources.html) 了解更多關於 deposits 的信息。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>冷卻</strong></td> 
        <td>`0.001 * totalHarvested ^ 1.2`<td>
    </tr>
    <tr>
        <td><strong>老化</strong></td>
        <td>50,000 ticks after appearing or last harvest operation</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.md %}

{% api_property cooldown 'number' %}


下一次采集前還要冷卻多少 tick。


{% api_property depositType 'string' %}


deposit 類型, 以下常量之一:

```javascript-content
RESOURCE_MIST
RESOURCE_BIOMASS
RESOURCE_METAL
RESOURCE_SILICON
```

{% api_property id 'string' %}

唯一的對象標識符。您可以使用 <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 方法通過其 <code>id</code> 檢索對象實例。 。


{% api_property lastCooldown 'number' %}


該結構上次采集的冷卻時間。


{% api_property ticksToDecay 'number' %}


該結構還有多少 tick 就要因老化而消失。
