import skillsImg from '../../assets/images/skills.svg'
import styled from "styled-components"


const Container = styled.section`
width: 100%;
display: flex;
justify-content: space-between;
padding: 80px 60px;
background-color: #FFFFFF;

@media(max-width:1024px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media(max-width:724px){
    padding: 60px 40px;
}
`
const Image = styled.div`
max-width: 500px;

@media(max-width:1024px){
    order: -1;
    max-width: 400px;
}

@media(max-width:782px){
    max-width: 350px;
}


img {
 width: 100%;
 height: 100%;
}
`

const Text = styled.div`
display: flex;
flex-direction: column;
width: 55%;

@media(max-width:1024px){
    margin-top: 10px;
    width: 100%;
    align-items: center;
    text-align: center;
}

h2 {
    font-size: 40px;
    margin-bottom: 40px;
    color: #0F1215;
    font-family: Rubik, sans-serif;
    font-weight:500;

 @media(max-width:732px){
    font-size: 30px;
    margin-bottom: 15px;
}

@media(max-width:320px){
    font-size: 28px;
    line-height: 1.5rem
}
}

p{
 font-size: 20px;
 line-height: 2rem;
 color: #000;

 @media(max-width:732px){
    font-size: 18px;
}

@media(max-width:320px){
    font-size: 16px;
    line-height: 1.5rem
}
}
`

export function Skills() {
    return (
        <Container id='skills-container'>
            <Text
            >
                <h2
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-once="true"
                >02. HABILIDADES</h2>
                <p
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="200"
                    data-aos-once="true"
                >
                    Tenho conhecimento básico/intermediário de JavaScript, tendo foco na utilização de ReactJs em meus projetos de estudo.
                    Além disso, tenho um conhecimento básico/intermediário de Html e Css,
                    já tendo utilizado também Sass e Styled-Components em meus projetos pessoais.
                </p>
            </Text>
            <Image
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-once="true"
            >
                <img src={skillsImg} alt="foto habilidades" />
            </Image>
        </Container>
    )

}