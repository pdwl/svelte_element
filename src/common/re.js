/**
 * @description ui���ú���
 * @example maiji 2022��3��5��00:25:18
 */

export default {
    /**
     * @description ��֤�����Ƿ����ֵ
     * @example ��
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