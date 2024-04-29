export type Guitar = {
    id: number
    name:string
    image:string
    description: string
    price:number
  }

  
export type CartItem = Guitar & {
  quantity: number
}


//* el pick te permite seleccionar algunos datos de la estructura principal
// export type CartItem = Pick <Guitar, 'id'| 'name' | 'price'> &{
    
//     quantity: number
//   }

  
  //*el omit te permite omitir algunos daots de la estructura principal
// export type CartItem = Omit <Guitar, 'id'| 'name' | 'price'> &{
    
//     quantity: number
//   }

  

