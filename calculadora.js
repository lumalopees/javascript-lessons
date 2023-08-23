const somar = (valor1, valor2) => {
  if (typeof valor1 === 'number' && typeof valor2 === 'number') {
  return valor1 + valor2;
  } else {
    return 'Informe um valor válido'
  }
}

const subtrair = () => {
  return valor1 - valor2;
};

console.log(somar(2, '5'));