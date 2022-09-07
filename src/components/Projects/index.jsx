import pokemonImg from '../../assets/images/pokemon.png'
import todoImg from '../../assets/images/todo.png'
import siteImg from '../../assets/images/4ano.png'
import styled from 'styled-components'

import { Card } from '../../components/Card'


const Container = styled.section`

width: 100%;
padding: 80px 60px;
display: flex;
flex-direction: column;

@media(max-width:1024px){
    align-items: center;
}

@media(max-width:724px){
    padding: 60px 40px;
}

`

const Title = styled.h2`
font-size: 40px;
margin-bottom: 40px;
color: #0F1215;
font-family: Rubik, sans-serif;
font-weight:500;

    @media(max-width:732px){
        font-size: 30px;
    }
`


const Cards = styled.nav`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
grid-gap: 40px;
place-items: center center;

@media(max-width:1024px){
    grid-gap: 30px;
}

@media(max-width:500px){
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
`

export function Projects() {

    return (
        <Container id='projects-container'>
            <Title
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-once="true"
            >03. PROJETOS</Title>
            <Cards
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-once="true"
            >
                <Card img={pokemonImg} title='Pokebatalha'
                    link='https://github.com/yanmatos/pokebatalha' />
                <Card img={todoImg} title='To-Do'
                    link='https://github.com/yanmatos/ToDo' />
                <Card img={siteImg} title='Discord 4ano'
                    link='https://github.com/yanmatos/site4ano' />
            </Cards>

        </Container>
    )
}