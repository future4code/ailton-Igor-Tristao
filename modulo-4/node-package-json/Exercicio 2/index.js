const operation = process.argv[2];
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);

switch(operation) {
    case "add":
        console.log('Resposta: ', firstNumber + secondNumber)
        break;
    case "sub":
        console.log('Resposta: ', firstNumber - secondNumber)
        break;
    case "mult":
        console.log('Resposta: ', firstNumber * secondNumber)
        break;
    case "div":
        console.log('Resposta: ', firstNumber / secondNumber)
        break;
    default:
        return 'Parametros errados.'
    }