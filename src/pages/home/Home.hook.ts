export const useHome = () => {

        const options = [{
            url: 'http://localhost:3000/assets/formacion.jpeg'
        }, {
            url: 'http://localhost:3000/assets/formacion-smat.jpg'
        }, {
            url: 'http://localhost:3000/assets/inpec-helps.jpg'
        }]
    
        const aliados = [{
            url: 'http://localhost:3000/assets/policia.jpg'
        }, {
            url: 'http://localhost:3000/assets/inpec.png'
        }, {
            url: 'http://localhost:3000/assets/casur.jpg'
        }, {
            url: 'http://localhost:3000/assets/ejercito.jpg'
        }, {
            url: 'http://localhost:3000/assets/mineducacion.jpg'
        }]

        return {
            aliados,
            options
        }
}