// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components'




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
            <div>
                <h2>{info.name}</h2>
                <img src={info.image} alt=''></img>
                <p> Gender: {info.gender}</p>
                <p> Species: {info.species}</p>
                <p> Status: {info.status}</p>
            </div>
    )
    return (
        card.map((p) => {
            return <CharacterCard key ={p.id} info={p} />
        })
    )

}