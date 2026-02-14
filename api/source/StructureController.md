# StructureController

<img src="img/controller.png" alt="" align="right" />

佔領(claim) 這個建築來控制其所在的房間。控制器無法被攻擊或摧毀。

你可以通過 [`Room.controller`](#Room.controller) 屬性來快速訪問到它。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <th><strong>等級</strong></th>
        <th>升級至下個等級</th>
        <th>降級時間</th>
    </tr>
    <tr>
        <td>1</td>
        <td>200 energy</td>
        <td>20,000 ticks</td>
    </tr>
    <tr>
        <td>2</td>
        <td>45,000 energy</td>
        <td>10,000 ticks</td>
    </tr>
    <tr>
        <td>3</td>
        <td>135,000 energy</td>
        <td>20,000 ticks</td>
    </tr>
    <tr>
        <td>4</td>
        <td>405,000 energy</td>
        <td>40,000 ticks</td>
    </tr>
    <tr>
        <td>5</td>
        <td>1,215,000 energy</td>
        <td>80,000 ticks</td>
    </tr>
    <tr>
        <td>6</td>
        <td>3,645,000 energy</td>
        <td>120,000 ticks</td>
    </tr>
    <tr>
        <td>7</td>
        <td>10,935,000 energy</td>
        <td>150,000 ticks</td>
    </tr>
    <tr>
        <td>8</td>
        <td>—</td>
        <td>200,000 ticks</td>
    </tr>
    </tbody>
</table>
	
### 安全模式
	
<table class=gameplay-info>
    <tbody>
    <tr>
        <td style="width:60px;"><strong>效果</strong></td>
        <td>阻止本房間中的所有敵對 creep 的 <code>attack</code>, <code>rangedAttack</code>, <code>rangedMassAttack</code>, <code>dismantle</code>, <code>heal</code>, <code>rangedHeal</code>, <code>attackController</code> and <code>withdraw</code> 方法。以及敵對 Power Creep 的 <code>enableRoom</code> 和 <code>usePower</code> 方法。同一時間內只能有一個房間激活安全模式。<br/>
    當安全模式被激活時，所有的敵對 creep 都將變透明並且可通過, 您的 creep 可以自由的穿過他們 (反之亦然)。</td>
    </tr>
    <tr>
        <td style="width:60px;"><strong>持續時間</strong></td>
        <td>20,000 ticks</td>
    </tr>
    <tr>
        <td style="width:60px;"><strong>冷卻時間</strong></td>
        <td>50,000 ticks (新手區 (Novice Areas) 以及您第一個房間的初始安全模式都沒有冷卻時間)</td>
    </tr>
    <tr>
        <td style="width:60px;"><strong>獲取途徑</strong></td>
        <td>
            <ul>
                <li>每次控制器升級時提供一次可用次數</li>
                <li>可以使用 1,000 ghodium 化合物來生成一個可用次數</li>
                <li>控制器降級時將會重置所有可用次數</li>
            </ul>
        </td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.md %}

{% api_property isPowerEnabled 'boolean' %}
該房間是否啟用了超能 (power)。使用 [`PowerCreep.enableRoom`](#PowerCreep.enableRoom) 來啟用超能。

{% api_property level 'number' %}



當前的控制器等級，從 0 到 8。



{% api_property progress 'number' %}



當前控制器升級到下個等級的進度。



{% api_property progressTotal 'number' %}



控制器升級到下個等級所需的總進度。



{% api_property reservation 'object' %}



如果控制器被預定，則該對象表示預定的信息:

{% api_method_params %}
username : string
預定了該房間的玩家名稱。
===
ticksToEnd : number
預定時間還有多少 tick 結束。
{% endapi_method_params %}


{% api_property safeMode 'number' %}



安全模式還有多少 tick 結束。沒激活安全模式時返回 undefined。



{% api_property safeModeAvailable 'number' %}



可用的安全模式激活次數。



{% api_property safeModeCooldown 'number' %}



安全模式的冷卻時間還有多少 tick。冷卻結束前將無法激活安全模式，當安全模式沒有冷卻時返回 undefined。



{% api_property sign 'object' %}



如果控制器被簽名，則該對象表示簽名的信息：

{% api_method_params %}
username : string
將控制器簽名的玩家名稱。
===
text : string
簽名的文本內容。
===
time : number
進行簽名的游戲 tick 時間。
===
datetime : Date
進行簽名的現實時間。
{% endapi_method_params %}


{% api_property ticksToDowngrade 'number' %}



該控制器還有多少 tick 將要降級。當控制器升級或者降級時, 該計時器將被設置為總降級時間的 50%。可以使用 <code><a href="#Creep.upgradeController">Creep.upgradeController</a></code> 來增加該計時器的時間。控制器想要升級必須先保證該計時器滿額。



{% api_property upgradeBlocked 'number' %}



還有多少 tick 就能從控制器被攻擊從而無法升級的狀態中恢復過來。在此期間安全模式也不可用。



{% api_method activateSafeMode '' A %}

```javascript
room.controller.activateSafeMode();
```

激活安全模式 (如果有的話)。



### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該控制器的所有者。
ERR_BUSY | 已經有其他房間處於安全模式下了。
ERR_NOT_ENOUGH_RESOURCES | 沒有足夠的可用激活次數。
ERR_TIRED | 上一個安全模式仍在冷卻中，或者控制器正處於 `upgradeBlocked` 狀態，或者控制器的降級計時器已經超過了 50% + 5000 tick 甚至更久。
{% endapi_return_codes %}



{% api_method unclaim '' A %}

```javascript
room.controller.unclaim();
```

放棄該房間，使得控制器重新變為中立狀態。



### 返回值

如下錯誤碼之一：
{% api_return_codes %}
OK | 這個操作已經成功納入計劃。
ERR_NOT_OWNER | 你不是該控制器的所有者。
{% endapi_return_codes %}


