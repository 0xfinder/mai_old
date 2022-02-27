const requireDir = require('require-dir');

module.exports = class AreaInterface {

    /* Constructor */
    constructor(noCreate) {
        this.init();

        if (noCreate) {
            return;
        }
    }

    static get areas() { return areas; }
    static get getID() { return new this(true).id; }
    static get getlevelRequired() { return new this(true).levelRequired; }
    static get getName() { return new this(true).name; }
    static get getDesc() { return new this(true).desc; }
    static get getImageURL() { return new this(true).imageURL; }
};

const areaDir = requireDir('./areas');
const areas = {};
for (const key in areaDir) {
    const area = areaDir[key];
    areas[area.getID] = area;
}