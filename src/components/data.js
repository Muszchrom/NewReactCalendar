const monday = [
  {
    start: "08:00",
    end: "10:15",
    label: "⭐Programowanie Obiektowe",
    bonusContent: {
      description: "Tydzień 1-10",
      start: 6,
      end: 15,
    },
    hall: "E310",
    type: "Labo",
    iconNumber: 1,
    professor: "Dr hab. inż. A. Miaskowski"
  },
  {
    start: "10:30",
    end: "12:45",
    label: "⭐Elektromaszynowe układy wykonawcze",
    bonusContent: {
      description: "Tydzień 1-10",
      start: 6,
      end: 15,
    },
    hall: "E112",
    type: "Labo",
    iconNumber: 1,
    professor: "Dr inż. R. Machlarz"
  },
  {
    start: "14:15",
    end: "16:00",
    label: "Programowanie wizualne w środowisku LabView",
    hall: "CI 415",
    type: "Labo",
    iconNumber: 1,
    professor: "Dr inż. S. Styła"
  }
];
const tuesday = [
  {
    start: "08:15",
    end: "10:00",
    label: "Podstawy elektroenergetyki",
    hall: "E311",
    type: "Ćwiczenia",
    iconNumber: 0,
    professor: "Dr hab. inż. P. Pijarski, prof uczelni"
  },
  {
    start: "10:15",
    end: "12:00",
    label: "Cyfrowe przetwarzanie sygnałów",
    hall: "CI 421E",
    type: "Labo",
    iconNumber: 1,
    professor: "Dr hab inż. S. Cięszczyk, prof uczelni"
  }
];
const wednesday = [
  {
    start: "08:45",
    end: "10:15",
    label: "Podstawy Elektroenergetyki",
    hall: "E211",
    type: "Wykład",
    iconNumber: 2,
    professor: "Dr hab. inż. P. Pijarski, prof uczelni"
  },
  {
    start: "10:30",
    end: "12:00",
    label: "Systemy Sztucznej Inteligencji",
    hall: "E211",
    type: "Wykład",
    iconNumber: 2,
    professor: "Dr hab. inż. A. Miaskowski"
  },
  {
    start: "12:15",
    end: "14:30",
    label: "⭐Systemy Sztucznej Inteligencji",
    bonusContent: {
      description: "Tydzień 6-15",
      start: 6,
      end: 15,
    },
    hall: "E410",
    type: "Labo",
    iconNumber: 1,
    professor: "Dr hab. inż. A. Miaskowski"
  },
  {
    start: "14:45",
    end: "17:00",
    label: "⭐Modelowanie I Symulacje Komputerowe",
    bonusContent: {
      description: "Tydzień 4-13",
      start: 4,
      end: 13,
    },
    hall: "E406",
    type: "Projekt",
    iconNumber: 4,
    professor: "Prof. Dr hab. inż. S. Kozak"
  }
];
const thursday = [
  {
    start: "08:15",
    end: "10:00",
    label: "Programowanie Obiektowe",
    hall: "E311",
    type: "Wykład",
    iconNumber: 2,
    professor: "Dr hab. inż. Z. Omiotek, prof uczelni"
  },
  {
    start: "12:15",
    end: "14:00",
    label: "Analiza Numeryczna",
    bonusContent: {
      description: "Tygodnie nieparzyste",
      oddWeeks: true
    },
    hall: "E207",
    type: "Labo",
    iconNumber: 1,
    professor: "Dr I. Malinowska"
  },
  {
    start: "14:15",
    end: "16:00",
    label: "Elektromaszynowe Układy Wykonawcze",
    hall: "E311",
    type: "Wykład",
    iconNumber: 2,
    professor: "Dr inż. R. Machlarz"
  },
  {
    start: "16:30",
    end: "18:00",
    label: "Cyfrowe Przetwarzanie Sygnałów",
    hall: "PE 15a",
    type: "Wykład",
    iconNumber: 2,
    professor: "Dr hab. inż. S. Cięszczyk, prof uczelni"
  }
];
const friday = [
  {
    start: "08:15",
    end: "10:00",
    label: "⭐Programowanie Wizualne W Środowisku LabView",
    bonusContent: {
      description: "Tygodnie nieparzyste",
      oddWeeks: true
    },
    hall: "E311",
    type: "Wykład",
    iconNumber: 2,
    professor: "Dr inż. S. Styła"
  },
  {
    start: "08:15",
    end: "10:00",
    label: "⭐Modelowanie I Symulacje Komputerowe",
    bonusContent: {
      description: "Tygodnie parzyste",
      oddWeeks: false
    },
    hall: "E311",
    type: "Wykład",
    iconNumber: 2,
    professor: "Dr Ł. Stępień"
  },
  {
    start: "10:15",
    end: "12:00",
    label: "⭐Modelowanie I Symulacje Komputerowe",
    bonusContent: {
      description: "Tygodnie nieparzyste",
      oddWeeks: true
    },
    hall: "PE 15a",
    type: "Wykład",
    iconNumber: 2,
    professor: "Prof. Dr hab. inż. S. Kozak"
  },
  {
    start: "12:15",
    end: "14:00",
    label: "Język Obcy II",
    hall: "M IX, CT 107, CT 302",
    type: "Lekt",
    iconNumber: 3,
    professor: "???"
  }
];
const saturday = [
  {
    start: "8:00",
    end: "21:00",
    label: "⭐",
    hall: "Home",
    type: "Nauka",
    professor: ""
  }
];
const sunday = [
  {
    start: "8:00",
    end: "21:00",
    label: "⭐",
    hall: "Home",
    type: "Nauka",
    professor: ""
  }
];
const colors = [
  "rgb(255, 199, 199)",
  "rgb(255, 232, 192)",
  "rgb(255, 243, 143)",
  "rgb(185, 230, 181)",
  "rgb(183, 228, 255)",
  "rgb(230, 200, 246)",
  "rgb(255, 201, 228)"
];
// const exp = ;

