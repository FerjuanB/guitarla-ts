import type { Guitar } from '../types/types'


type GuitarProps={
  guitar: Guitar
  handleAddToCart: (item: Guitar) => void
}
const Guitar = ({guitar,handleAddToCart}:GuitarProps) => {


    const {id,name,image,description,price}=guitar


   
  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
    <div className="col-4">
        <img className="img-fluid" src={`./img/${image}.jpg`} alt="imagen guitarra" />
    </div>
    <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button 
            type="button"
            className="btn btn-dark w-100"
            //el prevCart es el estado previo, para sustituir y no recibir el cart completo por props
            onClick={()=>handleAddToCart(guitar)}
        >Agregar al Carrito</button>
    </div>
</div>
  )
}

export default Guitar