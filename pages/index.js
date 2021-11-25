import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';
import Formulario from '../components/Formulario';
import Cardseguro from '../components/Cardseguro';
import axios from 'axios';


const Contenedor = styled.div`
  max-width: 1100px;
  margin: 0 auto; 
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

export default function Home() {

  const [ seguro, guardarSeguro ] = useState(''); 
  const [resultado, guardarResultado] = useState({});

  // ejecutar llamado a la API

  useEffect(() => {
      
    const consultarAPI = async () => {
      if(seguro === '') return;

      /* Consultando la api */
      const url = `https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${seguro}`;

      const resultado = await axios.get(url);
      guardarResultado(resultado.data.insurance);

    }
    consultarAPI();
  }, [seguro])

  return (
    <div>
      <Layout>
        <Contenedor>
        <div>
          <Formulario
            guardarSeguro={guardarSeguro}
          />
        </div>
        <div>
          <Cardseguro 
            resultado={resultado}
          />
        </div>
        </Contenedor>        
      </Layout>
    </div>
  )
}
   