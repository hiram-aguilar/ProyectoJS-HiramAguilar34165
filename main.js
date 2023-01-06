let aries = "aries";
let tauro = "tauro";
let geminis = "geminis";
let cancer = "cancer";
let leo = "leo";
let virgo = "virgo";
let libra = "libra";
let escorpio = "escorpio"
let sagitario = "sagitario"
let capricornio = "capricornio";
let acuario = "acuario";
let piscis = "piscis";


let mensajeAries = "♈ARIES: Con Júpiter en tu signo estarás en condiciones para triunfar y conseguir todo lo que siempre has deseado. La prosperidad te espera y se producirán grandes cambios en tu profesión. Esto te llevará a moverte más allá de tus espacios usuales.";

let mensajeTauro = "♉TAURO: Es hora ya de recoger los frutos que has sembrado en etapas anteriores. Triunfarás en tu profesión, pero no sólo por tu talento y tu capacidad, sino también por tu simpatía y encanto social, que te abrirán muchas puertas. 2023 será un año positivo para tu vida amorosa y te centrarás en ella.";

let mensajeGeminis = "♊GÉMINIS: Las piezas del puzzle de tu vida cambiarán de posición a lo largo de 2023. De hecho puede que ya lo estés empezando a notar. Los cambios que se producen en el mundo, tendrán un reflejo en tu existencia, generalmente positivo. Vivirás tu vida de otro modo, bajo un aspecto más positivo.";

let mensajeCancer = "♋CÁNCER: Tu vida amorosa mejorará notablemente, triunfarás en tu profesión y consecuentemente tu economía prosperará. Podrás echar una mano a quien lo necesite, actuar de la forma en que te sientes tan reconfortada emocionalmente, por tu carácter generoso y altruista.";

let mensajeLeo = "♌LEO: 2023 será para ti un año feliz y exitoso, una época para cumplir tus deseos más personales y ésta será una tendencia de larga duración. Tu trabajo y tu vida amorosa están en alza, pero también tu salud y tu energía. Este año te tiene reservadas algunas experiencias muy especiales, como algún viaje al exterior y diversas opciones profesionales.";

let mensajeVirgo = "♍VIRGO: En este año 2023 tu vida entrará en una etapa de serenidad. En el ámbito de la amistad experimentarás ciertos cambios. Socializarás menos pero lo harás mejor. La gente mediocre que te rodea en este círculo desaparecerá y llegarán otras personas más interesantes."

let mensajeLibra = "♎LIBRA: Serás más liberal. Este cambio también lo experimentarás en varios terrenos y despuntarás precisamente por la originalidad de tus ideas. Si haces caso a tu intuición además te convertirás en una persona muy solicitada. La felicidad te espera también en el amor y en la vida social."

let mensajeEscorpio = "♏ESCORPIO: Notarás una transformación positiva en tu vida emocional, tu hogar y tu familia. Podrás corregir lo que se te había torcido. Incluso podrías recuperar un amor, aunque quizá no sea lo más conveniente, pero la misma influencia astral hará que las relaciones se estabilicen y avancen."

let mensajeSagitario = "♐SAGITARIO: Este año 2023 la suerte te sonreirá en tu faceta profesional y esto representará ganancias espectaculares. Sin embargo, deberás cuidar tu vida sentimental, que te exigirá más esfuerzos que de costumbre para lograr lo que deseas. Afortunadamente, tu creatividad estará en alza."

let mensajeCapricornio = "♑CAPRICORNIO: Experimentarás transformaciones a lo largo de 2023 que cambiarán tu forma de percibir la vida. Esto será muy positivo. Plutón influirá en ciertos cambios en el terreno sentimental. No encontrarás muchos obstáculos a superar, pero sí habrá algunas circunstancias difíciles."

let mensajeAcuario = "♒ACUARIO: Los astros te proporcionarán prosperidad y posibilidades de expansión. Será una etapa para consolidar tu patrimonio, tendrás que actuar con cautela. Es hora de cambios importantes en tu aspecto y tu imagen. Con ellos mejorará tu vida amorosa y social."

let mensajePiscis = "♓PISCIS: Llegan nuevas responsabilidades que podrían causarte un bajón de energía. Te conviene descansar y relajarte para no sufrir traspiés que irían en tu contra. Levanta el ánimo y no te dejes vencer por el pesimismo. Tus facultades mentales están en un punto muy alto."


function preguntar() {
    signoIngresado = prompt("Ingrese su signo zodiacal en minúsculas y sin acentos para obtener predicciones del año 2023");
    alert("El signo zodical ingresado es " + signoIngresado);
    if (signoIngresado == "") {alert("No puede dejar este campo vacío. Intente nuevamente") }

}

function switchSignos() {
    switch (signoIngresado) {
        case aries:
            alert(mensajeAries);

            break;

        case tauro:
            alert(mensajeTauro)

            break;

        case geminis:
            alert(mensajeGeminis)

            break;

        case cancer:
            alert(mensajeCancer)

            break;

        case leo:
            alert(mensajeLeo)

            break;

        case virgo:
            alert(mensajeVirgo)

            break;

        case libra:
            alert(mensajeLibra)

            break;

        case escorpio:
            alert(mensajeEscorpio)

            break;

        case sagitario:
            alert(mensajeSagitario)

            break;
        case capricornio:
            alert(mensajeCapricornio)

            break;

        case acuario:
            alert(mensajeAcuario)

            break;

        case piscis:
            alert(mensajePiscis)

            break;

        default:
            alert("El signo zodiacal ingresado no es válido");
    }
}

preguntar();

if (
    (signoIngresado == aries) ||
    (signoIngresado == tauro) ||
    (signoIngresado == geminis) ||
    (signoIngresado == cancer) ||
    (signoIngresado == leo) ||
    (signoIngresado == virgo) ||
    (signoIngresado == libra) ||
    (signoIngresado == escorpio) ||
    (signoIngresado == sagitario) ||
    (signoIngresado == capricornio) ||
    (signoIngresado == acuario) ||
    (signoIngresado == piscis) ||
    (signoIngresado == "")
) {
    switchSignos();
} else {
    alert("ingrese un signo zodiacal válido");
}
while (
    (signoIngresado != aries) ||
    (signoIngresado != tauro) ||
    (signoIngresado != geminis) ||
    (signoIngresado != cancer) ||
    (signoIngresado != leo) ||
    (signoIngresado != virgo) ||
    (signoIngresado != libra) ||
    (signoIngresado != escorpio) ||
    (signoIngresado != sagitario) ||
    (signoIngresado != capricornio) ||
    (signoIngresado != acuario) ||
    (signoIngresado != piscis)
) {
    preguntar();
    switchSignos();
}
