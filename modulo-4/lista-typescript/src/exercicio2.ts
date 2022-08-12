function returnType (value: any) {
    return typeof value
}

console.log(`'abc' = `, returnType('abc'))
console.log('10 = ',returnType(10))
console.log('true = ', returnType(true))