// A partir do procress.argv[2] nós acessamos os argumentos.

var red, green, blue, reset;
red = "\u001b[31m";
green = "\033[0;32m"
black = "\033[0;30m"
sublinhado = "\033[4;30m"
blue = "\u001b[34m";
reset = "\u001b[0m";

const name = process.argv[2];
const age = Number(process.argv[3]);
const futureAge = age + 7;

if (process.argv[4]) {
  console.log(red + "Inserido parametros a mais." + reset);
} else if (name && age) {
  console.log(
    green + `${name}! Você tem ${age} anos. Em sete anos você terá ${futureAge}` + reset
  );
} else {
  console.log(red + "Inserido parametros insuficientes." + reset);
}
