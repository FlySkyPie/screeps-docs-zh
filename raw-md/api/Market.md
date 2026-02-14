# Game.market

描述游戲內市場的全局變量。您可以使用該對象追蹤從您的終端接收/發送的資源交易，以及您的購買/出售訂單。

點擊 [本文](/market.html) 來了解更多關於市場系統的信息。

<h2 id="Game.market.credits" class="api-property api-property--property  "><span class="api-property__name">Game.market.credits</span><span class="api-property__type">number</span></h2>



您當前的 credit 余額。



<h2 id="Game.market.incomingTransactions" class="api-property api-property--property  "><span class="api-property__name">Game.market.incomingTransactions</span><span class="api-property__type">array</span></h2>

```javascript
[{
    transactionId : "56dec546a180ce641dd65960",
    time : 10390687,
    sender : {username: "Sender"},
    recipient : {username: "Me"},
    resourceType : "U",
    amount : 100,
    from : "W0N0",
    to : "W10N10",
    description : "trade contract #1",
	order: {		// 可選的
		id : "55c34a6b5be41a0a6e80c68b",
		type : "sell",
		price : 2.95
	}
}]
```

一個數組，內容為您終端接收的最近 100 筆交易，格式詳見右側：



<h2 id="Game.market.outgoingTransactions" class="api-property api-property--property  "><span class="api-property__name">Game.market.outgoingTransactions</span><span class="api-property__type">array</span></h2>

```javascript
[{
    transactionId : "56dec546a180ce641dd65960",
    time : 10390687,
    sender : {username: "Me"},
    recipient : {username: "Recipient"},
    resourceType : "U",
    amount : 100,
    from : "W0N0",
    to : "W10N10",
    description : "trade contract #1",
	order: {		// 可選的
		id : "55c34a6b5be41a0a6e80c68b",
		type : "sell",
		price : 2.95
	}
}]
```

一個數組，內容為您終端發送的最近 100 筆交易，格式詳見右側：



<h2 id="Game.market.orders" class="api-property api-property--property  "><span class="api-property__name">Game.market.orders</span><span class="api-property__type">object</span></h2>

```javascript
{
	"55c34a6b5be41a0a6e80c68b": {
		id : "55c34a6b5be41a0a6e80c68b",
		created : 13131117,
		active: true,
		type : "sell"
		resourceType : "OH",
		roomName : "W1N1",
		amount : 15821,
		remainingAmount : 30000,
		totalAmount : 50000,
		price : 2.95
	},
	"55c34a6b52411a0a6e80693a": {
		id : "55c34a6b52411a0a6e80693a",
		created : 13134122,
		active: true,
		type : "buy"
		resourceType : "energy",
		roomName : "W1N1",
		amount : 94000,
		remainingAmount : 94000,
		totalAmount : 94000
		price : 0.45
	},
	"55c34a6b5be41a0a6e80c123": {
		id : "55c34a6b5be41a0a6e80c123",
		created : 13105123,
		active: false,
		type : "sell"
		resourceType : "token",
		amount : 0,
		remainingAmount : 10,
		totalAmount : 10,
		price : 50000
	}
}
```

一個對象，包含了您在市場中活躍 (activated) 和非活躍 (deactivated) 的購買/出售訂單。
查看
<a href="#Game.market.getAllOrders"><code>getAllOrders</code></a>
來了解其詳細說明。


<h2 id="Game.market.calcTransactionCost" class="api-property api-property--method  "><span class="api-property__name">Game.market.calcTransactionCost</span><span class="api-property__args">(amount, roomName1, roomName2)</span>
        <div class="api-property__cpu api-property__cpu--0" title="該方法的CPU開銷很小。"></div>
        </h2>

```javascript
const cost = Game.market.calcTransactionCost(1000, 'W0N0', 'W10N5');
// -> 284 單位能量
```

估算 <a href="#StructureTerminal.send"><code>StructureTerminal.send</code></a> 和 <a href="#Game.market.deal"><code>Game.market.deal</code></a> 方法的能量交易成本。
算法：

