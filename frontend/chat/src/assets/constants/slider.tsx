import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  
  
  import ChatUser from "../imgs/Chat-user.png";
  import Colores from "../imgs/colores.jpeg";
  
  
  interface Service {
    icon: any;
    title: string;
    content: string;
    backgroundImage: string;
  }
  
  export const ServiceData: Service[] = [
    {
      icon: RxCrop,
      title: "Development",
      content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
      backgroundImage: ChatUser,
    },
    {
      icon: RxPencil2,
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: Colores,
    },
    {
      icon: RxDesktop,
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: ChatUser,
    },
    {
      icon: RxReader,
      title: "Seo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: ChatUser,
    },
    {
      icon: RxAccessibility,
      title: "Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: ChatUser,
    },
    {
      icon: RxRocket,
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: ChatUser,
    },
  ];