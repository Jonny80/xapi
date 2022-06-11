
class Subject {
  constructor(code, name, short, semester, tests) {
    this.code = code;
    this.name = name;
    this.short = short;
    this.semester = semester;
    this.tests = tests;
  }
}

class Test {
  constructor(type, result) {
    this.type = type;
    this.result = result;
  }
}

const data = {
      title: "Semester",
      amount: 3,
      subjects: [
        [
            new Subject("I110", "Grundlagen der Informatik", "GdI", 1, [new Test("APL")]), 
            new Subject("I120", "Programmierung I", "Prog I", 1, [new Test("PVL"), new Test("SP")]), 
        ],
        [
          new Subject("I111", "Grundlagen der Informatik II", "GdI II", 1, [new Test("APL")]), 
          new Subject("I121", "Programmierung II", "Prog II", 1, [new Test("PVL"), new Test("SP")]), 
        ],
        [
          new Subject("I112", "Grundlagen der Informatik III", "GdI III", 1, [new Test("APL")]), 
          new Subject("I122", "Programmierung III", "Prog III", 1, [new Test("PVL"), new Test("SP")]), 
        ],

      ]
};



for (i = 0; i < data.amount; i++) {
  console.log(data.title, i+1)
  for (j = 0; j < data.subjects[i].length; j++){
    console.log(data.subjects[i][j].name);
    for (k = 0; k < data.subjects[i][j].tests.length; k++) {
      console.log(data.subjects[i][j].tests[k].type)
    }
  }
}