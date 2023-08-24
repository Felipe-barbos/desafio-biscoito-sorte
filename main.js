const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const luckClick = document.getElementById("luck");

const buttonReset = screen2.querySelector("button");

const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "Todos os dias organiza os seu cabelos, por quê não faz o mesmo com o coração?",
  "A juventude não é uma época da vida, é um estado de espírito",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento.",



];


let randomNumber = Math.round(Math.random() * 9);


function toggleScreen() {
  screen2.classList.toggle("hide");
  screen1.classList.toggle("hide");
}



function handleLuckClick(event) {

  toggleScreen();

  screen2.querySelector("p")
    .innerText = `${phrases[randomNumber]}`;

  randomNumber = Math.round(Math.random() * 9);
}


//Event 
luckClick.addEventListener("click", handleLuckClick);
buttonReset.addEventListener("click", toggleScreen);
