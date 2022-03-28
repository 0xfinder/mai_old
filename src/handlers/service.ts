import { readdirSync } from "fs";

module.exports = () => {
    const services = readdirSync("./src/services/").filter((file) => {
        file.endsWith(".ts");
    });
};
