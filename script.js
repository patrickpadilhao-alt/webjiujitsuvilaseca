document.addEventListener('DOMContentLoaded', () => {
    
    // ---------------------------------------------
    // 1. CONFIGURACIÓN WHATSAPP
    // ---------------------------------------------
    const TELEFONO = "34623178222"; 

    // Función para solicitar PRUEBA GRATIS
    window.abrirWhatsappPrueba = function() {
        const mensaje = "¡Hola! He estado viendo la web y me gustaría ir a probar una clase. ¿Cómo lo hacemos?";
        const url = `https://wa.me/${TELEFONO}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }

    // Función general (Mensaje genérico para romper el hielo)
    window.abrirWhatsappGeneral = function() {
        const mensaje = "¡Hola! Escribo desde vuestra página web, tengo una consulta y me gustaría hablar con vosotros.";
        const url = `https://wa.me/${TELEFONO}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }

    // Función para los botones de Tarifas (Ya saben el precio, quieren apuntarse)
    window.consultarTarifa = function(nombrePlan) {
        const mensaje = `¡Hola! He visto el plan ${nombrePlan} en la web y me interesa apuntarme. ¿Cuáles son los siguientes pasos?`;
        const url = `https://wa.me/${TELEFONO}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }

    // ---------------------------------------------
    // 2. LÓGICA DEL ACORDEÓN DE PREGUNTAS (FAQ)
    // ---------------------------------------------
    const preguntas = document.querySelectorAll(".faq-pregunta");

    preguntas.forEach((pregunta) => {
        pregunta.addEventListener("click", () => {
            // Activar/Desactivar el botón (cambia color y gira flecha)
            pregunta.classList.toggle("activa");

            // Seleccionar la respuesta (el siguiente elemento)
            const respuesta = pregunta.nextElementSibling;

            // Si está abierto (tiene altura), lo cerramos
            if (respuesta.style.maxHeight) {
                respuesta.style.maxHeight = null;
            } else {
                // Si está cerrado, calculamos la altura exacta del contenido
                respuesta.style.maxHeight = respuesta.scrollHeight + "px";
            }
        });
    });

    // ---------------------------------------------
    // 3. POP-UP FLOTANTE DE WHATSAPP (Aparece y desaparece)
    // ---------------------------------------------
    const mensajeGlobo = document.getElementById('whatsapp-mensaje'); // Asegúrate de que el id en HTML sea id="whatsapp-mensaje"
    
    if(mensajeGlobo) {
        // 1. Aparece a los 3 segundos de cargar la web
        setTimeout(() => {
            mensajeGlobo.classList.add('visible'); 
            
            // 2. Desaparece 5 segundos después de haberse mostrado
            setTimeout(() => {
                mensajeGlobo.classList.remove('visible');
            }, 5000);

        }, 3000); 
    }

    // ---------------------------------------------
    // 4. EFECTO MENÚ (SCROLL)
    // ---------------------------------------------
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.borderBottom = '3px solid #0055D4';
            } else {
                // Opcional: quitar el borde si vuelve arriba del todo
                header.style.borderBottom = '3px solid #0055D4'; 
            }
        }
    });

});

// ---------------------------------------------
// 5. MENÚ HAMBURGUESA (MÓVIL)
// ---------------------------------------------
function toggleMenu() {
    var menu = document.querySelector("#menu-principal ul");
    if (menu) {
        menu.classList.toggle("activo");
    }
}
