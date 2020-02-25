(function(sum) {
    let coinsTypes = [{ value: 25, number: 3 }, { value: 10, number: 10 }, { value: 5, number: 17 }, { value: 1, number: 6 }];
    let numberOfCoins = 0;
    for (let i = 0; i < coinsTypes.length; i++) {
        let val = coinsTypes[i].value;
        let num = coinsTypes[i].number;
        if (Math.floor(sum / val) <= num) {
            numberOfCoins += Math.floor(sum / val);
            sum %= val;
        } else {
            numberOfCoins += num;
            sum = sum - (num * val);
        }

    };
    console.log(numberOfCoins);
}(121));