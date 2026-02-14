# Screeps 中文文檔

該文檔是 [Screeps 官方文檔](https://docs.screeps.com) 的中文漢化版本 (zh-CN)，由 Screeps 中國玩家自發創建並維護。歡迎加入我們的 Q 群 [Screeps 編程游戲小組](https://shang.qq.com/wpa/qunwpa?idkey=8d9a9245519f3ecc94b23fbdada6d6479d8a3330071e0d44f372bb63a372a083)。

![Github Action Auto Builder](https://github.com/screeps-cn/docs/workflows/Github%20Action%20Auto%20Builder/badge.svg?branch=master)

Click [here](./README.en-US.md) to visit English readme.

## 項目依賴

- Node.js: `8+`
- npm: `Node.js` 自帶版本即可

## 部署並啟動

```bash
sh start.sh
```

或者 

```bash
# 安裝依賴
npm install
cd api
npm install

# 構建帶有熱更新的靜態站點
npm run generate-watch &
cd ..
npm run generate-watch &

# 啟動本地服務器
npm run server
```

## 參與 & 貢獻

如果你想通過提交 PR 的形式參與該項目，請務必遵守以下規范：

- 請勿修改翻譯內容之外的文件，尤其是 `package.json` 及 `package-lock.json`。
- 請解決完所有的沖突後再提交 PR。
- 提交時請正確選擇對應的 Label（PR 頁面右側）。

想要了解更多關於如何參與的信息，請參閱 [本文](./CONTRIBUTING.md)。

## 中文教程

本小節收錄了一些非官方的中文教程，如果你也想要在下面列出教程，請聯系本項目維護人員。

|教程名稱|發布平台|作者|
|:-:|:-:|:-:|
[screeps 入門教程](https://twodam.net/tags/screeps)|個人博客|[LuckyKoala](https://github.com/LuckyKoala)
[Screeps 中文教程](https://www.jianshu.com/p/5431cb7f42d3)|簡書|[HoPGoldy](https://github.com/HoPGoldy)
[Screeps 游玩指北](https://www.jianshu.com/nb/40235961)|簡書|[趣味的吃](https://www.jianshu.com/u/14a95c23386e)
[Screeps 教程及攻略](https://zhuanlan.zhihu.com/c_1097137377700667392)|知乎|[九日木彡](https://www.zhihu.com/people/noname-mr/activities)

## 鳴謝

本項目和 Screeps-cn 社區完全自發維護，在此對這些做出過貢獻的人們表示由衷的感謝！如果你曾經做出過貢獻但是並沒有在下面中找到你的名字，請及時聯系我們：

[LokiSharp](https://github.com/LokiSharp)，[ayoitsLuke](https://github.com/Lujia-Cheng)，[HHpetra](https://github.com/HHpetra)，[foraphe](https://github.com/foraphe)，[fangxm](https://github.com/fangxm233)，[coldWater](https://github.com/forsaken628)，[SirCM](https://github.com/SirCM)，[HoPGoldy](https://github.com/HoPGoldy)，[趣味的吃](https://github.com/qwedc001)，[zkl2333](https://github.com/zkl2333)。

*排名取決於參與日期。*
