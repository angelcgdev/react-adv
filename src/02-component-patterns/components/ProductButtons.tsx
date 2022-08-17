import { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
  className?: string;
  style?: CSSProperties
} 

export const ProductButtons = ({ className, style }: Props) => {

    const { counter, increaceBy } = useContext( ProductContext );

  return (
    <div className={ `${styles.buttonsContainer} ${ className }` } style={style} >
        <button className={ styles.buttonMinus } onClick={()=>increaceBy(-1)}>-</button>
        <div className={ styles.countLabel }>{ counter }</div>
        <button className={ styles.buttonAdd } onClick={()=>increaceBy(1)} >+</button>
    </div>
  )
}
