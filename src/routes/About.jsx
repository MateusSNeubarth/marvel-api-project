import React from 'react'

import Container from '../components/Container'

export default function About() {
    return (
        <Container>
            <h1>About this site</h1>
            <p>Simple website to search Marvel Heros by their names using the public Marvel API. This application is a learning experience, 
            so please share your opinions and possible contribuitions on my personal <a className="github" href='https://github.com/MateusSNeubarth/marvel-api-project' target="_blank" rel='noreferrer'>Github</a></p>
        </Container>
    )
}