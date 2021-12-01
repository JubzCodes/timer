
const args = process.argv.slice(2);
let lowestToHighest = args.sort((a, b) => a - b);

function getPositives(ar){
    const posArr = ar.filter(num => num > -1);
    return posArr;
}

let newArr = getPositives(lowestToHighest);

for (let i = 0; i < newArr.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, 1000 * newArr[i])
}
