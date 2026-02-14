# PathFinder.CostMatrix

存放自定義導航尋路成本的對象。默認情況下，`PathFinder` 在尋路時只考慮地形 (平原、沼澤、牆壁) —— 如果您需要繞過建築或者 creep，就需要把他們放進一個 `CostMatrix` 裡。通常情況下，您將在 `roomCallback` 內部創建 `CostMatrix`。如果在房間的 CostMatrix 裡找到了一個非零值，那麼它將替代默認的地形移動成本。您應該避免在 CostMatrix 和地形移動成本標志裡使用較大值。例如，使用 `{ plainCost: 1, swampCost: 5 }` 的 `PathFinder.search` 將比使用 `{plainCost: 2, swampCost: 10 }` 的運行的更快，並且他們將會尋路出相同的路徑。



<h2 id="constructor" class="api-property   "><span class="api-property__name">constructor</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--undefined" title="undefined"></div>
        </h2>

```javascript
let costs = new PathFinder.CostMatrix;
``` 

創建一個新的 CostMatrix，其中所有位置的移動成本都為 0。
 
  



<h2 id="set" class="api-property api-property--method  "><span class="api-property__name">set</span><span class="api-property__args">(x, y, cost)</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
let costs = new PathFinder.CostMatrix;
let pos = Game.spawns['Spawn1'].pos;
costs.set(pos.x, pos.y, 255); // 不能從該建築上移動
```

在 CostMatrix 中設置指定位置的移動成本。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>位置在房間中的 x 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>位置在房間中的 y 坐標。</p>
</td>
<tr><td><code>cost</code></td><td>number</td><td><p>該位置的移動成本，必須是整數。值為 0 時將使用該地塊默認的地形移動成本。大於或等於 255 的移動成本將視為無法通過。</p>
</td>
</tbody></table>





<h2 id="get" class="api-property api-property--method  "><span class="api-property__name">get</span><span class="api-property__args">(x, y)</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>



獲取該 CostMatrix 中指定位置的移動成本。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>位置在房間中的 x 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>位置在房間中的 y 坐標。</p>
</td>
</tbody></table>





<h2 id="clone" class="api-property api-property--method  "><span class="api-property__name">clone</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--1" title="該方法具有較低的CPU開銷。"></div>
        </h2>



使用當前 CostMatrix 中的相同數據創建一個新的 CostMatrix。



### 返回值

一個新的 CostMatrix 實例。

<h2 id="serialize" class="api-property api-property--method  "><span class="api-property__name">serialize</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--1" title="該方法具有較低的CPU開銷。"></div>
        </h2>

```javascript
let costs = new PathFinder.CostMatrix;
Memory.savedMatrix = costs.serialize();
```

返回該 CostMatrix 的緊湊形式，使其可以使用 <code>JSON.stringify</code> 進行存儲。



### 返回值

一個 number 數組。它除了可以被保存起來以備後續使用之外沒有什麼作用。

<h2 id="PathFinder.CostMatrix.deserialize" class="api-property api-property--method  "><span class="api-property__name">PathFinder.CostMatrix.deserialize</span><span class="api-property__args">(val)</span>
        <div class="api-property__cpu api-property__cpu--1" title="該方法具有較低的CPU開銷。"></div>
        </h2>

```javascript
let costs = PathFinder.CostMatrix.deserialize(Memory.savedMatrix)
```

靜態方法，可以將 <code>serialize</code> 方法返回的值反序列化為一個新的 CostMatrix。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>val</code></td><td>object</td><td><p>任何 <code>serialize</code> 的返回值。</p>
</td>
</tbody></table>



### 返回值

返回新的
<code>CostMatrix</code>
實例。
