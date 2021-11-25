import React, {useState} from 'react';
import styled from '@emotion/styled';
import useSeguro from '../hooks/useSeguro';



const InputSubmit = styled.button`
    display: flex;
    flex-direction: row;
    padding: 8px 32px;
    width: 113px;
    height: 48px;
    margin-top: 2rem;
    background: #1F61F7;
    box-shadow: 0px 10px 16px rgba(18, 25, 84, 0.07);
    border-radius: 1000px;
    border: none;
    &:hover {
        cursor: pointer;
    }
    font-family: Poppins;
    font-weight: bold;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
`;

const Form = styled.form`
    position: relative;
`;

const Formulario = ( {guardarSeguro} ) => {

    const [ error, guardarError ] = useState(false);

    const SEGUROS = [ 
        { id: 58, nombre: 'Seguro Vida Activa' },
        { id: 59, nombre: 'Seguro Viaje Protegido' }
    ]

    // utilizar hook useSeguro
    const [ seguro, SelectSeguro] = useSeguro('Elige tu Seguro', '', SEGUROS);

    // cuando el usuario hace submit
    const mostrarSeguro = e => {
        e.preventDefault();

        // validar si el campo esta lleno
        if(seguro === '') {
            guardarError(true);
            return;
        }
        // pasar los datos al componente principal
        guardarError(false);
        guardarSeguro(seguro)
    }

    return (
        <Form
            onSubmit={mostrarSeguro}
        >
            {error ? 'Hay un error': null}
            <SelectSeguro />

            <InputSubmit type="submit">Buscar</InputSubmit>
        </Form>
    );
};

export default Formulario;