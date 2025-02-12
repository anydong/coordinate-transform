# coordinate-transform

[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![NPM Version](https://img.shields.io/npm/v/coordinate-transform)](https://www.npmjs.com/package/coordinate-transform)

一个坐标系转换类库，支持 WGS-84、GCJ-02、BD-09 坐标系之间的转换。

说明：
本仓库暂时没有任何发明创造，仅是对：
1. [coordtransform](https://github.com/wandergis/coordtransform) TS 版本进行封装，方便 TS 环境下使用
2. [turf-distance](https://github.com/Turfjs/turf-distance) 导出，方便距离计算

## 安装

```bash
npm i coordinate-transform
```

## 使用

1. 坐标系转换
   
```typescript
import { wgs84togcj02, gcj02towgs84, gcj02tobd09, bd09togcj02, wgs84tobd09, bd09towgs84 } from 'coordinate-transform';

console.log(wgs84togcj02(116.413767089844, 39.905432400174));
```

2. 距离计算

说明：需要将 GCJ-02，BD-09 转为 WGS-84 坐标系后进行计算
官方计算可以参考[两点间距离 - 高的开放平台](https://lbs.amap.com/demo/javascript-api-v2/example/calcutation/calculate-distance-between-two-markers)
```typescript
import { distance, gcj02towgs84 } from 'coordinate-transform';

const a = [116.368904, 39.923423];
const b = [116.387271, 39.922501];

const a_wgs84 = gcj02towgs84(a);
const b_wgs84 = gcj02towgs84(b);
    
const result = distance(a_wgs84, b_wgs84, { units: "meters" });

console.log(result);
```