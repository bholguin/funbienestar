import { useEffect } from "react";

export const useHome = () => {
  const options = [
    {
      url: "/assets/paralimpicos-1.jpeg",
    },
    {
      url: "/assets/formacion-smat.jpg",
    },
    {
      url: "/assets/formacion.jpeg",
    },
    {
      url: "/assets/inpec-helps.jpg",
    },
  ];

  const aliados = [
    {
      url: "/assets/policia.jpg",
    },
    {
      url: "/assets/inpec.png",
    },
    {
      url: "/assets/ejercito.jpg",
    },
    {
      url: "/assets/casur.jpg",
    },
    {
      url: "/assets/mineducacion.jpg",
    },
  ];

  const itemData = [
    {
      img: "/assets/juegos-olimpicos.jpeg",
      title: "img-web-1",
    },
    {
      img: "/assets/img-web-5.jpg",
      title: "img-web-1",
    },
    {
      img: "/assets/paralimpicos-3.jpeg",
      title: "img-web-1",
    }, {
      img: "/assets/paralimpicos-4.jpeg",
      title: "img-web-1",
    },


   
    {
      img: "/assets/imagen-3.jpeg",
      title: "img-web-2",
    },
    {
      img: "/assets/imagen-2.jpeg",
      title: "img-web-3",
    },
    {
      img: "/assets/imagen-1.jpeg",
      title: "img-web-4",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    itemData,
    aliados,
    options,
  };
};
