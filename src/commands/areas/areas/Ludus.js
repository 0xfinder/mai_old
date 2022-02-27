const AreaInterface = require('../AreaInterface.js');

module.exports = class Ludus extends AreaInterface {
    init() {
        this.name = "Ludus";
        this.id = 1;
        this.desc = "Ludus is a planet in OASIS created by Gregarious Simulation Systems.";
        this.imageURL = "https://images-ext-2.discordapp.net/external/F7xqcqspkS2UWHkSyHjzdbkZzQmdEY1rdC5FHJX27As/%3Fcb%3D20180716235143/https/static.wikia.nocookie.net/readyplayerone/images/9/97/807F9314-80C9-404C-9836-B3D2CDC745BC.jpeg/revision/latest/scale-to-width-down/1000";
    }
};