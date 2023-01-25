let mensajeAries = "♈ARIES: Con Júpiter en tu signo estarás en condiciones para triunfar y conseguir todo lo que siempre has deseado. La prosperidad te espera y se producirán grandes cambios en tu profesión. Esto te llevará a moverte más allá de tus espacios usuales.";

let mensajeTauro = "♉TAURO: Es hora ya de recoger los frutos que has sembrado en etapas anteriores. Triunfarás en tu profesión, pero no sólo por tu talento y tu capacidad, sino también por tu simpatía y encanto social, que te abrirán muchas puertas. 2023 será un año positivo para tu vida amorosa y te centrarás en ella.";

let mensajeGeminis = "♊GÉMINIS: Las piezas del puzzle de tu vida cambiarán de posición a lo largo de 2023. De hecho puede que ya lo estés empezando a notar. Los cambios que se producen en el mundo, tendrán un reflejo en tu existencia, generalmente positivo. Vivirás tu vida de otro modo, bajo un aspecto más positivo.";

let mensajeCancer = "♋CÁNCER: Tu vida amorosa mejorará notablemente en este año 2023, triunfarás en tu profesión y consecuentemente tu economía prosperará. Podrás echar una mano a quienes lo necesiten y actuar de la forma en que sientas explotar todo tu potencial de generosidad y altruismo.";

let mensajeLeo = "♌LEO: 2023 será para ti un año feliz y exitoso, una época para cumplir tus deseos más personales y ésta será una tendencia de larga duración. Tu trabajo y tu vida amorosa están en alza, pero también tu salud y tu energía. Este año te tiene reservadas algunas experiencias muy especiales, como algún viaje al exterior y diversas opciones profesionales.";

let mensajeVirgo = "♍VIRGO: En este año 2023 tu vida entrará en una etapa de serenidad. En el ámbito de la amistad experimentarás ciertos cambios. Socializarás menos pero lo harás mejor. La gente mediocre que te rodea en este círculo desaparecerá y llegarán otras personas más interesantes.";

let mensajeLibra = "♎LIBRA: Serás más liberal. Este cambio también lo experimentarás en varios terrenos y despuntarás precisamente por la originalidad de tus ideas. Si haces caso a tu intuición además te convertirás en una persona muy solicitada. La felicidad te espera también en el amor y en la vida social.";

let mensajeEscorpio = "♏ESCORPIO: Notarás una transformación positiva en tu vida emocional, tu hogar y tu familia. Podrás corregir lo que se te había torcido. Incluso podrías recuperar un amor, aunque quizá no sea lo más conveniente, pero la misma influencia astral hará que las relaciones se estabilicen y avancen.";

let mensajeSagitario = "♐SAGITARIO: Este año 2023 la suerte te sonreirá en tu faceta profesional y esto representará ganancias espectaculares. Sin embargo, deberás cuidar tu vida sentimental, que te exigirá más esfuerzos que de costumbre para lograr lo que deseas. Afortunadamente, tu creatividad estará en alza.";

let mensajeCapricornio = "♑CAPRICORNIO: Experimentarás transformaciones a lo largo de 2023 que cambiarán tu forma de percibir la vida. Esto será muy positivo. Plutón influirá en ciertos cambios en el terreno sentimental. No encontrarás muchos obstáculos a superar, pero sí habrá algunas circunstancias difíciles.";

let mensajeAcuario = "♒ACUARIO: Los astros te proporcionarán prosperidad y posibilidades de expansión. Será una etapa para consolidar tu patrimonio, tendrás que actuar con cautela. Es hora de cambios importantes en tu aspecto y tu imagen. Con ellos mejorará tu vida amorosa y social.";

let mensajePiscis = "♓PISCIS: Llegan nuevas responsabilidades que podrían causarte un bajón de energía. Te conviene descansar y relajarte para no sufrir traspiés que irían en tu contra. Levanta el ánimo y no te dejes vencer por el pesimismo. Tus facultades mentales están en un punto muy alto."

