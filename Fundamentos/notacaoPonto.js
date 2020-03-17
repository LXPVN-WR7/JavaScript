console.log(Math.ceil(6.1));

console.log(Math.floor(6.1));

const obj1 = {};
// Criando um atributo dinamicamente 
obj1.nome = 'Bola';
// Diferentes formas de criar um atributo dinamicamente
obj1['idade'] = 20;

console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');

const obj3 = new Obj('Mesa');

console.log(obj2.nome);

console.log(obj3.nome);

obj3.exec();