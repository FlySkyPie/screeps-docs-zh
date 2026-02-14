# RawMemory

RawMemory 對象允許您實現自己的內存序列器來替代內建的基於 `JSON.stringify` 的序列器。
它還允許使用異步內存分段功能請求最多 10 MB 的額外內存。

您也可以通過下述方法訪問其他玩家的內存分段。

<h2 id="RawMemory.segments" class="api-property api-property--property  "><span class="api-property__name">RawMemory.segments</span><span class="api-property__type">object</span></h2>

```javascript
RawMemory.setActiveSegments([0,3]);
// 在下個 tick
console.log(RawMemory.segments[0]);
console.log(RawMemory.segments[3]);
RawMemory.segments[3] = '{"foo": "bar", "counter": 15}';
```

當前 tick 可用的異步內存分段對象。對象的每個鍵都是其對應字符串數據的分段 ID。使用 [`setActiveSegments`](#RawMemory.setActiveSegments)</code> 來在下個 tick 獲取分段。分段數據在 tick 結束時會自動保存。每個分段的最大容量是 100 KB。


<h2 id="RawMemory.foreignSegment" class="api-property api-property--property  "><span class="api-property__name">RawMemory.foreignSegment</span><span class="api-property__type">object</span></h2>

```javascript
RawMemory.setActiveForeignSegment('player');
// 在下個 tick
console.log(RawMemory.foreignSegment); 
// --> {"username": "player", "id": 40, "data": "Hello!"} 

```

當前 tick 可用的其他玩家的內存分段對象。使用 [`setActiveForeignSegment`](#RawMemory.setActiveForeignSegment) 來在下個 tick 獲取分段。
該對象包含以下屬性：

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string</td><td><p>其他玩家的名稱</p>
</td>
<tr><td><code>id</code></td><td>number</td><td><p>被請求的內存分段 ID。</p>
</td>
<tr><td><code>data</code></td><td>string</td><td><p>分段的內容。</p>
</td>
</tbody></table>





<h2 id="RawMemory.interShardSegment" class="api-property api-property--property  api-property--deprecated"><span class="api-property__name">RawMemory.interShardSegment</span><span class="api-property__type">string</span></h2><div class="api-deprecated"><p>此属性已被弃用，将很快删除。 請使用 <a href="#InterShardMemory"><code>InterShardMemory</code></a> 代替。</p>
</div>

```javascript
RawMemory.interShardSegment = JSON.stringify({
    creeps: {
        Bob: {role: 'claimer'}
    }
});

// 在其他 shard
var interShardData = JSON.parse(RawMemory.interShardSegment);
if(interShardData.creeps[creep.name]) {
    creep.memory = interShardData[creep.name];
    delete interShardData.creeps[creep.name];
}
RawMemory.interShardSegment = JSON.stringify(interShardData);
```

在所有世界 shard 都可以訪問的內存分段字符串。字符串的最大長度為 100 KB。

**警告:** 該分段不能同時使用！所有的 shard 都有同一個數據實例的訪問權限。
當分段內容被兩個 shard 同時寫入時，由於分段字符串寫入的原子性，您可能會丟失一些數據。
您必須實現自己的系統來確定何時允許不同的 shard 重寫內存分段。例如基於 [互斥鎖（mutual exclusions）](https://en.wikipedia.org/wiki/Mutual_exclusion)。  

 
<h2 id="RawMemory.get" class="api-property api-property--method  "><span class="api-property__name">RawMemory.get</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
const myMemory = JSON.parse(RawMemory.get());
```

獲取 <code>Memory</code> 對象的原始字符串形式。



### 返回值

返回一個字符串值。

<h2 id="RawMemory.set" class="api-property api-property--method  "><span class="api-property__name">RawMemory.set</span><span class="api-property__args">(value)</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
RawMemory.set(JSON.stringify(myMemory));
```

設置新的 <code>Memory</code> 值。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>value</code></td><td>string</td><td><p>新的字符串形式的 memroy 值。</p>
</td>
</tbody></table>





<h2 id="RawMemory.setActiveSegments" class="api-property api-property--method  "><span class="api-property__name">RawMemory.setActiveSegments</span><span class="api-property__args">(ids)</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
RawMemory.setActiveSegments([0,3]);
```

使用多個分段數組的 ID 來請求響應的內存分段。內存分段將在下個 tick 的 [`segments`](#RawMemory.segments)</code> 對象中可用。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>ids</code></td><td>array</td><td><p>分段的 ID 數組。每個 ID 都應是從 0 到 99 之間的一個整數。同一時間最多只能啟用 10 個分段。後續的 <code>setActiveSegments</code> 調用將覆蓋先前的調用。</p>
</td>
</tbody></table>




<h2 id="RawMemory.setActiveForeignSegment" class="api-property api-property--method  "><span class="api-property__name">RawMemory.setActiveForeignSegment</span><span class="api-property__args">(username, [id])</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
RawMemory.setActiveForeignSegment('player');
```
```javascript
RawMemory.setActiveForeignSegment('player', 10);
```
```javascript
RawMemory.setActiveForeignSegment(null);
```

請求其他用戶的內存分段。該分段應被其所有者使用 [`setPublicSegments`](#RawMemory.setPublicSegments) 標注為公開。
該分段數據將在下個 tick 的 [`foreignSegment`](#RawMemory.foreignSegment) 對象中可用。
您同一時間只能訪問一個外部分段。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>username</code></td><td>string | null</td><td><p>其他用戶的名稱。傳入 <code>null</code> 來清除外部分段。</p>
</td>
<tr><td><code>id (可選)</code></td><td>number</td><td><p>0 到 99 之間的請求分段 ID。如果未定義，將請求該用戶通過 <a href="#RawMemory.setDefaultPublicSegment"><code>setDefaultPublicSegment</code></a> 設置的默認公開分段。</p>
</td>
</tbody></table>




<h2 id="RawMemory.setDefaultPublicSegment" class="api-property api-property--method  "><span class="api-property__name">RawMemory.setDefaultPublicSegment</span><span class="api-property__args">(id)</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
RawMemory.setPublicSegments([5,20,21]);
RawMemory.setDefaultPublicSegment(5);
```
```javascript
RawMemory.setDefaultPublicSegment(null);
```

將指定的內存分段設置為您的默認公開分段。當其他玩家使用 [`setActiveForeignSegment`](#RawMemory.setActiveForeignSegment) 訪問您的分段並且沒有傳入 `id` 參數時返回該分段。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>number | null</td><td><p>0 到 99 之間的內存分段 ID。傳入 <code>null</code> 來移除您的默認公開分段。</p>
</td>
</tbody></table>




<h2 id="RawMemory.setPublicSegments" class="api-property api-property--method  "><span class="api-property__name">RawMemory.setPublicSegments</span><span class="api-property__args">(ids)</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
RawMemory.setPublicSegments([5,3]);
```
```javascript
RawMemory.setPublicSegments([]);
```

將指定的分段設置為公開。將允許其他用戶使用 [`setActiveForeignSegment`](#RawMemory.setActiveForeignSegment) 來訪問它們。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>ids</code></td><td>array</td><td><p>分段 ID 數組。每個 ID 都應是從 0 到 99 之間的一個整數。後續的 <code>setPublicSegments</code> 調用將覆蓋先前的調用。</p>
</td>
</tbody></table>

