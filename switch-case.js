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
  case 'Abril':
  case 'Maio':
  case 'Junho':
    console.log("Outono");
    break;
  case 'Julho':
  case 'Agosto':
  case 'Setembro':
    console.log('Inverno!');
    break;
  case 'Outubro':
  case 'Novembro':
  case 'Dezembro':
    console.log('Primavera"');
    break;
  default: 
    console.log('Mês inválido');
}