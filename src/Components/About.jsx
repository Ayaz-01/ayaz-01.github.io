import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

export default function About() {

    return (
        <SecCont id = 'top' onScroll={()=>alert("Table Scrolled")}>
            <ContBg>
                <Cont>
                    <Left>
                        <Para>Hi I'm</Para>
                        <Header>Ayaz Khan</Header>
                        <Para>Java Backend Developer, living in Maharashtra (India)</Para>
                        <Link to='footer' smooth={true} duration={1500}><ContactBtn>Contact me</ContactBtn></Link>
                    </Left>                  
                    <Right>
                        <img src="ayaz.jpg" alt="AK_image" /> 
                    </Right>
                </Cont>
                <AboutCont>
                    <Heading>About Me</Heading>
                    <AboutPara>
                    I am a qualified and professional Java developer with ample experience in backend and website
designing. Strong creative and analytic skills. Who posses self-discipline and the ability to work with a
minimum supervision. Looking forward to join a progressive organization with opportunities to work on
significant projects.
                    </AboutPara>
                </AboutCont>
            </ContBg>
        </SecCont>
    )
}

const SecCont = styled.div`
    color:#0f1108;
    width: 100%;
`
const ContBg = styled.div`
    background-image: url('hero3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:100% 30%;
    padding-bottom: 8rem;
    width: 100%;
font-weight:400;
    @media (max-width: 768px) {
        margin-bottom: 3rem;
    }
`
const Cont = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 767px) {
        width: 100%;
        margin: auto;
    }
`

const Left = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 60%;
    padding: 6rem 4rem;
    @media (max-width: 767px) {
        padding: 0.3rem 1rem;
        width: 100%;
        margin-top: 4rem;
        margin-bottom: 4rem;
    }
    
    div{
        margin: 1rem;
        @media (max-width: 768px) {
        margin: 0.3rem;
    }
    }
`
const Header = styled.div`
font-family: 'Poppins', sans-serif;
letter-spacing: -0.1vw;
    font-weight: 300;
    width: 100%;
    font-size: 4.8rem;
    line-height: 2cm;
   
    @media (max-width: 768px) {
        font-size: 3rem;
    }
`
const Para = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
    padding-left:0.5rem;
     font-family: 'Poppins', sans-serif;
 word-spacing: 0.2vw;
    @media (max-width: 768px) {
        padding-left:0.2rem;
        width: 100%;
        margin-top: 4rem;
        font-size: 1rem;
    }`
const ContactBtn = styled.button`
border-radius: 7px;
font-family: 'Poppins', sans-serif;
font-weight: 400;
 word-spacing: 0.2vw;
width: 10rem;
height:3.5rem;
background: none;
border-style: none;
cursor: pointer;
margin-top: 5rem;
margin-left: 1rem;
font-size: 1rem;
box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  a{font-size: 1rem;

      text-decoration: none;
      font-size: 10rem;
      color:#0f1108;
      :visited{
          color: inherit;
      }
  }
@media (max-width: 768px) {
    margin-top:2.5rem;
    margin-left: 0.3rem;
}
;
//apply mask on hover
:hover{
    background: #d6ffe0;
    transition: 0.3s ease-in-out;
}
:active{
    position: relative;
    top: 1px;
    left: 1px;
    width: 9.8rem;
    height: 2.8rem;
}
`
const Right = styled.div`
width: 40%;
padding-top: 0rem;


@media (max-width: 767px) {
    width: 100%;
    padding: 0 3rem;
}

    img{
        width: 30vw;
        padding: 2rem;
        @media (max-width: 767px) {
            margin-left: 0;
        width: 100%;
}
@media (width: 768px) {
  padding-top: 100px;
}
    }
`
const AboutCont = styled.div`
 
    width: 100%;
    margin-top: 10rem;
    padding:0 4rem;
    @media (max-width: 768px) {
        padding: 0 2rem;
        margin-top: 6rem;
    }
`
const Heading = styled.div`
    width: 100%;
    text-align:center ;
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
`
const AboutPara = styled.div`
 font-family: 'Poppins', sans-serif;
 word-spacing: 0.2vw;
 text-align: justify;
    font-weight: 400;
    width: 100%;
    line-height: 2rem;
    margin-top: 2rem;
    padding:0 15rem;
    font-size: 1.4rem;
    @media (max-width: 1020px) {
        padding:0 5rem;
    }
    @media (max-width: 768px) {
        padding: 0;
        font-size: 1.2rem;
    }
`