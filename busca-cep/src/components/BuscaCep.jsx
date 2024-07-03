import { useState, useEffect } from 'react';
import Endereco from "./Endereco";

export default function BuscaCep(){
const [address, setAddress] = useState(null);
  const [inpText, setInpText] = useState("");
  const [error, setError] = useState(null)
  const [cep, setCep] = useState("");

  const handleInputChange = (event) => {
    setInpText(event.target.value);
  };

  const handleButtonChange = () => {
    setCep(inpText);
  };

  const fetchAddress = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAddress(data);
      setError(false)
    } catch (error) {
      setError(true)
      setAddress(null);
    }
  };

  useEffect(() => {
    if (cep) {
      fetchAddress();
    }
  }, [cep]);

  return (
    <section>
      <div className='container-pesquisa'>
        <input type='number' value={inpText} onChange={handleInputChange} />
        <button onClick={handleButtonChange}>Buscar</button>
      </div>
      {error && (
        <p>Cep nao encontrado</p>
      )}
      {address && (
        <>
          <Endereco
          rua={address.logradouro}
          bairro={address.bairro}
          cidade={address.localidade}
          estado={address.uf}/>
        </>
      )}
    </section>
  );
}