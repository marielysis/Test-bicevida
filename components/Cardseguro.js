import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
    width: 328px;
    height: 272px;
    background: #FFFFFF;
    border: 1px solid #DDE3ED;
    border-radius: 8px;
`;
const Titulo = styled.h2`
    width: 216px;
    height: 24px;
    font-family: Poppins;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #060B25;
`;
const Imagen = styled.img`
    width: 100%;
`;
const Label = styled.label`
    width: 52px;
    height: 20px;
    background: #1F61F7;
    border-radius: 4px;
    Label text:
    font-family: Poppins;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.2px;
    color: #F5F7FA;
`
const Descripcion = styled.p`
    width: 100%;
    font-family: Poppins;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #58606E;
`

const Cardseguro = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado);

    const { description, name, image, price } = resultado;
    return ( 
        <Card>
            <div>
                <Imagen src={image} alt="imagencard" />
                <Label>{price}</Label>
            </div>
            <div>
                <Titulo>{name}</Titulo>
            </div>
            <div>
            <Descripcion>{description}</Descripcion>
            </div>
            
        </Card>
     );
}
 
export default Cardseguro;