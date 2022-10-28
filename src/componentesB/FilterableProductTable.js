import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


const FilterableProductTable =(props)=> {
  const [filterText, setFilterText] = useState(""); 
  const [inStockOnly, setInStockOnly] = useState(false);
  
  return (
    <div >
      <h1>Productos</h1>
      <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}  
        onFilterTextChange={text => setFilterText(text)}
        onInStockChange={stock => setInStockOnly(stock)}
      />
      <ProductTable 
        products={props.products} 
        filterText={filterText}
        inStockOnly={inStockOnly} 
      />
    </div>
  );
}



export default FilterableProductTable

  
  





