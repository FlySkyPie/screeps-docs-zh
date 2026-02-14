# PathFinder.CostMatrix

存放自定義導航尋路成本的對象。默認情況下，`PathFinder` 在尋路時只考慮地形 (平原、沼澤、牆壁) —— 如果您需要繞過建築或者 creep，就需要把他們放進一個 `CostMatrix` 裡。通常情況下，您將在 `roomCallback` 內部創建 `CostMatrix`。如果在房間的 CostMatrix 裡找到了一個非零值，那麼它將替代默認的地形移動成本。您應該避免在 CostMatrix 和地形移動成本標志裡使用較大值。例如，使用 `{ plainCost: 1, swampCost: 5 }` 的 `PathFinder.search` 將比使用 `{plainCost: 2, swampCost: 10 }` 的運行的更快，並且他們將會尋路出相同的路徑。



{% api_method constructor %}

```javascript
let costs = new PathFinder.CostMatrix;
``` 

創建一個新的 CostMatrix，其中所有位置的移動成本都為 0。
 
  



{% api_method set 'x, y, cost' 0 %}

```javascript
let costs = new PathFinder.CostMatrix;
let pos = Game.spawns['Spawn1'].pos;
costs.set(pos.x, pos.y, 255); // 不能從該建築上移動
```

在 CostMatrix 中設置指定位置的移動成本。

{% api_method_params %}
x : number
位置在房間中的 x 坐標。
===
y : number
位置在房間中的 y 坐標。
===
cost : number
該位置的移動成本，必須是整數。值為 0 時將使用該地塊默認的地形移動成本。大於或等於 255 的移動成本將視為無法通過。
{% endapi_method_params %}




{% api_method get 'x, y' 0 %}



獲取該 CostMatrix 中指定位置的移動成本。

{% api_method_params %}
x : number
位置在房間中的 x 坐標。
===
y : number
位置在房間中的 y 坐標。
{% endapi_method_params %}




{% api_method clone '' 1 %}



使用當前 CostMatrix 中的相同數據創建一個新的 CostMatrix。



### 返回值

一個新的 CostMatrix 實例。

{% api_method serialize '' 1 %}

```javascript
let costs = new PathFinder.CostMatrix;
Memory.savedMatrix = costs.serialize();
```

返回該 CostMatrix 的緊湊形式，使其可以使用 <code>JSON.stringify</code> 進行存儲。



### 返回值

一個 number 數組。它除了可以被保存起來以備後續使用之外沒有什麼作用。

{% api_method PathFinder.CostMatrix.deserialize 'val' 1 %}

```javascript
let costs = PathFinder.CostMatrix.deserialize(Memory.savedMatrix)
```

靜態方法，可以將 <code>serialize</code> 方法返回的值反序列化為一個新的 CostMatrix。

{% api_method_params %}
val : object
任何 <code>serialize</code> 的返回值。
{% endapi_method_params %}


### 返回值

返回新的
<code>CostMatrix</code>
實例。
