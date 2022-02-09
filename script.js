let order = [];
let clickedOrder = [];
let score = 0;

/*
0 - verde
1 - vermelho
2 - amarelo 
3 - azul
*/

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//criar ordem aleatoria de cores
let shuffleOrder = () => { 
    let  colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order){
        let elementColor = createColorElement(order[i]);//indice do array
        lightColor(elementColor, Number(i) +1);

    }
}

//arrow function 
//acende a proxima cor
let lightColor  = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250); // setTimeout = executar o codigo no tempo q foi descrito
    setTimeout(()=> {
        element.classList.remove('selected');
    });
}

//checa s eos botoes clicados sao os mesmos da 
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break 
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuacao: ${score}\nVoce acertou! iniciando proximo nivel!`);
        nextLevel();
    }
}

// funcao para o click do usuario

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
   

}
// fimcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) 
    { 
        return green;
    }
    else if (color == 1)
    {
        return red;
    }
    else if (color == 2)
    {
        return yellow;
    }
    else if (color == 3)
    {
        return blue;
    }
}
// funcao proxio nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over

let gameOver = () => {
    alert(`pontuacao ${score}!\n voce perdeu o jogo!\nClique em Ok para iniciar um novo jogo.`);
    order =[];
    clickedOrder = [];

    playGame();

}
// iniciar jogo
let playGame = () => {
    alert('Bem vindo ao Genesis! Iniciando novo jogo!');
    score = 0;

    nextLevel(); 
}

/*
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));
*/

//evento de cick para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio
playGame();