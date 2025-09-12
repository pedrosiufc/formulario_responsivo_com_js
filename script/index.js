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

    //checando se o nome está validado
    if(!nameIsValid(nameValue).isValid){
        errorSpan.innerHTML = `${errorIcon} ${nameIsValid(nameValue).errorMessage}`;
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
//verificando se o nome é válido
function nameIsValid(value){
  //criando um objeto para retornar
  const validator =  {
    isValid: true,
    errorMessage: null
  };

  if (isEmpty(value)){
      validator.isValid = false;
      validator.errorMessage = 'O campo é obrigatório'
      return validator;
  }

  const min = 3;

  if(value.length < min){
    validator.isValid = false;
    validator.errorMessage = `O nome deve ter no mínimo ${min} caracteres`;
    return validator;
  }
  return validator;
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