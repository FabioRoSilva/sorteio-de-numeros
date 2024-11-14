type numFunc = number[] | (() => number[]);

type People = {
  name: string;
  age: number;
  choseNumbers: numFunc;
};

// gerar números aleatórios:
const generateNumbers = (): number[] => {
  const rand = (): number => Math.ceil(Math.random() * 9);
  const arr: number[] = [];

  let i: number = 0;
  while (arr.length < 6) {
    let numRand: number = rand();
    if (arr.indexOf(numRand) === -1) {
      arr.push(numRand);
    }

    i++;
  }

  const ascendingOrder = (num: number[]): number[] => {
    return num.sort((a: number, b: number): number => a - b);
  };

  return ascendingOrder(arr);
};

const fabio: People = {
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

const maria: People = {
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

const bolao: number[] = [1, 2, 3, 4, 5, 6, 7];

// checar se os números bateram:
function checkNumber(firstArr: numFunc, secondArr: numFunc): string {
  const choseNumber = typeof firstArr === "function" ? firstArr() : firstArr;
  const prize = typeof secondArr === "function" ? secondArr() : secondArr;

  if (choseNumber.length < prize.length) {
    return `escolhidos: ${choseNumber} | sorteados: ${prize} não foi dessa vez`;
  }

  for (let i: number = 0; i < prize.length; i++) {
    if (!choseNumber.includes(prize[i])) {
      return `escolhidos: ${choseNumber} | sorteados: ${prize} não foi dessa vez`;
    }
  }
  return `escolhidos: ${choseNumber} | sorteados: ${prize} VENCEDOR!`;
}

const prize: number[] = generateNumbers();

// checação:
console.log(checkNumber(fabio.choseNumbers, prize));
console.log(checkNumber(maria.choseNumbers, prize));
console.log(checkNumber(bolao, prize));

/*
OBS: O objetivo não é ter um código bonito, apenas
praticar o TypeScript.
*/
