import {Link} from 'react-route-dom'
import {listaProdutos} from'../../components/listaProdutos'
export default function Produtos(){

    return(
        <main>
            <h1>Produtos</h1>
            {listaProdutos.map(prod=> (
                <div key={prod.id}>
                    <Link to ={'/produtos/editar/${prod.id}'}>
                        Editar o produto: {prod.id}
                    </Link>

                </div>
            ))}
        </main>
    )
}