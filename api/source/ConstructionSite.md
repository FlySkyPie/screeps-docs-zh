# ConstructionSite

一個正在建設中的工地。可以使用游戲界面右側的'Construct'按鈕創建工地或[`Room.createConstructionSite`](#Room.createConstructionSite)方法。

要在工地建造一個建築，需要給工人creep一些能量並執行[`Creep.build`](#Creep.build)動作。

如果想移除敵人的工地，只需讓一個creep踩在上面即可。

{% page inherited/RoomObject.md %} 

{% api_property id string %}
 


全局唯一的對象標識。你可以通過調用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法取得對象實例。



{% api_property my boolean %}



你是否擁有這個工地。



{% api_property owner object %}



建築擁有者信息，一個包含如下屬性的對象：

{% api_method_params %}
username : string
擁有者姓名。
{% endapi_method_params %}


{% api_property progress number %}



當前建造進度。



{% api_property progressTotal number %}



完成建造所需的建造總進度。



{% api_property structureType string %}



<code>STRUCTURE_*</code>常量之一。



{% api_method remove '' A %}



刪除這個工地。



### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個工地的擁有者，或者這不是你的房間。
{% endapi_return_codes %}


