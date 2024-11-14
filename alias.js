// gerar números aleatórios:
var generateNumbers = function () {
    var rand = function () { return Math.ceil(Math.random() * 9); };
    var arr = [];
    var i = 0;
    while (arr.length < 6) {
        var numRand = rand();
        if (arr.indexOf(numRand) === -1) {
            arr.push(numRand);
        }
        i++;
    }
    var ascendingOrder = function (num) {
        return num.sort(function (a, b) { return a - b; });
    };
    return ascendingOrder(arr);
};
var fabio = {
    name: "Fabio",
    age: 22,
    choseNumbers: generateNumbers(),
};
/*
  Fábio sempre acha que escolher números diferentes a cada
  sorteio terá mais chances de ganhar, por isso escolheu
  'generateNumbers()' para poupar do trabalho de escolher
  pelo menos 6 números diferentes toda vez.
*/
var maria = {
    name: "Maria",
    age: 22,
    choseNumbers: [1, 2, 3, 4, 5, 6],
};
/*
  Já Maria escolhe sempre os mesmo números, pois acredita que,
   escolhendo os mesmo números todo sorteio, por ela esta
   sempre com os mesmos números em mãos, uma hora, esses
   números serão sorteados.
*/
var bolao = [1, 2, 3, 4, 5, 6, 7];
// checar se os números bateram:
function checkNumber(firstArr, secondArr) {
    var choseNumber = typeof firstArr === "function" ? firstArr() : firstArr;
    var prize = typeof secondArr === "function" ? secondArr() : secondArr;
    if (choseNumber.length < prize.length) {
        return "escolhidos: ".concat(choseNumber, " | sorteados: ").concat(prize, " n\u00E3o foi dessa vez");
    }
    for (var i = 0; i < prize.length; i++) {
        if (!choseNumber.includes(prize[i])) {
            return "escolhidos: ".concat(choseNumber, " | sorteados: ").concat(prize, " n\u00E3o foi dessa vez");
        }
    }
    return "escolhidos: ".concat(choseNumber, " | sorteados: ").concat(prize, " VENCEDOR!");
}
var prize = generateNumbers();
// checação:
console.log(checkNumber(fabio.choseNumbers, prize));
console.log(checkNumber(maria.choseNumbers, prize));
console.log(checkNumber(bolao, prize));
/*
OBS: O objetivo não é ter um código bonito, apenas
praticar o TypeScript.

TO BE CONTINUE...
 */
