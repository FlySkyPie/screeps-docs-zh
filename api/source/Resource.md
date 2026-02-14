# Resource 

掉落的資源。 如果沒有拿起，它會在一段時間後消失。
掉落的資源以每tick`ceil(amount/1000)`的速度消失。

{% page inherited/RoomObject.md %}

{% api_property amount 'number' %}



資源數量。



{% api_property id 'string' %}



一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。



{% api_property resourceType 'string' %}



<code>RESOURCE_*</code>常量之一。


