---
title: 驗證令牌（Authentication Tokens）
---

Screeps 並沒有一個文檔化的公共 Web API。但是，如果您想使用這些沒有文檔的 HTTP 接口在我們的服務器和客戶端之間進行通信的話，沒有關系。我們開發了一個 **驗證令牌**（Authentication Tokens）系統可以讓您的工作更加輕松。

常見的瀏覽器客戶端一般使用 Google Invisible reCAPTCHA 來在後台驗證某些請求，包括登錄請求。而 Steam 客戶端使用加密的本地 Steam 連接來完成類似的功能。如果您想要構建一些不需要人工干預的外部工具，則可以生成持久的身份驗證令牌來發出請求，從而避免輸入驗證碼。令牌一經生成即可永久使用。

## 使用驗證令牌

您可以通過 [賬戶設置](https://screeps.com/a/#!/account/auth-tokens) 來生成一個驗證令牌：

![](#auth_tokens.webp) 

一個 **完全權限** 的令牌的訪問范圍和您用身份驗證憑據登錄的訪問范圍相同。您也可以限制該令牌的訪問范圍，包括**指定的接口**，**websockets 事件**和**內存分段**。

下面這兩種令牌的使用方法都是有效的：

* 在您的請求 header 中攜帶 `X-Token` 字段：
   ```
   X-Token: 3bdd1da7-3002-4aaa-be91-330562f54093
   ```     
   
* 在 URL 的請求參數中攜帶 `_token` 字段：
   ```
   https://screeps.com/api/user/name?_token=3bdd1da7-3002-4aaa-be91-330562f54093
   ```
 
## 訪問次數限制

瀏覽器或者客戶端發送的常規請求是**不會**受到該限制的影響。

但是，所有通過驗證令牌認證的請求都會受到訪問次數的限制。當超出規定的訪問次數後，請求將會返回 `429` HTTP 狀態碼。

```
HTTP/1.1 429 Too Many Requests

Rate limit exceeded, retry after 51243ms
```

HTTP 請求中包含下述三個 header 字段來提供頻率限制的信息，您可以使用它們來規劃請求次數：

| Header 字段名 | 介紹 |
|-|-|
| `X-RateLimit-Limit` | 每個限制窗口允許的最大請求數。|
| <nobr>`X-RateLimit-Remaining`</nobr> | 當前窗口中剩余的請求數。|
| `X-RateLimit-Reset` | 當前窗口的請求次數重置時間，以 UTC 時間秒為單位 |

```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 35
X-RateLimit-Reset: 1514539728
```

請求限制分為下面兩個等級：全局限制和接口限制：

| 接口 | 頻率 |
|----------|------|
| **全局**   | **120 / 分鐘** |
| GET /api/game/room-terrain | 360 / 小時 |
| POST /api/game/map-stats | 60 / 小時 |
| GET /api/user/code | 60 / 小時 |
| POST /api/user/code | 240 / 天
| POST /api/user/set-active-branch | 240 / 天 |
| GET /api/user/memory | 1440 / 天 |
| POST /api/user/memory | 240 / 天 |
| GET /api/user/memory-segment | 360 / 小時 |
| POST /api/user/memory-segment | 60 / 小時 |
| POST /api/user/console | 360 / 小時 | 
| GET /api/game/market/orders-index | 60 / 小時 |
| GET /api/game/market/orders | 60 / 小時 |
| GET /api/game/market/my-orders | 60 / 小時 |
| GET /api/game/market/stats | 60 / 小時 |
| GET /api/game/user/money-history | 60 / 小時 |

### 解除限速

如果您開發的第三方工具需要進行人工干預，那麼您可以通過集成一個特殊流程來暫時關閉特定令牌的請求頻率限制。為此，您必須為用戶提供一個鏈接 `https://screeps.com/a/#!/account/auth-tokens/noratelimit?token=XXX`，並且引導用戶導航到該鏈接。在用戶點擊該頁面中的 」Proceed「 按鈕後，該令牌將被授予兩個小時的無限速率訪問時間。

![](#token-noratelimit.webp) 

如果您的工具是基於 web 開發的，那麼您可以將該頁面通過 `<iframe>` 嵌入進來並且監聽 `screepsTokenSuccess` 事件信息：

```javascript
window.addEventListener('message', (event) => {
    if(event.data === 'screepsTokenSuccess') {
        console.log("We are not rate limited now!");
    }   
}, false);
```

請注意，該頁面使用 Google Invisible reCAPTCHA 進行驗證，所以無法通過其他手段自動完成。

您可以使用接口 `https://screeps.com/api/auth/query-token?token=XXX` 來查詢指定令牌的信息（包含其不受限訪問時長）。