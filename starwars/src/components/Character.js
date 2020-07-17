// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components'

const StyledContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
 `
const StyledCard = styled.div`
    display:flex;
    flex-direction:column;
    border: 3px solid blue;
    padding: 15px;
    margin: 15px;
    width: 15vw;
    background-color:white;
`



export default function Character (){

    const [card, setCard] = useState([])

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(res => {
            // console.log('It worked', res)
            setCard(res.data.results)
            // console.log(res.data.results)
        })
        .catch(err =>{
            // console.log('It failed', err)
        })
    },[])


    const CharacterCard = ({info}) => (
            
                <StyledCard>
                    <h2>{info.name}</h2>
                    <img src={info.image} alt=''></img>
                    <p> Gender: {info.gender}</p>
                    <p> Species: {info.species}</p>
                    <p> Status: {info.status}</p>
                </StyledCard>
     
    )
    return (
        <StyledContainer>
            {
            card.map((p) => {
                return <CharacterCard key ={p.id} info={p} />
            })
            }
        </StyledContainer>
    )

}