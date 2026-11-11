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
      "Comandante Kagli: la misión “Cumplir otro año siendo increíble” ha sido completada con rango S. Gracias por hacer de cada campaña una historia que vale la pena.",
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
