class Sejour{
    constructor(private _nom : string, private _prix:number){}

    public get nom():string{
        return this._nom;
    }

    public get prix():number{
        return this._prix;
    }
}

class SejourService{
    constructor(private _sejours:Sejour[]){}

    public findSejourByName(name:string):Sejour[]{
        let tmpSejours;
        return this._sejours.filter(s => s.nom == name);
    }
}
let sejours = new Array()
sejours.push(new Sejour("Nantes",12))
sejours.push(new Sejour("Paris",13))
sejours.push(new Sejour("Toulon",20))
let sejoursService = new SejourService(sejours);
console.log(sejoursService.findSejourByName(process.argv[2]))