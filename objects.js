const meuArray = ['Loki', 'Nott', 'Freya']; // uma coleção de valores do MESMO tipo. 

const meuArrayIdades = [12, 80, 20];

// [] = array
// {} = chaves = objeto

const divino1 = {
  nome: 'Loki',
  idadeMental: 12,
  raça: 'gigante',
};

const divino2 = {
  nome: 'Nott',
  idadeMental: 80,
  raça: 'gigante',
};

const divino3 = {
  nome: 'Freya',
  idadeMental: 20,
  raça: 'Vanir'
};

// Acessa uma chave
// Utilizando . =objeto.key

console.log(divino1.idadeMental);

// Utilizando [] = objeto['chave']

console.log(divino1['idadeMental']);

// Utilizando variável para acessar a chave
// [] = objeto[chave]

const chave = 'idadeMental';

console.log(divino1['nome']);

//Alterar

divino1.raça = 'Aesir';
console.log(divino1.raça);