```javascript-content
Math.ceil( amount * ( 1 - Math.exp(-distanceBetweenRooms/30) ) )
```

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>amount</code></td><td>number</td><td><p>要發送的資源數量。</p>
</td>
<tr><td><code>roomName1</code></td><td>string</td><td><p>第一個房間的名稱。</p>
</td>
<tr><td><code>roomName2</code></td><td>string</td><td><p>第二個房間的名稱。</p>
</td>
</tbody></table>



### 返回值

進行交易所需的能量。

<h2 id="Game.market.cancelOrder" class="api-property api-property--method  "><span class="api-property__name">Game.market.cancelOrder</span><span class="api-property__args">(orderId)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
for(const id in Game.market.orders) {
    Game.market.cancelOrder(id);
}
```

取消先前創建的訂單。5% 的費用將不予退還。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>orderId</code></td><td>string</td><td><p><code>Game.market.orders</code> 中提供的訂單 ID。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>無效的訂單 ID。</p>
</td></tr>
</tbody></table>




<h2 id="Game.market.changeOrderPrice" class="api-property api-property--method  "><span class="api-property__name">Game.market.changeOrderPrice</span><span class="api-property__args">(orderId, newPrice)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
Game.market.changeOrderPrice('57bec1bf77f4d17c4c011960', 9.95);
```

修改一個已存在訂單的單價。如果 <code>newPrice</code> 大於之前的單價，將向您收取 <code>(newPrice-oldPrice)\*remainingAmount\*0.05</code> credit 的費用。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>orderId</code></td><td>string</td><td><p><code>Game.market.orders</code> 提供的訂單 ID。</p>
</td>
<tr><td><code>newPrice</code></td><td>number</td><td><p>新的訂單單價。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>您不是該房間終端的所有者或者該房間沒有終端。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>您沒有足夠的 credit 來繳納費用。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>提供了無效的參數。</p>
</td></tr>
</tbody></table>



<h2 id="Game.market.createOrder" class="api-property api-property--method  "><span class="api-property__name">Game.market.createOrder</span><span class="api-property__args">(params)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
Game.market.createOrder({
    type: ORDER_SELL,
    resourceType: RESOURCE_GHODIUM,
    price: 9.95,
    totalAmount: 10000,
    roomName: "W1N1"   
});
```

從您的終端創建一個市場訂單。下單時將向您收取 <code>price\*amount\*0.05</code> credit 的費用。每個玩家最多可以擁有 300 個訂單。您可以在任意時刻使用任意數量創建一個訂單。之後會自動根據其可用資源量和 credit 來將其狀態設置為活躍和非活躍。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>params</code></td><td>object</td><td><p>包含下列參數的對象：</p>
<ul>
    <li>
        <div class="api-arg-title">type</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">訂單類型，<code>ORDER_SELL</code> 或者 <code>ORDER_BUY</code>。</div>
    </li>
    <li>
        <div class="api-arg-title">resourceType</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">Either one of the <code>RESOURCE_*</code> constants or one of account-bound resources (See <code>INTERSHARD_RESOURCES</code> constant). If your Terminal doesn&#39;t have the specified resource, the order will be temporary inactive.</div>
    </li>
    <li>
        <div class="api-arg-title">price</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">資源的單價（單位: credit）。可以包含小數。</div>
    </li>
    <li>
        <div class="api-arg-title">totalAmount</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">要交易的資源總量。</div>
    </li>
    <li>
        <div class="api-arg-title">roomName (可選)</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">在創建訂單時指定的房間中必須存在一個屬於您的終端（Terminal），否則該訂單將暫時無效。當 <code>resourceType</code> 參數的值為賬戶綁定資源之一（見 <code>INTERSHARD_RESOURCES</code> 常量）時本參數不使用。</div>
    </li><br></ul></td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>您不是該房間終端的所有者或者該房間沒有終端。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>您沒有足夠的 credit 來繳納費用。</p>
</td></tr>
<tr><td><code>ERR_FULL</code></td><td>-8</td><td><p>您不能創建超過 300 個訂單。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>提供了無效的參數。</p>
</td></tr>
</tbody></table>




<h2 id="Game.market.deal" class="api-property api-property--method  "><span class="api-property__name">Game.market.deal</span><span class="api-property__args">(orderId, amount, [yourRoomName])</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
Game.market.deal('57cd2b12cda69a004ae223a3', 1000, "W1N1");
```

