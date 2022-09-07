import styled from "styled-components"


const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
transition: all 0.5s ease;
position: relative;

&:hover{
    background-color: #0F1215;
    cursor: pointer;

    img {
      opacity: 0.2;
    }

    #description {
        opacity: 1;
    }

    svg {
        opacity: 1;
        z-index: 1;
        transition: opacity 0.5s linear;   
    }

}

h2{
    position: absolute;
    top: 30px;
    left: 30px;
    color: #fff;
    font-size: 25px; 
    z-index: 1;
    
}

   svg{
    top: 30px;
    right: 30px;
    position: absolute;
    fill: #fff;
    opacity: 0;
}

@media (max-width: 500px){
    h2{
        font-size: 16px;
        left: 10px;
    }
}

`

const Description = styled.p`
    position: absolute;
    top: 70px;
    left: 30px;
    color: #fff;
    text-decoration: none;
    opacity: 0;
    font-size: 18px;
    z-index: 1;

    @media (max-width: 500px){
        font-size: 12px;
        left: 10px;
    
}
`

const Image = styled.a`
width: 100%;
height: 100%;

img {
    width: 100%;
    height: 100%;
    transition: opacity 0.5s linear;    
}
`

export function Card({ title, img, link }) {

    return (
        <Container>
            <h2>{title}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.175 21.475q-1.125 0-1.887-.763-.763-.762-.763-1.887V5.175q0-1.125.763-1.888.762-.762 1.887-.762H12v2.65H5.175v13.65h13.65V12h2.65v6.825q0 1.125-.762 1.887-.763.763-1.888.763ZM10.15 15.7 8.3 13.85 17 5.175h-3v-2.65h7.475V10h-2.65V7Z" />
            </svg>
            <Description id='description'>Ver no GitHub</Description>
            <Image href={link} target='_blank' rel='external noreferrer nofollow'><img src={img} alt="" /></Image>
        </Container>
    )
}