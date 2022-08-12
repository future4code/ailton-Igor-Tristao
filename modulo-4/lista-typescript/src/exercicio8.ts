const currentDate: number = new Date().getTime();

function idCardNeedsRenewal (birthDate: string, issuanceIdCard: string): boolean {
  // Descobrindo a idade
  const dateOfBirth: number = new Date(birthDate).getTime();
  const idade: number = Math.floor((currentDate - dateOfBirth) / 31536000000);  //Transformando de milisegundos para ano

  // Descobrindo quanto tempo a pessoa está sem renovar a carteira
  const dateOfIssuance: number = new Date(issuanceIdCard).getTime();
  const timeWithoutRenewal: number = Math.floor((currentDate - dateOfIssuance) / 31536000000); //Transformando de milisegundos para ano

  if (idade <= 20 && timeWithoutRenewal >= 5) {
    return true;
  } else if (idade > 20 && idade <= 50 && timeWithoutRenewal >= 10) {
    return true;
  } else if (idade > 50 && timeWithoutRenewal >= 15) {
    return true;
  } else {
    return false;
  }
}

console.log(idCardNeedsRenewal("1995/11/30", "2010/10/20"));
