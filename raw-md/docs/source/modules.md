title: 使用模塊歸納代碼
---

我們引入了 Node.js 的 `require` 和 `module.exports` 以方便玩家歸納整理代碼。舉例來說，玩家可以創造一個「偵察兵」模塊：

    module.exports = {
        run(creep) {
            creep.moveTo(...);
        }
    }

然後將「偵察兵」模塊導入主模塊：

    var scout = require('scout');

    for(var i in Game.creeps) {
        scout.run(Game.creeps[i]);
    }

除了親自編寫的模塊，玩家還可以借用其他人的模塊。目前我們內置了 [lodash](http://lodash.com) 庫。

    var _ = require('lodash'); // 譯注：由版本更新，此行現可省略

    var harvesters = _.filter(Game.creeps, {
        memory: {role: 'harvester'}
    });

## 二進制模塊

除了上述的普通模塊，玩家還可以二進制模塊。其會在玩家調用 `require` 時以原始二進制形式加載，由此允許玩家運行用其他語言（比如 [WebAssembly](http://webassembly.org/) ）編寫的代碼。

WebAssembly 是個二進制編譯的代碼格式。其可以快速高效的運行 C/C++ 或 Rust 代碼（及其他支持的語言）。參閱 [WebAssembly 文檔](https://developer.mozilla.org/en-US/docs/WebAssembly)以獲取更多信息。

以下簡述了如何用 [Emscripten](https://kripken.github.io/emscripten-site/index.html) 編譯 C/C++ 代碼及如何上傳編譯後的文件到游戲裡。

### 創建 `.wasm` 文件

<blockquote class="note info"><p>省略此步如果您想上傳的文件已經是 <code>.wasm</code> 格式。</p>
</blockquote>

安裝 [Emsripten SDK]((https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html#sdk-installation-instructions)。

編寫你的 C 函數並保存為 `addTwo.c`

```c++
int addTwo(int a, int b) {
    return a + b;
}
```

將其編譯成 `addTwo.wasm`：
```
emcc -s WASM=1 -s SIDE_MODULE=1 -O3 addTwo.c -o addTwo.wasm
```

### 上傳二進制模塊

點擊此按鈕添加新的二進制模組 `addTwo`：

![](img/binary1.png)

以二進制模組的形式上傳 `addTwo.wasm`：
Upload your `addTwo.wasm` file as binary module contents, so that it looks as follows:

![](img/binary2.png)

點擊 ✔️ 提交代碼。
Click the ✔️ button to commit your modules.

### 在 Screeps 使用二進制模塊

如果您正確上傳了你的二進制模塊，您應該能在游戲內置 IDE 看見下圖：

![](img/binary3.png)

現在可通過 WebAssembly API 將二進制代碼導入您的 `main`

```javascript
// 這將返回帶有 `addTwo.wasm` 二進制內容的 ArrayBuffer
const bytecode = require('addTwo');

const wasmModule = new WebAssembly.Module(bytecode);

const imports = {};

//有關 Emscripten 允許環境，請參見:
// https://github.com/WebAssembly/tool-conventions/blob/master/DynamicLinking.md
imports.env = {
    memoryBase: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({ initial: 256 }),
    table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
};

const wasmInstance = new WebAssembly.Instance(wasmModule, imports);

console.log(wasmInstance.exports.addTwo(2,3));
```
