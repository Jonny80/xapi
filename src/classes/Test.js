export default class Test {
    /**
     *
     * @param type {string}
     * @param result {string}
     * @param factor {number|string}
     */
    constructor(type, result="NaN", factor="NaN") {
        this.type = type; // type of test (APL, PVL, SP)
        this.result = result; // result of test (grade)
        this.factor = factor; // part of total grade
    }
}
