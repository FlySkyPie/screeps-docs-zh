---
title: 防御你的房間
---

Screeps 的世界危機重重，本文主要介紹保衛自己的領土不受入侵的方法。

## 安全模式

當你新開一局游戲的時候，房間的**安全模式**會被打開。這意味其他的 creeps 不能在你的房間裡對你的 creeps 造成任何影響（但是你可以干爆他們，RUA！）。詳細的介紹看 [`StructureController`](/api/#StructureController)

![](#safe_mode.webp)

安全模式持續 **20,000 個游戲 tick**（大約20小時，實際取決於每個游戲 tick 的具體時長）。如果 room controller 存有額外的激活次數也可以通過 [`StructureController.activateSafeMode`](/api/#StructureController.activateSafeMode) 手動激活:

    Game.rooms.W1N1.controller.activateSafeMode()

每一次升級時 controller 都會獲得一次激活。除此之外還可以借助 ghodium 資源通過 [`Creep.generateSafeMode`](/api/#Creep.generateSafeMode) 增加激活次數。

安全模式是 GG 前的最後一道防線，但是每個玩家在一個鏡像世界同時最多只能有一個房間處於安全模式，因此不能依賴安全模式用來防御，而應該使用牆、城牆、塔、creep 來構建房間的防御體系。

## 被動防御：牆（Walls）


最簡單的防守方法就是在出生保護期內在合適的位置構建一些**牆壁**。和環境中天然的牆不同的是，建造的牆離房間邊緣必須有 2 格以上的距離，並且可以被敵人摧毀。因此只是建造牆還不夠，還需要**強化**牆壁以拖延對手的進攻時間。

![](#defense1.webp)


牆的初始耐久只有 **1 點**。如果想要拖延敵人幾小時（甚至幾天）需要借助工人 Creep 使用[`修復`](/api/#Creep.repair)動作強化它。牆的耐久最多可以修復到 **300,000,000** 點。如果你花了足夠多的資源，這樣的一個牆可以抵御很多天的攻擊。 一個牆的佔地空間只有單個方格，你可以建造多排牆。

## 被動防御：城牆（Ramparts）

然而，牆有個弊端就是：雖然可以阻止敵人，同時也會阻止自己的單位移動，阻礙己方勢力的擴展。

這也是**城牆**的意義所在。城牆對敵人來說和牆一樣，但是自己的單位卻可以自由穿過。城牆還可以保護 creep，在城牆被摧毀前，其中的單位是無法被攻擊的，而且還可以攻擊敵人。

![](#defense2.webp)

和普通的牆一樣，城牆的初始耐久也是 1 點，最大的耐久值由控制器等級決定。在之前的文章[控制](/control.html)中介紹過。

城牆和普通牆不一樣的地方在於：每過若干個游戲 tick 耐久值就會掉一點，所以需要分配工人來讓你所有的城牆都保持堅挺，並且沒有磨損。

## 主動防御：塔（Towers）


當被動的防御系統經歷持續幾天的攻擊後（例如，當你下線登出游戲時），有時他將不可避免地被摧毀。因此在依靠強化之外，還要結合其他的一些機制來進一步提升防御效果。

![](#defense3.webp)

在控制器等級 3 級以後就可以建造**塔**（Tower）來進行主動防御。和牆與城牆不同，塔的防御是主動的。通過消耗能量，塔可以[攻擊(`attack`)](/api/#StructureTower.attack)敵人、[治療(`heal`)](/api/#StructureTower.heal)友軍以及[修復(`repair`)](/api/#StructureTower.repair)建築。

<blockquote class="note info"><p>塔的攻擊距離覆蓋整個房間，但是效果會隨著與目標的距離而衰減。因此，應該始終將塔布置在接近它們潛在目標的位置。</p>
</blockquote>

塔的任何動作將消耗 **10 單位能量**，所以你需要指派 Creep 監控塔的能量補給情況，並提供它們所需的補充。

下列代碼展示了一段關於如何利用塔在房間裡攻擊敵人簡單的示例

    function defendRoom(roomName) {
        var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
        if(hostiles.length > 0) {
            var username = hostiles[0].owner.username;
            Game.notify(`User ${username} spotted in room ${roomName}`);
            var towers = Game.rooms[roomName].find(
                FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
            towers.forEach(tower => tower.attack(hostiles[0]));
        }
    }

## 主動防御：Creeps


雖然塔可以用來主動防御，但是並不是萬能的。當對面安排了一隊分工合理的 Creeps 來入侵時，是能夠抵御多個塔樓的近距離攻擊的。相對應的，我們也可以組織 Creeps 防御者來進行防守反擊。

![](#defense4.webp)

因為城牆可以保證在其面積上的單位免受任何形式的攻擊，因此我們可以開發防御體系，讓任何一個受攻擊的方格都與一個被城牆保護著的 Creep 防御者相鄰。不過要注意在和平時期持續建造它們，是挺耗資源的。所以最好是在被圍困時快速構建他們。

為響應的 creep 編寫 AI 邏輯非常復雜，但這是唯一能保護你的房間不受入侵的方法。

<blockquote class="note info"><p>你可以在房間裡生成 <a href="/invaders.html">NPC 入侵者</a> 來測試你的防御體系。</p>
</blockquote>

所以，設計具有適當行為邏輯的優秀的防御體系將使你的房間成為很難入侵的目標。但是永遠不要在你的房間裡匆匆忙忙的滿足自己的成就。眾所周知，進攻就是最好的防御。
