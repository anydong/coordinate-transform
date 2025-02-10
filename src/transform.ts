import coordtransform from 'coordtransform'

export type LngLat = number[]

/**
 * WGS-84 转 GCJ-02
 * 
 * @param lngLat [lng, lat]
 * @returns [lng, lat]
 */
const wgs84togcj02 = (lngLat: LngLat): [number, number] => {
    return coordtransform.wgs84togcj02(lngLat[0], lngLat[1]);
}

/**
 * GCJ-02 转 WGS-84
 * 
 * @param lngLat [lng, lat]
 * @returns [lng, lat]
 */
const gcj02towgs84 = (lngLat: LngLat): [number, number] => {
    return coordtransform.gcj02towgs84(lngLat[0], lngLat[1]);
}

/**
 * GCJ-02 转 BD-09
 * 
 * @param lngLat [lng, lat]
 * @returns [lng, lat]
 */
const gcj02tobd09 = (lngLat: LngLat): [number, number] => {
    return coordtransform.gcj02tobd09(lngLat[0], lngLat[1]);
}

/**
 * BD-09 转 GCJ-02
 * 
 * @param lngLat [lng, lat]
 * @returns [lng, lat]
 */
const bd09togcj02 = (lngLat: LngLat): [number, number] => {
    return coordtransform.bd09togcj02(lngLat[0], lngLat[1]);
}

/**
 * WGS-84 转换为 BD-09
 * 
 * @param lngLat [lng, lat]
 * @returns [lng, lat]
 */
const wgs84tobd09 = (lngLat: LngLat): [number, number] => {
    const gcj02 = coordtransform.wgs84togcj02(lngLat[0], lngLat[1]);
    return coordtransform.gcj02tobd09(gcj02[0], gcj02[1]);
}

/**
 * BD-09 转 WGS-84 
 * 
 * @param lngLat [lng, lat]
 * @returns [lng, lat]
 */
const bd09towgs84 = (lngLat: LngLat): [number, number] => {
    const gcj02 = coordtransform.bd09togcj02(lngLat[0], lngLat[1]);
    return coordtransform.gcj02towgs84(gcj02[0], gcj02[1]);
}

export { wgs84togcj02, gcj02towgs84, gcj02tobd09, bd09togcj02, wgs84tobd09, bd09towgs84, }