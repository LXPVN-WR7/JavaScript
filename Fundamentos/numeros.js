const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);

// Verificação para validar se o dado é tipo Inteiro ativando a função Number 
console.log(Number.isInteger(peso1));

// Verificação para validar se o dado é tipo Inteiro ativando a função Number 
console.log(Number.isInteger(peso2));
 
const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

// Tendo controle sobre a saída de dados, definindo o número de casas após a virgula
console.log(media.toFixed(2));

// Convertendo um valor number em tipo String
console.log(media.toString());

// Convertendo um valor number em tipo String porem em valor binário
console.log(media.toString(2));

// Imprimindo o tipo de dado da variável 
console.log(typeof media);