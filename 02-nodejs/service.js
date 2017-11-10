var speakers = require("./data/devfest-2015")

module.exports = {
    listerTousLesPresntateurs : function(){
        return speakers.speakers
    },

    
    listerToutesLesSessions : function(){
        return speakers.sessions;
    },
    trouverUneSession : function(idSession){
        return speakers.sessions.filter(function(s){
            return s.id == idSession;
        })
    },
    listerTopPresnetateur : function(){
        return speakers.speakers.filter(function(s){
            return s.topspeaker == true;
        })
    }
};