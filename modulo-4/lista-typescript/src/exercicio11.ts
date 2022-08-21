type letterValue = {
  letra: string;
  valor: number;
};

const lettersValue: letterValue[] = [
  { letra: "M", valor: 1000 },
  { letra: "CM", valor: 900 },
  { letra: "D", valor: 500 },
  { letra: "CD", valor: 400 },
  { letra: "C", valor: 100 },
  { letra: "XC", valor: 90 },
  { letra: "L", valor: 50 },
  { letra: "XL", valor: 40 },
  { letra: "X", valor: 10 },
  { letra: "IX", valor: 9 },
  { letra: "V", valor: 5 },
  { letra: "IV", valor: 4 },
  { letra: "I", valor: 1 },
];

function integerToRoman(number: number): string {

  const romanLetters: string[] = [];

  let currentNumber = number;

  for (let i = 0; i < lettersValue.length; i++) {
    if (currentNumber >= lettersValue[i].valor) {
      while (currentNumber >= lettersValue[i].valor) {
        currentNumber = currentNumber - lettersValue[i].valor;
        romanLetters.push(lettersValue[i].letra);
      }
    }
  }

  const result = romanLetters.toString().replace(/,/g, "")

  return result
}

console.log('3441 - ', integerToRoman(3441));
console.log('2000 - ', integerToRoman(2000));
console.log('1344 - ', integerToRoman(1344));
