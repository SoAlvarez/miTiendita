import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <article key={producto.id}>
            <h3>{producto.title}</h3>
            <img src={`https://picsum.photos/200/300?random=${producto.id}`} alt={producto.title} />
            <p>Precio ${producto.price}</p>
            <Link to={"/productos/" + producto.id}>Ver más</Link>
            </article>
    )   
}

export default Item;