import React from 'react';
import styled from 'styled-components';

export default function Character(props)
{
    const Container = styled.div` 
         width: 50%;
        display: flex;
        flex-direction: column;
        margin: 1% 1% 1% 25%;
        padding: 8px;
        background-color: black;
        opacity: 90%;
        color: #0077b6;

    span{
        padding: 10px;
    }
`;

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid #0077b6;
color: #0077b6;
margin: 0.5em 1em;
padding: 0.25em 1em;
`;

return (
<Container>
    <span>
        {props.info.name}
    </span>
    <Button onClick={() => props.openInfo(props.info.id)}>
        See Discription
    </Button>
</Container>
);
} 
