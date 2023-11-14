const featured: Product[] = [
    {
        id: 1,
        name: "gel de limpeza calmante",
        description:
            "Um gel facial que limpa profundamente sem ressecar, contribui para a prevenção de cravos e espinhas e controla a oleosidade da pele.",
    },
    {
        id: 2,
        name: "gel clareador antiacne",
        description: "Um gel facial que clareia manhas causadas pelo sol, acne e Melasma uniformizando o tom da pele. Também reduz a oleosidade.",
    },
    {
        id: 3,
        name: "sérum calmante",
        description: "Sérum facial de rápida absorção que melhora e previne rugas finas hidrata, da brilho e firmeza à pele.",
        new: true,
    },
    {
        id: 4,
        name: "tônico nutritivo",
        description: "Tônico facial que renova diariamente a pele, esfoliando sem ressecar e deixando a pele luminosa, com viço e hidratada.",
        new: true,
    },
    {
        id: 5,
        name: "esfoliante purificante antioleosidade",
        description: "Esfoliante enzimático que remove as células mortas sem agredir a pele, hidrata, repara e estimula a sua renovação.",
    },
    {
        id: 6,
        name: "gel nutritivo hidratante",
        description:
            "Gel calmante que suaviza a pele, minimiza manchas causadas pelo sol, acne e Melasma, promovendo um tom mais uniforme e reduzindo a oleosidade.",
        new: true,
    },
    {
        id: 7,
        name: "gel calmante",
        description: "Gel que melhora a firmeza da pele, suaviza linhas finas e hidrata profundamente por 48h.",
    },
    {
        id: 8,
        name: "kit tudinho",
        description:
            "Uma rotina completa para pele acneica. São 5 fórmulas para limpar sem ressecar, controlar a oleosidade, acalmar, tratar e prevenir a acne.",
        new: true,
    },
    { id: 9, name: "kit hidratação, antioleosidade e calmante", description: "Géis para uma rotina de cuidados." },
    {
        id: 10,
        name: "gel de limpeza antiacne",
        description: "Gel facial que remove todas as impurezas, contribui para prevenção de cravos e espinhas e controla a oleosidade da pele.",
        new: true,
    },
    {
        id: 11,
        name: "tônico matificante antiacne",
        description: "tônico facial que remove as impurezas da pele, deixa a pele luminosa, com viço e hidrata.",
    },
    {
        id: 12,
        name: "gel de limpeza hidratante",
        description: "Gel de limpeza que limpa e hidrata ao mesmo tempo, sem deixar a pele oleosa.",
        new: true,
    },
]

const kits = [
    {
        id: 13,
        name: "kit limpeza, hidratação e proteção",
        description: "Inclui o limpador facial antiacne, hidratante e protetor solar FPS 60 garantindo uma pele limpa, protegida e hidratada.",
    },
    { id: 14, name: "kit hidratação, antioleosidade e calmante", description: "Géis para uma rotina de cuidados essenciais." },
    {
        id: 15,
        name: "kit tudinho",
        description:
            "Uma rotina completa para pele acneica. São 5 fórmulas para limpar sem ressecar, controlar a oleosidade, acalmar, tratar e prevenir a acne.",
        new: true,
    },
]

const cleaners = [
    {
        id: 16,
        name: "gel de limpeza hidratante",
        description: "Um gel facial que limpa profundamente sem ressecar, ilumina e clareia manhas da pele.",
    },
    { id: 17, name: "gel de limpeza calmante", description: "Gel clareador que uniformiza a pele, removendo manchas causadas pelas acnes." },
    {
        id: 18,
        name: "gel de limpeza clareador antiacne",
        description: "Gel facial ideal para peles acneicas, reduzindo a oleosidade da pele sem deixar ressecada.",
    },
]

const oiled_skin = [
    {
        id: 19,
        name: "gel de limpeza antiacne",
        description: "Gel facial ideal para peles acneicas, reduzindo a oleosidade da pele sem deixar ressecada.",
        new: true,
    },
    {
        id: 20,
        name: "tônico matificante antiacne",
        description: "tônico facial que remove as impurezas da pele, deixa a pele luminosa, com viço e hidrata.",
    },
    {
        id: 21,
        name: "sérum antioleosidade",
        description:
            "Sérum facial de rápida absorção que reduz de linhas e rugas, além da uniformização de textura e tom, luminosidade, aumento da firmeza e redução de poros.",
        new: true,
    },
    {
        id: 22,
        name: "Esfoliante purificante antioleosidade",
        description:
            "Remove células mortas, prevenindo cravos e espinhas, reduz a oleosidade da pele e desobstrui os poros. Enriquecido com ácido salicílico e ácido glicólico.",
        new: true,
    },
    { id: 23, name: "creme facial hidratante antioleosidade", description: "Creme com toque seco que hidrata a pele por 48h, sem deixar oleosa." },
]

export default { featured, cleaners, kits, oiled_skin }
