let numberOfCoins = 0;


function countNumber(sum) {
    numberOfCoins += Math.floor(sum / 25);
    sum %= 25;
    numberOfCoins += Math.floor(sum / 10);
    sum %= 10;
    numberOfCoins += Math.floor(sum / 5);
    sum %= 5;
    numberOfCoins += Math.floor(sum / 1);

}

countNumber(100);
console.log(numberOfCoins);