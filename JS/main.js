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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const nombreInput = document.getElementById("nombre de producto");
    const cantidadInput = document.getElementById("cantidad de producto");
    const precioInput = document.getElementById("precio");

    const errorNombre = document.getElementById("error-product");
    const errorCantidad = document.getElementById("error-quantity");
    const errorPrecio = document.getElementById("error-price");

    form.addEventListener("submit", function (e) {
        let valid = true;

        const nombreRegex = /^[a-zA-Z0-9\s]{3,}$/;
        const cantidadRegex = /^[1-9][0-9]*$/;
        const precioRegex = /^\d+(\.\d{1,2})?$/;

        if (!nombreRegex.test(nombreInput.value.trim())) {
            errorNombre.textContent = "El nombre debe tener al menos 3 caracteres y solo letras, números y espacios.";
            valid = false;
        } else {
            errorNombre.textContent = "";
        }

        if (!cantidadRegex.test(cantidadInput.value.trim())) {
            errorCantidad.textContent = "La cantidad debe ser un número entero positivo.";
            valid = false;
        } else {
            errorCantidad.textContent = "";
        }

        if (!precioRegex.test(precioInput.value.trim()) || parseFloat(precioInput.value) <= 0) {
            errorPrecio.textContent = "El precio debe ser un número positivo (máximo dos decimales).";
            valid = false;
        } else {
            errorPrecio.textContent = "";
        }

        if (!valid) {
            e.preventDefault(); 
        }
    });
});

