import csv  from 'csvtojson';
import fs from 'fs';

const csvFilePath = './csv/nodejs-hw1-ex1.csv';

function main() {
    csv({ delimiter: ';' }).
        preFileLine((fileLine, idx) => (idx === 0) ? fileLine.toLowerCase() : fileLine)
        .fromFile(csvFilePath, {})
        .then((jsonObj) => {
            const file = fs.createWriteStream('./csvToTextEs6.txt', {
                flags: 'a',
            })
            jsonObj.forEach(book => {
                file.write(JSON.stringify(book) + '\n');
            });
            file.close();
        });
}

main();
