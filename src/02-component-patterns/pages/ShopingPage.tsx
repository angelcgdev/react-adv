import { count } from "console";
import { products } from "../../data/products";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';


const product = products[0];



export const ShopingPage = () => {

  return (
    <div >
        <h1>Shoping Store</h1>
        <hr/>

        <ProductCard
          key={product.id}
          product={ product }
          className="bg-dark"
          initialValues={{
            count: 4,
            maxCount: 10
          }}

        >
          {
            ( { reset, increaseBy,isMaxCountReached, count, maxCount } )=>(
              <>
                <ProductImage className="custom-image"/>
                <ProductTitle className="text-white"/>
                <ProductButtons  className="custom-buttons"/>
                <button onClick={reset}>reset</button>
                <button onClick={()=>increaseBy(-2)}> -2 </button>
                {
                  !isMaxCountReached&&
                  <button onClick={()=>increaseBy(2)}> +2 </button>
                }
                
                <span>{ count } - { maxCount }</span>
              </>
            )
          }
        </ProductCard>
    </div>
  )
}
