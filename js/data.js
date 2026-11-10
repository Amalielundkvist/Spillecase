// Nedenstående objektliste udgør løsningens "Grundmængde"
// "products" er global og bruges af scriptui.js og scriptfilt.js
const products = [
    {
        id: 1,
        ledig: true,
        title: "Catan",
        image: "Images/Catan.png",
        category: ["Strategi", "Handel"],
        antalSpillere: "3-10 spillere",
        tid: "30-45 min",
        sværhedsgrad: "Let",
        description: "Byg bosættelser, handl ressourcer og kæmp om øen sammen.",
        
    },

    {
        id: 2,
        ledig: true,
        title: "Azul",
        image: "Images/Azul.png",
        category: ["Strategi", "Familie"],
        antalSpillere: "2-4 spillere",
        tid: "30-45 min",
        sværhedsgrad: "Let",
        description: "Placér farvede fliser og dekorér paladsvæggen. Smukt, hurtigt og let at lære.",
        
    },

     {
        id: 3,
        ledig: true,
        title: "Dixit",
        image: "Images/Dixit.png",
        category: ["Familie"],
        antalSpillere: "3-6 spillere",
        tid: "30-45 min",
        sværhedsgrad: "Let",
        description: "Fortæl historier med smukke illustrationer og lad dine venner gætte, hvilken kort du har valgt.",
        
    },

    {
        id: 4,
        ledig: true,
        title: "Ticket to ride",
        image: "Images/Ticket To Ride.png",
        category: ["Familie", "Rejse"],
        antalSpillere: "2-5 spillere",
        tid: "45-60 min",
        sværhedsgrad: "Let",
        description: "Byg togruter på tværs af kortet – og blokér de andres planer",
        
    },

    {
        id: 5,
        ledig: true,
        title: "Pandemic",
        image: "Images/Pandemic.png",
        category: ["Familie"],
        antalSpillere: "2-4 spillere",
        tid: "45-60 min",
        sværhedsgrad: "middel",
        description: "Samarbejd om at redde verden fra dødelige sygdomme, før det er for sent.",
        
    },

     {
        id: 6,
          ledig: true,
        title: "Partners",
        image: "Images/Partners.png",
        category: ["Strategi","Brætspil", "Familie"],
        antalSpillere: "2-6 spillere",
        tid: "60-90 min",
        sværhedsgrad: "Let",
        description: "Partners er et sjovt alternativ til Ludo, hvor man sammen med en makker skal få brikkerne hele vejen hjem, men i stedet for at rulle terninger, bruger man kort til at flytte brikkerne med.",
        
    },

     {
        id: 7,
        ledig: true,
        title: "Tegn og Gæt",
        image: "Images/tegn og gæt.png",
        category: ["Familie", "Selskab"],
        antalSpillere: "2-12 spillere",
        tid: "30-45 min",
        sværhedsgrad: "Let",
        description: "Tegn og Gæt er et sjovt selskabsspil, hvor man skal tegne og gætte ord på tid. Spillet er perfekt til en aften med venner eller familie.",
        
    },

     {
        id: 8,
          ledig: true,
        title: "Det dårlige selskab",
        image: "Images/Det Daarlige Selskab.png",
        category: ["Familie", "Selskab"],
        antalSpillere: "2-12 spillere",
        tid: "30-45 min",
        sværhedsgrad: "Let",
        description: "Det dårlige selskab er et sjovt og underholdende selskabsspil, hvor man skal gætte ord og sætninger på tid. Spillet er perfekt til en aften med venner eller familie.",
        
    },

    {
        id: 9,
        ledig: true,
        title: "Sequence",
        image: "Images/Sequence.png",
        category: ["Familie", "Strategi"],
        antalSpillere: "2-12 spillere",
        tid: "10-30 min",
        sværhedsgrad: "Let",
        description: "Sequence er et sjovt og underholdende selskabsspil, hvor man skal placere brikker på et spillebræt for at danne rækker af fem. Spillet er perfekt til en aften med venner eller familie.",
        
    },

    {
        id: 10,
        ledig: true,
        title: "Phase 10",
        image: "Images/Phase 10.png",
        category: ["Familie", "Kortspil"],
        antalSpillere: "2-6 spillere",
        tid: "30-60 min",
        sværhedsgrad: "Let",
        description: "Phase 10 er et sjovt og udfordrende kortspil for 2-6 spillere, der minder om Rummy, hvor målet er at blive den første til at gennemføre 10 forskellige faser."
    },


    {
        id: 11,
        ledig: true,
        title: "Skyjo",
        image: "Images/Skyjo.png",
        category: ["Familie", "Kortspil"],
        antalSpillere: "2-8 spillere",
        tid: "15-45 min",
        sværhedsgrad: "Let",
        description: "Hver spiller styrer et 3x4-område med skjulte og åbne kort, trækker eller tager fra afkastbunken for at bytte kort, afsløre deres gitter og holde deres samlede score så lav som muligt."
    },

    {
        id: 12,
        ledig: true,
        title: "Uno flip",
        image: "Images/Uno flip.png",
        category: ["Familie", "Kortspil"],
        antalSpillere: "2-10 spillere",
        tid: "20-30 min",
        sværhedsgrad: "Let",
        description: "UNO Flip er en sjov og overraskende version af det klassiske UNO, hvor spillet kan vende på et øjeblik. Her gælder det om at tænke hurtigt, holde øje med modstanderne og bruge sine specialkort smart.",
    },
];


   
