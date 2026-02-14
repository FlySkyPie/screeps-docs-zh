# InterShardMemory

`InterShardMemory` 對象提供了在不同的 shard 之間通信的接口。你的腳本在不同的 shard 內是單獨執行的，並且他們的 [`Memory`](#Memory) 對象對彼此隔離。為了在不同的 shard 之間傳遞信息，您需要使用 `InterShardMemory`。

每個 shard 可以擁有能被其他 shard 訪問的數據字符串，最長 100 KB。每個數據字符串只有其所屬的 shard 才有寫權限，
而其他的 shard 只有讀權限。

該數據和 `Memory` 完全不相關，它是一個獨立的數據容器。     

<h2 id="InterShardMemory.getLocal" class="api-property api-property--method  "><span class="api-property__name">InterShardMemory.getLocal</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

返回當前 shard 的數據字符串內容。

<h2 id="InterShardMemory.setLocal" class="api-property api-property--method  "><span class="api-property__name">InterShardMemory.setLocal</span><span class="api-property__args">(value)</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
var data = JSON.parse(InterShardMemory.getLocal() || "{}");
data.message = "hello from another shard!";
InterShardMemory.setLocal(JSON.stringify(data));
```

將當前 shard 的數據替換為新的值。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>value</code></td><td>string</td><td><p>格式化為字符串的新數據。</p>
</td>
</tbody></table>



<h2 id="InterShardMemory.getRemote" class="api-property api-property--method  "><span class="api-property__name">InterShardMemory.getRemote</span><span class="api-property__args">(shard)</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
var data = JSON.parse(InterShardMemory.getRemote('shard0') || "{}");
console.log(data.message);
```

返回其他 shard 的數據字符串內容。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>shard</code></td><td>string</td><td><p>Shard 名稱。</p>
</td>
</tbody></table>

