let escolhaprato;
let escolhabebida;
let escolhasobremesa;
let total;
let prato;
let precoprato;
let precobebida;
let precosobremesa;

// ------PRATO PRINCIPAL-------------

function escolherPratoSalada() {
    document.getElementById("salada").style.borderColor = "green";
    document.getElementById("feijao").style.borderColor = "white";
    document.getElementById("arroz").style.borderColor = "white";
    prato = "Frango Yin Yang c/ salada";
    precoprato = 14.90;
    escolhaprato = 1;
    botaoverde();
}

function escolherPratoFeijao() {
    document.getElementById("salada").style.borderColor = "white";
    document.getElementById("feijao").style.borderColor = "green";
    document.getElementById("arroz").style.borderColor = "white";
    prato = "Frango Yin Yang c/ feijão";
    precoprato = 13.90;
    escolhaprato = 1;
    botaoverde();
}

function escolherPratoArroz() {
    document.getElementById("salada").style.borderColor = "white";
    document.getElementById("feijao").style.borderColor = "white";
    document.getElementById("arroz").style.borderColor = "green";
    prato = "Frango Yin Yang c/ arroz";
    precoprato = 12.90;
    escolhaprato = 1;
    botaoverde();
}

//-------------BEBIDA-----------------

function escolherBebidaCoca() {
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "white";
    prato = "coca";
    precobebida = 7.90;
    escolhabebida = 2;
    botaoverde();
}

function escolherBebidaFanta() {
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("fanta").style.borderColor = "green";
    document.getElementById("guarana").style.borderColor = "white";
    prato = "fanta";
    precobebida = 5.90;
    escolhabebida = 2;
    botaoverde();
}

function escolherBebidaGuarana() {
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "green";
    prato = "guarana";
    precobebida = 5.50;
    escolhabebida = 2;
    botaoverde();
}

//---------------SOBREMESA-----------------


function escolherSobremesaCaramelo() {
    document.getElementById("caramelo").style.borderColor = "green";
    document.getElementById("cafe").style.borderColor = "white";
    document.getElementById("chocolate").style.borderColor = "white";
    prato = "Pudim tradicional";
    precocaramelo = 8.00;
    escolhasobremesa = 3;
    botaoverde();
}

function escolherSobremesaCafe() {
    document.getElementById("caramelo").style.borderColor = "white";
    document.getElementById("cafe").style.borderColor = "green";
    document.getElementById("chocolate").style.borderColor = "white";
    prato = "Pudim de café";
    precocaramelo = 8.50;
    escolhasobremesa = 3;
    botaoverde();
}

function escolherSobremesaChocolate() {
    document.getElementById("caramelo").style.borderColor = "white";
    document.getElementById("cafe").style.borderColor = "white";
    document.getElementById("chocolate").style.borderColor = "green";
    prato = "Pudim de chocolate";
    precocaramelo = 7.50;
    escolhasobremesa = 3;
    botaoverde();
}

//------------------BOTAO-----------------------

function botaoverde() {
    if (escolhaprato === 1 && escolhabebida === 2 && escolhasobremesa === 3){
        document.getElementById("botao").style.background = "green";
        const textobotao = document.querySelector(".botao");
        textobotao.innerHTML = "Fechar pedido";
    }
    total = precoprato + precobebida + escolhasobremesa;
}