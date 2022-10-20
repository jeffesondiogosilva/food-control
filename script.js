
var carboidrato = document.getElementById("carboidrato");
var gordura = document.getElementById("gordura");
var proteina = document.getElementById("proteina");
var glicose = document.getElementById("glicose");
var sodio = document.getElementById("sodio");


var contcarbo = 0;
var contgordura = 0;
var contproteina = 0;
var contsodio = 0;



function somarNutri (element){

    var alimentos = [
        {
            id: 0,
            nome: "maca",
            carboidrato: 11.90,
            proteina: 0.45,
            gordura: 0.20,
            sodio: 4.0
    
        },
    
        {
            id: 1,
            nome: "laranja",
            carboidrato: 15.50,
            proteina: 1.30,
            gordura: 0.30,
            sodio: 2.0
        }, 
        
        {
            id: 2,
            nome: "banana",
            carboidrato: 25.80,
            proteina: 1.30,
            gordura: 0.30,
            sodio: 0
        },

        {
            id: 3,
            nome: "leite",
            carboidrato: 4.66,
            proteina: 3.32,
            gordura: 3.35,
            sodio: 41   
        },

        {
            id: 4,
            nome: "pao-frances",
            carboidrato: 58.7,
            proteina: 8.0,
            gordura: 3.1,
            sodio: 647.7   
        },

        {
            id: 5,
            nome: "tapioca",
            carboidrato: 54,
            proteina: 3.2,
            gordura: 0,
            sodio:  0  
        },

        {
            id: 6,
            nome: "ovo",
            carboidrato: 1,
            proteina: 7,
            gordura: 6,
            sodio: 0.19   
        },

        {
            id: 7,
            nome: "arroz",
            carboidrato: 28,
            proteina: 2.5,
            gordura: 0.2,
            sodio: 1
        },

        {
            id: 8,
            nome: "feijao",
            carboidrato: 8.2,
            proteina: 4.8,
            gordura: 1.2,
            sodio: 0.34
        },
        
        {
            id: 9,
            nome: "frango",
            carboidrato: 0,
            proteina: 31.02,
            gordura: 3.57,
            sodio: 74
        },

        {
            id: 10,
            nome: "peixe",
            carboidrato: 0.28,
            proteina: 22.6,
            gordura: 1.18,
            sodio: 347
        },

        {
            id: 12,
            nome: "suco-acucar",
            carboidrato: 10.9,
            proteina: 0.73,
            gordura: 0.21,
            sodio: 1   
        },

        {
            id: 13,
            nome: "suco",
            carboidrato: 8.2,
            proteina: 4.8,
            gordura: 1.2,
            sodio: 0.58
        },

        {
            id: 14,
            nome: "milkshake",
            carboidrato: 15.75,
            proteina: 3.43,
            gordura: 3.84,
            sodio: 83.79   
        },

        {
            id: 15,
            nome: "cafe",
            carboidrato: 4.03,
            proteina: 0.11,
            gordura: 0.01,
            sodio: 2   
        },

        {
            id: 16,
            nome: "cafe-leite",
            carboidrato: 4.04,
            proteina: 0.18,
            gordura: 0.08,
            sodio: 3   
        },

        {
            id: 17,
            nome: "refrigerante",
            carboidrato: 10.50,
            proteina: 0,
            gordura: 0,
            sodio: 5   
        },

        {
            id: 18,
            nome: "refrigerante-zero",
            carboidrato: 0,
            proteina: 0,
            gordura: 0,
            sodio: 23.10   
        }
    ];

    contcarbo += alimentos[element].carboidrato;
    contgordura += alimentos[element].gordura;
    contproteina += alimentos[element].proteina;
    contsodio += alimentos[element].sodio;
    


    carboidrato.innerHTML = contcarbo;
    gordura.innerHTML = contgordura;
    proteina.innerHTML = contproteina;
    sodio.innerHTML = contsodio;


    const res_carboidrato = document.getElementById("res-carboidrato");
    const res_gordura = document.getElementById("res-gordura");
    const res_proteina = document.getElementById("res-proteina");
    const res_sodio = document.getElementById("res-sodio");

res_carboidrato.innerHTML = `Hoje você consumiu: ${contcarbo}g de carboidratos`;
res_gordura.innerHTML = `Hoje você consumiu: ${contgordura}g de de gordura`;
res_proteina.innerHTML = `Hoje você consumiu: ${contproteina}g de proteína`;
res_sodio.innerHTML = `Hoje você consumiu: ${contsodio}mg de sódio`;

    
}

