import Subject from "../classes/Subject";
import Test from "../classes/Test";

export const DemoSteps = [{
    name:"GIS",
    steps:["APL","APL2","SP"],
    step:2,
    date:"2022-05-11"
},
    {
        name:"Mathe",
        steps:["Beleg","SP"],
        step:1,
        date:"2023-01-01"
    },{
    name:"GdI",
        steps:["APL","PVL","SP"],
        step:3,
        date: "2022-08-01"
    }]
export const DrawerData = [
    {
      name:"GIS",
      credits:5,
        semester:3,
        art:"Pflichtmodul",
    },
    {
        name:"Mathe",
        credits: 2,
        semester: 4,
        art: "Pflichtmodul"

    },
    {
     name:"Visualisierung",
     credits: 5,
     semester: 4,
     art:"Vertiefung",
    },
    {
        name:"GdI",
        credits: 10,
        semester: 1,
        art: "Pflichtmodul"
    }
]
export const DemoNews = [{
    header:"Hello World",
    description:"Hello World",
    date:"2022-05-11"
},{
    header:"I like trains",
    description: "The TGV only needs 2.5h from Stuttgart to Paris",
    date:"2022-07-21"
},{
    header:"Where to upload mp3 file",
    description: "Student does not know where to upload the recorded meeting from last week",
    date: "2023-02-11"
},{
    header:"Is light Beer beer?",
    description: "A fierce discussion broke out whether " +
        "light beer can be considered as real beer rather than lemonade",
    date:"2022-08-01"
}]
/**
 * @type {{amount: number, subjects: (Subject[]|*[])[], title: string, maxSubjects: number}}
 */
export const Studienplandata = {
    title: "Semester",
    amount: 6,
    maxSubjects: 0,
    subjects: [
        [
            new Subject("E802", "Elektronik für Medieninformatiker", "EL", 1, [new Test("SP")]),
            new Subject("I110", "Grundlagen der Informatik I", "GdI I", 1, [new Test("APL", 2.3)]),
            new Subject("I120", "Programmierung I", "Prog I", 1, [new Test("PVL"), new Test("SP", 0)]),
            new Subject("I130", "Betriebssysteme I", "BS I", 1, [new Test("PVL"), new Test("SP", 6)]),
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
            new Subject("I380", "Algebra und Höhere Mathematik", "Ma", 2, [new Test("SP")]),
            new Subject("S411", "Englisch B2", "Eng", 2, [new Test("APL"), new Test("APL")]),
            new Subject("I381", "Konstruktive Geometrie", "KG", 2, [new Test("SP")])
        ],
        [
            new Subject("E803", "Digitale Signalverarbeitung", "DSV", 2, [new Test("PVL"), new Test("SP")]),
            new Subject("I310", "Grundlagen der Informatik II", "GdI II", 2, [new Test("SP")]),
            new Subject("I121", "Programmierung II", "Prog II", 2, [new Test("APL"), new Test("SP")]),
            new Subject("I370", "Betriebswirtschaftslehre", "BWL", 2, [new Test("SP")], "S411"),
            new Subject("I350", "Grundlagen der Gestaltung", "GdG", 2, [new Test("APL")]),
            new Subject("I140", "Datenbanksysteme I", "DBS I", 2, [new Test("PVL"), new Test("SP")]),
            new Subject("I380", "Algebra und Höhere Mathematik", "Ma", 2, [new Test("SP")]),
            new Subject("S411", "Englisch B2", "Eng", 2, [new Test("APL"), new Test("APL")]),
            new Subject("I381", "Konstruktive Geometrie", "KG", 2, [new Test("SP")])
        ],
        [new Subject("I381", "Konstruktive Geometrie", "KG", 2, [new Test("SP")])],
        [new Subject("I381", "Konstruktive Geometrie", "KG", 2, [new Test("SP")])],
        [new Subject("I381", "Konstruktive Geometrie", "KG", 2, [new Test("SP")])]

    ]
};

export const months = ["January", "Febuary", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
