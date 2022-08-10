// Exercício 1:
// function checaTriangulo(a:number, b:number, c:number):string {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

// Exercício 2
// function imprimeTresCoresFavoritas():void {
//     const cor1:string|null = prompt("Insira sua primeira cor favorita")
//     const cor2:string|null = prompt("Insira sua segunda cor favorita")
//     const cor3:string|null = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }

// Exercício 3
// function checaAnoBissexto(ano:number):boolean {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

// Exercício 4
// function comparaDoisNumeros(num1:number, num2:number):number {
//     let maiorNumero;
//     let menorNumero;

//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }

//     const diferenca = maiorNumero - menorNumero;

//     return diferenca
//   }

// Exercício 5
// function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ):string {
//     let idade = anoAtual - anoNascimento
//     let tempoCarteira = anoAtual - anoEmissao

//      if(idade <= 20 ) {
//          return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"

//       }else if(idade >= 20 || idade <= 50) {
//          return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"

//       }else if(idade > 50) {
//          return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"

//        }else {
//            return "error"
//        }
//    }

// Exercício 6
// function operations(a:number, b:number):string {
//     let maiorNumero:number|string = '0'
//     if(a > b) {
//        maiorNumero = a
//     } else if (a < b) {
//         maiorNumero = b
//     } else {
//         maiorNumero = `Os números são iguais.`
//     }
//     return (
//         `
//         A soma desses números é: ${a+b}
//         A subtração desses números é: ${a-b}
//         A multiplicação desses números é: ${a*b}
//         O maior número é: ${maiorNumero}
//         `
//     )
// }

// Exercício 7
// function convertDNAtoRNA(dna: string): string {
//     let rna = ''
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "G") {
//       rna += dna[i].replace("G", "C");
//     } else if (dna[i] === "C") {
//       rna += dna[i].replace("C", "G");
//     } else if (dna[i] === "T") {
//       rna += dna[i].replace("T", "A");
//     } else {
//       rna += dna[i].replace("A", "U");
//     }
//   }
//   return rna;
// }
// console.log(convertDNAtoRNA("ATTGCTGCGCATTAACGACGCGTA"));

// Exercício 8
// function reversedString (string:string):string {
//     return string.split("").reverse().join("");
// }

// console.log(reversedString('abcd'))

// Exercício 9
// function ableToStudyOnLabenu(age:number, highSchool: boolean, hoursAvailable:number, curso: string) {

//   if (curso === "integral") {
//     if (age >= 18 && highSchool === true && hoursAvailable >= 40) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if (curso === "noturno") {
//     if (age >= 18 && highSchool === true && hoursAvailable >= 20) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return "Nome do curso inserido incorretamente, tente novamente.";
//   }
// }

// console.log(ableToStudyOnLabenu(17, true, 40, "integral")); 
// console.log(ableToStudyOnLabenu(20, true, 40, "noturno")); 
// console.log(ableToStudyOnLabenu(20, true, 15, "noturno")); 
// console.log(ableToStudyOnLabenu(20, true, 15, "integrl"));

