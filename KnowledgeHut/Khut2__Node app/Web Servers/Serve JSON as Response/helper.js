const fs = require("fs");

function loadCharacters() {
    return new Promise((resolve, reject) => {
        fs.readFile("characters.json", "utf8", (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}
function loadCharacterById(charId) {
    return new Promise((resolve, reject) => {
        fs.readFile("characters.json", "utf8", (err, data) => {
            if (err) {
                reject(err);
            }
            let readCharacters = JSON.parse(data);
            for (let character of readCharacters) {
                if (character.id === charId) {
                    resolve(JSON.stringify(character));
                    break;
                }
            }
        });
    });
}

module.exports = { loadCharacters, loadCharacterById };
