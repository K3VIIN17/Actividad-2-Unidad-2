import React from 'react'


const SearchBar=(props)=> {
  
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;
  const inStockOnlyMayoreo = props.inStockOnlyMayoreo;
  const inStockOnlyOnline = props.inStockOnlyOnline;
  
  
  
  return (
    <form>
      
      <input 
        type="text" 
        placeholder="Search..." 
        value={filterText}
        onChange={e => props.onFilterTextChange(e.target.value)} 
       
      />
      <p>
      <h5>Tipos</h5>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={e => props.onInStockChange(e.target.checked)}
         
        />
        <span >
          Proveedor Online
        </span>
        <br></br>
        <input 
          type="checkbox" 
          checked={inStockOnlyOnline} 
          onChange={e => props.onInStockChangeMayoreo(e.target.checked)}
         
        />
        
        <span >
          Proveedor Mayoreo
        </span>
        <br></br>
        <input 
          type="checkbox" 
          checked={inStockOnlyMayoreo} 
          onChange={e => props.onInStockChangeMenudeo(e.target.checked)}
         
        />
        <span >
          Proveedor Menudeo
        </span>
      </p>
    </form>
  );
}
export default SearchBar