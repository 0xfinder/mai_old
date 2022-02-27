const requireDir = require('require-dir');

module.exports = class Enemy {

    /* Constructor */
    constructor(noCreate) {
        this.init();

        if (!noCreate) {
            return;
        }
    }

    static get enemies() { return enemies; }
    static get getID() { return new this(true).id; }
    static get getlevelRequired() { return new this(true).levelRequired; }
    static get getName() { return new this(true).name; }
    static get getDesc() { return new this(true).desc; }
};

const enemyDir = requireDir('./enemies');
const enemies = {};
for (const key in enemyDir) {
    const enemy = enemyDir[key];
    enemies[enemy.getID] = enemy;
}