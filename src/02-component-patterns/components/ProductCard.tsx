import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';




export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
  // children?: ReactElement | ReactElement[];
  className?: string;
  initialValues?: InitialValues
  product: Product;
  style?: CSSProperties;
  value?: number;
  children: ( args: ProductCardHandlers ) => JSX.Element;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( { onChange, product, value, initialValues } );

  return (
    <Provider value={ {product, counter, increaseBy, maxCount} }>
      <div className={ `${styles.productCard}  ${className}` } style={ style }>
        {
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            
            increaseBy,
            reset,
          })
        }
      </div>
    </Provider>
  )
}
