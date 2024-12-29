import product1 from './assets/product1.png';
import product2 from './assets/product2.png';
import product3 from './assets/product3.png';
import product4 from './assets/product4.png';
import product5 from './assets/product5.png';
import product6 from './assets/product6.png';
import product7 from './assets/product7.png';
import product8 from './assets/product8.png';


export default function handler(req,res){
    
        const products = [
            {
              id: 1,
              name: "Shirts",
              price: 100,
              discount: 50,
              image: {product1},
            },
            {
              id: 2,
              name: "T-shirts",
              price: 50,
              discount: 20,
              image: {product2},
            },
            {
              id: 3,
              name: "Jeans",
              price: 150,
              discount: 30,
              image: {product3},
            },
            {
              id: 4,
              name: "Jackets",
              price: 200,
              discount: 40,
              image: {product4},
            },
            {
              id: 5,
              name: "Sneakers",
              price: 80,
              discount: 25,
              image: {product5},
            },
            {
              id: 6,
              name: "Hats",
              price: 30,
              discount: 10,
              image: {product6},
            },
            {
              id: 7,
              name: "Sweaters",
              price: 120,
              discount: 35,
              image: {product7},
            },
            {
              id: 8,
              name: "Shorts",
              price: 60,
              discount: 15,
              image: {product8},
            }
          ];

res.status(200).json(products);    
}