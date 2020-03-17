// Declarando um array
const valores = [7.7, 8.9, 6.3, 9.2];
// Imprimindo valores de um array de acordo com o indice
console.log(valores[0], valores[3]);
// Imprimindo um valor não definido (undefined)
console.log(valores[4]);
// Adicionando um valor a posição [4] do array
valores [4] = 10;
// Imprimindo o array
console.log(valores);
// Imprimindo o tamanho do array
console.log(valores.length);
// Adicionando um valor ao array com a função .push()
valores.push({id: 3}, false, null, 'teste');
// Imprimindo o array
console.log(valores);  
// Removendo um valor do array com a função .pop()
console.log(valores.pop());
// Removendo um valor do array com o delete
delete valores[0];
// Imprimindo o array
console.log(valores);
// Imprimindo o tipo do array (object)
console.log(typeof valores);