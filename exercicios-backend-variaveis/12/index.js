let taxa;
let emprestimo = 60_000
juros = 90_000 - emprestimo;
taxa = ((juros / emprestimo) /24 ) * 100
console.log(`O o total de juros mensal foi de ${taxa}% ao mês`)