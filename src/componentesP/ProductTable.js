import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const ProductTable=(props)=> {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;
  const inStockOnlyMayoreo = props.inStockOnlyMayoreo;
  const inStockOnlyMenudeo = props.inStockOnlyMenudeo;
  


  
  
  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.nombre.indexOf(filterText) === -1) {
      return;
    }
   

    if (inStockOnly && product.stocked === 2) {
      return;
      
    }

    
    if (inStockOnly && product.stocked === 0) {
      return;
      
    }


    if (inStockOnlyMayoreo && product.stocked === 1) {
      return;
      
    }

    
    if (inStockOnlyMayoreo && product.stocked === 0) {
      return;
      
    }
    

    if (inStockOnlyMenudeo && product.stocked === 1) {
      return;
      
    }

    
    if (inStockOnlyMenudeo && product.stocked === 2) {
      return;
      
    }
    
  
    

    if (product.id !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          id={product.id}
          key={product.id} />
      );
    }
    
    rows.push(
      <ProductRow
        product={product}
        key={product.nombre}
      />
    );
    lastCategory = product.id;
  });

  return (
    <table >
      <thead>
        <tr >
          <th >nombre</th>
          <th >Estado</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable