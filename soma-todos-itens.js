// Função que soma todos os valores de um array

const arrayValores = [99, 150, 299, 300]; // x

const somaTotal = () => {
  let soma = 0;

  for (let index = 0; index < arrayValores.length; index += 1) {
    soma = soma + arrayValores[index];
  } 

  return soma;

}

console.log(somaTotal());