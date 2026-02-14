# Ruin

<img src="img/ruin.png" alt="" align="right" />

一個被摧毀的建築。該對象允許其他單位在其上行走。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Decay</strong></td>
        <td>500 tick 除了某些情況外</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.md %}


{% api_property destroyTime 'number' %}

該建築被摧毀的時間。

{% api_property id string %}

一個唯一的對象標識。你可以使用 <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 方法獲取對象實例。

{% api_property store '<a href="#Store">Store</a>' %}

一個包含了該建築中所存儲資源的 [`Store`](#Store) 對象。

{% api_property structure '<a href="#Structure">Structure</a> | <a href="#OwnedStructure">OwnedStructure</a>' %}

一個包含了已被摧毀建築基本信息的對象。


{% api_property ticksToDecay 'number' %}

該廢墟離老化消失還有多少 tick。



