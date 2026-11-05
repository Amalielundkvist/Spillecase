// Nedenstående objektliste udgør løsningens "Grundmængde"
// "products" er global og bruges af scriptui.js og scriptfilt.js
const products = [
    {
        id: 1,
        ledig: true,
        title: "Catan",
        image: "https://spilforsyningen.dk/cdn/shop/files/a968a025-4962-4c15-8d26-2415eab0a5f3.jpg?v=1789707829&width=640",
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
        image: "https://nordiskspil.dk/cdn/shop/files/Azul-spil-forside.jpg?v=1757244939",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiv7w6_ROa6Mb2fUmh-JYgZVvVqwIqevW7gRLrwV-Pw&s=10",
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
        image: "https://www.proshop.dk/Images/1600x1200/2664509_0666dd2e8858.jpg",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s8beTk4b1YisyIFEb43zVEKLxIgqtP1CFO-AL4j2gQ&s",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwB_Q8QDSStuCNvsXwM8PRAKWoAJ50D22-KV6jusP8zQ&s",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenu1m47hsE6Lp9EDTpPtcTMd_xEM8i2KBd83Pr404Sw&s=10",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFxx4SACFQNKH1L2elb7MWbqubfjTiPmtCA5MSWhBMw&s",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNI3Yfnd91YBNVbuk1egEKwbP-Llh-kNGlnc3d_MWDdA&s=10",
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
        image: "https://digitalassets.sallinggroup.com/image/upload/e_trim/b_white,c_pad,e_sharpen:80,f_auto,q_auto,w_464,h_464/e3046161-87b3-4cae-b45c-d9b5a32f4392",
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
        image: "https://www.proshop.dk/Images/1600x1200/3231411_b25e38ff8da7.jpg",
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
        image: "https://www.legekaeden.dk/cdn/shop/files/2607865_ftp.jpg?v=1773261026&width=600",
        category: ["Familie", "Kortspil"],
        antalSpillere: "2-10 spillere",
        tid: "20-30 min",
        sværhedsgrad: "Let",
        description: "UNO Flip er en sjov og overraskende version af det klassiske UNO, hvor spillet kan vende på et øjeblik. Her gælder det om at tænke hurtigt, holde øje med modstanderne og bruge sine specialkort smart.",
    },
];


   
