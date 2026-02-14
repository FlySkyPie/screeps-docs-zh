# StructureRoad

<img src="img/road_plain.png" alt="" align="right" />

將每個身體部件的移動成本降低至 1。建造道路之後，你就可以用更少的 `MOVE` 身體部件來孵化一個 creep。你也可以在自然牆壁上建造一個道路來使其可以通行。

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>控制器等級</strong></td>
        <td>任何等級 (包括無主房間)</td>
    </tr>
    <tr>
        <td><strong>花費</strong></td>
        <td>
            <ul>
                <li>在平原上: 300</li>
                <li>在沼澤上: 1,500</li>
                <li>在牆壁上: 45,000</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><strong>生命值</strong></td>
        <td>
            <ul>
                <li>在平原上: 5,000 hits</li>
                <li>在沼澤上: 25,000 hits</li>
                <li>在牆壁上: 750,000 hits</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><strong>老化</strong></td>
        <td>
            <ul>
                <li>在平原上: 每 1,000 ticks 失去 100 hits</li>
                <li>在沼澤上: 每 1,000 ticks 失去 500 hits</li>
                <li>在牆壁上: 每 1,000 ticks 失去 15,000 hits</li>
            </ul>
            注意: creep 的每次移動都會導致更快的老化, 每一個身體部件都會降低老化計時器 1 tick。</td>
    </tr>
    </tbody>
</table> 

{% page inherited/Structure.md %}


{% api_property ticksToDecay 'number' %}



還有多少 tick 就要因老化而失去生命值。


