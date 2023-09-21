const btnConfere = document.getElementById("botao");
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const telefoneInput = document.getElementById('telefone');
const mensagemTextarea = document.getElementById('mensagem');
const campoObrigatorio= document.getElementsByClassName('nao-preenchido')

btnConfere.addEventListener('click', function () {
    validarFormulario();
    formularioValidado();
});

function validarFormulario() {
    validarCampoVazio(nomeInput, campoObrigatorio[0]);
    validarCampoVazio(emailInput, campoObrigatorio[1]);
    validarCampoVazio(telefoneInput, campoObrigatorio[2]);
    validarCampoVazio(mensagemTextarea, campoObrigatorio[3]);
}
function formularioValidado() {
  adicionarClasse(nomeInput, 'preenchido')
  adicionarClasse(emailInput, 'preenchido')
  adicionarClasse(telefoneInput, 'preenchido')
  adicionarClasse(mensagemTextarea, 'preenchido')
}
function adicionarClasse(inputElement, classe) {
    if(inputElement.value !== ''){
        inputElement.classList.add(classe)
    }else{
        inputElement.classList.remove(classe)
    }
}
function validarCampoVazio(inputElement, avisoElement) {
    if (inputElement.value === '') {
        inputElement.classList.add('erro');
        avisoElement.style.display = 'block';
    } else {
        inputElement.classList.remove('erro');
        avisoElement.style.display = 'none';
    }
}

