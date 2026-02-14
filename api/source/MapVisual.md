# Game.map.visual

地圖可視化（Map visual）提供了一種途徑來在游戲地圖上顯示各種可視化的調試信息。您可以使用 `Game.map.visual` 對象來繪制一些僅對您可見的簡單圖形。

地圖可視化不會被存儲在游戲數據庫中，它們唯一的作用就是在您的瀏覽器上顯示一些信息。所有的繪制效果只會被保留一個 tick，並且如果下個 tick 沒有更新的話它們就會消失。所有的 `Game.map.visual` 調用都不會產生 CPU 消耗（只會產生一些代碼執行的自然成本，並且大多與簡單的 `JSON.serialize` 調用有關）。然而，這裡有一條使用限制：您最多只能為每個房間發布 1000 KB 的序列化數據。

所有繪制坐標均等同於全局游戲坐標 ([`RoomPosition`](#RoomPosition))。


{% api_method line 'pos1, pos2, [style]' 0 %}

```javascript
Game.map.visual.line(creep.pos, target.pos,
    {color: '#ff0000', lineStyle: 'dashed'});
```

繪制一條線。

{% api_method_params %}
pos1 : <a href="#RoomPosition">RoomPosition</a>
起始點位置對象。
===
pos2 : <a href="#RoomPosition">RoomPosition</a>
結束點位置對象。
===
style (可選) : object
包含下列屬性的對象：
<ul>
    <li>
        <div class="api-arg-title">width</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">線條的寬度，默認值為 0.1。</div>
    </li>
    <li>
        <div class="api-arg-title">color</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">線條顏色，使用以下格式：<code>#ffffff</code>（十六進制顏色），默認為 <code>#ffffff<code>。</div>
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
</ul>
				
{% endapi_method_params %}


### 返回值

<code>MapVisual</code> 對象本身，以便進行鏈式調用。


{% api_method circle 'pos, [style]' 0 %}

```javascript
Game.map.visual.circle(new RoomPosition(25,25,'E2S7'));
```

```javascript
Game.map.visual.circle(nuker.pos, {fill: 'transparent', radius: NUKE_RANGE*50, stroke: '#ff0000'});
```

繪制一個圓。

{% api_method_params %}
pos : <a href="#RoomPosition">RoomPosition</a>
中心點位置對象。
===
style (可選) : object
包含下列屬性的對象：
<ul>
    <li>
        <div class="api-arg-title">radius</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">圓的半徑，默認值為 10。</div>
    </li>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">線條顏色，使用以下格式：<code>#ffffff</code>（十六進制顏色），默認為 <code>#ffffff<code>。</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">透明度，默認值為 0.5。</div>
    </li>
    <li>
        <div class="api-arg-title">stroke</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">輪廓顏色，使用以下格式：<code>#ffffff</code>（十六進制顏色），默認為 undefined（無輪廓）。</div>
    </li>
    <li>
        <div class="api-arg-title">strokeWidth</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">輪廓寬度，默認值為 0.5。</div>
    </li>
    <li>
        <div class="api-arg-title">lineStyle</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>undefined</code> (實線)，<code>dashed</code> (虛線) 或者 <code>dotted</code> (點線) 之一。默認值為 undefined。</div>
    </li>
</ul>
				
{% endapi_method_params %}


### 返回值

<code>MapVisual</code> 對象本身，以便進行鏈式調用。


{% api_method rect 'topLeftPos, width, height, [style]' 0 %}

```javascript
// tower 的最佳效果區域
Game.map.visual.rect(new RoomPosition(tower.pos.x - 5, tower.pos.y - 5, tower.pos.roomName), 
    11, 11,
    {fill: 'transparent', stroke: '#ff0000'});
```

繪制一個矩形。

{% api_method_params %}
topLeftPos : <a href="#RoomPosition">RoomPosition</a>
左上角的位置對象。
===
width : number
矩形的寬。
===
height : number
矩形的高。
===
style (可選) : object
包含下列屬性的對象：
<ul>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">線條顏色，使用以下格式：<code>#ffffff</code>（十六進制顏色），默認為 <code>#ffffff<code>。</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">透明度，默認值為 0.5。</div>
    </li>
    <li>
        <div class="api-arg-title">stroke</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">輪廓顏色，使用以下格式：<code>#ffffff</code>（十六進制顏色），默認為 undefined（無輪廓）。</div>
    </li>
    <li>
        <div class="api-arg-title">strokeWidth</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">輪廓寬度，默認值為 0.5。</div>
    </li>
    <li>
        <div class="api-arg-title">lineStyle</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>undefined</code> (實線)，<code>dashed</code> (虛線) 或者 <code>dotted</code> (點線) 之一。默認值為 undefined。</div>
    </li>
</ul>
				
{% endapi_method_params %}


### 返回值

<code>MapVisual</code> 對象本身，以便進行鏈式調用。


{% api_method poly 'points, [style]' 0 %}

```javascript
const points = [];
points.push(creep1.pos);
points.push(Game.rooms.E2S7.storage.pos);
points.push(new RoomPosition(20,21,'W1N1'));
Game.map.visual.poly(points, {fill: 'aqua'}); 
```

```javascript
// 將路徑可視化
const path = PathFinder.search(creep.pos, creep.room.storage.pos).path;
Game.map.visual.poly(path, {stroke: '#ffffff', strokeWidth: .8, opacity: .2, lineStyle: 'dashed'});
```

繪制一段折線.

{% api_method_params %}
points : array
包含了所有拐點的數組。每個數組元素都應是一個 <a href="#RoomPosition"><code>RoomPosition</code></a> 對象。
===
style (可選) : object
包含下列屬性的對象：
					<ul>
						<li>
							<div class="api-arg-title">fill</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">填充顏色，使用以下格式：<code>#ffffff</code>（十六進制顏色），默認為 <code>undefined</code>（無填充）。</div>
						</li>
						<li>
							<div class="api-arg-title">opacity</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">透明度，默認值為 0.5。</div>
						</li>
						<li>
							<div class="api-arg-title">stroke</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">輪廓顏色，使用以下格式：<code>#ffffff</code>（十六進制顏色），默認為 <code>#ffffff</code>。</div>
						</li>
						<li>
							<div class="api-arg-title">strokeWidth</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">輪廓寬度，默認值為 0.5。</div>
						</li>
						<li>
							<div class="api-arg-title">lineStyle</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc"><code>undefined</code> (實線)，<code>dashed</code> (虛線) 或者 <code>dotted</code> (點線) 之一。默認值為 undefined。</div>
						</li>
					</ul>
				
{% endapi_method_params %}


### 返回值

<code>MapVisual</code> 對象本身，以便進行鏈式調用。


{% api_method text 'text, pos, [style]' 0 %}

```javascript
Game.map.visual.text("Target💥", new RoomPosition(11,14,'E2S7'), {color: '#FF0000', fontSize: 10}); 
```

繪制一個文本標簽。你可以使用任何有效的 Unicode 字符，包括 <a href="http://unicode.org/emoji/charts/emoji-style.txt" target="_blank">emoji</a>。

{% api_method_params %}
text : string
文本信息
===
pos : <a href="#RoomPosition">RoomPosition</a>
文本基線（baseline）起始點的位置對象。
===
style (可選) : object
包含下列屬性的對象：
					<ul>
						<li>
							<div class="api-arg-title">color</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">文本顏色，使用以下格式：<code>#ffffff</code>（十六進制顏色），默認為 <code>#ffffff</code>。</div>
						</li>
						<li>
							<div class="api-arg-title">fontFamily</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">文本字體，默認為 <code>sans-serif</code></div>
						</li>
						<li>
							<div class="api-arg-title">fontSize</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">字體大小，基於游戲坐標，默認為 10</div>
						</li>
						<li>
							<div class="api-arg-title">fontStyle</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">字體風格（'normal', 'italic' 或者 'oblique'）</div>
						</li>
						<li>
							<div class="api-arg-title">fontVariant</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">字體變種（'normal' 或者 'small-caps'）</div>
						</li>
						<li>
							<div class="api-arg-title">stroke</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">輪廓顏色，使用以下格式：<code>#ffffff</code>（十六進制顏色），默認為 undefined（無輪廓）。</div>
						</li>
						<li>
							<div class="api-arg-title">strokeWidth</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">輪廓寬帶，默認為 0.15。</div>
						</li>
						<li>
							<div class="api-arg-title">backgroundColor</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">背景顏色，使用以下格式：<code>#ffffff</code>（十六進制顏色），默認為 undefined（無背景色）。當啟用背景色時，文本的垂直對齊模式將被設置為居中（默認為 baseline）。</div>
						</li>
						<li>
							<div class="api-arg-title">backgroundPadding</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">背景矩形的內邊距（padding），默認為 2。</div>
						</li>
						<li>
							<div class="api-arg-title">align</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">文本對齊，<code>center</code>、<code>left</code>、<code>right</code> 之一。默認為 <code>center</code>。</div>
						</li>
						<li>
							<div class="api-arg-title">opacity</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">透明度，默認值為 0.5。</div>
						</li>
					</ul>
				
{% endapi_method_params %}


### 返回值

<code>MapVisual</code> 對象本身，以便進行鏈式調用。


{% api_method clear '' 0 %}

```javascript
Game.map.visual.clear();
```

移除該房間的所有可視化效果。



### 返回值

<code>MapVisual</code> 對象本身，以便進行鏈式調用。


{% api_method getSize '' 0 %}

```javascript
if(Game.map.visual.getSize() >= 1024000) {
    // 本 tick 無法添加更多的可視化效果
}
```

獲取本 tick 所有可視化效果的存儲大小。最多不能超過 1024,000（1000 KB）。



### 返回值

可視化效果的大小（單位：字節）。

{% api_method export '' 0 %}

```javascript
Memory.MapVisualData = Game.map.visual.export();
```

返回當前 tick 中添加到地圖中的所有可視化效果的緊湊格式。



### 返回值

代表了可視化數據的字符串。除了將其存儲以備後續使用外，您不應該對其進行其他操作。

{% api_method import 'val' 0 %}

```javascript
Game.map.visual.import(Memory.MapVisualData);
```

將先前導出（使用<a href="#Game.map-visual.export">Game.map.visual.export</a>）的地圖可視化效果添加到當前 tick。 

{% api_method_params %}
val : string
從 Game.map.visual.export 返回的字符串。

{% endapi_method_params %}

### 返回值

<code>MapVisual</code> 對象本身，以便進行鏈式調用。
