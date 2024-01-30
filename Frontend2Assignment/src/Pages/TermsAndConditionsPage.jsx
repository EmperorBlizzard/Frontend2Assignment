import React from 'react'
import styled from 'styled-components'
import Header from '../components/sections/Header'
import Footer from "../components/sections/Footer"

const TermsContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2B3136; 
  font-family: 'Inter', sans-serif; 
  font-size: 1.5rem;
  box-sizing: border-box;
  width: 64.9375rem;
  padding: 2.5rem;  
  margin: 8rem;

  h1 {
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem; 
    letter-spacing: -0.03rem;
  }

  h2 {
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem; 
    letter-spacing: -0.03rem;
  }

  p {
    color: var(--Neutrals-Darkgray-100, #5C738A);
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`


function TermsAndConditions() {
    return (
      <div>
        <Header />
        <TermsContainer>
        <h1>Villkor och bestämmelser</h1>
        <p>Välkommen.
          Innan du fortsätter att handla hos oss, vänligen läs igenom våra villkor och bestämmelser nedan.
        </p>
        <h2>1. Köpvillkor</h2>
        <p>
         Genom att genomföra ett köp hos oss bekräftar du att du har läst och accepterat våra villkor och bestämmelser.
         Du måste vara över 18 år för att göra ett köp från vår webbutik.
        </p>
        <h2>2. Priser och Betalning</h2>
        <p>
          Priserna på vår webbplats anges i svenska kronor (SEK) och inkluderar moms.
           Fraktkostnader och leveranstider varierar beroende på leveransadress och produkt.
        </p>
        <h2>Ångerrätt och Returer</h2>
        <p>
           Vi erbjuder garantitjänster för att säkerställa kvalitet och tillförlitlighet hos våra cyklar.
           Vid eventuella problem eller frågor, vänligen kontakta vår kundtjänst för support.
        </p>
        <h2>Personuppgifter och Sekretess</h2>
        <p>
          Vi skyddar dina personuppgifter och följer gällande lagar och förordningar om dataskydd.
          Läs vår sekretesspolicy för att förstå hur vi samlar in och hanterar dina personuppgifter.
        </p>
        <h2>Kontaktinformation</h2>
        <p>
           Om du har frågor eller behöver hjälp, vänligen kontakta vår kundtjänst via kontaktformuläret på vår webbplats.
           Genom att fortsätta att handla hos oss godkänner du dessa villkor och bestämmelser. Tack för att du väljer oss!
        </p>
       </TermsContainer>              
		<Footer />
      </div>

      
    );
  }
  
  export default TermsAndConditions