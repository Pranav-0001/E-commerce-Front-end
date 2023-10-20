import { faker } from '@faker-js/faker';
import { Product } from '../models/product';


const getProducts = () :Product  => {
    const productName = faker.commerce.productName();
    const productPrice = faker.commerce.price();
    const productDescription = faker.lorem.sentences();
    const imageUrl = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`;
    const productRating = Math.floor(Math.random() * 5) + 1;
    const brandName = faker.commerce.productAdjective();
    const product = {
        name: productName,
        price: productPrice,
        description: productDescription,
        image: imageUrl,
        rating: new Array(productRating).fill(0),
        brand:brandName,
        inWishlist:false

    };
    return product
}

export const suggestion = () => {
    let products:Product[]=[]
    for(let i=0;i<5;i++){
        products.push(getProducts())
    }
    return products
}

export const popular=()=>{
    let products:string[]=[]
    for(let i=0;i<5;i++){
        products.push(getProducts().name)
    }
    return products
}

export const results=()=>{
    let products:Product[]=[]
    for(let i=0;i<8;i++){
        products.push(getProducts())
    }
    return products
}

