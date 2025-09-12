//pegando o formulário por id
const form = document.querySelector('#form')

form.addEventListener('submit', function(event){
    //evitando recarregar a página
    event.preventDefault();

    const name = document.querySelector('#name');
    // pega o inputBox que estiver perto
    const inputBox = name.closest('.input-box');
    const nameValue = name.value;
    // colocando icone de erro
    const errorIcon = '<i class="fa-solid fa-circle-exclamation"></i>';
    const errorSpan = inputBox.querySelector('.error');
    // evitando colocar if e else
    errorSpan.innerHTML = '';

    // removendo a classList invalid
    inputBox.classList.remove('invalid');
    inputBox.classList.add('valid');

    if(!nameIsValid(nameValue)){
        errorSpan.innerHTML = `${errorIcon} O campo é obrigatório!`
        // pegando as cores dos input-box
        inputBox.classList.add('invalid');
        inputBox.classList.remove('valid');
        return;
    }
})

// criando uma função para verificar campo está preenchido passando o valor do campo
function isEmpty(nameValue){
    return nameValue === '';
}

function nameIsValid(value){
  let isValid = true;

  if (isEmpty(value)){
    return isValid = false;
    return isValid;
  }
  return isValid;
}


// pegando a classe password-icon no html
const passwordsIcons = document.querySelectorAll('.password-icon');
// pegando o click de mostrar as senhas
passwordsIcons.forEach(icon => {
  icon.addEventListener('click', function () {
    // evento de click para a classe form-control
    const input = this.parentElement.querySelector('.form-control');
    // alterando o tipo do input
    input.type = input.type === 'password' ? 'text' : 'password';
    // troca de ícone entre olho aberto e fechado
    if (this.classList.contains('fa-eye-slash')) {
      this.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
      this.classList.replace('fa-eye', 'fa-eye-slash');
    }
  });
});