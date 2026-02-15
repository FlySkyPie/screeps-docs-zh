---
title: 全局對象
---

## `Game` 對象

你可以通過全局對象 [`Game`](/api/#Game) 來操作游戲，它的詳細介紹可以在 [API 參考](/api/) 中找到。該對象可以使您訪問到您 creep 的完整列表、「查閱」房間、傳遞命令等。

```javascript
var target = Game.spawns.Spawn1;
for(var i in Game.creeps) {
    Game.creeps[i].moveTo(target);
}  
```

tick 的流動不會改變 `Game` 的狀態。即使您手動修改了該對象的某個屬性，它也不會在游戲中生效。想要修改屬性和傳遞命令只能使用特殊的游戲對象方法。

`Game` 對象在游戲開始時就已經被創建，並且每個 tick 時都會被刷新數據。如果想在 tick 之間存儲信息，可以使用 Memory 對象。閱讀下一篇文章來了解更多信息。

## `Memory` 對象

每個玩家都可以訪問全局對象 `Memory`，並且他/她可以在其中保存任何 JSON 格式的數據。所有寫入其中的數據都將自動的使用`JSON.stringify`進行保存並在每個 tick 之間傳遞。因此，您可以借此來保存設置、決策信息和臨時數據。

    Memory.someData = {...};

每個玩家可用的內存容量上限為 **2 MB**。

為了方便您的使用，一些游戲對象已經被鏈接到了全局的 `Memory` 對象並在其中保存了自己的鍵。例如，你可以通過 creep 的 `memory` 屬性來訪問到它的內存：

    Game.creeps.John.memory = {...};

實際上，這個屬性是全局對象 `Memory` 上對應鍵的別名：

    Game.creeps.John.memory.role = 'harvester';
    console.log(Memory.creeps.John.role); // -> 'harvester'

信息被保存記錄在 `Memory` 對象中，但是可以通過其他游戲對象上一些對應的鍵來進行快捷訪問。你可以由此來選擇更合適的地址尋找方法。

### 在 memory 中保存游戲對象

您不應該在 memory 保存方法或者游戲對象，就像保存在」內存(`Memory`)「中那樣。`Memory` 對象被設計用來保存 JSON 數據，並且無法保存活動的對象引用。被保存的對象數據會(因為引用的失效而變得)不再相關。並且，這麼做還會浪費您有限的內存。

    // 這是個錯誤示例！
    var source = creep.pos.findClosestByRange(FIND_SOURCES);
    creep.memory.source = source;
    // ... 
    creep.moveTo(creep.memory.source); // 返回 ERR_INVALID_TARGET (無效目標)

相對於儲存活動的對象來說，更好的方法是保存任何游戲對象都擁有的 `id` 屬性，然後在需要時使用 [`Game.getObjectById`](/api/#Game.getObjectById) 來重新獲取對應的游戲對象：

    // 這是個正確示例
    var source = creep.pos.findClosestByRange(FIND_SOURCES);
    creep.memory.sourceId = source.id;
    // ...
    var source = Game.getObjectById(creep.memory.sourceId);
    creep.moveTo(source); // OK

### 序列化

Memory 對象以字符串形式保存，並在每個 tick 您腳本第一次對其進行訪問時借助 `JSON.parse` 方法進行解析。解析所消耗的 CPU 會被當做您的腳本消耗。如果您願意的話，可以使用全局變量 [`RawMemory`](/api/#RawMemory) 來編寫您的序列化/反序列化器。它將把原始內存處理成字符串。實際上，默認的內存工作方式基本等同於下述代碼：

    Memory = JSON.parse(RawMemory.get()); //第一次訪問 Memory 對象時執行
    // ...您的代碼
    RawMemory.set(JSON.stringify(Memory));

您可以使用 [`RawMemory`](/api/#RawMemory) getter/setter 來實現自己的算法。
