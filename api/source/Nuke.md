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

{% page inherited/RoomObject.md %}

{% api_property id 'string' %}



全局唯一的對象標識。你可以通過調用<a href="#Game.getObjectById"><code>Game.getObjectById</code></a>方法取得對象實例。



{% api_property launchRoomName 'string' %}



發射此核彈的房間名。



{% api_property timeToLand 'number' %}



著落倒計時。

