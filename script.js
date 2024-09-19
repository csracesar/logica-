alert ("Iremos fazer calculos com 2 números")
let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo


alert("A soma dos dois números: " + sum)
alert("A subtração dos dois números: " + sub)
alert("A multiplicação dos dois números: " + multi)
alert("A divisão dos dois números: " + div)
alert("O Resto da divisão dos dois números: " + restDiv)

if(sum%2 == 0)  {
    alert("A soma dos dois números é par: " + sum)}
else {
    alert("A soma dos dois números é impar: " + sum)
}    

if(numberOne == numberTwo) {
    alert("Os dois numeros digitados são iguais")
}
else {
    alert("Os dois números digitados são diferentes")
}