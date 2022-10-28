import { useState } from "react"

const FormularioAlta = (props)=>{
    const initialForm = {id: '', category: '', price: '', stocked: true, name: '', idProveedor: ''}

    const [producto, setproducto] = useState(initialForm);

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setproducto({...producto, [name]: value})
        console.log(producto)
    }
    return(
        <div>
            <h1>Alta Productos</h1>
            <form
                onSubmit={event =>{
                    event.preventDefault();
                    props.addProducto(producto)
                    setproducto(initialForm)
                }}
            >   
                 <h5>Nombre</h5>
                 <select name="name" value={producto.name} onChange={handleInputChange}>
                    <option value='' hidden>Seleccione el nombre</option>
                    <option value='Football '>Football</option>
                    <option value='Baseball '>Baseball </option>
                    <option value='iPod Touch'>iPod Touch</option>
                    <option value='iPhone 5 '>iPhone 5</option>
                    <option value='Nexus 7 '>Nexus 7</option>
                </select>
                <h5>Precio</h5>
                <input type='text' name='price' value={producto.price} placeholder="Precio" onChange={handleInputChange}/>
                <h5>Categoria</h5>
                <select name="category" value={producto.category} onChange={handleInputChange}>
                    <option value='' hidden>Seleccione una categoria</option>
                    <option value='Sporting Goods'>Sporting Goods</option>
                    <option value='Electronics'>Electronics</option>
                </select>
                <h5>Proveedor</h5>
                <select name="idProveedor" value={producto.idProveedor} onChange={handleInputChange}>
                    <option value='' hidden>Seleccione la marca del proveedor</option>
                    <option value='Nike' >Nike</option>
                    <option value='Adidas' >Adidas</option>
                    <option value='Pirma' >Pirma</option>
                    <option value='Puma' >Puma</option>
                    <option value='Jordan' >Jordan</option>
                    <option value='Wilson' >Wilson</option>
                </select>

                <button>Agregar</button>
            </form>
        </div>
)
}

export default FormularioAlta