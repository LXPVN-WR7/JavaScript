const escola = "Cod3r";

// Imprimindo o valor da variável de acordo com a função (charAt()) que passa somente o indice do valor
console.log(escola.charAt(3));
// Tesntando o indice maior, ele responde como um espaço em branco 
console.log(escola.charAt(5));
// Ele gera a resposta de acordo com a tebela Unicode de acordo com o caracter na posção do indice que você informa
console.log(escola.charCodeAt(3));
// Procurando o numero 3 dentro da variável que agente passa, ele gera o indice de onde se encontra o valor se caso encontrado
console.log(escola.indexOf('3'));
// Imprindo o valor adiante de acordo o indice 
console.log(escola.substring(1));
// Imprindo o valor a partir do 0 e parando antes do 3
console.log(escola.substring(0, 3));
// Concatenando valores com a função .concat()
console.log('Escola '.concat(escola).concat('!'));
// Alterando valores com a função .replace, indicando o indice do caracter e o substituto
console.log(escola.replace(3, 'e'));
// Aqui agente já altera o valor da variável inteira pela letra 'e' com expressões regulares (REGEX)
console.log(escola.replace(/\w/g, 'e'));
// Convertendo uma String em array utilizando o metodo .split()
console.log('Victor,Rafaelly,Vinicius,Gustavo'.split(','));