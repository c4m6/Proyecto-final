document.addEventListener("DOMContentLoaded", () => {
  
  const toggleBtn = document.querySelector(".menu__toggle");
  const navList = document.querySelector(".nav__list");

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navList.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (
      navList.classList.contains("active") &&
      !navList.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      navList.classList.remove("active");
    }
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
    });
  });


  const formContacto = document.getElementById("formulario");

  if (formContacto) {
    const campos = {
      nombre: {
        input: document.getElementById("nombre"),
        error: document.getElementById("error-nombre"),
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/,
        mensaje: "Nombre inválido. Solo letras y mínimo 2 caracteres.",
      },
      celular: {
        input: document.getElementById("celular"),
        error: document.getElementById("error-celular"),
        regex: /^\d{7,15}$/,
        mensaje: "Celular inválido. Solo números (7-15 dígitos).",
      },
      ciudad: {
        input: document.getElementById("ciudad"),
        error: document.getElementById("error-ciudad"),
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/,
        mensaje: "Ciudad inválida. Solo letras y mínimo 2 caracteres.",
      },
      email: {
        input: document.getElementById("email"),
        error: document.getElementById("error-email"),
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        mensaje: "Correo electrónico inválido.",
      },
      mensaje: {
        input: document.getElementById("mensaje"),
        error: document.getElementById("error-mensaje"),
        validate: (value) => value.trim().length >= 10,
        mensaje: "El mensaje debe tener al menos 10 caracteres.",
      },
    };

    function validarCampo(input, config) {
      const valor = input.value.trim();
      const valido = config.regex ? config.regex.test(valor) : config.validate(valor);

      config.error.textContent = valido ? "" : config.mensaje;
      return valido;
    }

    for (const key in campos) {
      campos[key].input.addEventListener("input", () => {
        validarCampo(campos[key].input, campos[key]);
      });
    }

    formContacto.addEventListener("submit", (e) => {
      e.preventDefault();
      let valido = true;

      for (const key in campos) {
        if (!validarCampo(campos[key].input, campos[key])) {
          valido = false;
        }
      }

      if (valido) {
        alert("Nos pondremos en contacto lo más pronto posible.");
        formContacto.submit();
      }
    });
  }

  const formProducto = document.getElementById("form");

  if (formProducto) {
    const nombreProducto = document.getElementById("nombre de producto");
    const cantidadProducto = document.getElementById("cantidad de producto");
    const precioProducto = document.getElementById("precio");

    const errorNombre = document.getElementById("error-product");
    const errorCantidad = document.getElementById("error-quantity");
    const errorPrecio = document.getElementById("error-price");

    formProducto.addEventListener("submit", (e) => {
      let valido = true;

      const nombreValido = /^[a-zA-Z0-9\s]{3,}$/.test(nombreProducto.value.trim());
      const cantidadValida = /^[1-9][0-9]*$/.test(cantidadProducto.value.trim());
      const precioValido = /^\d+(\.\d{1,2})?$/.test(precioProducto.value.trim()) &&
                           parseFloat(precioProducto.value) > 0;

      errorNombre.textContent = nombreValido ? "" : "El nombre debe tener al menos 3 caracteres y solo letras, números y espacios.";
      errorCantidad.textContent = cantidadValida ? "" : "La cantidad debe ser un número entero positivo.";
      errorPrecio.textContent = precioValido ? "" : "El precio debe ser un número positivo (máximo dos decimales).";

      if (!nombreValido || !cantidadValida || !precioValido) {
        valido = false;
        e.preventDefault();
      }
    });
  }
});
