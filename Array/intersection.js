// 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，
// 使用 SameValueZero进行相等性比较。（可以理解为给定数组的交集）

import map from '../Utils/map';

function baseIntersection() {
    
}

function intersection(...arr) {
    const mapped = map(arr);
    return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : []
}

export default intersection;