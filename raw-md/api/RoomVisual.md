# RoomVisual

<img align="right" src="img/visual.png">

房間視覺效果提供了在游戲房間中顯示可視化調試信息的途徑。你可以使用 `RoomVisual` 對象繪制一個僅對您可見的簡單圖形。每一個已存在的 `Room` 對象都包含有 [`visual`](#Room.visual) 屬性，不過您也可以使用 [constructor](#RoomVisual.constructor) 給任何房間創建一個新的 `RoomVisual` 對象（即使沒有視野）。

房間視覺效果並不會儲存在數據庫裡，它們的目的僅僅是在您的瀏覽窗口裡顯示一些東西。所有繪制的圖形只會保留 1 tick，如果後續沒有更新的話就會消失。所有的 `RoomVisual` API 調用都不會產生 CPU 消耗（只會產生一些代碼執行的自然成本，並且大多與簡單的 `JSON.serialize` 調用有關）。然而，這裡有一些使用限制：您最多只能為每個房間發布 500 KB 的序列化數據（詳見 [`getSize`](#RoomVisual.getSize) 方法）。

所有的繪制坐標均等同於游戲坐標，並且以地塊的中心為原點，即：(10, 10) 將指向位於 `x:10; y:10` 處 creep 的中心。允許使用小數坐標。



<h2 id="constructor" class="api-property   "><span class="api-property__name">constructor</span><span class="api-property__args">([roomName])</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
Game.rooms['W10N10'].visual.circle(10,20).line(0,0,10,20);
// 等同於：
new RoomVisual('W10N10').circle(10,20).line(0,0,10,20);
```

```javascript
// 所有房間都會顯示該文本：
new RoomVisual().text('Some text', 1, 1, {align: 'left'}); 
```

您可以直接為任何房間創建 <code>RoomVisual</code> 對象，即使您的腳本沒有該房間的視野。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>roomName (可選)</code></td><td>string</td><td><p>房間的名稱。如果未定義，則該效果將發布到所有房間。</p>
</td>
</tbody></table>




<h2 id="roomName" class="api-property api-property--property  "><span class="api-property__name">roomName</span><span class="api-property__type">string</span></h2>



房間的名稱。





<h2 id="line" class="api-property api-property--method  "><span class="api-property__name">line</span><span class="api-property__args">(x1, y1, x2, y2, [style])<br>(pos1, pos2, [style])</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
new RoomVisual('W1N1').line(10,15, 20,20);
```

```javascript
creep.room.visual.line(creep.pos, target.pos,
    {color: 'red', lineStyle: 'dashed'});
```

繪制一條線。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x1</code></td><td>number</td><td><p>起始點的 X 坐標。</p>
</td>
<tr><td><code>y1</code></td><td>number</td><td><p>起始點的 Y 坐標。</p>
</td>
<tr><td><code>x2</code></td><td>number</td><td><p>結束點的 X 坐標。</p>
</td>
<tr><td><code>y2</code></td><td>number</td><td><p>結束點的 Y 坐標。</p>
</td>
<tr><td><code>pos1</code></td><td><a href="#RoomPosition">RoomPosition</a></td><td><p>起始點位置對象。</p>
</td>
<tr><td><code>pos2</code></td><td><a href="#RoomPosition">RoomPosition</a></td><td><p>結束點位置對象。</p>
</td>
<tr><td><code>style (可選)</code></td><td>object</td><td><p>包含下列屬性的對象：</p>
<ul>
    <li>
        <div class="api-arg-title">width</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">線條的寬度，默認值為 0.1。</div>
    </li>
    <li>
        <div class="api-arg-title">color</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">線條顏色，允許使用任何 web 格式顏色，默認值為 <code>#ffffff</code> (白色)。</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">透明度，默認值為 0.5。</div>
    </li>
    <li>
        <div class="api-arg-title">lineStyle</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>undefined</code> (實線)，<code>dashed</code> (虛線) 或者 <code>dotted</code> (點線) 之一。默認值為 undefined。</div>
    </li>
</ul></td>
</tbody></table>



### 返回值

該
<code>RoomVisual</code>
對象本身，您可以使用鏈式調用。

<h2 id="circle" class="api-property api-property--method  "><span class="api-property__name">circle</span><span class="api-property__args">(x, y, [style])<br>(pos, [style])</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
new RoomVisual('W1N1').circle(10,15);
```

```javascript
creep.room.visual.circle(creep.pos,
    {fill: 'transparent', radius: 0.55, stroke: 'red'});
```

繪制一個圓。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>圓心的 X 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>圓心的 Y 坐標。</p>
</td>
<tr><td><code>pos</code></td><td><a href="#RoomPosition">RoomPosition</a></td><td><p>圓心的位置對象。</p>
</td>
<tr><td><code>style (可選)</code></td><td>object</td><td><p>包含下列屬性的對象：</p>
<ul>
    <li>
        <div class="api-arg-title">radius</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">圓的半徑，默認值為 0.15。</div>
    </li>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">填充顏色，允許使用任何 web 格式顏色，默認值為 <code>#ffffff</code> (白色)。</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">透明度，默認值為 0.5。</div>
    </li>
    <li>
        <div class="api-arg-title">stroke</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">輪廓顏色，允許使用任何 web 格式顏色，默認未定義（沒有輪廓）。</div>
    </li>
    <li>
        <div class="api-arg-title">strokeWidth</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">輪廓寬度，默認值為 0.1。</div>
    </li>
    <li>
        <div class="api-arg-title">lineStyle</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>undefined</code> (實線)，<code>dashed</code> (虛線) 或者 <code>dotted</code> (點線) 之一。默認值為 undefined。</div>
    </li>
</ul></td>
</tbody></table>



### 返回值

該
<code>RoomVisual</code>
對象本身，您可以使用鏈式調用。

<h2 id="rect" class="api-property api-property--method  "><span class="api-property__name">rect</span><span class="api-property__args">(x, y, width, height, [style])<br>(topLeftPos, width, height, [style])</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
// 從 (2,2) 到 (10,10) 的 9x9 區域
new RoomVisual('W1N1').rect(1.5, 1.5, 9, 9); 
```

```javascript
// creep 上的矩形邊框
creep.room.visual.rect(creep.pos.x - 0.6, creep.pos.y - 0.6, 
    1.2, 1.2,
    {fill: 'transparent', stroke: '#f00'});
```

繪制一個矩形。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>左上角的 X 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>左上角的 Y 坐標。</p>
</td>
<tr><td><code>topLeftPos</code></td><td><a href="#RoomPosition">RoomPosition</a></td><td><p>左上角的位置對象。</p>
</td>
<tr><td><code>width</code></td><td>number</td><td><p>矩形的寬度。</p>
</td>
<tr><td><code>height</code></td><td>number</td><td><p>矩形的高度。</p>
</td>
<tr><td><code>style (可選)</code></td><td>object</td><td><p>包含下列屬性的對象：</p>
<ul>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">填充顏色，允許使用任何 web 格式顏色，默認值為 <code>#ffffff</code> (白色)。</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">透明度，默認值為 0.5。</div>
    </li>
    <li>
        <div class="api-arg-title">stroke</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">輪廓顏色，允許使用任何 web 格式顏色，默認未定義（沒有輪廓）。</div>
    </li>
    <li>
        <div class="api-arg-title">strokeWidth</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">輪廓寬度，默認值為 0.1。</div>
    </li>
    <li>
        <div class="api-arg-title">lineStyle</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>undefined</code> (實線)，<code>dashed</code> (虛線) 或者 <code>dotted</code> (點線) 之一。默認值為 undefined。</div>
    </li>
</ul></td>
</tbody></table>



### 返回值

該
<code>RoomVisual</code>
對象本身，您可以使用鏈式調用。

<h2 id="poly" class="api-property api-property--method  "><span class="api-property__name">poly</span><span class="api-property__args">(points, [style])</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
const points = [];
points.push(creep1.pos);
points.push([10,15]);
points.push(new RoomPosition(20,21,'W1N1'));
new RoomVisual('W1N1').poly(points, {fill: 'aqua'}); 
```

```javascript
// 將路徑可視化
const path = Game.rooms['W1N1'].findPath(from, to);
new RoomVisual('W1N1').poly(path, {stroke: '#fff', strokeWidth: .15,
	opacity: .2, lineStyle: 'dashed'}); 
```

繪制一條折線。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>points</code></td><td>array</td><td><p>折點數組。每個元素都應是兩個數字的數組（即 <code>[10,15]</code>），或者是一個 <a href="#RoomPosition"><code>RoomPosition</code></a> 對象。</p>
</td>
<tr><td><code>style (可選)</code></td><td>object</td><td><p>包含下列屬性的對象：
                    <ul>
                        <li>
                            <div class="api-arg-title">fill</div>
                            <div class="api-arg-type">string</div>
                            <div class="api-arg-desc">填充顏色，允許使用任何 web 格式顏色，默認值為 <code>undefined</code>（不填充）。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">opacity</div>
                            <div class="api-arg-type">number</div>
                            <div class="api-arg-desc">透明度，默認值為 0.5。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">stroke</div>
                            <div class="api-arg-type">string</div>
                            <div class="api-arg-desc">線條顏色，允許使用任何 web 格式顏色，默認值為 <code>#ffffff</code> (白色)。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">strokeWidth</div>
                            <div class="api-arg-type">number</div>
                            <div class="api-arg-desc">線條寬度，默認值為 0.1。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">lineStyle</div>
                            <div class="api-arg-type">string</div>
                            <div class="api-arg-desc"><code>undefined</code> (實線)，<code>dashed</code> (虛線) 或者 <code>dotted</code> (點線) 之一。默認值為 undefined。</div>
                        </li>
                    </ul></p>
</td>
</tbody></table>



### 返回值

該
<code>RoomVisual</code>
對象本身，您可以使用鏈式調用。

<h2 id="text" class="api-property api-property--method  "><span class="api-property__name">text</span><span class="api-property__args">(text, x, y, [style])<br>(text, pos, [style])</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
new RoomVisual('W1N1').text("Target💥", 10, 15, {color: 'green', font: 0.8}); 
```

繪制一個文本標簽。你可以使用任何有效的 Unicode 字符，包括 <a href="http://unicode.org/emoji/charts/emoji-style.txt" target="_blank">emoji</a>。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>text</code></td><td>string</td><td><p>文本信息</p>
</td>
<tr><td><code>x</code></td><td>number</td><td><p>文本基線（baseline）起始點的 X 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>文本基線起始點的 Y 坐標。</p>
</td>
<tr><td><code>pos</code></td><td><a href="#RoomPosition">RoomPosition</a></td><td><p>文本基線起始點的位置對象。</p>
</td>
<tr><td><code>style (可選)</code></td><td>object</td><td><p>包含下列屬性的對象：
                    <ul>
                        <li>
                            <div class="api-arg-title">color</div>
                            <div class="api-arg-type">string</div>
                            <div class="api-arg-desc">字體顏色，允許使用任何 web 格式顏色，默認值為 <code>#ffffff</code> (白色)。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">font</div>
                            <div class="api-arg-type">number, string</div>
                            <div class="api-arg-desc">數字或者字符串，應使用下列形式：
                                <ul>
                                    <li><code>0.7</code> - 基於游戲坐標的相對大小</li>
                                    <li><code>20px</code> - 基於像素的絕對大小</li>
                                    <li><code>0.7 serif</code></li>
                                    <li><code>bold italic 1.5 Times New Roman</code></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="api-arg-title">stroke</div>
                            <div class="api-arg-type">string</div>
                            <div class="api-arg-desc">輪廓顏色，允許使用任何 web 格式顏色，默認未定義（沒有輪廓）。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">strokeWidth</div>
                            <div class="api-arg-type">number</div>
                            <div class="api-arg-desc">輪廓寬度，默認值為 0.15。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">backgroundColor</div>
                            <div class="api-arg-type">string</div>
                            <div class="api-arg-desc">背景顏色，允許使用任何 web 格式顏色，默認未定義（沒有背景）。當啟用背景時，文本的豎直對齊模式將設置為 middle（默認為 baseline）。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">backgroundPadding</div>
                            <div class="api-arg-type">number</div>
                            <div class="api-arg-desc">背景矩形的 padding，默認值為 0.3。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">align</div>
                            <div class="api-arg-type">string</div>
                            <div class="api-arg-desc">文本對齊模式，<code>center</code>，<code>left</code> 或者 <code>right</code> 之一。默認值為 <code>center</code>。</div>
                        </li>
                        <li>
                            <div class="api-arg-title">opacity</div>
                            <div class="api-arg-type">number</div>
                            <div class="api-arg-desc">透明度，默認值為 1.0。</div>
                        </li>
                    </ul></p>
</td>
</tbody></table>



### 返回值

該
<code>RoomVisual</code>
對象本身，您可以使用鏈式調用。

<h2 id="clear" class="api-property api-property--method  "><span class="api-property__name">clear</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
new RoomVisual('W1N1').clear();
```

移除該房間的所有視覺效果。



### 返回值

該
<code>RoomVisual</code>
對象本身，您可以使用鏈式調用。

<h2 id="getSize" class="api-property api-property--method  "><span class="api-property__name">getSize</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
if(creep.room.visual.getSize() >= 512000) {
    // 本 tick 將無法添加更多的視覺效果
}
```

當前 tick 添加到該房間的視覺效果的存儲大小。它不能超過 512,000（500 KB）。



### 返回值

視覺效果的大小（單位：字節）。


<h2 id="export" class="api-property api-property--method  "><span class="api-property__name">export</span><span class="api-property__args">()</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
Memory.RoomVisualData['E2S7'] = Game.rooms.E2S7.visual.export();
```

返回當前 tick 中添加到房間中的所有可視化效果的緊湊格式。



### 返回值

代表了可視化數據的字符串。除了將其存儲以備後續使用外，您不應該對其進行其他操作。

<h2 id="import" class="api-property api-property--method  "><span class="api-property__name">import</span><span class="api-property__args">(val)</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
if(Memory.RoomVisualData['E2S7']) {
    Game.rooms.E2S7.visual.import(Memory.RoomVisualData['E2S7']);
}
```

將先前導出（使用<a href="#RoomVisual.export">RoomVisual.export</a>）的房間可視化效果添加到當前 tick。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>val</code></td><td>string</td><td><p>從 RoomVisual.export 返回的字符串。</p>
</td>
</tbody></table>


### 返回值

<code>RoomVisual</code> 對象自身，以便進行鏈式調用。
