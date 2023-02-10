var dataAdded = false;

function modoEscuro() {
    var elementBody = document.body;
    elementBody.classList.toggle('dark-mode');
}

function doPrint() {
    var imprimirDiv = document.getElementById('imprimirContent').innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = imprimirDiv;
    window.print();
    document.body.innerHTML = originalContent; 
}

function guardaFormulario() {
    if (dataAdded == false) { 
        var divConteudo = document.getElementById('impressaoGerar');
        var divBtnImp = document.getElementById('button-print');
        
        var formsCliente = new Object();

        formsCliente.nome = document.getElementById('fnome').value;
        formsCliente.sobrenome = document.getElementById('sobrenome').value;
        formsCliente.idade = document.getElementById('idade').value;
        formsCliente.cep = document.getElementById('cep').value;
        formsCliente.cpf = document.getElementById('cpf').value;
        formsCliente.celular = document.getElementById('celularNum').value;

        var jsonForm = JSON.stringify(formsCliente);
        console.log(formsCliente.valueOf());

        var localBtnImp = document.getElementById('button-print');
        var createBtnImp = document.createElement('buttoninner');
        createBtnImp.setAttribute('type', 'button');
        createBtnImp.innerHTML = '<i class="gg-file-document"></i>';
        createBtnImp.setAttribute('onclick', 'doPrint()')
        createBtnImp.classList.toggle('btn-print');

        for(const key in formsCliente) {
            divConteudo.innerHTML += (`${key}: ${formsCliente[key]}`) + '<br/>';
        }
        divBtnImp.appendChild(createBtnImp);

        dataAdded = true;
    } else {
        alert('Recarregue para continuar usando')
    }
}

