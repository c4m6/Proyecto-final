document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu__toggle");
  const nav = document.querySelector(".nav__list");

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("active") &&
      !nav.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      nav.classList.remove("active");
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');

    
    const campos = {
        nombre: {
            input: document.getElementById('nombre'),
            error: document.getElementById('error-nombre'),
            regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/,
            mensaje: "Nombre inválido. Solo letras y mínimo 2 caracteres."
        },
        celular: {
            input: document.getElementById('celular'),
            error: document.getElementById('error-celular'),
            regex: /^\d{7,15}$/,
            mensaje: "Celular inválido. Solo números (7-15 dígitos)."
        },
        ciudad: {
            input: document.getElementById('ciudad'),
            error: document.getElementById('error-ciudad'),
            regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/,
            mensaje: "Ciudad inválida. Solo letras y mínimo 2 caracteres."
        },
        email: {
            input: document.getElementById('email'),
            error: document.getElementById('error-email'),
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            mensaje: "Correo electrónico inválido."
        },
        mensaje: {
            input: document.getElementById('mensaje'),
            error: document.getElementById('error-mensaje'),
            validate: (value) => value.trim().length >= 10,
            mensaje: "El mensaje debe tener al menos 10 caracteres."
        }
    };

    function validarCampo(campo, config) {
        const valor = campo.value.trim();
        let valido = false;

        if (config.regex) {
            valido = config.regex.test(valor);
        } else if (config.validate) {
            valido = config.validate(valor);
        }

        if (!valido) {
            config.error.textContent = config.mensaje;
        } else {
            config.error.textContent = "";
        }

        return valido;
    }

    for (const key in campos) {
        campos[key].input.addEventListener('input', () => {
            validarCampo(campos[key].input, campos[key]);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formularioValido = true;

        for (const key in campos) {
            const esValido = validarCampo(campos[key].input, campos[key]);
            if (!esValido) formularioValido = false;
        }

        if (formularioValido) {
            alert("Nos pondremos en contacto lo má pronto posible.");
            form.submit(); 
        }
    });
});
