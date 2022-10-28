import React from 'react'

const ProductRow =(props)=>{
  const product = props.product;
  const nombre = product.stocked ? 
    product.nombre :
    <span >
      {product.nombre}
    </span>;

  return (
    <tr >
      <td >{nombre}</td>
      <td >{product.estado}</td>
    </tr>
  );
}
export default ProductRow