```javascript
const amountToBuy = 2000, maxTransferEnergyCost = 500;
const orders = Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_GHODIUM});

for(let i=0; i<orders.length; i++) {
    const transferEnergyCost = Game.market.calcTransactionCost(
        amountToBuy, 'W1N1', orders[i].roomName);

    if(transferEnergyCost < maxTransferEnergyCost) {
        Game.market.deal(orders[i].id, amountToBuy, "W1N1");
        break;
    }
}
```

使用 <code>yourRoomName</code> 房間中的終端處理一個貿易訂單，根據訂單類型(購入/賣出)來和其他玩家的終端進行交易。無論訂單類型如何，您的終端都將承擔本次資源交易所產生的能量消耗。您可以使用 <a href="#calcTransactionCost"><code>Game.market.calcTransactionCost</code></a> 方法估算運輸成本。當多個玩家嘗試處理同一個訂單時，距離更近的玩家優先。您每 tick 不能處理超過 10 筆交易。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>orderId</code></td><td>string</td><td><p>來自 <code>Game.market.getAllOrders</code> 的訂單 ID。</p>
</td>
<tr><td><code>amount</code></td><td>number</td><td><p>要轉移的資源數量。</p>
</td>
<tr><td><code>yourRoomName (可選)</code></td><td>string</td><td><p>您某個房間的名稱，該房間應該存在一個可用終端且該終端存放了足夠的能量。當訂單的資源類型為賬戶綁定資源之一（見 <code>INTERSHARD_RESOURCES</code> 常量）時本參數不使用。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_OWNER</code></td><td>-1</td><td><p>目標房間中不存在屬於您的終端。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>您沒有足夠的 credit 或者資源。</p>
</td></tr>
<tr><td><code>ERR_FULL</code></td><td>-8</td><td><p>您每 tick 不能處理超過 10 筆交易。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>提供了無效的參數。</p>
</td></tr>
<tr><td><code>ERR_TIRED</code></td><td>-11</td><td><p>目標終端仍在冷卻。</p>
</td></tr>
</tbody></table>




<h2 id="Game.market.extendOrder" class="api-property api-property--method  "><span class="api-property__name">Game.market.extendOrder</span><span class="api-property__args">(orderId, addAmount)</span>
        <div class="api-property__cpu api-property__cpu--A" title="這個方法是一個改變游戲狀態的動作。在返回OK代碼的情況下，它的自然成本增加了0.2個CPU成本。"></div>
        </h2>

```javascript
Game.market.extendOrder('57bec1bf77f4d17c4c011960', 10000);
```

為一個已存在的訂單添加容量。它將影響 <code>remainingAmount</code> 和 <code>totalAmount</code> 屬性。您將要為此支付 <code>price\*addAmount\*0.05</code> credit 的手續費。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>orderId</code></td><td>string</td><td><p><code>Game.market.orders</code> 中提供的訂單 ID。</p>
</td>
<tr><td><code>addAmount</code></td><td>number</td><td><p>要增加多少容量。不能為負數。</p>
</td>
</tbody></table>



### 返回值

如下錯誤碼之一：
<table class='api-return-codes'><thead><tr><th>constant</th><th>value</th><th>description</th></tr></thead><tbody>
<tr><td><code>OK</code></td><td>0</td><td><p>這個操作已經成功納入計劃。</p>
</td></tr>
<tr><td><code>ERR_NOT_ENOUGH_RESOURCES</code></td><td>-6</td><td><p>您沒有足夠的 credit 來繳納費用。</p>
</td></tr>
<tr><td><code>ERR_INVALID_ARGS</code></td><td>-10</td><td><p>提供了無效的參數。</p>
</td></tr>
</tbody></table>




<h2 id="Game.market.getAllOrders" class="api-property api-property--method  "><span class="api-property__name">Game.market.getAllOrders</span><span class="api-property__args">([filter])</span>
        <div class="api-property__cpu api-property__cpu--3" title="這種方法的CPU成本很高。"></div>
        </h2>


