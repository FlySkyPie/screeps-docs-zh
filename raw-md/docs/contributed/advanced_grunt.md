---
title: 高級 Grunt 用法
contributed: 
    name: tedivm
    link: https://github.com/tedivm
    date: 2017-05-01
---

使用 grunt 上傳代碼僅僅是開始。本指南涵蓋了許多可以添加到腳本中的增強功能，它們可使您將自己的精力用在正確的地方上，並使您的開發更加輕松。


## 假設條件

本文做出了如下假設

* 代碼存放在 `src` 文件夾中。
* 您已經讀過了 [Getting Started](http://gruntjs.com/getting-started) 指南。
* 具體來說就是，您已經了解了如何使用 grunt.initConfig 安排工作。


## 安全憑據

隨著您的 Gruntfile 變得越來越復雜，您將需要將其保存在源代碼管理中，但與此同時，將賬號密碼等憑據保存在存儲庫中通常被認為是一個糟糕的想法。將憑證移動到單獨的文件中可以使您提交不包含憑證的 Gruntfile。


首先創建 `.screeps.json` 文件來保存您的憑據。

    {
      "email": "<YOUR EMAIL HERE>",
      "password": "<YOUR PASSWORD HERE>",
      "branch": "default",
      "ptr": false
    }

現在修改 `Gruntfile.js` 來使用新文件。

    module.exports = function(grunt) {
        var config = require('./.screeps.json')
        grunt.loadNpmTasks('grunt-screeps');
        grunt.initConfig({
            screeps: {
                options: {
                    email: config.email,
                    password: config.password,
                    branch: config.branch,
                    ptr: config.ptr
                },
                dist: {
                    src: ['src/*.js']
                }
            }
        });
    }

最後，打開您的 `.gitignore`（不存在請創建）然後添加 `.screeps.json`

```
/.screeps.json
```


## 使用 CLI 參數覆蓋配置

更改 Grunt 使用的配置不應該需要更改代碼，我們可以通過命令行參數來完成該功能。

現在更新 `Gruntfile.js` 來使用上面創建的 `.screeps.json` 以及 `grunt.option` 功能。

    module.exports = function(grunt) {

        var config = require('./.screeps.json')
        var branch = grunt.option('branch') || config.branch;
        var email = grunt.option('email') || config.email;
        var password = grunt.option('password') || config.password;
        var ptr = grunt.option('ptr') ? true : config.ptr

        grunt.loadNpmTasks('grunt-screeps');

        grunt.initConfig({
            screeps: {
                options: {
                    email: email,
                    password: password,
                    branch: branch,
                    ptr: ptr
                },
                dist: {
                    src: ['src/*.js']
                }
            }
        });
    }

現在你可以隨時通過命令行參數來覆蓋任何配置，您也可以向 `.screeps.json` 中添加任何新的配置項。

    grunt screeps --ptr=true --branch=development


## 使用文件夾

**譯者注**：如果你是 TypeScript 玩家的話，下面的方法可能無法直接使用。

一個困擾新玩家的常見問題是，默認情況下不能使用文件夾來存儲文件。不過我們可以使用 Grunt 解決該問題。

首先請安裝 [grunt-contrib-copy](https://www.npmjs.com/package/grunt-contrib-copy) and [grunt-contrib-clean](https://www.npmjs.com/package/grunt-contrib-clean) 插件。

    npm install grunt-contrib-clean --save-dev
    npm install grunt-contrib-copy --save-dev

在我們的解決方法中，」copy「 插件將會把代碼從 `src` 文件夾移動到 `dist` 裡。該插件擁有一個配置項可以用來重命名文件，所以我們可以通過一個將目錄分隔符(斜槓)轉換為下劃線的函數來」展開「文件結構。運行後，將產生如下效果：

| 之前                       | 之後                       | 要求（代碼裡要提前這麼寫好）            |
|----------------------------|:----------------------------|---------------------------------|
| src/main.js                | dist/main.js                | require('main');                |
| src/lib/creeptalk.js       | dist/lib_creeptalk.js       | require('lib_creeptalk');       |
| src/lib/creeptalk/emoji.js | dist/lib_creeptalk_emoji.js | require('lib_creeptalk_emoji'); |
| src/prototypes/creeps.js   | dist/prototypes_creeps.js   | require('prototypes_creeps');   |
| src/prototypes/spawns.js   | dist/prototypes_spawns.js   | require('prototypes_spawns');   |

copy 插件在運行之前不會清理任何數據，所以 `clean` 插件可以保證在 `dist` 在移入文件之前是空的文件夾。

最後我們使用 `grunt.registerTask()` 將這三個任務組合在一起，這裡我們將其設置為默認任務。

    module.exports = function(grunt) {

        var config = require('./.screeps.json')
        var branch = grunt.option('branch') || config.branch;
        var email = grunt.option('email') || config.email;
        var password = grunt.option('password') || config.password;
        var ptr = grunt.option('ptr') ? true : config.ptr

        grunt.loadNpmTasks('grunt-screeps')
        grunt.loadNpmTasks('grunt-contrib-clean')
        grunt.loadNpmTasks('grunt-contrib-copy')

        grunt.initConfig({
            screeps: {
                options: {
                    email: email,
                    password: password,
                    branch: branch,
                    ptr: ptr
                },
                dist: {
                    src: ['dist/*.js']
                }
            },

            // 移除 dist 文件夾中的所有文件。
            clean: {
              'dist': ['dist']
            },

            // 將所有源文件復制到 dist 文件夾中並展平文件夾結構
            copy: {
              // 將游戲代碼推送到dist文件夾，以便在將其發送到 screeps 服務器之前可以對其進行修改。
              screeps: {
                files: [{
                  expand: true,
                  cwd: 'src/',
                  src: '**',
                  dest: 'dist/',
                  filter: 'isFile',
                  rename: function (dest, src) {
                    // 通過將文件夾分隔符替換成下劃線來重命名文件
                    return dest + src.replace(/\//g,'_');
                  }
                }],
              }
            },
        })

        grunt.registerTask('default',  ['clean', 'copy:screeps', 'screeps']);
    }

現在，只需要一條簡單的命令，就可以將您的代碼從 `src` 文件夾中復制出來，展平，並推送到 screeps 服務器。

    grunt


## 自動版本控制

首先安裝 [file-append](https://www.npmjs.com/package/grunt-file-append) 插件。

    npm install grunt-file-append --save-dev


在您的源代碼中創建一個名為 `version.js` 的空文件。Grunt 將使用該文件創建一個值為時間戳的全局變量 `SCRIPT_VERSION`。然後使用當前的時間填充該變量並創建一個新的 `file_append` 任務。

    module.exports = function(grunt) {

        // 准備

        grunt.loadNpmTasks('grunt-screeps')
        grunt.loadNpmTasks('grunt-contrib-clean')
        grunt.loadNpmTasks('grunt-contrib-copy')
        grunt.loadNpmTasks('grunt-file-append')

        var currentdate = new Date();

        // 輸入當前時間和分支
        grunt.log.subhead('Task Start: ' + currentdate.toLocaleString())
        grunt.log.writeln('Branch: ' + branch)


        grunt.initConfig({

            // 此處省略
            screeps: {},
            clean: {},
            copy: {},

            // 使用當前時間戳添加版本變量
            file_append: {
              versioning: {
                files: [
                  {
                    append: "\nglobal.SCRIPT_VERSION = "+ currentdate.getTime() + "\n",
                    input: 'dist/version.js',
                  }
                ]
              }
            },

        })

        grunt.registerTask('default',  ['clean', 'copy:screeps', 'file_append:versioning', 'screeps']);
    }

現在添加 `require('version')` 來啟用 `SCRIPT_VERSION`。將其與保存在內存中的版本字符串進行比較，就可以讓玩家看到代碼是何時更新的了。

    require('version')
    if(!Memory.SCRIPT_VERSION || Memory.SCRIPT_VERSION != SCRIPT_VERSION) {
        Memory.SCRIPT_VERSION = SCRIPT_VERSION
        console.log('New code uplodated')
    }



## 私有服務器

有兩種使用 Grunt 上傳代碼到您的私有服務器帳戶的方法。

### 通過 Steam 客戶端

Steam 客戶端可以從您的本地文件夾上傳代碼。在這種情況下，可以使用 Grunt 將文件從 `dist` 文件夾復制到 Steam 用來上傳數據的本地文件夾來完成提交代碼的功能。

不幸的是，該 `copy` 插件可能會導致 Steam 客戶端出現一些問題，所以在這種情況下，應使用 [rsync](https://www.npmjs.com/package/grunt-rsync) 插件。

    npm install grunt-rsync --save-dev


  現在添加參數 `private_directory` 到您的憑據文件和 grunt 文件並配置 `rsync`。為了保證提交到主服務器任務的交叉兼容性，我們將使用 `grunt.registerTask` 創建一個新的 `private` 任務。

    module.exports = function(grunt) {

        // 參數
        var private_directory = grunt.option('private_directory') || config.private_directory;

        grunt.loadNpmTasks('grunt-screeps')
        grunt.loadNpmTasks('grunt-contrib-clean')
        grunt.loadNpmTasks('grunt-contrib-copy')
        grunt.loadNpmTasks('grunt-rsync')

        var currentdate = new Date();

        grunt.initConfig({

            // 此處省略
            screeps: {},
            clean: {},
            copy: {},

            // 將文件復制到客戶端用於提交到私有服務器的文件夾。
            // 使用 rsync，以便客戶端僅上傳被更改的文件。
            rsync: {
                options: {
                    args: ["--verbose", "--checksum"],
                    exclude: [".git*"],
                    recursive: true
                },
                private: {
                    options: {
                        src: './dist/',
                        dest: private_directory,
                    }
                },
            },


        })

        grunt.registerTask('default',  ['clean', 'copy:screeps', 'file_append:versioning', 'screeps']);
        grunt.registerTask('private',  ['clean', 'copy:screeps', 'file_append:versioning', 'rsync:private']);
    }

現在，代碼就可以被簡單的推送到您的私有服務器了。

    grunt private

### 使用服務器 Mod


您需要在私有服務器上安裝一些身份驗證模塊，例如 [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth)，之後才能使用該方法提交代碼。

```javascript
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                server: {
                    host: 'your.server.hostname.or.ip',
                    port: 21025,
                    http: true
                },
                email: 'YOUR_EMAIL',
                password: 'YOUR_PASSWORD',
                branch: 'default',
                ptr: false
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });
}
```

## 代碼美化

使代碼格式保持優雅是 Grunt 的一項常見任務，可以通過 [jsbeautifier](https://www.npmjs.com/package/grunt-jsbeautifier) 插件來完成。

    npm install grunt-jsbeautifier --save-dev

現在，為 Grunt 添加兩個新任務 - 一個用於清理代碼，另一個用於驗證代碼標准，我們將把這些任務作為測試套件的開始（此任務可以在以後擴展）。該任務配置為在 `.jsbeautifyrc` 查找[樣式規則](https://github.com/beautify-web/js-beautify#options)。

    module.exports = function(grunt) {

        // 參數
        var private_directory = grunt.option('private_directory') || config.private_directory;

        grunt.loadNpmTasks('grunt-screeps')
        grunt.loadNpmTasks('grunt-contrib-clean')
        grunt.loadNpmTasks('grunt-contrib-copy')
        grunt.loadNpmTasks('grunt-rsync')

        var currentdate = new Date();

        grunt.initConfig({

            // 此處省略
            screeps: {},
            clean: {},
            copy: {},

            // 應用代碼樣式
            jsbeautifier: {
              modify: {
                src: ["src/**/*.js"],
                options: {
                  config: '.jsbeautifyrc'
                }
              },
              verify: {
                src: ["src/**/*.js"],
                options: {
                  mode: 'VERIFY_ONLY',
                  config: '.jsbeautifyrc'
                }
              }
            }

        })

        grunt.registerTask('default',  ['clean', 'copy:screeps', 'file_append:versioning', 'screeps']);
        grunt.registerTask('private',  ['clean', 'copy:screeps', 'file_append:versioning', 'rsync:private']);

        grunt.registerTask('test',     ['jsbeautifier:verify']);
        grunt.registerTask('pretty',   ['jsbeautifier:modify']);
    }

現在可以在將代碼按規則進行格式化

    grunt pretty

或者執行簡單的測試

    grunt test


## 添加統計

有時看著代碼上傳會很無聊。[time-grunt](https://www.npmjs.com/package/time-grunt) 插件提供了每個任務花費多少時間的細分統計。

    npm install time-grunt --save-dev

現在，作為 grunt 函數的第一行，加載該插件並將 grunt 對象傳遞給它。

    module.exports = function(grunt) {
      require('time-grunt')(grunt);
      ...
    }


## 完整的例子

將所有這些插件組合在一起可以即可提供一個功能強大但易於使用的工具來管理 Screeps 的部署。

    module.exports = function (grunt) {
      require('time-grunt')(grunt);

      // 從 .screeps.json 拉取默認配置（包括用戶名和密碼）
      var config = require('./.screeps.json')

      // 允許 grunt 配置項覆蓋默認配置
      var branch = grunt.option('branch') || config.branch;
      var email = grunt.option('email') || config.email;
      var password = grunt.option('password') || config.password;
      var ptr = grunt.option('ptr') ? true : config.ptr
      var private_directory = grunt.option('private_directory') || config.private_directory;


      var currentdate = new Date();
      grunt.log.subhead('Task Start: ' + currentdate.toLocaleString())
      grunt.log.writeln('Branch: ' + branch)

      // 加載需要的任務
      grunt.loadNpmTasks('grunt-screeps')
      grunt.loadNpmTasks('grunt-contrib-clean')
      grunt.loadNpmTasks('grunt-contrib-copy')
      grunt.loadNpmTasks('grunt-file-append')
      grunt.loadNpmTasks("grunt-jsbeautifier")
      grunt.loadNpmTasks("grunt-rsync")

      grunt.initConfig({

        // 將 dist 文件夾中的所有文件推送到 screeps。 dist 文件夾中的內容
        // 以及要發送的內容取決於所使用的任務。
        screeps: {
          options: {
            email: email,
            password: password,
            branch: branch,
            ptr: ptr
          },
          dist: {
            src: ['dist/*.js']
          }
        },

        // 將所有源文件復制到 dist 文件夾
        // 通過將路徑分隔符轉換為下劃線來展平文件夾結構
        copy: {
          // 將游戲代碼推送到dist文件夾，以便在將其發送到 screeps 服務器之前可以對其進行修改。
          screeps: {
            files: [{
              expand: true,
              cwd: 'src/',
              src: '**',
              dest: 'dist/',
              filter: 'isFile',
              rename: function (dest, src) {
                // 通過將文件夾分隔符替換成下劃線來重命名文件
                return dest + src.replace(/\//g,'_');
              }
            }],
          }
        },


        // 將文件復制到客戶端用於提交到私有服務器的文件夾。
        // 使用 rsync，以便客戶端僅上傳被更改的文件。
        rsync: {
            options: {
                args: ["--verbose", "--checksum"],
                exclude: [".git*"],
                recursive: true
            },
            private: {
                options: {
                    src: './dist/',
                    dest: private_directory,
                }
            },
        },


        // 使用當前時間戳添加版本變量
        file_append: {
          versioning: {
            files: [
              {
                append: "\nglobal.SCRIPT_VERSION = "+ currentdate.getTime() + "\n",
                input: 'dist/version.js',
              }
            ]
          }
        },


        // 移除 dist 文件夾中的所有文件。
        clean: {
          'dist': ['dist']
        },


        // 應用代碼樣式
        jsbeautifier: {
          modify: {
            src: ["src/**/*.js"],
            options: {
              config: '.jsbeautifyrc'
            }
          },
          verify: {
            src: ["src/**/*.js"],
            options: {
              mode: 'VERIFY_ONLY',
              config: '.jsbeautifyrc'
            }
          }
        }

      })

      // 將它們組合為一個默認任務。
      grunt.registerTask('default',  ['clean', 'copy:screeps',  'file_append:versioning', 'screeps']);
      grunt.registerTask('private',  ['clean', 'copy:screeps',  'file_append:versioning', 'rsync:private']);
      grunt.registerTask('test',     ['jsbeautifier:verify']);
      grunt.registerTask('pretty',   ['jsbeautifier:modify']);
    }
