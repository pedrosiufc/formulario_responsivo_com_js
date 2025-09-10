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