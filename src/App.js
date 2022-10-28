
import './App.css';
import { useState } from 'react'
import FilterableProductTable from './componentesB/FilterableProductTable'
import FilterableProductTableP from './componentesP/FilterableProductTable'
import FormularioAlta from './componentesB/FormularioAlta'

const App =() => {

const PRODUCTS = [
  {id: '33', category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football', idProveedor: 1},
  {id: '12', category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball', idProveedor: 2},
  {id: '334', category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball', idProveedor: 3},
  {id: '44', category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch', idProveedor: 4},
  {id: '55', category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5', idProveedor: 5},
  {id: '66', category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7', idProveedor: 6}
];

const PRODUCTS2 = [
  {id: '1222', nombre: 'Nike', estado: 'Proveedor online', stocked: 1},
  {id: '3232', nombre: 'Adidas', estado: 'Proveedor online', stocked: 1},
  {id: '3434', nombre: 'Puma', estado: 'Proveedor Menudeo', stocked: 0},
  {id: '4545', nombre: 'Pirma', estado: 'Proveedor Menudeo', stocked: 0},
  {id: '6766', nombre: 'Wilson', estado: 'Proveedor Mayoreo', stocked: 2},
  {id: '9655', nombre: 'Jordan', estado: 'Proveedor Mayoreo', stocked: 2}
];


  
const [productos, setProductos] = useState(PRODUCTS);

const addProducto = (producto) =>{
  producto.id = producto.length + 1;
  setProductos([...productos, producto])
}

console.log(PRODUCTS)
  return (<div className='container'>

<FormularioAlta  addProducto={addProducto}/>
<div className="flex-row">
<div className="flex-large">

<div className='container'>
<h2>Filtro de deportes</h2>
<FilterableProductTable products = {productos} />
</div>

</div>
  <div className="flex-large">
    <h2>Filtro de proveedores</h2>
    <FilterableProductTableP  products={PRODUCTS2}/>
    <br></br> <br></br>
   
  </div>
</div>
</div>

  );
}

export default App;