import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div>
            <Link to='/buscar-cep'>Pesquisar um cep</Link>
            <Link to='/dogs'>Fotos de dogs</Link>
        </div>
    )
}