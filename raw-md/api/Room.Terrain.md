# Room.Terrain

提供快速訪問房間地形數據的對象。您可以為游戲世界中的任何房間構造這些對象，即使沒有該房間的視野。

從技術上講，每個 `Room.Terrain` 對象都是一個非常輕量級的適配器，用於提供具有最小訪問權限的靜態地形緩沖區。


<h2 id="constructor" class="api-property   "><span class="api-property__name">constructor</span><span class="api-property__args">(roomName)</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
const terrain = new Room.Terrain("E2S7");
```

```javascript
const terrain = new Room.Terrain(Game.creeps.John.room.name);
```

通過房間名稱創建一個新的 `Terrain`。`Terrain` 對象可以從游戲世界中的任何房間構造，即使沒有該房間的視野。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>roomName</code></td><td>string</td><td><p>房間名稱。</p>
</td>
</tbody></table>



<h2 id="get" class="api-property api-property--method  "><span class="api-property__name">get</span><span class="api-property__args">(x, y)</span>
        <div class="api-property__cpu api-property__cpu--0" title="该方法的CPU开销很小。"></div>
        </h2>

```javascript
switch(terrain.get(10,15)) {
    case TERRAIN_MASK_WALL:
        break;
    case TERRAIN_MASK_SWAMP:
        break;
    case 0:
        break;
}
```

```javascript
const roomName = "E2S7";
const terrain = new Room.Terrain(roomName);
const matrix = new PathFinder.CostMatrix;
const visual = new RoomVisual(roomName);

// 用默認地形成本填充 CostMatrix，以供將來分析：
for(let y = 0; y < 50; y++) {
    for(let x = 0; x < 50; x++) {
        const tile = terrain.get(x, y);
        const weight =
            tile === TERRAIN_MASK_WALL  ? 255 : // 牆壁 => 無法通行
            tile === TERRAIN_MASK_SWAMP ?   5 : // 沼澤 => 移動成本:  5
                                            1 ; // 平原 => 移動成本:  1
        matrix.set(x, y, weight);
        visual.text(weight, x, y);
    }
}
```

```javascript
// 綁定到 WASM module heap
const heapView = new Uint8Array(wasmModule.HEAPU8.buffer, ...); 
const terrain = new Room.Terrain("E2S7");

// 將地形數據復制到二進制 WASM module heap：
for(let y = 0; y < 50; y++) {
    for(let x = 0; x < 50; x++) {
        heapView[y * 50 + x] = terrain.get(x, y);
    }    
}
```

通過 `(x,y)` 坐標獲取指定房間位置處的地形。和 <a href="#Game.map.getTerrainAt">`Game.map.getTerrainAt(...)`</a> 方法不同，此方法不執行任何字符串操作，並返回整數 terrain 類型值（詳見下文）。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>x</code></td><td>number</td><td><p>該房間中的 X 坐標。</p>
</td>
<tr><td><code>y</code></td><td>number</td><td><p>該房間中的 Y 坐標。</p>
</td>
</tbody></table>


### 返回值

以下整數值之一：

| 值 | <a href="#Constants">常量名</a> (*如果存在*) | 介紹 |
|-|-|-|
| 0 | *不存在* | 地形為 `plain` |
| 1 | `TERRAIN_MASK_WALL` | 地形為 `wall`|
| 2 | `TERRAIN_MASK_SWAMP` | 地形為 `swamp`|


<h2 id="getRawBuffer" class="api-property api-property--method  "><span class="api-property__name">getRawBuffer</span><span class="api-property__args">([destinationArray])</span>
        <div class="api-property__cpu api-property__cpu--1" title="该方法具有较低的CPU开销。"></div>
        </h2>

```javascript
function myPrintRawTerain(raw) {
    const visual = new RoomVisual();
    for(let y = 0; y < 50; y++) {
        for(let x = 0; x < 50; x++) {
            const code = raw[y * 50 + x];
            const color =
                (code & TERRAIN_MASK_WALL ) ? "gray"  :
                (code & TERRAIN_MASK_SWAMP) ? "green" : "white" ;
            visual.circle(x, y, {fill: color, radius: 0.5});
        }
    }
}

const raw = (new Room.Terrain("E2S7")).getRawBuffer();
myPrintRawTerain(raw);
```

```javascript
// 綁定到 WASM module heap
const heapView = new Uint8Array(wasmModule.HEAPU8.buffer, ...); 
const terrain = new Room.Terrain("E2S7");

// 快速將地形數據復制到 WASM module heap:
const t = Game.cpu.getUsed();
const result = terrain.getRawBuffer(heapView);
if(result !== ERR_INVALID_ARGS) {
    // 復制成功，在此處調用 WASM 函數：
    // wasmModule.myFunc(...); // 修改 "heapView" 的原始內存
    console.log("Distance transform done in", Game.cpu.getUsed() - t);
    myPrintRawTerain(heapView);
}
```

```cpp
// 二進制模塊內的某處源代碼...
void myFunc(void* ptr) {
    auto u8ptr = static_cast<uint8_t*>(ptr);
    // 在這裡進行計算...
}
```

獲取基礎靜態地形緩沖區的副本。 **當前使用的基礎類型為 `Uint8Array`**。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>destinationArray (可選)</code></td><td>Uint8Array</td><td><p>地形數據要拷貝到的已定義的數組視圖。</p>
</td>
</tbody></table>


***警告:*** *此方法依賴於地形數據的基礎類型。此方法是獲取整個房間（2500 地塊）地形數據的最快方法，但是使用者需要始終牢記，該方法可能隨時會被標記為已棄用。或者返回值的類型可能會因為基礎類型的改變而改變。*

請查看使用示例。點擊 <a href="/modules.html#Binary-modules">_二進制模塊_</a> 來了解更多。

### 返回值

基礎房間地形數據的副本，存放在大小為 2500 的新 `Uint8Array` [類型數組（typed array）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)中。

每一個元素都是整數，地形類型可以通過對相應的 `TERRAIN_MASK_*` 常量執行位運算「與」（`&`）來獲得。房間地塊按行存儲。

如果指定了 `destinationArray` 並且成功復制，則函數將會返回已填充 `destinationArray` 的引用，否則返回下列錯誤碼：

<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p><code>destinationArray</code> 類型不兼容。</p>
</td></tr>
</tbody></table>

