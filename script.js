//crud quer dizer:  Create, read, update e delete. //


var nomes = [];

function criar(nome) {
    nomes.push(nome);
    listar();
};

function listar() {
    var htmlLista = '';
    console.log('nomes cadastrados: ' + nomes.length)
    nomes.forEach(item => {
        console.log(nomes.indexOf(item) + item);
        htmlLista += "<li>" + item + "</li>"
    })
    document.getElementById('lista').innerHTML = htmlLista;
};

function deletar(indice) {
    nomes.splice(indice, 1);
    listar();
};


function atualizar(indice, novoNome) {
    nomes[indice] = novoNome;
    listar();
}
