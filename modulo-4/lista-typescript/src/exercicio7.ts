type product = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string,
}

const stock: product[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

function organizeStock (stockArray: product[]): product[] {
    const organizedStock: product[] = stockArray.map((item) => {
        item.valorUnitario = ajustaPreco(item.valorUnitario as number)
        return item
    }).sort(function compare(a: product, b: product) {
        if (a.quantidade < b.quantidade) return -1;
        if (a.quantidade > b.quantidade) return 1;
        return 0;
    })
    return organizedStock
}

console.table(organizeStock(stock))