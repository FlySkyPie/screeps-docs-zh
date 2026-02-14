# InterShardMemory

`InterShardMemory` 對象提供了在不同的 shard 之間通信的接口。你的腳本在不同的 shard 內是單獨執行的，並且他們的 [`Memory`](#Memory) 對象對彼此隔離。為了在不同的 shard 之間傳遞信息，您需要使用 `InterShardMemory`。

每個 shard 可以擁有能被其他 shard 訪問的數據字符串，最長 100 KB。每個數據字符串只有其所屬的 shard 才有寫權限，
而其他的 shard 只有讀權限。

該數據和 `Memory` 完全不相關，它是一個獨立的數據容器。     

{% api_method InterShardMemory.getLocal '' 0 %}

返回當前 shard 的數據字符串內容。

{% api_method InterShardMemory.setLocal 'value' 0 %}

```javascript
var data = JSON.parse(InterShardMemory.getLocal() || "{}");
data.message = "hello from another shard!";
InterShardMemory.setLocal(JSON.stringify(data));
```

將當前 shard 的數據替換為新的值。

{% api_method_params %}
value : string
格式化為字符串的新數據。
{% endapi_method_params %}


{% api_method InterShardMemory.getRemote 'shard' 0 %}

```javascript
var data = JSON.parse(InterShardMemory.getRemote('shard0') || "{}");
console.log(data.message);
```

返回其他 shard 的數據字符串內容。

{% api_method_params %}
shard : string
Shard 名稱。
{% endapi_method_params %}
