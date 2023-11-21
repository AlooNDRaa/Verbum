  import { CiChat1, CiAlignBottom  } from "react-icons/ci";
  import { IoLogoGameControllerB } from "react-icons/io";
  import { IconType } from "react-icons";
  import chat2 from '../../../imgs/chat1.png'
  import Game from '../../../imgs/game.png'
  import herramientas from '../../../imgs/herramientas.png'
  import recuperacion from '../../../imgs/seguro.png'
  import { SiSpringsecurity } from "react-icons/si";
  
  
  interface Service {
    icon: IconType;
    title: string;
    content: string;
    backgroundImage: string;
  }
  
  export const ServiceData: Service[] = [
    {
      icon: CiChat1,
      title: "Chat",
      content: "",
      backgroundImage: chat2,
    },
    {
      icon: CiAlignBottom,
      title: "Herramientas",
      content: "",
      backgroundImage: herramientas,
    },
    {
      icon: SiSpringsecurity,
      title: "Seguro",
      content: "",
      backgroundImage: recuperacion,
    },
    {
      icon: IoLogoGameControllerB,
      title: "Game",
      content: "",
      backgroundImage: Game,
    },
  ];