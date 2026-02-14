# Nuke

核彈原爆點，此對象無法被更改或移除。但可以用常數 `FIND_NUKES` 查找即將抵達房間的核彈。核彈只能由 <a href="#StructureNuker"><code>核彈發射井</code></a> 發射

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>著落時間</strong></td>
        <td>50,000 ticks</td>
    </tr>
    <tr>
        <td><strong>影響</strong></td>
        <td>房間裡的所有的 creeps 、建築工地、掉落的資源會在核爆瞬間被移除，無論其是否在堡壘內。對建築的傷害：
            <ul>
                <li>10,000,000 hits 在原爆點;</li>
                <li>5,000,000 hits 對周邊 5x5 區域內的所有建築.</li>
            </ul>
            <p>注：向同一目標發射多枚核彈可疊加傷害。</p>
            <p>Nuke 著落不會產生墓碑（tombstone）和遺跡（ruin），並且會銷毀房間中所有存在的墓碑和遺跡。</p>
            <p>如果目標房間處與安全模式，則其安全模式會被立即取消，但安全模式的冷卻時間會被重置為0。</p>
            <p>目標房間的控制器會進入 <code>upgradeBlocked</code> ，這意味著在 200 ticks 內其無法重新開啟安全模式。</p>
        </td>
    </tr>
    </tbody>
</table>

<p></p><h2 id="effects" class="api-property api-property--property  "><span class="api-property__name">effects</span><span class="api-property__type">array</span></h2><p></p>
<p>附加的效果，一個包含如下屬性的對象數組：</p>
<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>effect</code></td><td>number</td><td><p>該附加效果的 ID。可以是自然效果 ID 或者 Power ID。</p>
</td>
</tr><tr><td><code>level (可選)</code></td><td>number </td><td><p>該附加效果的 Power 等級。如果效果不是 Power 效果則不存在該屬性。</p>
</td>
</tr><tr><td><code>ticksRemaining</code></td><td>number</td><td><p>多長時間之後會失去這個效果。</p>
</td>
</tr></tbody></table>

<h2 id="pos" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#RoomObject">RoomObject</a></div><span class="api-property__name">pos</span><span class="api-property__type"><a href="#RoomPosition">RoomPosition</a></span></h2>
<p>表示該對象在房間中的坐標的對象。</p>
<h2 id="room" class="api-property api-property--property api-property--inherited "><div class="api-property__inherited">Inherited from <a href="#RoomObject">RoomObject</a></div><span class="api-property__name">room</span><span class="api-property__type"><a href="#Room">Room</a></span></h2>
<p>Room對象的鏈接。如果對象是標志或工地並且放置在你不可見的房間中，則可能為undefined。</p>


<h2 id="id" class="api-property api-property--property  "><span class="api-property__name">id</span><span class="api-property__type">string</span></h2>



全局唯一的對象標識。你可以通過調用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法取得對象實例。



<h2 id="launchRoomName" class="api-property api-property--property  "><span class="api-property__name">launchRoomName</span><span class="api-property__type">string</span></h2>



發射此核彈的房間名。



<h2 id="timeToLand" class="api-property api-property--property  "><span class="api-property__name">timeToLand</span><span class="api-property__type">number</span></h2>



著落倒計時。