const semesterBlueprint = {
  semesterStart: "2023-02-27",
  semesterEnd: "2023-06-23",
  weeks: [
    {
      start: "2023-02-27",
      offDays: [],
      isOdd: true,
      number: 1
    },
    {
      start: "2023-03-06",
      offDays: [],
      isOdd: false,
      number: 2
    },
    {
      start: "2023-03-13",
      offDays: [],
      isOdd: true,
      number: 3
    },
    {
      start: "2023-03-20",
      offDays: [],
      isOdd: false,
      number: 4
    },
    {
      start: "2023-03-27",
      offDays: [],
      isOdd: true,
      number: 5
    },
    {
      start: "2023-04-03",
      offDays: ["2023-04-05", "2023-04-06", "2023-04-07", "2023-04-08", "2023-04-09"],
      isOdd: false,
      number: 6
    },
    {
      start: "2023-04-10",
      offDays: ["2023-04-10", "2023-04-11"],
      isOdd: false,
      number: 7
    },
    {
      start: "2023-04-17",
      offDays: [],
      isOdd: true,
      number: 8
    },
    {
      start: "2023-04-24",
      offDays: [],
      isOdd: false,
      number: 9
    },
    {
      start: "2023-05-01",
      offDays: ["2023-05-01", "2023-05-02", "2023-05-03"],
      isOdd: true,
      number: 10
    },
    {
      start: "2023-05-08",
      offDays: [],
      isOdd: false,
      number: 11
    },
    {
      start: "2023-05-15",
      offDays: [],
      isOdd: true,
      number: 12
    },
    {
      start: "2023-05-22",
      offDays: ["2023-05-28"],
      isOdd: false,
      number: 13
    },
    {
      start: "2023-05-29",
      offDays: [],
      isOdd: true,
      number: 14
    },
    {
      start: "2023-06-05",
      offDays: ["2023-06-08", "2023-06-09"],
      isOdd: false,
      number: 15
    },
    {
      start: "2023-06-12",
      offDays: [],
      isOdd: true,
      number: 16
    },
    {
      start: "2023-06-19",
      offDays: ["2023-06-24", "2023-06-25"],
      isOdd: false,
      number: 17
    }
  ]
}
export { monday, tuesday, wednesday, thursday, friday, saturday, sunday };
export { colors };
export { semesterBlueprint };
