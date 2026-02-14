# Store

一個代表了其存儲中資源的對象。

游戲中有兩種類型的 store：通用型 store 和限定型 store。

* 通用型 store 可以儲存任意類型的資源 (例如: creep, 容器(containers), 存儲(storages), 終端(terminals))。

* 限定型 store 只能儲存該對象所需的幾種特定資源 (例如: spawn, 拓展(extension), 實驗室(lab), 核彈(nuker))。

兩種 `Store` 的原型都是相同的，但是其返回值取決於調用方法時傳入的 `resource` 參數。

你可以把資源的類型當做對象屬性來獲取對應的資源:

```javascript-content
console.log(creep.store[RESOURCE_ENERGY]);
```   



<h2 id="getCapacity" class="api-property api-property--method  "><span class="api-property__name">getCapacity</span><span class="api-property__args">([resource])</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
if(creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    goHarvest(creep);
}
```

返回指定資源的存儲容量, 對於通用型 store，當 `reource` 參數為 undefined 則返回總容量。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>resource (可選)</code></td><td>string</td><td><p>資源的類型</p>
</td>
</tbody></table>



### 返回值

返回存儲的數量, 當 `resource` 參數不是一個有效的存儲類型時返回 `null`。

<h2 id="getFreeCapacity" class="api-property api-property--method  "><span class="api-property__name">getFreeCapacity</span><span class="api-property__args">([resource])</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```
返回該存儲的剩余可用容量，對於限定型 store 來說，將在 `resource` 對該存儲有效時返回該資源的剩余可用容量。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>resource (可選)</code></td><td>string</td><td><p>資源類型。</p>
</td>
</tbody></table>



### 返回值

返回可用的剩余容量，如果 `resource` 對該 store 無效則返回 `null`。



<h2 id="getUsedCapacity" class="api-property api-property--method  "><span class="api-property__name">getUsedCapacity</span><span class="api-property__args">([resource])</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
if(Game.rooms['W1N1'].terminal.store.getUsedCapacity() == 0) {
    // terminal is empty
}
```
返回指定資源已使用的容量, 若為通用型存儲時, `reource` 參數不存在則返回總使用容量。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>resource (可選)</code></td><td>string</td><td><p>資源的類型</p>
</td>
</tbody></table>



### 返回值

返回已使用的容量, 當 `resource` 參數不是一個有效的存儲類型時返回 `null`。
