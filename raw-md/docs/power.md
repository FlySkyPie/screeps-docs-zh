title: 超能
---

超能是是一種游戲後期的機制，在你的領地發展中開啟一段全新的旅程：通過提高效率替代擴大領地規模。它的基本內容如下：

* 你開采一種叫做「超能」的特殊資源。

* 這項資源可以在8級以上的房間處理，並增加你的**全局超能等級（Global Power Level GPL）**

* 全局超能等級 GPL 允許你創造**超能 creep（Power Creeps PC）**，一種特殊的英雄單位，可以升級和獲得技能。 

## 超能寶庫（Power Bank）

![](img/power_banks.gif)

超能可以從叫作 [超能寶庫（Power Bank）](/api/#StructurePowerBank)的建築物中收集，它時常出現在劃分活動區域的中立空房間裡。每個超能寶庫包含隨機數量的超能，摧毀該建築可以獲取它。由於這些建築具有高能量的屬性，它將會反彈所受傷害的 50% 給攻擊它的 creep，因此需要在隊伍中編入一些治療者。

你也可以從市場中買到超能，無論是其他玩家還是 NPC 商人。

## Global Power Level

![](#gpl.webp) 

8 級的房間將會解鎖叫 [超能母巢（Power Spawn）](/api/#StructurePowerSpawn)的建築。它允許執行[`StructurePowerSpawn.processPower`](/api/#StructurePowerSpawn.processPower)方法。將 50 單位的能量與 1 單位的超能進行融合，你可以增加你的**全局超能等級 GPL**。通過提升等級，你將會解鎖開發**超能creep（PC）**的能力。

你可以在游戲中的[預覽頁面](https://screeps.com/a/#!/overview)查看你的全局超能等級 GPL。或者使用API[`Game.gpl`](/api/#Game.gpl)的屬性。

## 超能 Creeps

<video autoplay loop muted playsinline>
    <source src="img/pc_anim.mp4" type="video/mp4">
</video>

[超能 creep Power Creeps](/api/#PowerCreep) (PC)和游戲中的常規creep不同，類似於策略游戲中的英雄單位。

超能 creep 是不朽的。一個新建造的超能 creep 將會你的賬號綁定，甚至在還沒被招募到游戲世界的時候就存在賬號裡了。在它死後（老死或者手動強制死亡），它只是會返回你的賬號中，等待 8 小時的冷卻後，你仍然可以在任何一個超能母巢中再次招募它。

超能 creep 有以下三種類型：

<table>
<tr>
<td style="padding: 10px; background: #141414"><img src="#operator.webp"></td>
<td><strong>操作員 Operator</strong><br>
一種在後方基地工作的 creep，雖然它可以在進攻時作為破壞者使用。
</td>
</tr>
<tr style="background: none">
<td style="padding: 10px; background: #141414"><img src="#commander.webp"></td>
<td><strong>司令官 Commander</strong><br>
這種超能 creep 是團隊輔助，單獨使用時發揮不出來。它可以給己方常規 creep 施加增益效果，給敵方常規 creep 施加減益效果。
</td>
</tr>
<tr>
<td style="padding: 10px; background: #141414"><img src="#executor.webp"></td>
<td><strong>執行官 Executor</strong><br>
這類 creep 喜好獨來獨往。鑑於它的技能特點，它可以在和平時期加速經濟發展，或在戰爭時期變身戰爭機器。
</td>
</tr> 
</table> 

超能 creep 擁有 0 到 25 個等級和技能（也就是所謂的「**超能力**」），每當升一次級，你可以添加一項新的技能，或者提升現有技能的等級。

你需要至少一個空余的全局超能等級GPL才能提升現有超能 creep 的等級，同樣的你也需要一個空余的全局超能等級 GPL 創建一個新的 0 級超能 creep。

你可以在任何沒有控制器的房間使用超能creep的技能，或者在有 power-enabled 控制器的房間使用（詳見 [`PowerCreep.enableRoom`](/api/#PowerCreep.enableRoom)）。

雖然超能 creep 有壽並且會老死。但是你可以在任何超能母巢或者超能寶庫附近執行[`PowerCreep.renew`](/api/#PowerCreep.renew)，這將會無花費的恢復它的壽命。如果你能及時地找到超能寶庫並恢復，它可以進行長距離移動。

<blockquote class="note warn"><p><strong style="color: #f33">CAUTION</strong>: 你可以從你的賬號中刪除超能 creep（為了釋放更多空余全局超能等級 GPL 或者新造一個），但是這個操作會<strong>降低你的全局超能等級 1 級</strong>！這項移除工作需要 24 個小時。</p>
</blockquote>

如果你想要查看你的超能 creep 是如何配置的，並從頭開始創建它們，請激活一個**試驗期**。它將允許你在 24 小時之內在不影響 GPL 的情況下瞬時創建和刪除你的超能 creep。每個玩家被授予 30 個試驗期。如果平衡性調整或者引入新技能導致玩家需要重新審視自己的超能 creep 配置時，我們將會不時的補充一些試驗期數量。

## Powers

### Operator

<table><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/generate-ops.svg">
        </td>
        <th>GENERATE_OPS</th>
        <td>生成 1/2/4/6/8 点 ops 资源。冷却 50 tick。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/operate-spawn.svg">
        </td>
        <th>OPERATE_SPAWN</th>
        <td>减少 10/30/50/65/80%</b> 的孵化时间。效果持续 1000 tick。冷却 300 tick。范围 3 格以内。消耗 100 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/operate-tower.svg">
        </td>
        <th>OPERATE_TOWER</th>
        <td>提升 10/20/30/40/50%</b> 的攻击、修理或治疗效果。效果持续 100 tick。冷却 10 tick。范围 3 格以内。消耗 10 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/operate-storage.svg">
        </td>
        <th>OPERATE_STORAGE</th>
        <td>提升 500K/1M/2M/4M/7M 单位的存储容量。效果持续 1000 tick。冷却 800 tick。范围 3 格以内。消耗 100 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/operate-lab.svg">
        </td>
        <th>OPERATE_LAB</th>
        <td>增加 2/4/6/8/10 单位的反应效率。效果持续 1000 tick。冷却 50 tick。范围 3 格以内。消耗 10 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/operate-extension.svg">
        </td>
        <th>OPERATE_EXTENSION</th>
        <td>使用目标建筑（container、storage 或者 terminal）中的能量，立刻填充房间中 20/40/60/80/100% 的 extension。冷却 50 tick。范围 3 格以内。消耗 2 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/operate-observer.svg">
        </td>
        <th>OPERATE_OBSERVER</th>
        <td>给予无限视野范围。效果持续 200/400/600/800/1000 tick。冷却 400 tick。范围 3 格以内。消耗 10 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/operate-terminal.svg">
        </td>
        <th>OPERATE_TERMINAL</th>
        <td>将资源转移的能量消耗和冷却时间降低 10/20/30/40/50%</b>。效果持续 1000 tick。冷却 500 tick。范围 3 格以内。消耗 100 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/disrupt-spawn.svg">
        </td>
        <th>DISRUPT_SPAWN</th>
        <td>暂停孵化进程。效果持续 1/2/3/4/5 tick。冷却 5 tick。范围 20 格以内。消耗 10 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/disrupt-tower.svg">
        </td>
        <th>DISRUPT_TOWER</th>
        <td>削弱 10/20/30/40/50%</b> 的效果。效果持续 5 tick。无冷却。范围 50 格以内。消耗 10 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/disrupt-source.svg">
        </td>
        <th>DISRUPT_SOURCE</th>
        <td>暂停 Source 的能量再生。效果持续 100/200/300/400/500 tick。冷却 100 tick。范围 3 格以内。消耗 100 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/shield.svg">
        </td>
        <th>SHIELD</th>
        <td>在其所在地块上创建一个拥有 5K/10K/15K/20K/25K 点生命值、无法修复的临时 rampart。如果该地块已有 rampart 则无法使用。消耗 100 点能量。效果持续 50 tick。冷却 20 tick。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/regen-source.svg">
        </td>
        <th>REGEN_SOURCE</th>
        <td>使 Source 每 15 tick 重新生成 50/100/150/200/250 点能量。效果持续 300 tick。冷却 100 tick。范围 3 格以内。creep 等级要求: 10/11/12/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/regen-mineral.svg">
        </td>
        <th>REGEN_MINERAL</th>
        <td>使矿藏每 10 tick 增加 2/4/6/8/10 点矿物。效果持续 100 tick。冷却 100 tick。范围 3 格以内。creep 等级要求: 10/11/12/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/disrupt-terminal.svg">
        </td>
        <th>DISRUPT_TERMINAL</th>
        <td>阻止从 terminal 中取出（withdraw）或使用资源。效果持续 10 tick。冷却 8 tick。范围 50 格以内。消耗 50/40/30/20/10 点 ops 资源。creep 等级要求: 20/21/22/23/24.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/operate-power.svg">
        </td>
        <th>OPERATE_POWER</th>
        <td>将 Power Spawn 的 power 处理速度提升  1/2/3/4/5 单位每秒。效果持续 1000 tick。冷却 800 tick。范围 3 格以内。消耗 200 点 ops 资源。creep 等级要求: 10/11/12/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/fortify.svg">
        </td>
        <th>FORTIFY</th>
        <td>使得一个 wall 或者 rampart 免疫所有来自 creep 的伤害和 power 的效果。效果持续 1/2/3/4/5 tick。冷却 5 tick。范围 3 格以内。消耗 5 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/operate-controller.svg">
        </td>
        <th>OPERATE_CONTROLLER</th>
        <td>将一个 8 级 Controller 的每 tick 升级能量上限提高 10/20/30/40/50 单位。效果持续 1000 tick。冷却 800 tick。范围 3 格以内。消耗 200 点 ops 资源。creep 等级要求: 20/21/22/23/24.</td>
        </tr><tr><td style="background: #141414; width: 50px; padding: 0; border-top: 1px solid #444">
        <img src="https://screeps.com/a/app2/assets/powers/operator/operate-factory.svg">
        </td>
        <th>OPERATE_FACTORY</th>
        <td>将 factory 的等级设置为该 power 的等级。该操作无法撤销，并且一旦设置无法修改为其他等级。持续时间结束后再次使用相同的 power 即可恢复效果。效果持续 1000 tick。冷却 800 tick。范围 3 格以内。消耗 100 点 ops 资源。creep 等级要求: 0/2/7/14/22.</td>
        </tr></table>

### Commander

尚在開發。

### Executor 

尚在開發。
