1、游戏服务器的文档

http://docs.mqant.com/

2、把下面的ts文件的头部

assets/script/tools/pbProto/bundle.d.ts

替换为
```js
import Long from "../long/Long.js"
import * as $protobuf from "../protobuf/protobuf.min";
```
2、把下面的ts文件的头部

assets/script/tools/pbProto/bundle.js

替换为
```js
var $protobuf = protobuf;
```
