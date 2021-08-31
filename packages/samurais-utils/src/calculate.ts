import { isNumber, isString } from "./type";

/**
 * 转换数字做进位和数据长度磨平处理
 * @param _num1 
 * @param _num2 
 * @returns 
 */
function planish(_num1: string[], _num2: string[]) {
    // 获取是否存在小数
    const maxmin = Math.max(_num1.length, _num2.length);
    // 小数位的长度
    let min = "0";
    // 补充小数差
    if (maxmin == 2 && _num1.length === 1) _num1.push("0");
    if (maxmin == 2 && _num2.length === 1) _num1.push("0");
    console.log(_num1, _num2);
    const temp = _num1.reduce((a: string[][], b: string, index) => {
        if (index === 0) {
            _num1[index] = _num1[index].padStart(Math.max(_num1[index].length, _num2[index].length), "0");
            _num2[index] = _num2[index].padStart(Math.max(_num1[index].length, _num2[index].length), "0");
        } else {
            min = String(Math.max(_num1[index].length, _num2[index].length));
            _num1[index] = _num1[index].padEnd(Math.max(_num1[index].length, _num2[index].length), "0");
            _num2[index] = _num2[index].padEnd(Math.max(_num1[index].length, _num2[index].length), "0");
        }
        a = [_num1, _num2];
        return a;
    }, []).reduce((a, b, index) => {
        a[index] = b.join("");
        return a;
    }, []);
    temp.push(min);
    return temp;
}

/**
 * 大数字计算
 * @param num1 
 * @param num2 
 * @returns 
 */
export function add(num1: string, num2: string) {
    if (!isString(num1) || !isString(num2)) return "0";
    let _num1 = num1.split("."), _num2 = num2.split(".");
    const [num_1, num_2, min] = planish(_num1, _num2);
    let size = 0, total = 0, sum = "";
    for (let index = num_1.length - 1; index >= 0; index--) {
        total = parseInt(num_1[index]) + parseInt(num_2[index]) + size;
        // 更新进位
        size = Math.floor(total / 10);
        sum = total % 10 + sum;
    }
    if (size == 1) sum = "1" + sum;
    if (!!Number(min)) sum = [sum.slice(0, sum.length - Number(min)), sum.slice(sum.length - Number(min), sum.length)].join(".");
    return sum;
}