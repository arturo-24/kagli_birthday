export type Hero = {
  id: string;
  title: string;
  role: string;
  level: string;
  skill: string;
  message: string;
  image: string;
  position: string;
  accent: string;
};

export const heroes: Hero[] = [
  {
    id: "champion",
    title: "Nurimy",
    role: "Guerrero",
    level: "32",
    skill: "Risa crítica",
    message:
      "Feliz cumple viejo sabroso, hace tantos años que te conozco que ni me acuerdo y han sido mucho mejor porque estas tú. Te quiero mucho.",
    image: "/hero-champion.png",
    position: "center top",
    accent: "#d95d49",
  },
  {
    id: "commander",
    title: "Lady The Killa",
    role: "Exploradora",
    level: "31",
    skill: "Plan maestro",
    message:
      "Hoy celebramos a alguien que se ganó un lugar especial en el corazón de todo el círculo. Nos conocimos, y desde entonces siempre has sido ese que está ahí, apoyando a todos sin que se lo pidan, compartiendo tu música como quien comparte un pedazo de ti mismo, y escuchando a cada uno aunque también tengas tu carácter (¡y vaya que lo tienes, argentino al fin!). Más de 50 años de vida y sigues siendo esa persona que suma, que acompaña, que se queda. Eso no lo hace cualquiera. No se me olvida cuando me regalaste algo que no esperaba: una web con las mañanitas, bien mexicanas, hecha con tus manos y tu cariño. Ese gesto me dijo todo lo que necesitaba saber de ti, re copado mal, el groso y hoy quiero devolverte un poquito de eso. Gracias por existir como existes. Te queremos, te valoramos, y te deseamos un día como ninguno porque así eres tú con nosotros, todos los días. ¡Feliz cumpleaños! 🥳🎶",
    image: "/hero-commander.png",
    position: "center top",
    accent: "#eab84d",
  },
  {
    id: "tactician",
    title: "Dex",
    role: "Alquimista",
    level: "33",
    skill: "Mapa holográfico",
    message:
      "Los cálculos confirman un 100% de probabilidades de que este sea tu mejor año. Que nunca falten buenos planes, grandes partidas y aliados para romperlos contigo.",
    image: "/hero-tactician.png",
    position: "center top",
    accent: "#57d8e5",
  },
  {
    id: "scribe",
    title: "R2D2",
    role: "Cronista",
    level: "30",
    skill: "Código arcano",
    message:
      "¡Feliz cumpleaños, viejo delicioshooooo! 🎂❤️ En este día tan especial, espero que disfrutes cada instante y que nunca olvides cuánto cariño, admiración y aprecio te tenemos todos los que formamos parte de esta comunidad. Gracias por estar siempre presente para cada uno de nosotros, por tender una mano cuando hace falta y por haber sido ese compañero que, día tras día, minuto tras minuto y segundo tras segundo, ha sabido compartir este pequeño universo que hemos construido juntos. Gracias por tu bondad, por tus consejos y por esa experiencia invaluable que siempre compartes sin esperar nada a cambio. Porque, al final, uno descubre que la verdadera riqueza de la vida no está en lo que acumulamos, sino en las personas que encontramos y en las huellas que dejamos en ellas. Y tú, viejo, has dejado una huella muy bonita en cada uno de nosotros. ¡Se te quiere muchísimo! Disfruta tu cumpleaños, celebra la vida y permítenos seguir compartiendo muchos más momentos a tu lado. :3",
    image: "/hero-tech-scribe.png",
    position: "center top",
    accent: "#79bff0",
  },
  {
    id: "guardian",
    title: "La Guardiana",
    role: "Mascota Real",
    level: "∞",
    skill: "Lealtad suprema",
    message:
      "Guau. Traducción imperial: feliz cumpleaños, humano favorito. Mi regalo es protección real, compañía eterna y permiso para compartir conmigo el banquete.",
    image: "/hero-guardian.png",
    position: "center top",
    accent: "#f4ea90",
  },
  {
    id: "cookie",
    title: "Sr. Cookie",
    role: "Tecno-Alquimista",
    level: "28",
    skill: "Código crujiente",
    message:
      "Feliz Cumpleaños Kagli, te quiero felicitar por tu cumpleaños y decirte que te quiero mucho, eres un gran amigo y una persona muy especial para mi. Me has apoyado en muchas cosas y sabes que cualquier cosa cuentas conmigo viejito teton. TQM - Coockie.",
    image: "/hero-cookie.png",
    position: "center top",
    accent: "#78d9e8",
  },
];
