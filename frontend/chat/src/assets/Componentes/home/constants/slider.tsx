  import { GiAmethyst } from "react-icons/gi";
  import { RiSecurePaymentFill } from "react-icons/ri";
  import { IconType } from "react-icons";
  import { LuAlignHorizontalDistributeCenter } from "react-icons/lu";
  import chat2 from '../../../imgs/gifts/chatgif.gif'
  import Game from '../../../imgs/gifts/steamuserimages-a.akamaihd.gif'
  import { IoIosChatboxes } from "react-icons/io";
  import herramientas from '../../../imgs/gifts/2hmcq6arkg0skdynt7h7.gif'
  import recuperacion from '../../../imgs/gifts/seguridad.gif'
  
  
  interface Service {
    icon: IconType;
    title: string;
    content: string;
    backgroundImage: string;
  }
  
  export const ServiceData: Service[] = [
    {
      icon: IoIosChatboxes,
      title: "",
      content: "",
      backgroundImage: chat2,
    },
    {
      icon: LuAlignHorizontalDistributeCenter,
      title: "",
      content: "",
      backgroundImage: herramientas,
    },
    {
      icon: RiSecurePaymentFill,
      title: "",
      content: "",
      backgroundImage: recuperacion,
    },
    {
      icon: GiAmethyst ,
      title: "Game",
      content: "",
      backgroundImage: Game,
    },
  ];