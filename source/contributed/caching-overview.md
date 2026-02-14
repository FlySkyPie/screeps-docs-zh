---
title: 緩存概述
contributed:
    name: tedivm
    link: https://github.com/tedivm
    date: 2017-06-14
---

Screeps 是一個以性能為中心的游戲 - 性能越好，每個 tick 就能完成更多的工作。而緩存則是性能優化中極其重要的元素，在 Screeps 裡使用緩存將會讓你接觸到許多獨特的機遇和挑戰。

從本質上來說，緩存的概念十分簡單 - 通過把昂貴的代碼執行結果保存起來，來讓之後的調用變得更加簡單。緩存還有另外一個好處，它可以使得運行的函數在無法得出結果的時候也正常給出返回值。這裡有個簡單的例子：緩存尋路結果可以使得 creep 在沒有房間視野的情況下也可以正常移動，所以說，緩存可以使代碼的性能更好也更加的健壯。

## 數據存儲位置

### 內存（Memory）

存儲緩存數據最常見位置就是 [Memory](/global-objects.html#Memory-object) 了。只有這裡可以真正持久的保存數據 - 存儲在 [Memory](/global-objects.html#Memory-object) 中的所有數據會一直保留直到被刪除。因此，如果數據非常珍貴或必須保存，則可以把它放到內存裡。

[Memory](/global-objects.html#Memory-object) 有兩個主要缺點：

*   [Memory](/global-objects.html#Memory-object) 的空間最大只有 2048kb。
*   [Memory](/global-objects.html#Memory-object) 在被首次訪問時會使用 JSON.parse 進行數據解析，保存的數據越多，解析開銷就越大。

因為這些原因，我們很有必要限制 [Memory](/global-objects.html#Memory-object) 中保存的數據。


### 全局（Global）

[游戲循環](/game-loop.html)架構允許您在 」loop「 中定義每個 tick 都會執行的代碼。此外，它還允許您在外部定義開銷較大的一次性運行代碼。這是最常用的`require` 模塊 -

    // 僅在新的全局變量新建時執行
    var mod = require('mod');

    module.exports.loop = function() {
        // 每個 tick 都會執行
        mod.foo();
    }

另一個示例說明了如何保存性能損耗較大的函數的執行結果。在第一次執行之後，後續調用都會返回之前緩存下來的結果：

    let runExpensiveCodeResults = false
    function runExpensiveCode() {
        if(!runExpensiveCodeResults) {
            runExpensiveCodeResults = someExpensiveCode();
        }
        return runExpensiveCodeResults;
    }

這兩個示例的缺點在於，它們僅在代碼首次加載 "require" 時才運行或定義。您可以通過訪問 [`global`](https://nodejs.org/api/globals.html#globals_global)  對象來讓代碼更加簡潔，該對象是 Node 中的一個特殊對象，可以在任何地方進行訪問。

    function runExpensiveCode() {
        if(!global.runExpensiveCodeResults) {
            global.runExpensiveCodeResults = someExpensiveCode();
        }
        return global.runExpensiveCodeResults;
    }


global 緩存還有一些嚴格的限制：

*   `global` 對象會定期重置，這意味著所有數據都會被周期性清除。所以 `global` 對象不能視為持久性存儲。
*   將大量數據放入 `global` 緩存中可能會導致 node 的垃圾回收器被更頻繁地調用並消耗更多的 CPU。

這些限制使得 `global` 對象成為某些類型緩存的理想選擇，例如，函數的執行結果始終是相同的，或者使用「老舊」的數據也無關緊要，那麼這種就更適合在 `global` 裡進行存儲。而對於結果可能會更改並且會導致數據變得無效的情況下，就必須將元數據（例如 TTL 或版本標識符）與結果保存在一起來方便進行過期檢查。


## 代碼引入緩存（Require Cache）

每次調用`require`時其執行結果都會被緩存。這會減少服務器和腳本的運行消耗，因為它避免了每個 tick 都必須編譯各種 javascript 模塊。require 緩存和 `global` 緩存有著很高的相關性並且會被同時清除。但是在某些情況下，`require` 緩存會被（全部或部分）清除而 `global` 不會。

站在性能的角度來看，`require` 和 `global` 緩存會被清除這個事實意味著 `global resets` 是一個尤其耗費性能的事件。


## 提示

*   請不要隨意往 Memory 裡添加您的緩存，因為內存解析時間可能會比較昂貴。
*   解析對象要比解析字符串的損耗更大。在儲存之前想辦法把 [RoomPositions](/api/#RoomPosition) 之類的對象轉換為字符串，然後在需要時再將其轉換回來。這種操作可能會帶來令人驚訝的性能提升。
*   你可以壓縮具有重復數據的超大對象例如 [CostMatrixes](/api/#PathFinder-CostMatrix) 來節省大量的內存空間。經常利用這些對象的玩家最好學會使用 [lzstring](http://pieroxy.net/blog/pages/lz-string/index.html)，並且還應該保證最大限度的利用 `global` 緩存來盡可能的減少緩存所需的解壓次數。
*   通常來講，大多數緩存系統會把 TTL 放進 `set` 方法裡，但是對於 Screeps 來說，把它放在 `get` 方法裡可能更有意義。這樣就可以根據需要調整 TTL。例如，可以把沒有視野的房間已緩存 Costmax 的 TTL 設置為無限（Infinity）並且對其進行壓縮來保證數據始終可用，盡管這些數據可能會比較老舊。
*   不要忘了添加一些邏輯來自動清理過時的緩存信息，不然您的 Memory 將隨著時間推移而變得越來越臃腫。
