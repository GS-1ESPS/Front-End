(() => {
    'use strict'

    const form = document.querySelector('.needs-validation2');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        const modal = new bootstrap.Modal(document.getElementById('successModal'));
        modal.show();
        form.classList.remove('was-validated');
        form.reset();
      } else {
        form.classList.add('was-validated');
      }
    }, false);
  })();