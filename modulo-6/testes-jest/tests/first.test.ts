describe("Olá, estamos testando", () => {
  test("Exercício 0 - Checar se o número é par", () => {
    expect(checkNumberIsEven(112)).toBe(true);
  });

  test("Exercício 1 - Transformar string para maiusculo", () => {
    expect(stringToUpperCase("bananinha")).toBe("BANANINHA");
  });

  test("Exercício 2 - Transformar string em array onde cada elemento é uma letra da string", () => {
    expect(stringToArray("dev")).toEqual(["d", "e", "v"]);
  });

  test("Exercício 3 - Transformar tipo string em tipo number", () => {
    expect(stringToNumber("10")).toBe(10);
  });

  test("Exercício 4 - Retornar length da string", () => {
    expect(stringLength("abcd")).toBe(4);
  });

  test("Exercício 5 - Gerar um número de 1 a 10 ", () => {
    expect(randomNumber()).toBeLessThanOrEqual(10);
  });

  test("Exercício 6 - Checar se existe um usuário em uma lista de usuários", () => {
    const Astrodev = { id: "001", name: "Astrodev", age: 20 };
    expect(users).toContainEqual(Astrodev);
  });

  test("Exercício 7 - Retornar a média dos números arredondados para cima", () => {
    const array = [10, 4, 7, 6];
    expect(averageGrade(array)).toEqual(7);
  });

  test("Exercício 8 - Retornar a idade", () => {
    expect(ageGeneration(2000)).toBe(22);
  });

  test("Exercício 9 - Retornar a data corrigida", () => {
    expect(fixDate('2022/09/26')).toBe('26/09/2022');
  });
});

// Exercício 0
const checkNumberIsEven = (integer: number) => {
  return integer % 2 == 0;
};

// Exercício 1
const stringToUpperCase = (string: string) => {
  return string.toUpperCase();
};

// Exercício 2
const stringToArray = (string: string): string[] => {
  return string.split("");
};

// Exercício 3
const stringToNumber = (number: string): number => {
  return Number(number);
};

// Exercício 4
const stringLength = (string: string): number => {
  return string.length;
};

// Exercício 5
const randomNumber = (): number => {
  return Math.floor(Math.random() * 10 + 1);
};

// Exercício 6
interface User {
  id: string;
  name: string;
  age: number;
}

const users: User[] = [
  {
    id: "001",
    name: "Astrodev",
    age: 20,
  },
  {
    id: "002",
    name: "Ableu",
    age: 25,
  },
];

// Exercício 7
const averageGrade = (arr: number[]) => {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }

  return Math.ceil(soma / arr.length);
};

// Exercício 8
const ageGeneration = (year: number): number => {
  const currentYear = 2022;
  const age = currentYear - year;
  return age;
};

// Exercício 9
const fixDate = (date: string): string => {
    const [year, month, day]: string[] = date.split("/");
    const dateFixed: string = `${day}/${month}/${year}`;

    return dateFixed
}