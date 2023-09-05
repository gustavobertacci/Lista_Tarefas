import {Link} from "react-route-dom"
export default function Menu(){

    return(
        <nav className='menu'>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/produtos'>Produtos</Link>

        </nav>
    )
}