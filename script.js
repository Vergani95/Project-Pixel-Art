
const colors = document.getElementsByClassName('color');

const cor0 = document.querySelector('#color0');
cor0.style.backgroundColor = 'black';
const cor1 = document.querySelector('#color1');
cor1.style.backgroundColor = 'royalblue';
const cor2 = document.querySelector('#color2');
cor2.style.backgroundColor = 'blueviolet';
const cor3 = document.querySelector('#color3');
cor3.style.backgroundColor = 'red';


const table = document.querySelector("#pixel-board"); // Para o desenvolvimento deste codigo foi utilizado a estrutura/logica basica do exemplo visto na aula 5.4 onde se criava uma piramede de forma dinâmica
  for (let indexL = 0; indexL < 5; indexL += 1) { //para alterar o tamanho da tabela mudar a variavel
    const line = document.createElement('tr');
    table.appendChild(line);
  for (let indexC = 0; indexC < 5; indexC += 1) {
    const columm = document.createElement ('td')
    columm.className = "pixel";
    line.appendChild(columm);
  }

  }
