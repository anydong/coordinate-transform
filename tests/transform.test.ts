import { describe, it, expect } from 'vitest';
import { bd09towgs84, wgs84tobd09, wgs84togcj02 } from '../src/index';


describe("wgs84togcj02", () => {
    // https://lbs.amap.com/api/webservice/guide/api/convert
    // [116.413767089844, 39.905432400174]
    it("amap wgs84togcj02 [116.407526, 39.90403]", () => {
        const wgs84 = [116.407526, 39.90403];
        const gcj02 = wgs84togcj02(wgs84);

        console.log("WGS84:", wgs84);
        console.log("GCJ-02:", gcj02);

        expect(gcj02[0]).toBeCloseTo(116.413767089844, 5);
        expect(gcj02[1]).toBeCloseTo(39.905432400174, 5);
    })
})

describe("wgs84tobd09", () => {
    // https://lbsyun.baidu.com/faq/api?title=webapi/guide/changeposition-base
    // [116.42017837578203, 39.91169829254732]
    it("[116.407526, 39.90403]", () => {
        const wgs84 = [116.407526, 39.90403];
        const bd09 = wgs84tobd09(wgs84);

        console.log("WGS84:", wgs84);
        console.log("BD-09:", bd09);

        expect(bd09[0]).toBeCloseTo(116.42017837578203, 5);
        expect(bd09[1]).toBeCloseTo(39.91169829254732, 5);
    })
})

describe("bd09_back_to_wgs84", () => {
    it("1", () => {
        const wgs84 = [116.407526, 39.90403]; // 北京的WGS84坐标
        const bd09 = wgs84tobd09(wgs84);
        const bd09_back_to_wgs84 = bd09towgs84(bd09);

        console.log("WGS84:", wgs84);
        console.log("BD-09:", bd09);
        console.log("BD09 back to WGS84:", bd09_back_to_wgs84);

        expect(bd09_back_to_wgs84[0]).toBeCloseTo(wgs84[0], 5);
        expect(bd09_back_to_wgs84[1]).toBeCloseTo(wgs84[1], 5);
    })
})


