import { useEffect } from "react";

export const useDonaciones = () => {

  const itemData = [
    {
      img: '/assets/img-web-10.jpeg',
      title: 'img-web-10',
    },
    {
      img: '/assets/img-web-2.jpg',
      title: 'img-web-1',
    },
    {
      img: '/assets/img-web-7.jpg',//
      title: 'img-web-1',
    },
    {
      img: '/assets/img-web-11.jpeg',
      title: 'img-web-11',
    },
    {
      img: '/assets/img-web-4.jpg',
      title: 'img-web-1',

    },

    {
      img: '/assets/img-web-6.jpg',
      title: 'img-web-1',
    },
    {
      img: '/assets/img-web-3.jpg',//
      title: 'img-web-1',
    },

    {
      img: '/assets/img-web-9.jpg',
      title: 'img-web-1',
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return {
    itemData
  }
}