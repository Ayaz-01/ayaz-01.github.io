import React ,{useState} from 'react'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Email from './Email'
import PhoneIcon from '@material-ui/icons/Phone';

export default function Footer() {

     const [show] = useState(true)

    return (
        <>
            {show?<Email/>:<></>}
            <Cont id='footer'>
                <FooterCont>
                    <IconsCont>
                        <a href="mailto: ayazkhanm3496@gmail.com" ><EmailIcon className="icon" /></a>
                        <a href="https://twitter.com/AyazKhan1245?t=29247eKNKaQ_sWqg_kgffA&s=09" target="_blank" rel="noreferrer"><TwitterIcon className="icon" /></a>
                        <a href="https://linkedin.com/in/ayaz-khan-875a48231" target="_blank" rel="noreferrer"><LinkedInIcon className="icon" /></a>
                        <a href="https://github.com/Ayaz-01" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
                        <span className='pCall'>
                        <PhoneIcon className="icon" />
                        <span className='txt'>+91 7410115420</span> 
                        </span>
                    </IconsCont>
                    <HrLine/>
                    <FooterLine>
                        <p>No © copyright issues | Designed & developed by Ayaz Khan. </p>                    
                    </FooterLine>
                </FooterCont>
                </Cont>
            </>
    )
}

const Cont = styled.div`
    background-color: #080808;
    width: 100%;
    position:relative;
    z-index: 2;
`
const FooterCont = styled.div`
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem 5rem;
    @media (max-width: 768px) {
        width: 85%;
        padding: 1rem 2rem;
    }
    @media (max-width: 480px) {
        width: 100%;
        padding: 1rem 1.2rem;
    };
`
const IconsCont = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-evenly;
    @media (max-width: 480px) {
        padding: 1rem 0;
    };
    .icon{
        color: #fcfcfc;
        font-size: 2rem;
        cursor: pointer;
    }
`
const HrLine = styled.div`
    border-bottom: 1px solid #fcfcfc ;
    margin-top: 1rem;
`
const FooterLine = styled.div`
font-family: 'Poppins', sans-serif;
    font-weight: 400;
    text-align: center;
    color: #fcfcfc;
    margin: 1.5rem 0 0.4rem 0;
   
`
