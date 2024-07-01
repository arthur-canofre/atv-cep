import React, { useState, useEffect } from 'react';
import Endereco from './components/Endereco';
import './App.css';

function App() {
  const [address, setAddress] = useState(null);
  const [inpText, setInpText] = useState("");
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
    } catch (error) {
      console.error("Error: ", error);
      setAddress(null);
    }
  };

  useEffect(() => {
    if (cep) {
      fetchAddress();
    }
  }, [cep]);

  return (
    <>
      <input type='text' value={inpText} onChange={handleInputChange} />
      <button onClick={handleButtonChange}>Buscar</button>
      {address && (
        <>
          <Endereco
          rua={address.logradouro}
          bairro={address.bairro}
          cidade={address.localidade}
          estado={address.uf}/>
        </>
      )}
    </>
  );
}

export default App;