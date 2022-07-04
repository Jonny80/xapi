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
    header:"SE II",
    box:'Aufgabe 1'
},{
    header:"AVS",
    box:'Aufgabe 1'
},{
    header:"GIS",
    box:'Aufgabe 1'
},{
    header:"IT 1",
    box:'Aufgabe 1'
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
            new Subject("I110", "Grundlagen der Informatik I", "GdI I", 1, [new Test("APL", 2.0), new Test("APL", 2.3)]),
            new Subject("I120", "Programmierung I", "Prog I", 1, [new Test("PVL"), new Test("SP", 1.7)]),
            new Subject("I130", "Betriebssysteme I", "BS", 1, [new Test("PVL", 2.3), new Test("SP", 2.0)]),
            new Subject("I350", "Grundlagen der Gestaltung", "GdG", 1, []),
            new Subject("I360", "Digitale Bildbearbeitung", "DBB", 1, [new Test("APL", 3.7)]),
            new Subject("I380", "Algebra und Höhere Mathematik", "Ma", 1, [new Test("SP",2.3)]),
            new Subject("S411", "Englisch B2", "Eng", 1, [new Test("APL", 1.0), new Test("APL", 1.3)])
        ],
        [
            new Subject("E803", "Digitale Signalverarbeitung", "DSV", 2, [new Test("PVL"), new Test("SP")], ["E802"]),
            new Subject("I310", "Grundlagen der Informatik II", "GdI II", 2, [new Test("SP")], ["I110"], ["I110"]),
            new Subject("I121", "Programmierung II", "Prog II", 2, [new Test("APL"), new Test("SP")], ["I120"]),
            new Subject("I370", "Betriebswirtschaftslehre", "BWL", 2, [new Test("SP")]),
            new Subject("I350", "Grundlagen der Gestaltung", "GdG", 2, [new Test("APL")], ["I350"]),
            new Subject("I140", "Datenbanksysteme I", "DBS I", 2, [new Test("PVL"), new Test("SP")]),
            new Subject("I380", "Algebra und Höhere Mathematik", "Ma", 2, [new Test("SP")], ["I380"]),
            new Subject("S411", "Englisch B2", "Eng", 2, [new Test("APL"), new Test("APL")], ["S411"]),
            new Subject("I381", "Konstruktive Geometrie", "KG", 2, [new Test("SP")])
        ],
        [
            new Subject("I160", "Rechnernetze/Kommunikationssysteme", "RN/KS", 3, [new Test("APL"), new Test("SP")]),
            new Subject("I150", "Software Engineering I", "SE I", 3, [new Test("PVL"), new Test("SP")]),
            new Subject("I122", "Programmierung III", "Prog III", 3, [new Test("SP")], ["I121"]),
            new Subject("I135", "Rechnerarchitektur", "RA", 3, [new Test("SP")]),
            new Subject("I340", "Computergrafik/Visualisierung I", "CGV I", 3, [new Test("APL"), new Test("SP")]),
            new Subject("I141", "Datenbanksysteme II", "DBS II", 3, [new Test("PVL"), new Test("SP")], ["I140"]),
        ],
        [
            new Subject("I165", "Internettechnologien I", "IT I", 4, [new Test("PVL", 6), new Test("SP")], ["I160"]),
            new Subject("I151", "Software Engineering II", "SE II", 4, [new Test("APL")], ["I150"]),
            new Subject("I377", "Audio- & Videosysteme", "AVS", 4, [new Test("SP")]),
            new Subject("I378", "Medienproduktion", "MP", 4, [new Test("SP", 0), new Test("APL", 0)]),
            new Subject("I341", "Computergrafik/Visualisierung II", "CGV II", 4, [new Test("APL", 0), new Test("SP")], ["I340"]),
            new Subject("I361", "Entwicklungswerkezuge für Multimedia-Systeme", "EMMS", 4, [new Test("APL")]),
            new Subject("I351", "Gestaltung Interaktiver Systeme", "GIS", 4, [new Test("APL")]),
            new Subject("I391", "Interaktive Informationsvisualisierung", "IIV", 4, [new Test("APL")])
        ],
        [
            new Subject("I166", "Rechnernetze/Kommunikationssysteme", "IT II", 5, [new Test("PVL"), new Test("SP")], ["I165"]),
            new Subject("I175", "Grundlagen der Informatik II", "IR", 5, [new Test("SP")]),
            new Subject("I377", "Programmierung II", "AVS", 5, [new Test("SP")], ["I377", "I378"]),
            new Subject("I342", "Betriebswirtschaftslehre", "AVGProg", 5, [new Test("PVL"), new Test("APL")]),
            new Subject("I343", "Grundlagen der Gestaltung", "BuR", 5, [new Test("APL"), new Test("SP")], ["I341"]),
            new Subject("I362", "Datenbanksysteme I", "CA", 5, [new Test("APL")]),
            new Subject("I561", "Algebra und Höhere Mathematik", "ERIA", 5, [new Test("APL")]),
        ],
        [
            new Subject("I190", "Praxisprojekt", "Praxis", 6, [new Test("APL")]),
            new Subject("I191", "Bachelorarbeit", "BA", 6, [new Test("BA"), new Test("V")])
        ]

    ]
};

export const months = ["January", "Febuary", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
