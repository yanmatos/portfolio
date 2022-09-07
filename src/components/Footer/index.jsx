import styled from "styled-components"
import logoImg from "../../assets/images/logo192.png"


const Container = styled.footer`

width: 100%;
padding: 30px 60px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #0F1215;

@media(max-width:724px){
    padding: 60px 40px;
}

@media(max-width:425px){
    flex-direction: column;
    gap: 10px;
   
}

img {
    max-width: 50px;
}

`
const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

h3{

    color: #fff;
}

p{
    color: #fff;
}

`


export function Footer() {
    return (
        <Container>
            <img src={logoImg} alt="" />
            <Content>
                <h3>Contato:</h3>
                <p>yan.trab25@outlook.com</p>
            </Content>
        </Container>
    )
}