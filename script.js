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
let totalponto

// ------PRATO PRINCIPAL-------------

function escolherPratoSalada() {
    document.getElementById("salada").style.borderColor = "green";
    document.getElementById("feijao").style.borderColor = "white";
    document.getElementById("arroz").style.borderColor = "white";
    document.getElementById("salada").style.filter = "drop-shadow(0 0 0.40rem grey)";

    document.getElementById("saladacheck").style.display = "block";
    document.getElementById("arrozcheck").style.display = "none";
    document.getElementById("feijaocheck").style.display = "none";

    pratoescolhido = "Frango c/ salada";
    precoprato = 14.90;
    p = 1;
    botaoverde();
}

function escolherPratoFeijao() {
    document.getElementById("salada").style.borderColor = "white";
    document.getElementById("feijao").style.borderColor = "green";
    document.getElementById("arroz").style.borderColor = "white";
    document.getElementById("feijao").style.filter = "drop-shadow(0 0 0.40rem grey)";

    document.getElementById("feijaocheck").style.display = "block";
    document.getElementById("saladacheck").style.display = "none";
    document.getElementById("arrozcheck").style.display = "none";

    pratoescolhido = "Frango c/ feijão";
    precoprato = 13.90;
    p = 1;
    botaoverde();
}

function escolherPratoArroz() {
    document.getElementById("salada").style.borderColor = "white";
    document.getElementById("feijao").style.borderColor = "white";
    document.getElementById("arroz").style.borderColor = "green";
    document.getElementById("arroz").style.filter = "drop-shadow(0 0 0.40rem grey)";

    document.getElementById("arrozcheck").style.display = "block";
    document.getElementById("feijaocheck").style.display = "none";
    document.getElementById("saladacheck").style.display = "none";

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
    document.getElementById("coca").style.filter = "drop-shadow(0 0 0.40rem grey)";

    document.getElementById("cocacheck").style.display = "block";
    document.getElementById("fantacheck").style.display = "none";
    document.getElementById("guaranacheck").style.display = "none";

    bebidaescolhida = "Coca";
    precobebida = 7.90;
    b = 2;
    botaoverde();
}

function escolherBebidaFanta() {
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("fanta").style.borderColor = "green";
    document.getElementById("guarana").style.borderColor = "white";
    document.getElementById("fanta").style.filter = "drop-shadow(0 0 0.40rem grey)";

    document.getElementById("fantacheck").style.display = "block";
    document.getElementById("guaranacheck").style.display = "none";
    document.getElementById("cocacheck").style.display = "none";

    bebidaescolhida = "Fanta";
    precobebida = 5.90;
    b = 2;
    botaoverde();
}

function escolherBebidaGuarana() {
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "green";
    document.getElementById("guarana").style.filter = "drop-shadow(0 0 0.40rem grey)";

    document.getElementById("guaranacheck").style.display = "block";
    document.getElementById("fantacheck").style.display = "none";
    document.getElementById("cocacheck").style.display = "none";

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
    document.getElementById("caramelo").style.filter = "drop-shadow(0 0 0.40rem grey)";

    document.getElementById("caramelocheck").style.display = "block";
    document.getElementById("chocolatecheck").style.display = "none";
    document.getElementById("cafecheck").style.display = "none";

    sobremesaescolhida = "Pudim tradicional";
    precosobremesa = 8.00;
    s = 3;
    botaoverde();
}

function escolherSobremesaCafe() {
    document.getElementById("caramelo").style.borderColor = "white";
    document.getElementById("cafe").style.borderColor = "green";
    document.getElementById("chocolate").style.borderColor = "white";
    document.getElementById("cafe").style.filter = "drop-shadow(0 0 0.40rem grey)";

    document.getElementById("cafecheck").style.display = "block";
    document.getElementById("caramelocheck").style.display = "none";
    document.getElementById("chocolatecheck").style.display = "none";

    sobremesaescolhida = "Pudim de café";
    precosobremesa = 8.50;
    s = 3;
    botaoverde();
}

function escolherSobremesaChocolate() {
    document.getElementById("caramelo").style.borderColor = "white";
    document.getElementById("cafe").style.borderColor = "white";
    document.getElementById("chocolate").style.borderColor = "green";
    document.getElementById("chocolate").style.filter = "drop-shadow(0 0 0.40rem grey)";

    document.getElementById("chocolatecheck").style.display = "block";
    document.getElementById("cafecheck").style.display = "none";
    document.getElementById("caramelocheck").style.display = "none";

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
//--------------ATUALIZAR COMIDAS---------------
    document.getElementById("pratoescolhido").textContent = pratoescolhido;
    document.getElementById("bebidaescolhida").textContent = bebidaescolhida;
    document.getElementById("sobremesaescolhida").textContent = sobremesaescolhida;
//--------------ATUALIZAR PREÇOS----------------
    totalponto = total.toFixed(2);
    let pratoponto = precoprato.toFixed(2);
    let bebidaponto = precobebida.toFixed(2);
    let sobremesaponto = precosobremesa.toFixed(2);
    document.getElementById("precoprato").textContent = "R$ " + pratoponto.replace(".",",");
    document.getElementById("precobebida").textContent = "R$ " + bebidaponto.replace(".",",");
    document.getElementById("precosobremesa").textContent = "R$ " + sobremesaponto.replace(".",",");
    document.getElementById("resultado").textContent = "R$ " + totalponto.replace(".",",");
//---------APARECER MSG--------------
    document.getElementById("revisaodopedido").style.display = "flex";

}

//------------------FINALIZAR PEDIDO--------------

function botaocancelar() {
    document.getElementById("revisaodopedido").style.display = "none";
}

function botaofazerpedido() {
    const seuNumero = "";
    let nome = prompt("Qual seu nome?");
    if(!nome) {
        return
    }
    let endereço = prompt("Digite seu endereço");
    if(!endereço) {
        return 
    }
    let mensagem = "Olá, gostaria de fazer o pedido:" + "\n" +
    "- " + pratoescolhido + "\n" +
    "- " + bebidaescolhida + "\n" +
    "- " + sobremesaescolhida + "\n" +
    "Total: " + "R$ " + totalponto.replace(".",",") + "\n" + "\n" +
    "Nome: " + nome + "\n" +
    "Endereço: " + endereço;
    window.confirm("Aqui a aplicação deve leva-lo ao whatsapp do vendedor com a seguinte mensagem:\n" + mensagem);
    // window.open(`https://wa.me/${seuNumero}?text=` + encodeURIComponent(mensagem));
}