import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'

export default function Navbar() {

    return (
        <Nav>
            <NavCont>
                <Logo onClick={()=> scroll.scrollToTop()}>AK.</Logo>
                <Menu>
                    <Link to='skills' smooth={true} duration={1500}><Projects> Skills </Projects></Link>
                    <Link to='projects' smooth={true} duration={1500}><Projects> Projects </Projects></Link>
                    <Link to='footer' smooth={true} duration={1500}><Contact> Contact </Contact></Link>
                    <Resume> <a href="Ayaz-Khan-Resume.pdf">Resume</a></Resume>
                </Menu>
            </NavCont>
        </Nav>
    )
}

const Nav = styled.div`

    z-index: 10;
    position: sticky;
    margin-top: 1.5vw;
    top: 0;
    height: 3.5rem;
    background: rgba(1,1,1,1,1);
    backdrop-filter: saturate(150%) blur(50px);
    @media (max-width: 768px) {
        height: 3.5rem;
    }
`
const NavCont = styled.div`
    padding: 0 2rem;
    color:#0f1108;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding: 5px 15px;
    }
`
const Logo = styled.div`
    font-family: 'Philosopher', sans-serif;
    margin-left: 1%;
    font-size:3rem;
    cursor: pointer;
    color:#0f1108;
    @media (max-width: 768px) {
        font-size:2rem;
        line-height:2.8rem;
        }
    `
const Menu = styled.div`
font-family: 'Poppins', sans-serif;
    font-weight: 400;
    display: flex;
    font-size: 1.3rem;
    line-height: 3.5rem;
    justify-content: space-between;
    div{
        font-size: 1rem;
        position: relative;
        width: 5.6rem;
        padding: 0 1rem;
        margin: 0 2rem;
        cursor: pointer;
        @media (max-width: 768px) {
        padding: 0;
        margin: 0%;
        line-height: 2.8rem;
        }
        :hover{
            background: #e7ffed;
            transition: 0.4s;
            border-radius: 7px;
        }
    }
    div:after{
        content: "";
        position: absolute;
        background-color: #80AB82;
        height: 3px;
        width: 0;
        left: 0;
        bottom: 0px;
        transition: 0.3s;
    }
    div:hover:after{
        width: 100%;
    }
`
const Projects = styled.div`
@media (max-width: 500px) {
        display: none;
        }
`
const Contact = styled.div`

`
const Resume = styled.div`
     background: #7f81a1;
    a{
       
        text-decoration: none;
        color:white;
    }
`
