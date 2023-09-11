const juros = 12.5;
const capital = 1000;
const aplicacao = 5;


let rentabilidade =  (capital / juros) * aplicacao
console.log(rentabilidade)
let montante = rentabilidade + capital
console.log(`Esse valor apicador vai render cerca de ${montante} nesses ${aplicacao} meses aplicados`)