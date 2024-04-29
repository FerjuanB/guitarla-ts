import Guitar from './components/Guitar'
import  Header  from './components/Header'
import { useCart } from './hooks/useCart'


function App() {

   const {data,cart,handleAddToCart,removeFromCart,decreaseQuantity,increaseQuantity,clearCart,isEmpty,cartTotal}= useCart()
    /* lo que se hace es almacenar el carrito en el localStorage y se recupera de manera inicial, para que cuando se reinicie el navegador no se pierda el carrito, queda en persistencia si hay alho en la persistencia guardada previamente, carga esa persistencia, si no hay nada, carga el [] vacío*/
   


  
  return (
    <>

      <Header 
      cart={cart} 
      removeFromCart={removeFromCart}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
      clearCart={clearCart}
      isEmpty={isEmpty}
      cartTotal={cartTotal}
      />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {
                data.map((guitar)=> 
                <Guitar
                    key={guitar.id}
                    guitar={guitar}
                    handleAddToCart={handleAddToCart}
                />
                )
            }
                                      
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
     
    </>
  )
}

export default App
