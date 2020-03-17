const nome = 'Rebeca';
// Tipo padrão de concatenação 
const concatenacao = 'Olá ' + nome + '!';
// Utilizando o Template String e aplicando concatenação
const template = `
    Olá
    ${nome}!`;
console.log(template);
// Template String
console.log(`1 + 1 = ${1 + 1}`);
// Definindo uma Arrow Function em uma variável 
const up = texto => texto.toUpperCase();
// Chamando a nossa Arrow Function 
console.log(`Ei... ${up('cuidado')}!`);