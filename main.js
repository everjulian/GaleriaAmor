// Función para mostrar la tarjeta
function showCard() {
    // Obtener los elementos de la tarjeta
    const cardContainer = document.getElementById('cardContainer');
    const cardImage = document.getElementById('cardImage');
    const cardText = document.getElementById('cardText');

    // Configurar la imagen y el texto de la tarjeta
    cardImage.src = 'https://i.pinimg.com/564x/ec/35/e3/ec35e37130d3e4914520d8c282423648.jpg';
    cardText.textContent = 'Desde que te conocí hace dos meses, mi vida ha experimentado una transformación maravillosa. .'
    // Mostrar la tarjeta
    cardContainer.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para ocultar la tarjeta
function hideCard() {
    // Ocultar la tarjeta
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Agregar un controlador de eventos al botón de amor
const loveButton = document.getElementById('loveButton');
loveButton.addEventListener('click', showCard);

// Agregar un controlador de eventos al botón de cierre
const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', hideCard);



function showPhrase(imageNumber) {
    let phrases = [
        "Eres mi refugio en un mundo caótico.",
        "Tu sonrisa ilumina mi día y llena mi corazón de alegría.",
        "En tus brazos encuentro paz y felicidad infinita.",
        "Eres mi sueño hecho realidad, mi razón de ser.",
        "Tu amor es el combustible que enciende mi existencia.",
        "Contigo, cada momento es mágico y especial.",
        "Eres mi inspiración constante, mi fuerza y mi motivación.",
        "En tu mirada encuentro el universo entero.",
        "Amarte es la mejor decisión que he tomado en mi vida."

        // Agrega más frases aquí
    ];

    let phraseText = document.getElementById("phraseText");
    phraseText.innerText = phrases[imageNumber - 1];

    $('#phraseModal').modal('show');
}