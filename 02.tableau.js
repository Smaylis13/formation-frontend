var ville = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

ville.forEach(function(e){
    console.log(e);
})

lettreADansToutesLesVilles = ville.every(function(e){
    return e.includes('a') == true;
})
console.log("lettreADansToutesLesVilles == "+lettreADansToutesLesVilles)

auMoinsUneVilleAvecUnTiret = ville.some(function(v){
    return  v.includes('-') == true;
})

console.log("auMoinsUneVilleAvecUnTiret == " + auMoinsUneVilleAvecUnTiret)

villesSansTiretSansEspace = ville.filter(function(v){return v.includes('-')==false && v.includes(' ')==false })

console.log("villesSansTiretSansEspace == " + villesSansTiretSansEspace)

villesMajusculeSeTerminantParS = ville.filter(function(v){return v.slice(-1) == 's' })
console.log("villesMajusculeSeTerminantParS == " + villesMajusculeSeTerminantParS.map(function(v){return v.toUpperCase()}))
