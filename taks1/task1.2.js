const csv = require('csvtojson')
const fs = require('fs')
const csvFilePath = './csv/nodejs-hw1-ex1.csv';

async function main() {
    const jsonObj = await csv({ delimiter: ';' }).
        preFileLine((fileLine, idx) => (idx === 0) ? fileLine.toLowerCase() : fileLine)
        .fromFile(csvFilePath, {});

    const file = fs.createWriteStream('./csvToText.txt', {
        flags: 'a',
    })
    jsonObj.forEach(book => {
        file.write(JSON.stringify(book) + '\n');
    });
    file.close();

}

main();
