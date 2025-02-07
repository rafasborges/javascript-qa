console.log('Olá, Javascript!')
console.log('Olá, Rafa!')

// Variáveis 
var UserName = "Rafaela Borges"
document.getElementById('user-name').innerHTML = UserName
// var nome = "Mestre Yoda"
// var idade = 100
// var jedi = true
// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)


// Operadores matemáticos
// var n1 = 5
// var n2 = 3
// var total = n1 * n2
// console.log(total)


// Operadores de comparação
// var v1 = 5
// var v2 = '5'
// var resultado = v1 === v2 //levando a tipagem em consideração
// console.log(resultado)
// var resultadoSemTipagem = v1 == v2 //não levando a tipagem em consideração

// Funções

// function soma(n1,n2){
//     return(n1 + n2)
// }
// var resultado = soma(5,3)
// console.log(resultado)


// function boasVindas(UserName){
//     alert( UserName + ", seja bem-vinda!")
// }
// boasVindas(UserName)

// Controle de Fluxos

// Cenário 1: Saque de 500 com saldo de mil
// var saldo = 1000
// function saque(valor){
//     saldo = saldo - valor
// }
// saque(500)
// console.log(saldo)

// // Cenário 2: 
// var saldo = 1000
// function saque(valor){
//     if (valor > saldo){
//         console.log("O valor que você deseja sacar é maior que o saldo existente em conta!")
//     }
//     else{
//         saldo = saldo - valor
//     }
// }
// saque(50)
// console.log(saldo)

// Cenário 3: 
// var saldo = 1000
// function saque(valor){
//     if (valor > saldo){
//         console.log("O valor que você deseja sacar é maior que o saldo existente em conta!")
//     }
//     else if (valor > 700){
//         console.log("O valor que você deseja sacar é maior que o permitido por operação!")
//     }
//     else{
//         saldo = saldo - valor
//     }
// }
// saque(600)
// console.log(saldo)


// arrays
// var gaveteiro = ["Vestidos", "Meias", "Saias", "Roupas de treino"]

// console.log(gaveteiro[3])

// var personagens = ["Lilo", "Boneca", "Princesa", "Principe"]

// personagens.push("gato")
// personagens.pop()
// personagens = personagens.filter(function(p){
//     return p !== "Boneca"
// })

// personagens = personagens.filter(function(p){
//     return p == "Lilo"
// })
// console.log(typeof personagens)

// console.log(personagens)


// controle de repetições

// var personagens = ["Lilo", "Boneca", "Princesa", "Principe"]

// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens){
//     console.log(personagens[i])
// }

// for (var i =0; i<= 10; i++){
//     console.log(i)
// }

// objetos


// var yoda = {}
// yoda.nome = "Mestre Yoda"
// yoda.idade = "100"
// yoda.jedi = true
// console.log(yoda)

// var yoda = {
//     nome : "Mestre Yoda",
//     idade : "100",
//     jedi : true,
//     mostraIdade: function(){
//         console.log(this.idade)
//     }
// }
// yoda.mostra_idade()
// console.log(yoda)

// var yoda = {
//     nome : "Mestre Yoda",
//     idade : "100",
//     jedi : true,
//     mostraIdade: function(){
//         console.log(`A idade do ${this.nome} é de ${this.idade} anos.`)
//     }
// }
// yoda.mostraIdade()

//constantes
// const nome = "Darth Vader"
// console.log(nome)


