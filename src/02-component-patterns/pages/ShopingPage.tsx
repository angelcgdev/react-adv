import { products } from "../../data/products";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';





export const ShopingPage = () => {

  const { shoppingCard, onProductCountChange }  = useShoppingCart();


  return (
    <div >
        <h1>Shoping Store</h1>
        <hr/>

        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
          {/* <ProductCard product={ product1 } className="bg-dark" >
              <ProductCard.Image className="custom-image"/>
              <ProductCard.Title className="text-white"/>
              <ProductCard.Buttons  className="custom-buttons"/>
          </ProductCard> */}
          {
            products.map((product)=>(
              <ProductCard
                key={product.id}
                product={ product }
                className="bg-dark"
                value={ shoppingCard[product.id]?.count || 0}
                onChange={ onProductCountChange }
              >
                  <ProductImage className="custom-image"/>
                  <ProductTitle className="text-white"/>
                  <ProductButtons  className="custom-buttons"/>
              </ProductCard>
            ))
          }

          <div className="shoping-cart">
            {
              Object.entries(shoppingCard).map(([key, product])=>(
                
              <ProductCard
                key={key}
                product={ product }
                className="bg-dark"
                style={{ width: '100px'}}
                value={ product?.count }
                onChange={onProductCountChange}
              >
                  <ProductImage className="custom-image"/>
                  {/* <ProductTitle className="text-white"/> */}
                  <ProductButtons
                    className="custom-buttons"
                    style={{ display: 'flex', justifyContent: 'center'}}
                  />
              </ProductCard>
              ))
            }
          </div>

        </div>
    </div>
  )
}
