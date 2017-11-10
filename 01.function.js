console.log('01 - Fonctions');

var nb1 = 10;
var nb2 = 20;

function additionner(a,b){
    return a+b;
}

resultat1 = additionner(nb1,nb2);
console.log("resultat1 == "+resultat1);

var somme = additionner;

resultat2 = somme(nb1,nb2);