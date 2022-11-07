
function main(){
    process.stdin.on('data', data => {
        const arr = data.toString().split('').reverse().join('');
        process.stdout.write(arr + '\n');
    });
}

main();
