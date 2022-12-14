import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { firestoreFetch } from '../utils/firebaseconfig';



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const{ id } = useParams();

    useEffect (() => {
        firestoreFetch(id)
        .then(result => setProductos(result))
    },[id]);
    return(
    <>
    {
        productos.map(item => 
            
            (<>
            <div class='contenedor'>
            <h4>{item.name}</h4>
            <Link to={`/item/${item.id}`}><img src={item.image} alt='' class='imagenes'/></Link> 
            </div>
            </>
            ))
    }
    </>)
}

export default ItemListContainer;