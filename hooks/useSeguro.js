import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
    font-family: Poppins;
    color: #333333;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 2rem;
    display: block;

`;

const Select = styled.select`
    width: 100%;
    display: block;
    margin-top: 2rem;
    background: #FFFFFF;
    border: 1px solid #DDE3ED;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 1rem;
    min-width: 300px;
    font-size: 1.2rem;
`


const useSeguro = (label, stateInicial, opciones) => {

    // state del custom hook

    const [state, actualizarState] = useState(stateInicial);
    
    const Seleccionar = () => (
        <>
            <Label>{label}</Label>
            <Select
                onChange={ e => actualizarState(e.target.value)}
                value={state}
            >
            <option value="">- Seleccione </option>
                {opciones.map(opcion => (
                    <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                ))}
            </Select>
        </>
    );

    // retornar state, interfaz y funcion 
    return [state, Seleccionar, actualizarState]
    
}

export default useSeguro;