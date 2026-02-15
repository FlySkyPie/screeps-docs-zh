---
title: 同步動作及優先級
---

<blockquote class="note info"><p><strong>譯者注：</strong>此章所提及所有的「沖突」及「優先級」都是對同一 <a href="/creeps.html">creep</a> 而言。有關不同 creep 的沖突，參見<a href="/game-loop.html">「結束階段」</a>。</p>
</blockquote>

## 不同動作的優先級

對單一 creep 而言，其身體的構造決定了其所能執行的[動作](api/#Creep)（ action ，及藍色方塊標記的左側欄條目）。雖說您可以創造一個萬金油般的 creep ，但它仍不能在同一 [tick](/game-loop.html) 中執行所有的動作。下圖便是各個動作之間的優先級關聯：

![](#action-priorities.webp)

如過您嘗試在同一 tick 內執行多個有優先級沖突的動作，**只有圖中更靠右的的會被執行**。然而各動作的返回值並不會因優先級沖突而改變。如果動作本身是合乎情理的，那麼它總會返回 `OK` 。舉個例子：

        // 第一 tick
        creep.build(constructionSite); // ERR_NOT_ENOUGH_ENERGY - 報錯：能量不足
        creep.harvest(source); // OK – 執行成功， creep 收獲了能量
        // 第二 tick
        creep.build(constructionSite); // OK – 執行成功
        creep.harvest(source); // OK - 雖然返回值也為 OK ，但由於在同一 tick （上一行）裡使用了優先級更高的 [`Creep.build()`](api/#Creep.build)
        //所以 [`Creep.harvest()`](api/#Creep.harvest) 實際上被覆蓋了，沒有被執行。

雖說如此，但您卻能在同一 tick 內執行多個沒有優先級沖突的動作。比如說：

        creep.moveTo(target);
        creep.rangedMassAttack();
        creep.heal(target);
        creep.transfer(target, RESOURCE_ENERGY, amountTransfer);
        creep.drop(amountDrop, RESOURCE_ENERGY);
        creep.pickup(energy);
        creep.claimController(controller);

上例的動作無一沖突，都能在同一 tick 中被成功執行。

取決於能量的多少，同時使用多個有關能量傳輸的動作會導致不同的結果

*   如果能量足夠有余，那麼所有的所有動作都將會被執行
*   否則，優先級規則會介入以解決沖突

## 同一動作的優先級

值得注意的是，不同動作的執行結果僅和它們之間的優先級有關，與在代碼中的的順序無關。但是對與**相同**的動作，最後一個才會被成功執行。例如在同一 tick 中：

        creep.moveTo(target); // 被覆蓋(因為 [`Creep.moveTo()`](api/#Creep.moveTo) 源碼中有調用 [`Creep.move()`](api/#Creep.move))
        creep.move(RIGHT); // 被覆蓋
        creep.move(LEFT); // 被執行

最終結果是這個 creep 會向左移動一格。

## 更多

1.  請注意，治療一個滿血的 creep 或修復滿血的建築會返回 `OK` 並可能覆蓋其他優先級較低的動作。
2.  盡管同時使用 `transfer` （傳出）和 `drop` （丟棄）並不一定會產生優先級沖突，您卻不能同時執行多個 `transfer`（比如傳資源給多個建築），以此類推。
3.  同時執行需要 `CARRY` 部件的不同動作不會產生沖突。但資源的存量並沒不會在玩家代碼執行過程中被改變。參見[理解游戲循環、游戲時間、ticks](/game-loop.html)
