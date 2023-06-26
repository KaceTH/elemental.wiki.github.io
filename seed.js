const fs = require('fs');
const readline = require('readline');

fs.writeFile('data.txt',"", 'utf8', function(error){
    console.log('write end')
});

const fileStream = fs.createReadStream('lists.txt');
const rl = readline.createInterface({
    input : fileStream,
    crlfDelay : Infinity
});

rl.on('line', (line) => {
    if (line.length > 1) {
        fs.appendFile('data.txt', `${line}\n`, function (err) {
            if (err) throw err;
            //console.log('The "data to append" was appended to file!');
        });
    }
});