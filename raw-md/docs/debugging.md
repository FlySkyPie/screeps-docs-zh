title: 調試
---

Javascript 源生的 `console.log()` 。

	for(var i in Game.creeps) {
        console.log(Game.creeps[i]);
    }

對於所以的動作指令，若被執行了，則返回值為 `OK`，如果無法被執行，則會返回相應的錯誤代碼 `ERR_*` 。

	var result = creep.attack(target);
    if(result != OK) {
        console.log(creep + ' failed to attack the target ' + target +
                        ' with the code: ' + result);
    }


注意，一個看似合理的指令並不一定能被執行。（比如， creep 遇見了未被其代碼聲明的障礙）

玩家可用並行世界副本[公共測試領域](/ptr.html)來測試其代碼。

## 在瀏覽器端調試

當用瀏覽器玩此游戲時，所有控制台輸出都會被轉發到瀏覽器控制台。在 Simulation 模式下，玩家的代碼由瀏覽器，所以玩家得以擴展，查看和遍歷對象及其屬性等。

在 Chrome 瀏覽器裡，您可以使用 `debugger` Javascript 關鍵詞來暫停執行並進行調試:

	var result = creep.attack(target);
    if(result != OK) {
        debugger;
    }

## 監測 Memory

如果玩家想實時觀察變量，可選擇把它們寫入 Memory 並將其加入監測器面板。監測器面板每 tick 會自動更新。

![](img/chrome_2016-06-21_22-21-36.png)
