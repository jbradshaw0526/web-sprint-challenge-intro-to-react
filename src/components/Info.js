import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


export default function Info(props) 
{
    const [homeworld, setHomeworld] = useState(null);

    useEffect(() =>
    {
        console.log(props.info[0].homeworld);
        console.log("Loading the  homeworld...");
        axios.get(`${props.info[0].homeworld}`)
            .then(response =>
            {
                console.log(response.data);
                setHomeworld(response.data);
            })
            .catch(err =>
            {
                console.error(err);
            });
    }, []);

    const Container = styled.div` 
        width: 70%;
        display: flex;
        flex-direction: column;
        margin: 1% 1% 1% 15%;
        padding: 8px;
        background-color: black;
        opacity: 90%;
        color: #AB1822;
        
        span{
            display: inline-block;
            padding: 10px;
        }
    `;

    const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #AB1822;
        color: #AB1822;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `;

    const HomeworldContainer = styled.div`
        padding: 8px;
        color: red;
    `;

    return (
        <Container>
            <h2>Information on {props.info[0].name}</h2>
            <p>Born in year: {props.info[0].birth_year}</p>
            <p>Eye color: {props.info[0].eye_color}</p>
            <p>Hair color: {props.info[0].hair_color}</p>
            {
                homeworld && <HomeworldContainer>
                    <h3>Homeworld:</h3>
                    <p>Name: {homeworld.name}</p>
                    <p>Climate: {homeworld.climate}</p>
                    <p>Terrain: {homeworld.terrain}</p>
                    <p>Population: {homeworld.population}</p>
                </HomeworldContainer>
            }

            <Button onClick={props.closeInfo}>Close Description</Button>
        </Container>
    );

}