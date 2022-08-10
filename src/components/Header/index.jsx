import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import yanImg from '../../assets/images/yan.png'



const Container = styled.header`
 background-color: #0F1215;
 height: 70px;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 z-index: 99;
 padding: 0 60px;
 display: flex;
 align-items: center;

 @media(max-width: 724px) {
    padding: 0 40px;

    .links {
        display: none;
    }

    .top,
    .mid,
    .bottom {
        background-color: #fff;
        height: 4px;
        width: 100%;
        margin: 6px auto;

        transition-duration: 0.3s;
    }


    .menu-toggle {
        width: 40px;
        cursor: pointer;

    }

    #menu-section-on {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #0F1215;

        width: 100vw;
        height: 100vh;

        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;

        .top,
        .mid,
        .bottom {
        background-color: #FFF;
        
    }
        
    }

    #menu-section-on #links-container {
        display: block;
    }

    #menu-section-on .menu-toggle {
        position: absolute;
        right: 40px;
        top: 15px;
        
    }

    #menu-section-on .menu-toggle .top {
        transform: rotate(45deg) translate(7px, 7px);
    }

    #menu-section-on .menu-toggle .mid {
        opacity: 0;
    }

    #menu-section-on .menu-toggle .bottom {
        transform: rotate(-45deg) translate(7px, -7px);
    }


    #menu-section-on .links {
        text-align: center;
        display: block;
        transition-duration: 0.5s;
        font-size: 1.5rem;
        line-height: 3rem;
        font-weight: 700;
        color: #fff;
    }
}
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Links = styled.div`

    display: flex;
    gap: 3.3rem;

    .links{
        cursor: pointer;
        height: 100%;
        color: #fff;
        &:hover{
           color: #2A8C82;
        }
    }       
`

export function Header() {
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    useEffect(() => {
        document.body.style.overflow = menuIsVisible ? 'hidden' : 'initial'

    }, [menuIsVisible])

    function menuVisibility() {
        setMenuIsVisible(!menuIsVisible)
    }

    function toContainer() {
        if (menuIsVisible === true) {
            setMenuIsVisible(false)
        }
    }

    return (
        <Container >
            <Content>
                <img src={yanImg} alt="Logo do Header" />
                <section className='menu-section' id={menuIsVisible ? 'menu-section-on' : 'menu-section'} >
                    <div className="menu-toggle" onClick={menuVisibility}>
                        <div className = 'top'></div>
                        <div className = 'mid'></div>
                        <div className = 'bottom'></div>
                    </div>
                    <Links id = 'links-container'>
                        <Link className = 'links' onClick={toContainer} to='home-title' spy={true} smooth={true} offset={-300} duration={0}>Home</Link>
                        <Link className = 'links' onClick={toContainer} to='about-content' spy={true} smooth={true} offset={-150} duration={0}>Sobre</Link>
                        <Link className = 'links' onClick={toContainer} to='skills-content' spy={true} smooth={true} offset={-150} duration={0}>Habilidades</Link>
                        <Link className = 'links' onClick={toContainer} to='projects-container' spy={true} smooth={true} offset={-50} duration={0}>Projetos</Link>
                    </Links>
                </section>
            </Content>
        </Container>
    )
}