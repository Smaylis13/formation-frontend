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
console.log("resultat2 == "+resultat2)

var multiplication = function(a,b){
    return a*b;
}
var soustraction = function(a,b){
    return a-b;
}

resultat3 = multiplication(nb1,nb2);
console.log("resultat3 == "+ resultat3)

var afficherOperation = function(nomOperation,operation, nb1, nb2){
    return nomOperation+" [ "  +"nb1 == "+nb1 +" nb2 == "+nb2+" ] "+" == "+operation(nb1,nb2);
}

console.log(afficherOperation("Somme",somme,20,40))
console.log(afficherOperation("Multiplication",multiplication,10,20))
console.log(afficherOperation("Soustraction",soustraction,15,5))
