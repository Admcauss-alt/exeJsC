var valor
var valor1
var oper
var escolha
var metros 
var distancia
var velocidade 
var salario
var aumento
var preço 
var desconto 
var dias
var horas
var minutos
var segundos 
var Celsius
var Fahrenheit
var km 
var p1
var p2
var ep1
var ep2
var ovos        
var valorHora
var Horames
var cobertura 
var listroslata
var metrosPintar
var resnumero
const color = require('colors');     
const readlineSync = require('readline-sync');

// definição das cores 
color.setTheme({
  silly: 'rainbow',
  yellow: 'yellow',
  success: ['brightGreen', 'bold'],
  help: ['brightCyan', 'bold'],
  warn: ['brightYellow', 'bold'],
  info: ['brightBlue', 'bold'],
  error: ['brightRed', 'bold']
});

console.clear();
console.log("●❯────────────────────────────❮●\n1 - Calculadora\n2- Metros para milimetros\n3- tempo para percorrer uma distancia\n4- Aumento de salário\n5- Preço com desconto\n6- Dias para segundos\n7- Celsius para Fahrenheit\n8- Fahrenheit para celsius\n9- Preço do aluguel do carro\n10- Dias de vida perdidos por fumar\n11- 2 elevado a 10\n12- Média final, aprovado ou reprovado\n13- Salário líquido\n14- Dúzia de ovos\n15- Latas de tinta\n16- Decompor número\n0- Sair".help)
escolha = readlineSync.question(`Olá,\nQual exercício você quer executar?\n`.warn)
if (escolha == 1) { 
oper = readlineSync.question("Qual operacao deseja efetuar (+) (-) (*) (/)? : \n");
valor = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
valor1 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));

function doOperation(operator, value1, value2) {
    if (operator == "+") {
        return value1 + value2;
    } else if
        (operator == "-") {
        return value1 - value2;
    } else if
        (operator == "*") {
        return value1 * value2;
    } else if
        (operator == "/") {
        return value1 / value2;
    } else {
        throw new Error('Operação inválida');
    }
}
console.log('O resultado é', doOperation(oper, valor, valor1))} 

if (escolha == 2){ 
metros = readlineSync.question("Quantos metros você quer transformar em milímetros?") 
let resultadoM = metros * 1000
console.log (`em milímetros são: ${resultadoM}`)} 

if (escolha == 3){ 
velocidade = readlineSync.question("em qual velocidade você vai percorrer?") 
distancia = readlineSync.question("Qual a distância que você vai percorrer?") 
let resultadoV = distancia / velocidade
console.log (`O resultado é: ${resultadoV}`)} 

if (escolha == 4){ 
salario = readlineSync.question("Qual seu salário atual?") 
aumento = readlineSync.question("Quantos % você quer receber de aumento?") 
let resultadoS = salario * (1 + aumento / 100).toFixed(2)
console.log (`O novo salário é de ${resultadoS}`)} 

if (escolha == 5) {
preço = readlineSync.question("Qual o preço?") 
desconto = readlineSync.question("Quantos % de desconto?") 
let resultadoP = preço * (1 - desconto /100).toFixed(2)
console.log(`O preço com desconto é de ${resultadoP}`) } 

if (escolha == 6) {
dias = readlineSync.question("Quantos dias você quer transformar em segundos?") 
horas = readlineSync.question("quantas horas você quer transformar em segundos?") 
minutos = readlineSync.question("Quantos minutos você quer transformar em segundos?") 
segundos = readlineSync.question("É quantos segundos?") 
let resultadoD = segundos + minutos * 60 + horas * 60 * 60 + dias * 24 * 60 * 60
console.log(`O resultado é ${resultadoD}`) } 

if (escolha == 7) {
Celsius = readlineSync.question("Quantos graus Celsius você quer transformar em Fahrenheit?") 
let resultadoC = Celsius * 9 / 5 + 32
console.log(`Em Fahrenheit é: ${resultadoC}`) } 

if (escolha == 8) {
Fahrenheit = readlineSync.question("Quantos graus Fahrenheit você quer transformar em celsius?") 
let resultadoF = (((Fahrenheit - 32) * 5) / 9).toFixed(2)
console.log(`Em Celsius é: ${resultadoF}`) } 

if (escolha == 9) {
dias = readlineSync.question("Quantos dias você ficou com o carro?") 
km = readlineSync.question("Quantos km você rodou?") 
let resultadoK = dias * 60 + km * 0.15
console.log(`Você vai ter que pagar ${resultadoK}`) } 

if (escolha == 10) {
console.log("esse eu fiz naokkjj") } 

if (escolha == 11) {
let resultadoE = (2 ** 10).toString().length 
console.log(`O resultado é ${resultadoE}`) 
} 

if (escolha == 12) {
p1 = readlineSync.question("Qual sua primeira nota?") 
p2 = readlineSync.question("Qual sua segunda nota?") 
ep1 = readlineSync.question("Qual sua terceira nota?") 
ep2 = readlineSync.question("Qual sua quarta nota?") 
const parcial1 = p1 * 0.7 + ep1 * 0.3
const parcial2 = p2 * 0.7 + ep2 * 0.3
const media = (parcial1 + parcial2) / 2
console.log(`${media}`) 
} 

if (escolha == 13) {
valorHora = readlineSync.question("Quanto vale sua hora?") 
Horames = readlineSync.question("Quantas horas você trabalha por mês?") 
const salarioBruto = valorHora * Horames
const descontoINSS = salarioBruto * 0.08
const descontoIR = salarioBruto * 0.11
const descontoSindicato = salarioBruto * 0.05
const descontos = descontoINSS + descontoIR + descontoSindicato 
const salarioLiquido = salarioBruto - descontos
console.log(`Seu salário bruto é de é ${salarioBruto}, mas o líquido é de ${salarioLiquido}`)
} 

if (escolha == 14) {
ovos = readlineSync.question("Quantos ovos você tem?") 
let resultadoO = ovos / 12
console.log(`Você tem ${resultadoO} dúvidas`)
} 

if (escolha == 15) {
cobertura = readlineSync.question("Quantos metros um litro de tinta consegue pintar?") 
litroslata = readlineSync.question("Quantos litros vem por lata?") 
metrosPintar = readlineSync.question("Quantos metros você quer pintar?") 
const quantidadeLitros = metrosPintar / cobertura
const quantidadeLatas = quantidadeLitros / litroslata
let resultadoL = Math.ceil(quantidadeLatas)
console.log(`vai precisar de ${resultadoL} latas de tinta`) 
} 

if (escolha == 16) {
resnumero = readlineSync.question("Qual é o número que você quer decompor?") 
let resto = resnumero
const centenas = Math.floor(resto / 100)
resto -= centenas * 100
const dezenas = Math.floor(resto / 10)
resto -= dezenas * 10
let resultadoAA = [centenas, dezenas, resto]
console.log(`${resultadoAA}`) 
} 

if (escolha == 0) {
process.exit(console.log('Tudo bem! saindo...'.error))
}
