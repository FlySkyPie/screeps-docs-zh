# Source
 
一個能量源對象。可以被擁有 `WORK` 身體部件的 creep 采集。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>能量容量</strong></td>
        <td>中央房間：4000<br />被控制(owned)或者被預定(reserved)房間：3000<br />未預定房間：1500</td>
    </tr>
    <tr>
        <td><strong>能量再生</strong></td>
        <td>每 300 tick</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.md %}

{% api_property energy 'number' %}



能量的剩余容量。



{% api_property energyCapacity 'number' %}



該 source 的總能量容量。



{% api_property id 'string' %}



一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。



{% api_property ticksToRegeneration 'number' %}



該 source 還有多少 tick 將會再生。


