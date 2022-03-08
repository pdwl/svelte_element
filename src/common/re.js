/**
 * @description ui公用函数
 * @example maiji 2022年3月5日00:25:18
 */

export default {
    /**
     * @description 验证数组是否存在值
     * @example 无
     */
    in_array: (search, array, se = undefined) => {
        if (se != undefined) {
            array = array.split(se)
        }
        for (let i in array) {
            if (array[i] == search) {
                return i;
            }
        }
        return false;
    }
}