type Person = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clients: Person[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function getClientsWithDebit (clientsArray: Person[]): Person[] {

    const calcTotalBalance: Person[] = clientsArray.map((client) => {
        const totalDebit: number = client.debitos.reduce((curr, prev) => curr + prev, 0)
        client.debitos = []
        client.saldoTotal = client.saldoTotal - totalDebit
        return client
    }).filter((client2) => {
        if(client2.saldoTotal < 0) {
            return client2
        }
    })
    return calcTotalBalance
}

console.table(getClientsWithDebit(clients))