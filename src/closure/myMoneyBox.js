// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox $${saveCoins}`);
//     function name(params) {
        
//     }
// }

// moneyBox(5);


function moneyBox() {
    let saveCoins = 0;
    let nombre = "Enyell";
    let nada = "hdasjkdh";
    console.log(nombre);
    function countCoins(coins) {
        saveCoins += coins;
        nombre += " hola";
        console.log(nombre);
        console.log(`MoneyBox ${saveCoins}`)
    } 
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);
