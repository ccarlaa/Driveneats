let p;
let b;
let s;
let total;
let pratoescolhido;
let bebidaescolhida;
let sobremesaescolhida;
let precoprato;
let precobebida;
let precosobremesa;

// ------PRATO PRINCIPAL-------------

function escolherPratoSalada() {
    document.getElementById("salada").style.borderColor = "green";
    document.getElementById("feijao").style.borderColor = "white";
    document.getElementById("arroz").style.borderColor = "white";
    pratoescolhido = "Frango c/ salada";
    precoprato = 14.90;
    p = 1;
    botaoverde();
}

function escolherPratoFeijao() {
    document.getElementById("salada").style.borderColor = "white";
    document.getElementById("feijao").style.borderColor = "green";
    document.getElementById("arroz").style.borderColor = "white";
    pratoescolhido = "Frango c/ feijão";
    precoprato = 13.90;
    p = 1;
    botaoverde();
}

function escolherPratoArroz() {
    document.getElementById("salada").style.borderColor = "white";
    document.getElementById("feijao").style.borderColor = "white";
    document.getElementById("arroz").style.borderColor = "green";
    pratoescolhido = "Frango c/ arroz";
    precoprato = 12.90;
    p = 1;
    botaoverde();
}

//-------------BEBIDA-----------------

function escolherBebidaCoca() {
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "white";
    bebidaescolhida = "Coca";
    precobebida = 7.90;
    b = 2;
    botaoverde();
}

function escolherBebidaFanta() {
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("fanta").style.borderColor = "green";
    document.getElementById("guarana").style.borderColor = "white";
    bebidaescolhida = "Fanta";
    precobebida = 5.90;
    b = 2;
    botaoverde();
}

function escolherBebidaGuarana() {
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "green";
    bebidaescolhida = "Guarana";
    precobebida = 5.50;
    b = 2;
    botaoverde();
}

//---------------SOBREMESA-----------------


function escolherSobremesaCaramelo() {
    document.getElementById("caramelo").style.borderColor = "green";
    document.getElementById("cafe").style.borderColor = "white";
    document.getElementById("chocolate").style.borderColor = "white";
    sobremesaescolhida = "Pudim tradicional";
    precosobremesa = 8.00;
    s = 3;
    botaoverde();
}

function escolherSobremesaCafe() {
    document.getElementById("caramelo").style.borderColor = "white";
    document.getElementById("cafe").style.borderColor = "green";
    document.getElementById("chocolate").style.borderColor = "white";
    sobremesaescolhida = "Pudim de café";
    precosobremesa = 8.50;
    s = 3;
    botaoverde();
}

function escolherSobremesaChocolate() {
    document.getElementById("caramelo").style.borderColor = "white";
    document.getElementById("cafe").style.borderColor = "white";
    document.getElementById("chocolate").style.borderColor = "green";
    sobremesaescolhida = "Pudim de chocolate";
    precosobremesa = 7.50;
    s = 3;
    botaoverde();
}

//------------------BOTAO-----------------------

function botaoverde() {
    if (p === 1 && b === 2 && s === 3){
        document.getElementById("botao").style.display = "block";
        document.getElementById("botaocinza").style.display = "none";
    }
    total = precoprato + precobebida + precosobremesa;
}

function aparecerMensagem() {
    document.getElementById("pratoescolhido").textContent = pratoescolhido;
    document.getElementById("bebidaescolhida").textContent = bebidaescolhida;
    document.getElementById("sobremesaescolhida").textContent = sobremesaescolhida;
    document.getElementById("precoprato").textContent = "R$ " + precoprato.toFixed(2);
    document.getElementById("precobebida").textContent = "R$ " + precobebida.toFixed(2);
    document.getElementById("precosobremesa").textContent = "R$ " + precosobremesa.toFixed(2);
    document.getElementById("resultado").textContent = "R$ " + total.toFixed(2);
    document.getElementById("revisaodopedido").style.display = "flex";

}

//------------------FINALIZAR PEDIDO--------------
