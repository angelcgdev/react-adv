import { useState } from 'react';
import { Product } from '../02-component-patterns/interfaces/interfaces';

interface ProducInCart extends Product {
count: number;
}

export const useShoppingCart = ()=> {
    
    const [ shoppingCard, setShoppingCard ] = useState<{ [key:string]: ProducInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product}) => {

        setShoppingCard( oldShoppingCard => {
  
          const productInCart: ProducInCart = oldShoppingCard[product.id] || { ...product, count: 0};
  
          if( Math.max(productInCart.count + count, 0) > 0 ){
            productInCart.count += count;
            return {
              ...oldShoppingCard,
              [product.id]: productInCart
            }
          }
          // borrar producto
          const { [product.id]: toDelete, ...rest } = oldShoppingCard;
          return rest;
        })
  
    }
    
    return { shoppingCard, onProductCountChange};
}