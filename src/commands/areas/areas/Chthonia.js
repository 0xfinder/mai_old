const AreaInterface = require('../AreaInterface.js');

module.exports = class Chthonia extends AreaInterface {
    init() {
        this.name = "Chthonia";
        this.id = 2;
        this.desc = "Chthonia is a planet in the OASIS coded by James Halliday himself.";
        this.imageURL = "https://c.tenor.com/3wqv5CpCPbQAAAAC/bisque-doll-bisque.gif";
    }
};