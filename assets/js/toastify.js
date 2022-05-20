 const trabajando = document.querySelectorAll('.navegacion__links--trabajando');

  trabajando.forEach(entry => {
      entry.addEventListener('click', () => {
        Toastify({
            text: "Estamos trabajando en esto",
            className: "info",
            gravity: "bottom",
            style: {
              background: "#101010",
            },
            duration: 2000,
          }).showToast();
      })
  })