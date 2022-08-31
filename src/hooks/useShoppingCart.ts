import { useState } from 'react';
import { Product } from '../02-component-patterns/interfaces/interfaces';

interface ProducInCart extends Product {
count: number;
}

export const useShoppingCart = ()=> {
    
    const [ shoppingCard, setShoppingCard ] = useState<{ [key:string]: ProducInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product}) => {

        console.log( { count })

        setShoppingCard( oldShoppingCard => {
  
          if( count === 0) {
            const { [product.id]: toDelete, ...rest} = oldShoppingCard;
            return rest;
          }

          return {
            ...oldShoppingCard,
            [product.id]: { ...product, count }
          }

        })
  
    }
    
    return { shoppingCard, onProductCountChange};
}