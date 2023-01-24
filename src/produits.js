import img0 from './img/assiette.jpg';
import img1 from './img/assiette2.jpg';
import img2 from './img/assiette3.jpg';
import img3 from './img/louche.jpg';
import img4 from './img/ordinateur.jpg';
import img5 from './img/portable1.jpg';
import img6 from './img/portable2.jpg';
import img7 from './img/telephone.jpg';
import img8 from './img/verre.jpg';



const produits =[
    {
        _id: '1',
        name :' plat de cuisine',
        image : `${img0}`,
        description : ' plat de cuisine derniere sorti adapter et fait pour tout les repas',
        category :'cuisine',
        price : 20.15,
        countInstock : 10,
        commentaire : 12,
        numReviews : 2,
    },
    {
        _id: '2',
        name :' plat de cuisine',
        image : `${img1}`,
        description : ' plat de cuisine derniere sorti adapter et fait pour tout les repas',
        category :'cuisine',
        price : 20.15,
        countInstock : 10,
        commentaire : 12,
        numReviews : 2,
    },
    {
        _id: '3',
        name :' plat de cuisine',
        image : `${img2}`,
        description : ' plat de cuisine derniere sorti adapter et fait pour tout les repas',
        category :'cuisine',
        price : 20.15,
        countInstock : 0,
        commentaire : 21,
        numReviews : 2,
    },
    {
        _id: '4',
        name :' louche de cuisine',
        image : `${img3}`,
        description : ' louche de cuisine derniere sorti adapter et fait pour tout les repas',
        category :'cuisine',
        price : 18.15,
        countInstock : 10,
        commentaire : 10,
        numReviews : 2,
    },
    {
        _id: '5',
        name :' ordinateur',
        image : `${img4}`,
        description : ' ordinateur de nouvelle generation au capaciter elever',
        brand : 'apple',
        category :'electronic',
        price : 90.15,
        countInstock : 10,
        commentaire : 40,
        numReviews : 2,
    },
    {
        _id: '6',
        name :' ordinateur',
        image : `${img5}`,
        description : ' ordinateur de nouvelle generation au capaciter elever',
        brand : 'apple',
        category :'electronic',
        price : 85.15,
        countInstock : 10,
        commentaire : 40,
        numReviews : 2,
    },
    {
        _id: '7',
        name :' ordinateur',
        image : `${img6}`,
        description : ' ordinateur de nouvelle generation au capaciter elever',
        brand : 'apple',
        category :'electronic',
        price : 85.15,
        countInstock : 10,
        commentaire : 40,
        numReviews : 2,
    },
    {
        _id: '8',
        name :' Telephone',
        image : `${img7}`,
        description : ' telephone de nouvelle generation au capaciter elever',
        brand : 'apple',
        category :'electronic',
        price : 90.15,
        countInstock : 10,
        commentaire : 20,
        numReviews : 2,
    },
    {
        _id: '9',
        name :' verre de table',
        image : `${img8}`,
        description : ' verre de table derniere sorti adapter et fait pour tout les repas',
        category :'cuisine',
        price : 20.15,
        countInstock : 10,
        commentaire : 20,
        numReviews : 2,
    },
]

export default produits