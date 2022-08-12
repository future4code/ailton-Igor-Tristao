function getAnagrams(word: string): number {

  let numbersToFactor: number[] = []
  for(let i = 0; i < word.length; i++){
    numbersToFactor.push(word.length-i)
  }
  
  let result: number = 1;
  for(let i = 0; i < numbersToFactor.length; i++) {
    result = result * numbersToFactor[i]
  }
  return result
}

console.log(getAnagrams('mesa'));
