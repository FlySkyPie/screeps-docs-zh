# OwnedStructure

存在擁有者的建築的基礎原型。
這類建築可以被用`FIND_MY_STRUCTURES`或`FIND_HOSTILE_STRUCTURES`找到。

{% page inherited/Structure.md %}  

{% api_property my 'boolean' %}



是否是你擁有的建築。



{% api_property owner 'object' %}



建築擁有者信息，一個包含如下屬性的對象：

{% api_method_params %}
username : string
擁有者姓名。
{% endapi_method_params %}

