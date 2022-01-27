// ------PRATO PRINCIPAL--------------

function escolherPratoSalada() {
    document.getElementById("salada").style.borderColor = "green";
    document.getElementById("feijao").style.borderColor = "white";
    document.getElementById("arroz").style.borderColor = "white";
}

function escolherPratoFeijao() {
    document.getElementById("salada").style.borderColor = "white";
    document.getElementById("feijao").style.borderColor = "green";
    document.getElementById("arroz").style.borderColor = "white";
}

function escolherPratoArroz() {
    document.getElementById("salada").style.borderColor = "white";
    document.getElementById("feijao").style.borderColor = "white";
    document.getElementById("arroz").style.borderColor = "green";
}

//-------------BEBIDA-----------------

function escolherBebidaCoca() {
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "white";
}

function escolherBebidaFanta() {
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("fanta").style.borderColor = "green";
    document.getElementById("guarana").style.borderColor = "white";
}

function escolherBebidaGuarana() {
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "green";
}

//---------------SOBREMESA-----------------

function escolherSobremesaCaramelo() {
    document.getElementById("caramelo").style.borderColor = "green";
    document.getElementById("cafe").style.borderColor = "white";
    document.getElementById("chocolate").style.borderColor = "white";
}

function escolherSobremesaCafe() {
    document.getElementById("caramelo").style.borderColor = "white";
    document.getElementById("cafe").style.borderColor = "green";
    document.getElementById("chocolate").style.borderColor = "white";
}

function escolherSobremesaChocolate() {
    document.getElementById("caramelo").style.borderColor = "white";
    document.getElementById("cafe").style.borderColor = "white";
    document.getElementById("chocolate").style.borderColor = "green";
}