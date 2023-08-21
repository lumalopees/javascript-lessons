const jogoMegaSena36 = [7, 8, 13, 20, 33, 60];

for (let index = 0; index < jogoMegaSena36.length; index += 1) {
  if ((jogoMegaSena36[index]) === 22) {
    console.log('Jogamos o número 22');
  } else {
    console.log('Não jogamos o número 22');
  }
}

const superHeroisQueEuGosto = ['Cap America', 'Homem Sereia', 'Batman', 'Miranha', 'Deadpool', 'Demolidor', 'Dr. Manhattan']
const superHeroisEspeciais = [];

for (let index = 0; index < superHeroisQueEuGosto.length; index +=1 ) {
  if (superHeroisQueEuGosto[index] === 'Batman' || superHeroisQueEuGosto[index] === 'Miranha' || superHeroisQueEuGosto[index] === 'Demolidor') {
    superHeroisEspeciais.push(superHeroisQueEuGosto[index])
  }
}

console.log(superHeroisEspeciais);