# Mineral

礦床。在建有 extractor 建築時可以通過帶有 `WORK` 身體部件的 creep 采集。
點擊 [本文](/resources.html) 來了解更多關於 mineral 的信息。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>再生容量</strong></td>
        <td><code>DENSITY_LOW</code>: 15,000 <br /> <code>DENSITY_MODERATE</code>: 35,000<br /> <code>DENSITY_HIGH</code>: 70,000 <br /> <code>DENSITY_ULTRA</code>: 100,000</td>
    </tr>
    <tr>
        <td><strong>再生時間</strong></td>
        <td>50,000 ticks</td>
    </tr>
    <tr>
        <td><strong>豐度(Density)改變機率</strong></td>
        <td><code>DENSITY_LOW</code>: 100% 機率改變<br /> <code>DENSITY_MODERATE</code>: 5% 機率改變<br /> <code>DENSITY_HIGH</code>: 5% 機率改變<br /> <code>DENSITY_ULTRA</code>: 100% 機率改變</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.md %}

{% api_property density 'number' %}



礦床豐度。豐度越高其容量越大。一旦再生時間 (<code>ticksToRegeneration</code>) 降為 0，該礦床的豐度將被重置為 <code>DENSITY_*</code> 常量之一。



{% api_property mineralAmount 'number' %}



資源的剩余容量。



{% api_property mineralType 'string' %}



資源類型， <code>RESOURCE_*</code> 常量之一。



{% api_property id 'string' %}



一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。



{% api_property ticksToRegeneration 'number' %}



礦床容量將要恢復滿額的剩余時間。


