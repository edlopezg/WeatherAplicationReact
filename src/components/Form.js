import React from 'react'
import { useState } from 'react'

const Form = ({newLocation}) => {
    //variable de estado que hace referencia a la ciudad que estamos buscando 
 const [city, setcity] = useState('') 
 const onsubmit = (change) => {
     // esta funcion evita que se recargue la pagina
     change.preventDefault()
     console.log({city});
     if (city === '' || !city ) return;
         newLocation(city);
     
 } 
 

    return (
    <div className='container'>
        <form onSubmit={onsubmit}>
            <div className='input-group mb-3 mx-auto'>
                <input type='text' className='form-control' placeholder='Enter city' onChange={(change) => setcity(change.target.value)} />
                    <button className='btn btn-primary input-group-text' type='submit'>Search</button>
            </div>
        </form>
    </div>
  )
}
                


export default Form