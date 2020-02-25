function getNumberOfCoins(sum) {
    let numberOfCoins = 0;
    numberOfCoins += Math.floor(sum / 25);
    sum %= 25;
    numberOfCoins += Math.floor(sum / 10);
    sum %= 10;
    numberOfCoins += Math.floor(sum / 5);
    sum %= 5;
    numberOfCoins += Math.floor(sum / 1);
    return numberOfCoins;
}

let x = getNumberOfCoins(121);
console.log(x);