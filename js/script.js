
/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.*/

/*MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.*/

let arrayTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief editor",
        img: "angela-caroll-chief-editor.jpg",
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        img: "scott-estrada-developer.jpg",
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphics Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    }
];

/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto*/

for (let membroTeam of arrayTeam){
    stampaMembro(membroTeam);
}

/*MILESTONE 2 + bonus1 + bonus2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/

//creo ciclo for per scrivere in DOM le card dei singoli membri con i valori dell' array
for (let membroTeam of arrayTeam){
    document.getElementById("rowCarte").innerHTML +=
    `<div class="col-12 col-lg-3 col-md-5 card mx-4 my-4 px-0">
    <img id="img" src="img/${membroTeam.img}" alt="">
    <div id="nome" class="card-body fw-bold pt-3 pb-0 fs-5 text-muted">${membroTeam.nome}</div>
    <div id="ruolo"class="card-body fw-lighter pt-0 pb-4 fs-6 text-muted">${membroTeam.ruolo}</div>
    </div>
    `
}


//------------------------------------------------------  FUNZIONI  ------------------------------------------------------

//creo funzione che stampa i valori dell'array
function stampaMembro(arrayTeam){
    console.log(arrayTeam);
}
