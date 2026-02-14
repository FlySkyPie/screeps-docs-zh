# StructureStorage

<img src="img/storage.png" alt="" align="right" />

可以儲存大量資源的建築。每個房間內僅允許建造一個，所以你可以使用 [`Room.storage`](#Room.storage) 屬性來快速訪問它。</p>

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>控制器等級</strong></td>
    </tr>
    <tr>
        <td>1-3</td>
        <td>—</td>
    </tr>
    <tr>
        <td>4-8</td>
        <td>1 個 storage</td>
    </tr>
    <tr>
        <td><strong>花費</strong></td>
        <td>30,000</td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>10,000</td>
    </tr>
    <tr>
        <td><strong>儲量</strong></td>
        <td>1,000,000</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.md %}


{% api_property store '<a href="#Store">Store</a>' %}

一個包含了該建築中所存儲的貨物的 [`Store`](#Store) 對象。


{% api_property storeCapacity 'number' '{"deprecated": true}' %}
                                                                              
[`.store.getCapacity()`](#Store.getCapacity) 屬性的別名.

