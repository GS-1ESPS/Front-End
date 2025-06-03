// ✅ Funções globais para abrir e fechar o modal 2
function openModal2() {
  document.getElementById('formModal2').style.display = 'flex';
}

function closeModal2() {
  document.getElementById('formModal2').style.display = 'none';
}

// ✅ Fecha modal ao clicar fora
window.onclick = function (event) {
  const modal2 = document.getElementById('formModal2');
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
};

// ✅ Lógica de envio do formulário — somente depois do DOM carregar
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('alagamentoForm');
  const successMessage = document.getElementById('successMessageAlagamento');

  if (!form || !successMessage) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      form.classList.remove('was-validated');
      form.reset();
      successMessage.style.display = 'block';

      // Oculta a mensagem depois de 4 segundos
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 4000);
    } else {
      form.classList.add('was-validated');
    }
  });
});
