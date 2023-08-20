const usuarioValidado = true;

if (usuarioValidado) {
  console.log('Usuário Autenticado');
} else {
  console.log('Usuário Não Autenticado');
}

// Agora cm Switch Case:

switch (usuarioValidado) {
  case true:
    console.log('Usuário Autenticado');
    break;
  case false:
    console.log('Usuário Não Autenticado');
    break;
}

const mesDoAno = 'Maio';

switch (mesDoAno) {
  case 'Janeiro':
  case 'Fevereiro':
  case 'Março':
    console.log('Verão');
    break;
  default: 
    console.log('Mês inválido');
}