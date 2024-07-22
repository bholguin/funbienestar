export const useHome = () => {

        const options = [{
            url: '/assets/formacion.jpeg'
        }, {
            url: '/assets/formacion-smat.jpg'
        }, {
            url: '/assets/inpec-helps.jpg'
        }]
    
        const aliados = [{
            url: '/assets/policia.jpg'
        }, {
            url: '/assets/inpec.png'
        }, {
            url: '/assets/ejercito.jpg'
        }, {
            url: '/assets/casur.jpg'
        }, {
            url: '/assets/mineducacion.jpg'
        }]

        const itemData = [
            {
              img: '/assets/img-web-1.jpg',
              title: 'img-web-1',
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
              img: '/assets/img-web-4.jpg',
              title: 'img-web-1',

            },
            {
              img: '/assets/img-web-5.jpg',
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
              img: '/assets/img-web-8.jpg',
              title: 'img-web-1',
            },
            {
              img: '/assets/img-web-9.jpg',
              title: 'img-web-1',
            },
            {
              img: '/assets/imagen-3.jpeg',
              title: 'img-web-1',
            },
            {
              img: '/assets/imagen-2.jpeg',
              title: 'img-web-1',
            },
            {
              img: '/assets/imagen-1.jpeg',
              title: 'img-web-1',
            },
          ];

        return {
            itemData,
            aliados,
            options
        }
}