let andar = 0;

const maximoAndares = 3;

const subirUmAndar = () => {
  if (andar < maximoAndares) {
    andar += 1;
  }
}

const descerUmAndar = () => {
  if (andar > 0) {
  andar -= 1;
  }
}

subirUmAndar();
subirUmAndar();
subirUmAndar();
descerUmAndar();
descerUmAndar();
descerUmAndar();


console.log(andar);