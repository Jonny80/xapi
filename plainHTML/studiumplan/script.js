
class Subject {
  constructor(code, name, short, semester, tests, prerequisite) {
    this.code = code; // course-code
    this.name = name; // full name of course
    this.short = short; // short name of course
    this.semester = semester; // usual semester for course
    this.tests = tests; // all tests (see class Test)
    this.prerequisite = prerequisite;
  }
}

class Test {
  constructor(type, result, factor) {
    this.type = type; // type of test (APL, PVL, SP)
    this.result = result; // result of test (grade)
    this.factor = factor; // part of total grade
  }
}

const data = {
      title: "Semester",
      amount: 6,
      maxSubjects: 0,
      subjects: [
        [
          new Subject("E802", "Elektronik für Medieninformatiker", "EL", 1, [new Test("SP")]), 
          new Subject("I110", "Grundlagen der Informatik I", "GdI I", 1, [new Test("APL")]), 
          new Subject("I120", "Programmierung I", "Prog I", 1, [new Test("PVL"), new Test("SP")]),
          new Subject("I130", "Betriebssysteme I", "BS I", 1, [new Test("PVL"), new Test("SP")]), 
          new Subject("I350", "Grundlagen der Gestaltung", "GdG", 1, []), 
          new Subject("I360", "Digitale Bildbearbeitung", "DBB", 1, [new Test("APL")]),
          new Subject("I380", "Algebra und Höhere Mathematik", "Ma", 1, [new Test("SP")]),
          new Subject("S411", "Englisch B2", "Eng", 1, [new Test("APL"), new Test("APL")])
        ],
        [
          new Subject("E803", "Digitale Signalverarbeitung", "DSV", 2, [new Test("PVL"), new Test("SP")]), 
          new Subject("I310", "Grundlagen der Informatik II", "GdI II", 2, [new Test("SP")], "I110"), 
          new Subject("I121", "Programmierung II", "Prog II", 2, [new Test("APL"), new Test("SP")], "I120"),
          new Subject("I370", "Betriebswirtschaftslehre", "BWL", 2, [new Test("SP")]), 
          new Subject("I350", "Grundlagen der Gestaltung", "GdG", 2, [new Test("APL")]), 
          new Subject("I140", "Datenbanksysteme I", "DBS I", 2, [new Test("PVL"), new Test("SP")]),
          new Subject("I380", "Algebra und Höhere Mathematik", "Ma", 2, [new Test("SP")],),
          new Subject("S411", "Englisch B2", "Eng", 2, [new Test("APL"), new Test("APL")]),
          new Subject("I381", "Konstruktive Geometrie", "KG", 2, [new Test("SP")])
        ],
        [
          new Subject("E803", "Digitale Signalverarbeitung", "DSV", 2, [new Test("PVL"), new Test("SP")]), 
          new Subject("I310", "Grundlagen der Informatik II", "GdI II", 2, [new Test("SP")]), 
          new Subject("I121", "Programmierung II", "Prog II", 2, [new Test("APL"), new Test("SP")],),
          new Subject("I370", "Betriebswirtschaftslehre", "BWL", 2, [new Test("SP")], "I380"), 
          new Subject("I350", "Grundlagen der Gestaltung", "GdG", 2, [new Test("APL")]), 
          new Subject("I140", "Datenbanksysteme I", "DBS I", 2, [new Test("PVL"), new Test("SP")]),
          new Subject("I380", "Algebra und Höhere Mathematik", "Ma", 2, [new Test("SP")]),
          new Subject("S411", "Englisch B2", "Eng", 2, [new Test("APL"), new Test("APL")]),
          new Subject("I381", "Konstruktive Geometrie", "KG", 2, [new Test("SP")])
        ],
        [],
        [],
        []

      ]
};


function setup() {
  let container = document.getElementById("pillContainer");
  let connectionThickness = 0.3;
  //setup max subjects
  for (i = 0; i < data.amount; i++) {
    if (data.subjects[i].length > data.maxSubjects) data.maxSubjects = data.subjects[i].length;
  }
  
  // add divs for all semesters in data
  for (i = 0; i < data.amount; i++) {

    let newSemester = document.createElement("div");
    newSemester.classList.add("semester");
    text = document.createTextNode(data.title + " " + (i+1))
    newSemester.appendChild(text);

    // add divs for all subjects per semester
    for (j = 0; j < data.subjects[i].length; j++){

      if (data.subjects[i][j].prerequisite != null) {
        
        for (previous = 0; previous < data.subjects[i-1].length; previous++) {
          if (data.subjects[i-1][previous].code == data.subjects[i][j].prerequisite) {
            let newConnection = document.createElement("div");
            let prevConnection = document.createElement("div");
            let conConnection = document.createElement("div");

            newConnection.classList.add("connection");
            prevConnection.classList.add("connection");
            conConnection.classList.add("connection");

            newConnection.setAttribute(
              "style", 
              "top:"+(18+(connectionThickness/2)+j*data.maxSubjects)+"%;"
              + "right:"+(100-(69+92.4*(i))/data.amount)+"%;"
              + "width:"+34.2/data.amount+"%;"
              + "height:"+connectionThickness+"em;");
            prevConnection.setAttribute(
              "style", 
              "top:"+(18+(connectionThickness/2)+previous*9)+"%;"
              + "left:"+((69+92.4*(i-1))/data.amount)+"%;"
              + "width:"+(58.2/data.amount)+"%;"
              + "padding-right:"+connectionThickness+"em;"
              + "height:"+connectionThickness+"em;");

            if (previous < j) {
              conConnection.setAttribute(
                "style", 
                "top:"+(18+(connectionThickness/2)+previous*9)+"%;"
                + "left:"+(21+(i-1)*(76.5/(data.amount-1)))+"%;"
                + "height:"+((j-previous)*data.maxSubjects)+"%;"
                + "width:"+connectionThickness+"em;");
            } else {
              conConnection.setAttribute(
                "style", 
                "top:"+(18+(connectionThickness/2)+j*9)+"%;"
                + "left:"+(((69+92.4*(i))-34.2)/data.amount)+"%;"
                + "height:"+((previous-j)*data.maxSubjects)+"%;"
                + "width:"+connectionThickness+"em;");
            }
            

            container.appendChild(newConnection);
            container.appendChild(prevConnection);
            container.appendChild(conConnection);
          }
        }
      }
      let newPill = document.createElement("div");
      newPill.classList.add("pill");
      text = document.createTextNode(data.subjects[i][j].code + " " + data.subjects[i][j].short);
      newPill.appendChild(text);

      // add divs for all tests per subject
      for (k = 0; k < data.subjects[i][j].tests.length; k++) {

        let newTest = document.createElement("div");
        newTest.classList.add("test");
        text = document.createTextNode(data.subjects[i][j].tests[k].type);
        newTest.appendChild(text);
        newPill.appendChild(newTest);
      }
      newSemester.appendChild(newPill);
    }
    container.appendChild(newSemester);
  }
}


