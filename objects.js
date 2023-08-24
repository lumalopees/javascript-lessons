const meuArray = ['Loki', 'Nott', 'Freya']; // uma coleção de valores do MESMO tipo. 

const meuArrayIdades = [12, 80, 20];

// [] = array
// {} = chaves = objeto

const divino1 = {
  nome: 'Loki',
  idadeMental: 12,
  raça: 'gigante',
};
// Acessa uma chave //

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

// Adicionar novas Chaves-Valor

divino1.hobbies = ['F*der com os outros', 'Passeios de cavalo', 'Visitas ao mercado negro'];
divino1.hobbies.push('Saltar fogueira');
console.log(divino1.hobbies);