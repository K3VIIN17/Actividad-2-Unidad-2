import React from 'react'
const ProductCategoryRow=(props)=> {
  const id = props.nombre;
  return (
    <tr>
      <th colSpan="2" >
        {id}
      </th>
    </tr>
  );
}
export default ProductCategoryRow