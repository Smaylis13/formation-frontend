"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(_sejours) {
        this._sejours = _sejours;
    }
    SejourService.prototype.findSejourByName = function (name) {
        var tmpSejours;
        return this._sejours.filter(function (s) { return s.nom == name; });
    };
    return SejourService;
}());
var sejours = new Array();
sejours.push(new Sejour("Nantes", 12));
sejours.push(new Sejour("Paris", 13));
sejours.push(new Sejour("Toulon", 20));
var sejoursService = new SejourService(sejours);
console.log(sejoursService.findSejourByName(process.argv[2]));
