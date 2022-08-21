function hasDuplicates(array: string[]): boolean {
  return new Set(array).size !== array.length;
}

function getAnagrams(word: string): number | string {
  if (hasDuplicates(word.split(""))) {
    return `Sua palavra possui letra repetida`;
  }

  let numbersToFactor: number[] = [];
  for (let i = 0; i < word.length; i++) {
    numbersToFactor.push(word.length - i);
  }

  let result: number = 1;
  for (let i = 0; i < numbersToFactor.length; i++) {
    result = result * numbersToFactor[i];
  }
  return result;
}

console.log('mesa - ', getAnagrams("mesa"));
console.log('mesadd - ', getAnagrams("mesadd"));
