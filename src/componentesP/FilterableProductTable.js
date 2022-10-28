import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


const FilterableProductTable =(props)=> {
  const [filterText, setFilterText] = useState(""); 
  const [inStockOnly, setInStockOnly] = useState(false);
  const [inStockOnlyMayoreo, setInStockOnlyMayoreo] = useState(false);
  const [inStockOnlyMenudeo, setInStockOnlyMenudeo] = useState(false);
  
 
  
  return (
    <div >
      <h1>Proveedores</h1>
      <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}  
        
        onFilterTextChange={text => setFilterText(text)}
        onInStockChange={stock => setInStockOnly(stock)}
        onInStockChangeMayoreo={stock => setInStockOnlyMayoreo(stock)}
        onInStockChangeMenudeo={stock => setInStockOnlyMenudeo(stock)}
        
      
        
       
      />
      <ProductTable 
        products={props.products} 
        filterText={filterText}
        inStockOnly={inStockOnly} 
        inStockOnlyMayoreo={inStockOnlyMayoreo} 
        inStockOnlyMenudeo={inStockOnlyMenudeo} 
       
        
      />
    </div>
  );
}



export default FilterableProductTable

  
  





