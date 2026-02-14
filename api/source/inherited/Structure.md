{% page inherited/RoomObject.md %}

{% api_property Structure:hits 'number' %}



當前這個建築的當前生命值。



{% api_property Structure:hitsMax 'number' %}



這個建築的最大生命值。



{% api_property Structure:id 'string' %}



一個唯一的對象標識。你可以使用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法獲取對象實例。



{% api_property Structure:structureType 'string' %}



<code>STRUCTURE_*</code>常量之一。



{% api_method Structure:destroy '' A %}



立即摧毀這個建築。



### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個建築的擁有者。
ERR_BUSY | 敵對creep在這個房間中。
{% endapi_return_codes %}



{% api_method Structure:isActive '' 2 %}



檢查這個建築是否可用。如果房間控制等級不足，這個方法會返回false，並且這個建築會在游戲中紅色高亮。



### 返回值

布爾值。

{% api_method Structure:notifyWhenAttacked 'enabled' A %}



切換這個建築受到攻擊時的自動通知。通知會發送到你的賬戶郵箱。默認開啟。

{% api_method_params %}
enabled : boolean
是否啟用通知。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是這個建築的擁有者。
ERR_INVALID_ARGS | <code>enable</code>參數不是一個布爾值。
{% endapi_return_codes %}


