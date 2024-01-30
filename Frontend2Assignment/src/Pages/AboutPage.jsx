import React from 'react';
import styled from 'styled-components';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

const AboutContainer = styled.div`
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

function About() {
  return (
    <div>
      <Header />
      <AboutContainer>
        <h1>Om oss</h1>
        <p>
          Välkommen till OSS -din pålitliga partner för kvalitetscyklar och tillbehör. Vi är passionerade cykelentusiaster som strävar efter att erbjuda den bästa shoppingupplevelsen för våra kunder.
        </p>
        <h2>Vår historia</h2>
        <p>
          Vi grundades med visionen att göra cykling tillgängligt och roligt för alla. Vi har vuxit från en lokal cykelbutik till en onlineplattform som levererar kvalitetscyklar över hela världen.
        </p>
        <h2>Vårt åtagande</h2>
        <p>
          Vi är dedikerade till att erbjuda högkvalitativa produkter och enastående kundservice. Varje cykel i vårt sortiment är noggrant utvald för att möta våra kunders behov och förväntningar.
        </p>
        <h2>Varför välja oss?</h2>
        <p>
          Hos oss får du inte bara en cykel -du får en upplevelse. Vi strävar efter att skapa långsiktiga relationer med våra kunder genom att erbjuda pålitliga produkter och expertkunskap.
        </p>
      </AboutContainer>
      <Footer />
    </div>
  );
}

export default About;
