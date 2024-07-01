export default function Endereco(props){
    return(
        <div>
            <h2>Endereco</h2>
            <p>Rua: {props.rua}</p>
            <p>Bairro: {props.bairro}</p>
            <p>Cidade: {props.cidade}</p>
            <p>Estado: {props.estado}</p>
        </div>
    )
}