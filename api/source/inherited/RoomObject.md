{% api_property effects array %}
附加的效果，一個包含如下屬性的對象數組：

{% api_method_params %}
effect : number
該附加效果的 ID。可以是自然效果 ID 或者 Power ID。
===
level (可選) : number 
該附加效果的 Power 等級。如果效果不是 Power 效果則不存在該屬性。
===
ticksRemaining : number
多長時間之後會失去這個效果。
{% endapi_method_params %}


{% api_property RoomObject:pos '<a href="#RoomPosition">RoomPosition</a>' %}



表示該對象在房間中的坐標的對象。



{% api_property RoomObject:room '<a href="#Room">Room</a>' %}



Room對象的鏈接。如果對象是標志或工地並且放置在你不可見的房間中，則可能為undefined。

