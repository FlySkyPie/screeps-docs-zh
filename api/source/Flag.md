# Flag

一個旗幟，旗幟可以用來標記房間中的一個特定的地點。旗幟只對其所有者可見。你最多只能擁有 10,000 個旗幟。

{% page inherited/RoomObject.md %}
 
{% api_property color number %}

旗幟的主要顏色。<code>COLOR_*</code> 常量之一。



{% api_property memory any %}



指向 <code>Memory.flags[flag.name]</code> 的鏈接。你可以使用它來快速訪問到該旗幟的內存數據對象。



{% api_property name string %}

 

旗幟的名稱。你可以在創建新的旗幟時為其指定名字，名字一旦確定無法修改。創建之後會以該名稱為鍵，旗幟對象為值存放在 <a href="#Game.flags">Game.flags</a> 對象中。名稱最長不能超過 100 字符。



{% api_property secondaryColor number %}



旗幟的次要顏色。<code>COLOR_*</code> 常量之一。



{% api_method remove '' A %}



移除該旗幟。



### 返回值

永遠返回
OK
。

{% api_method setColor 'color, [secondaryColor]' A %}

```javascript
Game.flags.Flag1.setColor(COLOR_GREEN, COLOR_WHITE);
```

給旗幟設置一個新顏色

{% api_method_params %}
color : string
旗幟的主要顏色。<code>COLOR_*</code> 常量之一。
===
secondaryColor (可選) : string
旗幟的次要顏色。<code>COLOR_*</code> 常量之一。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_INVALID_ARGS | <code>color</code> 或者 <code>secondaryColor</code> 不是一個有效的 <code>COLOR_*</code> 常量。
{% endapi_return_codes %}



{% api_method setPosition 'x,y|pos' A %}

```javascript
Game.flags.Flag1.setPosition(10,20);
```

```javascript
Game.flags.Flag1.setPosition( new RoomPosition(10, 20, 'W3S5') );
```

給旗幟設置一個新的位置。

{% api_method_params %}
x : number
相同房間內的 x 坐標。
===
y : number
相同房間內的 y 坐標。
===
pos : object
可以是 <a href="#RoomPosition">RoomPosition</a> 對象或者任何包含 <a href="#RoomPosition">RoomPosition</a> 屬性的對象。
{% endapi_method_params %}


### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_INVALID_TARGET | 提供了無效的目標。
{% endapi_return_codes %}


