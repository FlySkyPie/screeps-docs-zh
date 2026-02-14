---
title: 修改對象原型
contributed:
    name: Helam
    link: https://screeps.com/a/#!/profile/Helam
    date: 2017-05-14
---

本文將討論對象原型以及可以使用/修改的幾種原型，閱讀本文來使您的 Screeps 生活更加輕松！

## 什麼是原型?
原型[（Prototypes）](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)允許在 Javascript 中進行繼承[（inheritance）](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)，並且擁有許多強大的使用方法。

Javascript 中的每個對象都有到另一個對象的鏈接，該對象稱為**原型**對象，它從該對象繼承屬性和方法。而作為另一個對象，原型對象可能還具有到另一個原型對象的鏈接，從而構成了一個[原型鏈](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)。或者，原型也可以是 null。

如果您創建了一個名為 「John」 的 creep，那麼 `Game.creeps.John` 將有一個指向 [`Creep`](http://docs.screeps.com/api/#Creep) 原型的鏈接。該 [`Creep`](http://docs.screeps.com/api/#Creep) 原型具有許多有用的屬性和定義好的方法，例如你所熟悉的 [`.name`](http://docs.screeps.com/api/#Creep.name)，[`.moveTo()`](http://docs.screeps.com/api/#Creep.moveTo) 和 [`.harvest()`](http://docs.screeps.com/api/#Creep.harvest)。由於您的 creep 都是基於 [`Creep`](http://docs.screeps.com/api/#Creep) 對象的，所以這些方法在您的 creep 上都可以訪問到。您所有的 creep 對象都有此原型的鏈接，所以可以繼承該原型上的屬性。這也是其他所有游戲對象中定義方法和屬性的方式。查看更多原型例如：[`Room`](http://docs.screeps.com/api/#Room)，[`Source`](http://docs.screeps.com/api/#Source)，和 [`Structure`](http://docs.screeps.com/api/#Structure)。

## 在原型上添加方法
向原型添加方法的功能非常有用，尤其是在 Screeps 中。 您只需定義一次方法，就可以在所有的 creep 上使用它！

在你開始使用原型方式時，最重要的是要了解 [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) 已經，或者說可以被存放在一個變量或者對象的屬性裡，就像是數字、對象、數組、字符串和布爾值一樣。[`.attack()`](http://docs.screeps.com/api/#Creep.attack) 或者 [`.move()`](http://docs.screeps.com/api/#Creep.move) 這樣的 Creep 方法都被存放在了 [`Creep`](http://docs.screeps.com/api/#Creep) 原型的屬性上。

因為這些方法都是一個對象上的屬性，就和其他類型的值一樣，所以你可以這樣添加一個新的方法：
```javascript
Creep.prototype.sayHello = function() { 
    // 在原型方法中，"this" 通常代指該原型對象本身
    // 無論你在哪個 creep 上調用 '.sayHello()' 都可以執行這段代碼
    this.say("Hello!"); 
};
```
在這段代碼之後你可以在任何你的 creep 上調用 `creep.sayHello();` 之類的方法，然後它們就會向你打招呼！

你甚至可以重寫已經存在的原型方法：
```javascript
Creep.prototype.suicide = function() {
    this.say("NO WAY!");
};
```
上面的代碼重寫了正常的 [`creep.suicide()`](http://docs.screeps.com/api/#Creep.suicide) 方法，所以這段代碼將會替代自殺操作，在你調用這個方法之後，creep 會生氣的拒絕你的命令。

### 保存原始方法
當你重寫了一個原型方法後，你將無法訪問原始方法。在 Screeps 中，無法訪問像 [`.move()`](http://docs.screeps.com/api/#Creep.move) 之類的重要方法可能會導致很嚴重的後果。所以在覆蓋原始方法之前，你最好把它存儲在其他屬性中，這樣可以避免無法訪問重要的功能，以便以後可以在需要時使用它。

在上面的例子裡，我們在重寫 [`.suicide()`](http://docs.screeps.com/api/#Creep.suicide) 方法時並沒有保存其原始方法，所以在需要時的時候我們就沒辦法真正的執行自殺了。接下來我們再次重寫 [`.suicide()`](http://docs.screeps.com/api/#Creep.suicide) 方法，不過這次我們添加一點新東西。

我們將把原始方法存儲在名為 `._suicide` 的新屬性中。在屬性名稱前加下劃線是一種 Javascript 命名約定，旨在表示該屬性是[私有](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Contributor_s_Guide/Private_Properties)的。
```javascript
// 先確定我們還沒把原始方法保存下來
if (!Creep.prototype._suicide) {

	// 保存原始方法
	Creep.prototype._suicide = Creep.prototype.suicide;

	// 創建一個新屬性
	Creep.prototype.suicide = function() {

		// 添加自定義功能
		console.log(`May ${this.name} rest in peace.`);

		// 調用並返回原始方法
		return this._suicide();
	}

}
```
運行上述代碼後，在你的 creep 上調用該方法將會在控制台中顯示這個 creep 實際自殺返回值和一條令人欣慰的信息。

上面的代碼演示了很多重要的地方：
- 為了保證冪等性（無論執行多少次，返回值都是相同的），僅在原始方法沒有保存時才進行保存並創建你的新方法。
- 永遠記得保存你的原始方法。
- 如果可能的話，請始終返回原始方法的返回值，以使新方法盡可能與原始方法相似。其他代碼，包括您自己的代碼和游戲內部代碼，都可能依賴於您正在修改的函數的返回值。

### 使用任意參數列表
前面的示例很簡單，因為 [`Creep.prototype.suicide`](http://docs.screeps.com/api/#Creep.suicide) 沒有任何的參數。但是在覆蓋原型方法時，正確處理參數非常重要。

[`Creep.prototype.moveTo`](http://docs.screeps.com/api/#Creep.moveTo) 方法是一個很好的例子，在覆蓋該方法時需要仔細的處理參數，因為它具有兩種可能的參數列表：`(x, y, [opts])` 或者 `(target, [opts])`。下面的示例將覆蓋 [`.moveTo()`](http://docs.screeps.com/api/#Creep.moveTo) 來記錄每個 creep 移動所消耗的 CPU。接下來的三個示例會展示不同的參數處理方式：

1. 使用你自己的參數類別:
```javascript
if (!Creep.prototype._moveTo) {
	Creep.prototype._moveTo = Creep.prototype.moveTo;
	Creep.prototype.moveTo = function(myArg1, myArg2, myArg3) {
	    console.log(`My moveTo with my own arguments!`);
	    
	    let startCpu = Game.cpu.getUsed();
	    // 調用原始方法並保存返回值
	    let returnValue = this._moveTo(myArg1, myArg2, myArg3);
	    let endCpu = Game.cpu.getUsed();
	    
	    let used = endCpu - startCpu;
	    
	    if (!this.memory.moveToCPU) this.memory.moveToCPU = 0;
	    
	    this.memory.moveToCPU += used;
	    
	    return returnValue; // 返回原方法返回值
	};
}
```
2. 使用每個函數中都有的 [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) 對象：
```javascript
if (!Creep.prototype._moveTo) {
	Creep.prototype._moveTo = Creep.prototype.moveTo;
	Creep.prototype.moveTo = function() {
	    console.log(`My moveTo using the arguments object!`);
	    
	    let startCpu = Game.cpu.getUsed();
	    // 稍後會對 Function.apply() 方法進行簡單描述
	    let returnValue = this._moveTo.apply(this, arguments);
	    let endCpu = Game.cpu.getUsed();
	    
	    let used = endCpu - startCpu;
	    
	    if (!this.memory.moveToCPU) this.memory.moveToCPU = 0;
	    
	    this.memory.moveToCPU += used;
	    
	    return returnValue;
	};
}
```
3. 使用 ["rest parameters"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters):
```javascript
if (!Creep.prototype._moveTo) {
	Creep.prototype._moveTo = Creep.prototype.moveTo;
	Creep.prototype.moveTo = function(...myArgumentsArray) {
	    console.log(`My moveTo using rest parameters!`);
	    
	    let startCpu = Game.cpu.getUsed();
	    let returnValue = this._moveTo.apply(this, myArgumentsArray);
	    let endCpu = Game.cpu.getUsed();
	    
	    let used = endCpu - startCpu;
	    
	    if (!this.memory.moveToCPU) this.memory.moveToCPU = 0;
	    
	    this.memory.moveToCPU += used;
	    
	    return returnValue;
	};
}
```

#### [Function.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
`Function.apply(thisArg, argumentsArray)` 調用具有指定 `this` 值的函數，並將參數數組的每個元素作為該函數的參數傳遞。
例如：
```javascript
let name = "Helam";
console.log("Hello my name is: ", name);
```
執行的結果和下面代碼相同：
```javascript
let name = "Helam";
let myArguments = ["Hello my name is: ", name];
console.log.apply(console, myArguments);
```
另請參加 [Function.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)。

### 其他例子

#### [Spawn.createCreep](http://docs.screeps.com/api/#StructureSpawn.spawnCreep) - 自動命名
當您有大量 creep 時，使用默認的自動命名可能會消耗大量 CPU。 自己命名它們不失為節省 CPU 的一種方法。
```javascript
// 確保該方法還沒有被復寫
if (!StructureSpawn.prototype._spawnCreep) {
    StructureSpawn.prototype._spawnCreep = StructureSpawn.prototype.spawnCreep;

    // 原先的函數簽名：spawnCreep(body, name, opts)
    // 設置一個新的函數簽名：createCreep(body, opts)
    StructureSpawn.prototype.spawnCreep = function(body, opts = {}) { 
        if (!Memory.myCreepNameCounter) Memory.myCreepNameCounter = 0;
        
        // 現在我們需要生成一個沒有使用的名字
        let name;
        let dryRun;
        do {
            name = `c${Memory.creepNameCounter++}`;
            dryRun = this._spawnCreep(body, name, { ...opts, dryRun: true });
        } while (dryRun !== ERR_NAME_EXISTS);
        
        // 現在我們調用原始方法並傳入我們生成的名稱，然後
        // 向外傳遞原始返回值
        return this._spawnCreep(body, name, opts);
    };
}
```

#### [StructureObserver.observeRoom](http://docs.screeps.com/api/#StructureObserver) - 防止調用覆蓋
在同一 tick 中如果對單個 observer 調用多次 [`.observeRoom`](http://docs.screeps.com/api/#StructureObserver.observeRoom) 的話，後面的調用將會覆蓋之前的調用，而且哪怕只有最後一個調用會被真正執行，所有的調用也都會返回 `OK`。下面的例子將會介紹如何修改其行為，使得後續調用返回 `ERR_BUSY` 而不是覆蓋先前的調用。
```javascript
if (!StructureObserver.prototype._observeRoom) {
    StructureObserver.prototype._observeRoom = StructureObserver.prototype.observeRoom;
    StructureObserver.prototype.observeRoom = function() {
        if (this.observing) 
            return ERR_BUSY;
        let observeResult = this._observeRoom.apply(this, arguments);
        if (observeResult === OK)
            this.observing = roomName;
        return observeResult;
    };
}
```

## 在原型上添加屬性
就像原型方法一樣，原型對象上還有很多並不是方法的屬性，例如從 [`Creep`](http://docs.screeps.com/api/#Creep) 原型上繼承的 [`.name`](http://docs.screeps.com/api/#Creep.name) 或者從 [`Structure`](http://docs.screeps.com/api/#Structure) 原型上繼承的 [`hits`](http://docs.screeps.com/api/#Structure.hits) 屬性。這些屬性從原型繼承到游戲對象，所以你可以訪問它們。而且並不是只能使用游戲 API 提供的屬性，你還可以創建自己的屬性！！！

有很多方法來創建自定義的屬性，這裡我們僅介紹其中的幾種：使用 [`Object.defineProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 和 [`Object.defineProperties`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) 來添加屬性。

我們將在 [`Room`](http://docs.screeps.com/api/#Room) 原型上創建一個屬性 `sources`，該屬性包含房間中的能量礦數組。在 Screeps 有 4 種不同的方法來創建自己的屬性，我們會分別說明其中的不同。

### 只有 getter 訪問器並且無緩存的基礎屬性
注意：[`Object.defineProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 需要下面三個參數：
1. 要添加屬性的對象，通常是原型對象。在該例子裡為 `Room.prototype`。
2. 要添加的屬性名。在該例子裡為 `sources`，但其實你可以起任何名字比如 `'foo'` 或者 `'myProp'`。
3. 一個對象，其中包含用於定義屬性行為的選項。詳情請參見 [MDN 文檔](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)。
```javascript
Object.defineProperty(Room.prototype, 'sources', {
    // 這個是 getter 訪問器，當你輸入 room.sources 時
    // 它的值就是該方法返回的
    get: function() {
        // 由於我們是在 Room 原型上定義的屬性，
        // 因此下面一行中的 'this' 是我們要從中獲取 .sources 的任何 room 對象。
        return this.find(FIND_SOURCES);
    },
    // 這樣可以使 creep 在枚舉屬性時不顯示該屬性
    // 如果你不太了解或者不太確定，將其設置為 false。
    enumerable: false,
    // 這使屬性的特性可以被修改，也可以刪除該屬性。
    // 如果你不太了解或者不太確定，將其設置為 true。
    configurable: true
});
```
這種寫法是最最基本的寫法了，其實只是將 `room.find(FIND_SOURCES)` 替換成了 `room.sources`，這可能會讓你節省一些打字的時間，但是沒什麼其他的好處了，請繼續閱讀下面的示例來了解更好的寫法。

### 對象內部緩存
在下面的代碼中第一次調用 `this._sources` 時，getter 方法發現沒有值，所以它將找到該值並將其保存下來，以便下次訪問該屬性時直接返回已存儲的值。以這種方式存儲的值在只能在當前 tick 訪問，下個 tick 就會消失，下面的 Memory 緩存法會解決該問題。請注意，我們使用帶有 `_` 的 `._sources` 來存儲值，而不是直接訪問 `.sources`。這是因為嘗試訪問 `.sources` 將再次調用其 getter 訪問器，然後就導致了無限循環！
```javascript
Object.defineProperty(Room.prototype, 'sources', {
    get: function() {
        if (!this._sources) {
            this._sources = this.find(FIND_SOURCES);
        }
        return this._sources;
    },
    enumerable: false,
    configurable: true
});
```

### 添加 setter 訪問器
這個示例添加了 setter 方法。如果你想修改自定義屬性的值的話，就必須添加一個 setter，否則在賦值時就會出現錯誤。在本文的需求中不需要給 room.sources 賦值，因為 getter 訪問器已經處理好了這一切，但是我們將展示如何使用 setter。
```javascript
Object.defineProperty(Room.prototype, 'sources', {
    get: function() {
        if (!this._sources) {
            this._sources = this.find(FIND_SOURCES);
        }
        return this._sources;
    },
    set: function(newValue) {
        // 我們可以自行設置私有變量的值，來使下次調用 getter 訪問器時可以
        // 返回新的值
        this._sources = newValue;
    },
    enumerable: false,
    configurable: true
});
```

### Memory 緩存
在這個版本中，我們將添加內存緩存來使得我們的值可以在 tick 之間持久保存。盡管在這個例子裡很有用，但內存緩存並不總是適合任何情況。請記住，存儲在內存中的對象越多，解析它所花費的 CPU 就越多！

由於房間中的 source 並不會改變，這個例子中添加的緩存可以使得你只需要調用一次 `room.find(FIND_SOURCES)` 就可以永遠使用其結果，除非內存中的值被刪除了。

```javascript
Object.defineProperty(Room.prototype, 'sources', {
    get: function() {
    		// 如果 room 對象內部沒有保存該值
        if (!this._sources) {
        		// 如果房間內存中沒有保存該值
            if (!this.memory.sourceIds) {
            		// 查找 source 並將它們的 id 保存到內存裡，
            		// **不要** 保存整個 source 對象
                this.memory.sourceIds = this.find(FIND_SOURCES)
                                        .map(source => source.id);
            }
            // 從內存中獲取它們的 id 並找到對應的 source 對象，然後保存在 room 對象內部
            this._sources = this.memory.sourceIds.map(id => Game.getObjectById(id));
        }
        // 返回內部保存的 source 對象
        return this._sources;
    },
    set: function(newValue) {
        // 當數據保存在內存中時，你會希望在修改 room 上的 source 時
        // 也會自動修改內存中保存的 id 數據
        this.memory.sources = newValue.map(source => source.id);
        this._sources = newValue;
    },
    enumerable: false,
    configurable: true
});
```
在這個例子中，非常重要的一點是，你只能將對象的 ID 存儲在內存中，並使用 [`Game.getObjectById(id)`](http://docs.screeps.com/api/#Game.getObjectById) 在每 tick 時獲取最新的對象。將完整對象存儲在內存中不僅會導致更高的內存使用率，進而導致 CPU 使用率增加，而且舊對象中的過時信息還有可能導致更多錯誤出現。請參閱[在內存中保存游戲對象](http://docs.screeps.com/global-objects.html#Storing-game-objects-in-memory)。


### 其他例子

#### Creep.prototype.isFull - 你的 CARRY 裝滿了麼？
一個向 creep 添加屬性的簡單示例。可以這樣用：`if (creep.isFull)`。這是一個說明在內存緩存不可用時應該怎麼做的好例子，因為 CARRY 部件的資源攜帶量可能會隨著 tick 的流逝發生變化，這會使得在內存裡保存值變得毫無意義。
```javascript
Object.defineProperty(Creep.prototype, 'isFull', {
    get: function() {
        if (!this._isFull) {
            this._isFull = _.sum(this.carry) === this.carryCapacity;
        }
        return this._isFull;
    },
    enumerable: false,
    configurable: true
});
```

#### Source.memory - (給其他對象添加內存)
讓我們更進一步，向所有的 source 添加 `.memory` 屬性。而且對下面例子進行簡單的修改就可以向你所需的任何原型添加 `.memory` 屬性。
```javascript
Object.defineProperty(Source.prototype, 'memory', {
    configurable: true,
    get: function() {
        if(_.isUndefined(Memory.mySourcesMemory)) {
            Memory.mySourcesMemory = {};
        }
        if(!_.isObject(Memory.mySourcesMemory)) {
            return undefined;
        }
        return Memory.mySourcesMemory[this.id] = 
                Memory.mySourcesMemory[this.id] || {};
    },
    set: function(value) {
        if(_.isUndefined(Memory.mySourcesMemory)) {
            Memory.mySourcesMemory = {};
        }
        if(!_.isObject(Memory.mySourcesMemory)) {
            throw new Error('Could not set source memory');
        }
        Memory.mySourcesMemory[this.id] = value;
    }
});
```

#### Source.freeSpaceCount - 該 source 邊上有多少空位可供 creep 開采？
這個例子建立在上個例子的基礎上，使用新的 `source.memory` 屬性來在 source 上緩存 `.freeSpaceCount` 屬性，該屬性返回一個數字，告訴你在 source 周圍有多少個不是牆的空位。
```javascript
Object.defineProperty(Source.prototype, 'freeSpaceCount', {
    get: function () {
        if (this._freeSpaceCount == undefined) {
            if (this.memory.freeSpaceCount == undefined) {
                let freeSpaceCount = 0;
                [this.pos.x - 1, this.pos.x, this.pos.x + 1].forEach(x => {
                    [this.pos.y - 1, this.pos.y, this.pos.y + 1].forEach(y => {
                    	if (Game.map.getTerrainAt(x, y, this.pos.roomName) != 'wall')
                				freeSpaceCount++;
            				}, this);
            		}, this);
                this.memory.freeSpaceCount = freeSpaceCount;
            }
            this._freeSpaceCount = this.memory.freeSpaceCount;
        }
        return this._freeSpaceCount;
    },
    enumerable: false,
    configurable: true
});
```
