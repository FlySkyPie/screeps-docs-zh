title: 使用外部工具提交代碼
---

Screeps 擁有一個小巧的嵌入式編輯器來方便代碼的編寫。但是，在某些情況下（例如，您想使用 JavaScript 以外的語言或者想使用您的 IDE），您可能不得不使用其他方式將代碼從外部提交至您的 Screeps 賬戶。
 
{% note info %}
您需要先在 [帳戶設置](https://screeps.com/a/#!/account/auth-tokens) 中創建一個登錄令牌（auth token）來使用外部提交。
{% endnote %}

## 使用 Grunt 任務

如果您以前從未使用過 [Grunt](http://gruntjs.com)，請務必查看 [Getting Started](http://gruntjs.com/getting-started) 指南，它會告訴您如何創建 [Gruntfile](http://gruntjs.com/sample-gruntfile) 以及如何安裝和使用 Grunt 插件。在您有了一定的了解後，就可以使用以下命令安裝此插件：

    npm install grunt-screeps

配置您的 Gruntfile.js:

    module.exports = function(grunt) {

        grunt.loadNpmTasks('grunt-screeps');
    
        grunt.initConfig({
            screeps: {
                options: {
                    email: '<your e-mail>',
                    token: '<your auth token>',
                    branch: 'default',
                    //server: 'season'
                },
                dist: {
                    src: ['dist/*.js']
                }
            }
        });
    }

現在，您可以執行以下命令來將您的代碼從 `dist` 文件夾提交至 Screeps 賬戶：

    grunt screeps

## 直接通過 API 進行訪問

Screeps Web API 有一個用於上傳/下載代碼的接口 `https://screeps.com/api/user/code`。支持通過 `POST` 上傳代碼和通過 `GET` 下載代碼。這兩種方法都接受[基本訪問鑑權](http://en.wikipedia.org/wiki/Basic_access_authentication)。接口可以接受或返回一個包含所有模塊的 JSON 數據，其中模塊的名作為鍵，模塊的內容作為值。

使用 Node.js 提交代碼的示例：

    var https = require('https');

    var email = '<your e-mail>',
        password = '<your password>',
        data = {
            branch: 'default',         
            modules: {
                main: 'require("hello");',
                hello: 'console.log("Hello World!");'
            }
        };

    var req = https.request({
        hostname: 'screeps.com',
        port: 443,
        path: '/api/user/code',
        method: 'POST',
        auth: email + ':' + password,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });

    req.write(JSON.stringify(data));
    req.end();

請求:

    POST /api/user/code HTTP/1.1
    Content-Type: application/json; charset=utf-8
    Host: screeps.com:443
    Authorization: Basic PHlvdXIgZS1tYWlsPjo8eW91ciBwYXNzd29yZD4=
    Connection: close
    Transfer-Encoding: chunked

    {"branch":"default","modules":{"main":"require(\"hello\");","hello":"console.log(\"Hello World!\");"}}

響應:

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 8
    Date: Mon, 02 Feb 2015 18:46:11 GMT
    Connection: close

    {"ok":1}
