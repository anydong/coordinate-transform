import { wgs84togcj02, gcj02towgs84, gcj02tobd09, bd09togcj02 } from 'coordtransform'

/**
 * WGS-84 转换为 BD-09
 * 
 * @param lng 经度
 * @param lat 维度
 * @returns [lng, lat]
 */
const wgs84tobd09 = (lng: number, lat: number): [number, number] => {
    const gcj02 = wgs84togcj02(lng, lat);
    return gcj02tobd09(gcj02[0], gcj02[1]);
}

/**
 * BD-09 转 WGS-84 
 * 
 * @param lng 经度
 * @param lat 维度
 * @returns [lng, lat]
 */
const bd09towgs84 = (lng: number, lat: number): [number, number] => {
    const gcj02 = bd09togcj02(lng, lat);
    return gcj02towgs84(gcj02[0], gcj02[1]);
}

export { wgs84togcj02, gcj02towgs84, gcj02tobd09, bd09togcj02, wgs84tobd09, bd09towgs84, }