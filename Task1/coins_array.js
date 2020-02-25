function getNumberOfCoins(sum) {
    let coinsTypes = [25, 10, 5, 1];
    let numberOfCoins = 0;
    coinsTypes.forEach(element => {
        numberOfCoins += Math.floor(sum / element);
        sum %= element;
    });

    return numberOfCoins;
}

let x = getNumberOfCoins(121);
console.log(x);