```javascript
Game.market.getAllOrders(); // 更慢
```

```javascript
Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_GHODIUM}); // 更快
```

```javascript
const targetRoom = "W1N1";
Game.market.getAllOrders(order => order.resourceType == RESOURCE_GHODIUM &&
	order.type == ORDER_SELL &&
    Game.market.calcTransactionCost(1000, targetRoom, order.roomName) < 500); // 更慢
```

```javascript
// 輸出：

[{
	id : "55c34a6b5be41a0a6e80c68b",
	created : 13131117,
	type : "sell",
	resourceType : "OH",
	roomName : "W1N1",
	amount : 15821,
	remainingAmount : 30000,
	price : 2.95
}, {
    createdTimestamp: 1543253147522,
    type: "sell",
    amount: 1000,
    remainingAmount: 1000,
    resourceType: "O",
    price: 1,
    roomName: "E2S7",
    created: 12010056,
    id: "5bfc2c9bd719fb605037c06d"
}, {
	id : "55c34a6b5be41a0a6e80c123",
	createdTimestamp: 1543253155580,
	type : "sell",
	resourceType : "token",
	amount : 3,
	remainingAmount : 10,
	price : 50000
}]
```

獲取當前市場上其他玩家活躍的訂單。該方法支持 `resourceType` 內置索引。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>filter (可選)</code></td><td>object, function</td><td><p>一個對象或者函數，將使用 <a href="https://lodash.com/docs#filter"><code>lodash.filter</code></a> 方法對結果列表進行篩選。</p>
</td>
</tbody></table>



### 返回值

一個訂單數組，訂單格式如下：

屬性 | 介紹
---|---
`id` | 唯一的訂單 ID。
`created` | 訂單創建時的游戲 tick。inter-shard 市場中的訂單不存在該屬性。
`createdTimestamp` | 訂單創建時的 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime#Syntax">UNIX 毫秒時間戳</a>。老版本的訂單不存在該屬性。
`type` | <code>ORDER_SELL</code> 或 <code>ORDER_BUY</code>。
`resourceType` | <code>RESOURCE_*</code> 常量之一或者賬戶綁定資源之一（見 <code>INTERSHARD_RESOURCES</code> 常量）。
`roomName` | 下訂單的房間。
`amount` | 當前可用的交易量。
`remainingAmount` | 該訂單還可以交易多少資源。(How many resources are left to trade via this order.)
`price` | 當前的交易單價。


<h2 id="Game.market.getHistory" class="api-property api-property--method  "><span class="api-property__name">Game.market.getHistory</span><span class="api-property__args">([resourceType])</span>
        <div class="api-property__cpu api-property__cpu--1" title="該方法具有較低的CPU開銷。"></div>
        </h2>

獲取最近 14 天以來市場中指定資源的每日價格記錄。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>resourceType (可選)</code></td><td>string</td><td><p><code>RESOURCE_*</code> 常量之一。如果為 undefined，則返回所有資源的歷史數據。</p>
</td>
</tbody></table>



### Return value

返回具有以下格式的對象數組：
```json-content
[{
    "resourceType": "L",
    "date": "2019-06-24",
    "transactions": 4,
    "volume": 400,
    "avgPrice": 3.63,
    "stddevPrice": 0.27
}]    
``` 


<h2 id="Game.market.getOrderById" class="api-property api-property--method  "><span class="api-property__name">Game.market.getOrderById</span><span class="api-property__args">(id)</span>
        <div class="api-property__cpu api-property__cpu--1" title="該方法具有較低的CPU開銷。"></div>
        </h2>

```javascript
const order = Game.market.getOrderById('55c34a6b5be41a0a6e80c123');
```

檢索指定的市場訂單。

<table><thead><tr><th>parameter</th><th>type</th><th>description</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>string</td><td><p>訂單 ID。</p>
</td>
</tbody></table>



### 返回值

訂單信息對象。查看
<a href="#Game.market.getAllOrders"><code>getAllOrders</code></a>
來了解其屬性說明。
