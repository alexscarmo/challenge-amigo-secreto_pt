let amigos = [];
let tamanhoVetor = 0;

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value;

    if (validarInsercao(nome)) {
        insereAmigo(nome);
        limpaInput();
        montarListaExibicao();
    }
 
}

function sortearAmigo() {
    if (validaSorteio()) {
        document.getElementById("resultado").innerHTML = amigos[parseInt(Math.random() * tamanhoVetor)]
        document.getElementById("reset").style.visibility = "visible";
    }
}

function insereAmigo(nome) {
    amigos.push(nome);
}

function validaSorteio() {
    if (amigos.length == 0) {
        window.alert("Nenhum amigo adicionado, adicione amigos na lista!");
        return false;
    } else {
        tamanhoVetor = amigos.length;
        return true;
    }
}

function validarInsercao(nome) {
    if (nome == "") {
        window.alert("O nome não pode estar em branco, favor preencher com algum nome!");
        limpaInput();
        return false;
    }
    else if (amigos.includes(nome)) {
        window.alert("Esse nome já existe, favor adicionar outro");
        limpaInput();
        return false;
    }
    else {
        return true;
    }
}

function limpaInput() {
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
}

function montarListaExibicao() {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""

    for (let amigo of amigos){
        let nome = '<li>' + amigo + '</li>';
        lista.innerHTML += nome;
    }

}

function resetarSorteio() {
    amigos = [];
    montarListaExibicao();
    limpaInput();
    tamanhoVetor = 0;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("reset").style.visibility = "hidden"
}