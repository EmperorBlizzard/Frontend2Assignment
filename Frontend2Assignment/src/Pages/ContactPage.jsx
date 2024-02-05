import styled from 'styled-components';
import Header from '../components/sections/Header'
import Footer from "../components/sections/Footer"
import { EmailService } from '../MailService/EmailService';


const ContactContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem;
  color: var(--Typestyle-Headlines, #2B3136);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.125rem; 
`

const ContactInfo = styled.div `
  color: var(--Typestyle-Headlines, #2B3136);
  font-feature-settings: 'clig' off, 'liga' off;

/* Body/Regular */
font-family: Inter;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1.3125rem; /* 150% */
`

function Contact() {
    return (
      <div className='ContactContent'>
        <Header />
        <ContactContainer>
        <h3>Kontaktinformation</h3>
        <EmailService/>
        <ContactInfo>Telefon: 123-456-7890</ContactInfo>
        </ContactContainer>
		<Footer />
      </div>
    );
  }
  
  export default Contact