(function(sum) {
    let coinsTypes = [{ value: 25, number: 3 }, { value: 10, number: 1 }, { value: 5, number: 17 }, { value: 1, number: 6 }];
    let numberOfCoins = 0;
    let result = {};
    for (let i = 0; i < coinsTypes.length; i++) {
        let val = coinsTypes[i].value;
        let num = coinsTypes[i].number;
        if (Math.floor(sum / val) <= num) {
            numberOfCoins += Math.floor(sum / val);
            switch (val) {
                case 25:
                    result.numberOf25 = Math.floor(sum / val);
                    break;
                case 10:
                    result.numberOf10 = Math.floor(sum / val);
                    break;
                case 5:
                    result.numberOf5 = Math.floor(sum / val);
                    break;
                case 1:
                    result.numberOf1 = Math.floor(sum / val);
                    break;
            }
            sum %= val;
        } else {
            numberOfCoins += num;
            sum = sum - (num * val);
            result.numberOf = num;
            switch (val) {
                case 25:
                    result.numberOf25 = num;
                    break;
                case 10:
                    result.numberOf10 = num;
                    break;
                case 5:
                    result.numberOf5 = num;
                    break;
                case 1:
                    result.numberOf1 = num;
                    break;
            }
        }

    };
    result.numberOfCoins = numberOfCoins;
    console.log(result);
}(121));