const signosArray = ["Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];


let signoIngresado = "";
let palabraPareja = "";
let palabraSuerte = "";



class MasInfo {
    constructor(signosPareja, numSuerte) {
        this.signosPareja = signosPareja;
        this.numSuerte = numSuerte;
    }
}

const masAries = new MasInfo("Leo, Tauro y Acuario", "1 / 57 / 45 / 35 / 42 / 71");
const masTauro = new MasInfo("Leo, Capricornio y Tauro", "7 / 11 / 62 / 27 / 33 / 28");
const masGeminis = new MasInfo("Leo y Acuario", "3 / 59 / 19 / 96 / 31 / 73");
const masCancer = new MasInfo("Leo y Tauro", "1 / 82 / 14 / 79 / 42 / 21");
const masLeo = new MasInfo("Aries, Cáncer y Sagitario", "4 / 21 / 16 / 91");
const masVirgo = new MasInfo("Sagitario y Virgo", "2 / 55 / 13 / 62 / 30 / 51");
const masLibra = new MasInfo("Tauro y Géminis", "9 / 43 / 29 / 56 / 24 / 93");
const masEscorpio = new MasInfo("Cáncer, Capricornio y Tauro", "6 / 43 / 18 / 89 / 36");
const masSagitario = new MasInfo("Aries, Leo y Virgo", "8 / 24 / 85 / 76")
const masCapricornio = new MasInfo("Capricornio y Escorpio", "5 / 14 / 57 / 84 / 12");
const masAcuario = new MasInfo("Acuario y Libra", "3 / 11 / 53 / 54 / 83 / 62");
const masPiscis = new MasInfo("Tauro y Cáncer", "7 / 36 / 15 / 19 / 51 / 78");

const quitarAcentos = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const parejaYsuerte = {
    "Aries": masAries,
    "Tauro": masTauro,
    "Geminis": masGeminis,
    "Cancer": masTauro,
    "Leo": masLeo,
    "Virgo": masVirgo,
    "Libra": masLibra,
    "Escorpio": masEscorpio,
    "Sagitario": masSagitario,
    "Capricornio": masCapricornio,
    "Acuario": masAcuario,
    "Piscis": masPiscis
}


function preguntar() {
    signoIngresado = prompt("Ingrese su signo zodiacal para obtener predicciones del año 2023").toLowerCase();
    signoIngresado = signoIngresado.charAt(0).toUpperCase() + signoIngresado.slice(1);
    signoIngresado = quitarAcentos(signoIngresado);
}

function responder() {
    alert("El signo zodiacal ingresado es " + signoIngresado);
}

function signoEvaluacion() {
    if (signosArray.indexOf(signoIngresado) >= 0) {
        switchSignos();
    } else {
        alert("El signo zodiacal ingresado no es válido. Intente nevamente")
    }
    while (signosArray.indexOf(signoIngresado) == -1) {
        preguntar();
        responder();
        signoEvaluacion();
    }
}

preguntar();
responder();

if (signoIngresado == "") {
    alert("No puede dejar este campo vacío. Intente nuevamente");
    preguntar();
    responder();
} else {
    signoEvaluacion();
}

function switchSignos() {
    switch (signoIngresado) {
        case "Aries":
            alert(mensajeAries);

            break;

        case "Tauro":
            alert(mensajeTauro)

            break;

        case "Geminis":
            alert(mensajeGeminis)

            break;

        case "Cancer":
            alert(mensajeCancer)

            break;

        case "Leo":
            alert(mensajeLeo)

            break;

        case "Virgo":
            alert(mensajeVirgo)

            break;

        case "Libra":
            alert(mensajeLibra)

            break;

        case "Escorpio":
            alert(mensajeEscorpio)

            break;

        case "Sagitario":
            alert(mensajeSagitario)

            break;
        case "Capricornio":
            alert(mensajeCapricornio)

            break;

        case "Acuario":
            alert(mensajeAcuario)

            break;

        case "Piscis":
            alert(mensajePiscis)

            break;

        default:
            alert("El signo zodiacal ingresado no es válido");
    }
}

const pareja = parejaYsuerte[signoIngresado].signosPareja;
const suerte = parejaYsuerte[signoIngresado].numSuerte;

function preguntarPareja() {
    palabraPareja = prompt("Ingrese la palabra 'pareja' para para conocer sus signos compatibles en el amor").toLowerCase();
    palabraPareja = quitarAcentos(palabraPareja);
}

function responderPareja() {
    if (palabraPareja == "pareja") {
        alert("Los signos compatibles con " + signoIngresado + " son: " + (parejaYsuerte[signoIngresado].signosPareja))
    } else {
        do {
            alert("La palabra ingresada no es válida");
            preguntarPareja();
            responderPareja();
        } while (palabraPareja !== "pareja");
    }
}

function preguntarSuerte() {
    palabraSuerte = prompt("Ingrese la palabra 'suerte' para conocer los números que le favorecerán este 2023").toLowerCase();
    palabraSuerte = quitarAcentos(palabraSuerte);
}

function responderSuerte() {

    if (palabraSuerte == "suerte") {
        alert("Los números de la suerte para " + signoIngresado + " son: " + (parejaYsuerte[signoIngresado].numSuerte))
    } else {
        do {
            alert("La palabra ingresada no es válida");
            preguntarSuerte();
            responderSuerte();
        }
        while (palabraSuerte !== "suerte") {}
    }
}


preguntarPareja();
responderPareja();

preguntarSuerte();
responderSuerte();