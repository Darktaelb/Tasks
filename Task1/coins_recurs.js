(function(sum) {
    let coinsTypes = [25, 10, 5, 1];
    let numberOfCoins = 0;
    coinsTypes.forEach(element => {
        numberOfCoins += Math.floor(sum / element);
        sum %= element;
    });

    console.log(numberOfCoins);
}(121))