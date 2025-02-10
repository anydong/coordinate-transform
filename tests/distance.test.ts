import { describe, it, expect } from 'vitest';
import { distance, gcj02towgs84 } from '../src/index';


describe("distance", () => {
    it("gcj-02", () => {
        const a = [116.368904, 39.923423];
        const b = [116.387271, 39.922501];

        const a_wgs84 = gcj02towgs84(a);
        const b_wgs84 = gcj02towgs84(b);
        const result = distance(a_wgs84, b_wgs84, { units: "meters" })

        console.log("a_wgs84", a_wgs84)
        console.log("b_wgs84", b_wgs84)
        console.log(result)

    })
})