// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components'

const StyledContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    @media(max-width: 500px) {
    &{
    width: 90vw;
    }
    }
 `
const FlipCard = styled.div`
    background-color: transparent;
    width: 15vw;
    height:30vh;
    perspective: 1000px;
    padding: 15px;
    margin: 15px;
    @media(max-width: 500px) {
    &{
    width: 90vw;
    }
}
`
const FlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    &:hover {
    transform: rotateY(180deg);
    }
`
const FlipCardFront = styled.div`
    position: absolute;
    padding: 10px;
    background-color: #51E5FF;
    border: 3px solid #51E5FF;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    img {
        width: 100%;
        height: 100%;
    }
`
const FlipCardBack = styled.div`
    background-color: #440381;
    border: 10px solid #51E5FF;
    transform: rotateY(180deg);
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    h2{
        color: white;
        text-decoration:underline;
    }
    p{
        color: white;
    }
`
const CardContainer = styled.div`
    display:flex;
    margin: 15px;
    @media(max-width: 500px) {
    &{
    width: 90%;
    }
}
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
            <CardContainer>
                <FlipCard>
                    <FlipCardInner>
                        <FlipCardFront>
                            <img src={info.image} alt=''></img>
                        </FlipCardFront>
                        <FlipCardBack>
                            <h2>{info.name}</h2>
                            <p> Gender: {info.gender}</p>
                            <p> Species: {info.species}</p>
                            <p> Status: {info.status}</p>
                        </FlipCardBack>
                    </FlipCardInner>
                </FlipCard>
            </CardContainer>
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