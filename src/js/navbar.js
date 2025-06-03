function openModal() {
  document.getElementById('formModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('formModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.querySelector('.navbar-toggler');
  const collapseEl = document.getElementById('navbarTogglerDemo03');
  const overlay = document.getElementById('menu-overlay');

  if (!toggler || !collapseEl || !overlay) return;

  collapseEl.addEventListener('shown.bs.collapse', () => {
    overlay.style.display = 'block';
  });

  collapseEl.addEventListener('hidden.bs.collapse', () => {
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', () => {
    const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
    if (bsCollapse) bsCollapse.hide();
  });

  // ✅ Coloque a lógica do formulário AQUI DENTRO
  const form = document.getElementById('formConsulta');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      form.classList.remove('was-validated');
      form.reset();
      successMessage.style.display = 'block';

      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 4000);
    } else {
      form.classList.add('was-validated');
    }
  });
});
