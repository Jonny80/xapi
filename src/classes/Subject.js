export default class Subject {
    /**
     *
     * @param code {string}
     * @param name {string}
     * @param short {string}
     * @param semester {number}
     * @param tests {[Test]}
     * @param previous {[string]}
     */
    constructor(code, name, short, semester, tests, previous) {
        this.code = code; // course-code
        this.name = name; // full name of course
        this.short = short; // short name of course
        this.semester = semester; // usual semester for course
        this.tests = tests; // all tests (see class Test)
        this.previous = previous; // previous courses required (code)
    }
}
