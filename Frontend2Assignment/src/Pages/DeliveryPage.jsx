import React from 'react';
import styled from 'styled-components';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: #2b3136;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  line-height: 1.75rem;

  h1 {
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.03rem;
  }

  h2 {
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.03rem;
    margin-top: 1rem;
  }

  p {
    color: #5c738a;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 1rem;
  }
`;

function Delivery() {
  return (
    <div>
      <Header />
      <DeliveryContainer>
        <h1>Leveransinformation</h1>
        <p>
          Välkommen till vår oss! Vi strävar alltid efter att erbjuda en smidig och pålitlig leveransservice för våra kunder.
        </p>
        <h2>1. Fraktkostnad och leveranstid</h2>
        <p>
          Fraktkostnader och leveranstider varierar beroende på din leveransadress och den valda produkten. Du kan se exakta kostnader och leveranstider vid kassan innan du slutför ditt köp.
        </p>
        <h2>2. Spårning av din leverans</h2>
        <p>
          När din beställning har skickats kommer du att få ett spårningsnummer via e-post. Använd detta nummer för att följa din leverans och få uppdateringar om dess framsteg.
        </p>
        <h2>3. Leverans till ditt hem</h2>
        <p>
          Vi erbjuder leverans till din dörr för att göra det så bekvämt som möjligt för dig. Se till att ange korrekt leveransadress vid beställning för att undvika förseningar.
        </p>
        <h2>4. Internationell leverans</h2>
        <p>
          Vi levererar internationellt! Kontrollera internationella fraktkostnader och leveranstider vid kassan innan du slutför din beställning.
        </p>
      </DeliveryContainer>
      <Footer />
    </div>
  );
}

export default Delivery;
