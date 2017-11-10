function Person(nom,prenom,pseudo){
    this.nom = nom;
    this.prenom = prenom
    this.pseudo = pseudo
    this.getNomComplet = function(){
        return this.prenom+" "+this.nom+" "+this.pseudo;
    }
    this.getInitiales = function(){
        return this.prenom.charAt(0) + "."+this.nom.charAt(0);
    }
}

var jules = new Person("LEMAIRE","Jules","Psuw");

var paul = new Person("LEMAIRE","paul","paul44");

console.log(jules.nom)
console.log(jules.prenom)
console.log(jules.pseudo)
console.log(jules.getNomComplet())
    
console.log(paul.nom)
console.log(paul.prenom)
console.log(paul.pseudo)
console.log(paul.getNomComplet())

//Modifier le pseudo de l’objet jules en jules44.

jules.pseudo = "jules44"

console.log(jules.getNomComplet())
Person.prototype.age = "NON RENSEIGNE" // ajout de la prop age
console.log(jules.age)

jules.age = 30
console.log(jules.age)
console.log(jules.getInitiales())

var Robert = {
    nom:"Robert",
    prenom:"LEPREFET",
    pseudo:"robert77",

   getNomComplet:function(){
        return this.nom + " "+this.prenom+" "+this.pseudo;
    }
};
function afficherPersonne(){
    return Robert.getNomComplet();
}
console.log(afficherPersonne());

function Client(nom,prenom,pseudo, num){
    Person(this,nom,prenom,pseudo)
    this.numClient = num;
    this.getInfo = function(){
        console.log(this.numClient + " " + this.nom + " "+this.prenom)
    }
 }

 var steve = new Client("LUCAS","Steve","steve44", "A01")

 steve.getInfo()

 console.log("Numéro Client : "+steve.numClient)
