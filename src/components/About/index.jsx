import styled from "styled-components"
import meImg from '../../assets/images/me.jpg'


const Container = styled.section`
   padding: 80px 60px;
   background-color: #FFFFFF;


@media(max-width:724px){
    padding: 60px 40px;
}
`
const Content = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media(max-width:1024px){
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
`
const Image = styled.div`
  height: 60vh; 
  

img {
    width: 100%;
    height: 100%;
    border-radius: 30px;

    @media(max-width:1024px){
        height: 80%;
    }  
}
`


const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media(max-width:1024px){
    margin-top: 0;
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



export function About() {
    return (
        <Container >
            <Content
                id='about-content'
            >
                <Image
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-once="true"
                >
                    <img src={meImg} alt="Minha foto" />
                </Image>
                <Text
                >
                    <h2
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-once="true"
                    >01. SOBRE MIM</h2>
                    <p
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-once="true"
                    >
                        Oi, meu nome é  Yan Emanuel, tenho 20 anos e estou estudando
                        desenvolvimento Front-End. Comecei a estudar em 2021 através da internet
                        e rapidamente me interessei pela construção de sites e interfaces. Ainda não tenho
                        experiência no mercado de trabalho e estou em busca da minha primeira oportunidade.
                    </p>
                </Text>
            </Content>
        </Container>
    )
}