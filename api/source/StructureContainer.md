# StructureContainer

<img src="img/container.png" alt="" align="right" />

一個可以用來存儲資源的小型容器。這是一個允許走上去的建築。所有丟棄在同一方格上的資源都會被自動存儲到 container 中。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>控制器等級</strong></td>
        <td>任何等級 (包括無主房間)</td>
    </tr>
    <tr>
        <td><strong>每個房間允許建造的數量</strong></td>
        <td>5</td>
    </tr>
    <tr>
        <td><strong>容量</strong></td>
        <td>2,000</td>
    </tr>
    <tr>
        <td><strong>建築花費</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>250,000</td>
    </tr>
    <tr>
        <td><strong>老化</strong></td>
        <td>在被自己控制的房間內每 500 tick 失去 5,000 生命值, 在沒有控制的房間內該時間將降低至 100 tick。</td>
    </tr>
    </tbody>
</table>

{% page inherited/Structure.md %}

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
const containersWithEnergy = room.find(FIND_STRUCTURES, {
    filter: (i) => i.structureType == STRUCTURE_CONTAINER &&
                   i.store[RESOURCE_ENERGY] > 0
});
```

```javascript
const total = _.sum(container.store);
``` 

容器內容物對象。每一個鍵都是<code>RESOURCE_*</code>常量，值是資源數量。如果沒有<code>RESOURCE_ENERGY</code>，它的值始終為0，而其他資源的值為undefined。你可以使用<a href="https://github.com/lodash/lodash/blob/3.10.1/doc/README.md#_sumcollection-iteratee-thisarg"><code>lodash.sum</code></a>來獲得內容物總量。



{% api_property storeCapacity 'number' %}

一個包含了該建築中所存儲的貨物的 [`Store`](#Store) 對象。

{% api_property storeCapacity 'number' '{"deprecated": true}' %}
                                       
[`.store.getCapacity()`](#Store.getCapacity) 的別名。



{% api_property ticksToDecay 'number' %}



還有多少 tick 就要因老化而失去生命值。


