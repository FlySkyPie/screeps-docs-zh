# Tombstone

<img src="img/tombstone.gif" alt="" align="right" />

死亡creep的遺物。這個對象不阻礙行走。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>消失</strong></td>
        <td>死去的creep每個身體部件5 tick</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.md %}

{% api_property creep '<a href="#Creep">Creep</a> | <a href="#PowerCreep">PowerCreep</a>' %}

```javascript
room.find(FIND_TOMBSTONES).forEach(tombstone => {
    if(tombstone.creep.my) {
        console.log(`My creep died with ID=${tombstone.creep.id} ` +
             `and role=${Memory.creeps[tombstone.creep.name].role}`);   
    }    
});
```
```javascript
room.find(FIND_TOMBSTONES).forEach(tombstone => {
    if(tombstone.creep instanceof PowerCreep) {
        console.log(`Power creep died here`);   
    }    
});
````

一個內含死亡creep或超能creep的對象。

{% api_property deathTime 'number' %}

死亡時間。

{% api_property id string %}

一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。


{% api_property store '<a href="#Store">Store</a>' %}

一個表示該結構所存儲資源的 [`Store`](#Store) 對象。


{% api_property ticksToDecay 'number' %}

這個墓碑消失的剩余時間。



