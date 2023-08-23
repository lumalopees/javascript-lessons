const itensCarrinho = ['Blusão', 'Conjunto de Canetas', 'Tarot', 'Ring Light', 'Livro'];


const addItens = (itensNovos) => {
  for (let index = 0; index < itensNovos.length; index += 1) {
    itensCarrinho.push(itensNovos[index]);
  }
}

const totalItens = () => {
  return (itensCarrinho.length);
}

addItens(['Velas', 'Tinta de Cabelo', 'Copos temáticos']);
const retornoDaFunção = totalItens();
console.log(retornoDaFunção);