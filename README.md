# coordinate-transform

一个坐标系转换类库，支持 WGS-84、GCJ-02、BD-09 坐标系之间的转换。

说明：
本仓库仅是对 [coordtransform](https://github.com/wandergis/coordtransform) TS 版本进行封装，仅供学习参考。

## 安装

```bash
npm i coordinate-transform
```

## 使用

```typescript
import { wgs84togcj02, gcj02towgs84, gcj02tobd09, bd09togcj02, wgs84tobd09, bd09towgs84 } from 'coordinate-transform';

console.log(wgs84togcj02(116.413767089844, 39.905432400174));
```