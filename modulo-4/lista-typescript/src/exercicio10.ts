function findDv(cpfArray: string[], constant: number): number {
  let sum: number = 0;
  let k: number = 0;
  for (let i = 0; i < cpfArray.length; i++) {
    sum = sum + Number(cpfArray[i]) * (constant - k);
    k++;
  }
  const rest: number = 11 - (sum % 11);

  let dv: number = 0;
  if (rest < 10) {
    dv = rest;
  } else if (rest >= 10) {
    dv = 0;
  }
  return dv;
}

function validateCpf(cpf: string): boolean {

  // Como o mesmo cálculo se repetia, eu criei uma função separada para realizar toda a "matemática".

  // Encontrando o primeiro Dígito Verificador
  const cpfFirstNineNumbers: string[] = cpf.slice(0, 11).replace(/[^a-z0-9]/gi, "").split("");
  const dv1 = findDv(cpfFirstNineNumbers, 10);

  // Encontrando o segundo Dígito Verificador
  const cpfFirstTenNumbers: string[] = [...cpfFirstNineNumbers, dv1.toString()];
  const dv2 = findDv(cpfFirstTenNumbers, 11);

  // Verificando se o CPF é válido
  const firstUserDv: number = Number(cpf.slice(12, 13));
  const secondUserDv: number = Number(cpf.slice(13, 14));

  if (firstUserDv === dv1 && secondUserDv === dv2) {
    return true;
  } else {
    return false;
  }
}

console.log(validateCpf("145.382.206.20"));
