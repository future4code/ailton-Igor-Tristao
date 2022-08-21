function stringNameAndBirthDate (name: string, date: string): string {
    return `Olá me chamo ${name}, nasci no dia ${date.slice(0,2)} do mês de ${date.slice(3, 5)} do ano de ${date.slice(6, 10)}`
}

console.log(stringNameAndBirthDate('Igor', '30/11/1995'))