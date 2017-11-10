readline = require('readline');
service = require('./service');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
console.log("*** Application Conférence ***")
console.log("1. Liste de tous les présentateurs ")
console.log("2. Top présentateurs ")
console.log("3. Liste des sessions ")
console.log("4. Détail d'une session ")

rl.question('Que voulez vous faire ? ', (answer) => {
    switch(answer) {
        case '1':
            listPre = service.listerTousLesPresntateurs()
            for (var key in listPre ) {
                console.log(listPre[key].lastname + " " +listPre[key].firstname)
            }
            rl.close()
        break;
        case '2':
            service.listerToutesLesSessions().forEach(function(element) {
                console.log(element.title)
            }, this);
            rl.close()
        break;
        case '3':
        service.listerToutesLesSessions().forEach(function(element) {
            console.log(element.title)
        }, this);
        rl.close()
            
            break;
        case '4':
        rl.question('Veuillez saisir un code ? ', (answer) => {
            console.log(service.trouverUneSession(answer))
            rl.close()
        })
            rl.close()
        break;
        default:
        console.log("C'est gentil d'être passé")
            rl.close()
        break;
        
        }
 

});
