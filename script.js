const livres = [
    { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
    { titre: "Le Seigneur des anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", annee: 1965, disponible: true },
    { titre: "Fahrenheit 451", auteur: "Ray Bradbury", annee: 1953, disponible: true },
    { titre: "Le messie de Dune", auteur: "Frank Herbert", annee: 1969, disponible: true },
    { titre: "Neuromancien", auteur: "Wiliam Gibson", annee: 1984, disponible: false}
];
/*
//partie 1
console.log(livres[0].titre);
console.log(livres.length)
console.table(livres)
//console.log(livres[0].titre[0]);
livres.forEach(livre => {
    console.log(livre.titre, livre.auteur);
});
*/
//partie 2
livres.forEach(livres => {
    
});

livres.splice(3, 1);
console.table(livres);

const livres_dispo = livres.filter(livre => livre.disponible === true);
console.table(livres_dispo);

for (let i = 0; i < livres.length; i++)
{
    if(livres[i].annee < 1960){
    console.log(livres[i].titre)
    }
}
console.log("test");

function afficherCatalogue(livres){
    const livresTries = livres.sort((a, b) => a.annee - b.annee);

    const catalogue = livresTries.map(livre => `${livre.titre} (${livre.annee}) - ${livre.auteur}`

    );
    catalogue.forEach(ligne => console.log(ligne));
    return catalogue;
}

afficherCatalogue(livres);