# RoomObject

房間中所有具有坐標的對象。幾乎所有的游戲對象原型都是從`RoomObject`派生出來的。

{% api_property effects array %}
附加的效果，一個對象數組包含如下屬性：

{% api_method_params %}
power : number
被應用的效果id。可以是自然效果或者超能效果。
===
level : number
被應用的效果等級。如果不是超能效果的話則不存在。
===
ticksRemaining : number
多長時間之後會失去這個效果。
{% endapi_method_params %}

{% api_property pos '<a href="#RoomPosition">RoomPosition</a>' %}
 


表示該對象在房間中的坐標的對象。



{% api_property room '<a href="#Room">Room</a>' %}



Room 對象的鏈接。如果對象是標志或工地並且放置在你不可見的房間中，則可能為 undefined。


