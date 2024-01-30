import React from 'react'
import styled from 'styled-components'
import Header from '../components/sections/Header'
import Footer from "../components/sections/Footer"

const ReturnContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2B3136; 
  font-family: 'Inter', sans-serif; 
  font-size: 1.5rem;
  box-sizing: border-box;
  width: 64.9375rem;
  padding: 2.5rem;
  gap: 0.625rem

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

function Return() {
    return (
      <div>
        <Header />
        <ReturnContainer>
        <h1>Returer och byten</h1>
        <p>
          Vi strävar vi alltid efter att erbjuda den bästa möjliga shoppingupplevelsen för våra kunder. 
          Vi förstår dock att det ibland kan vara nödvändigt att returnera eller byta en vara. 
          Nedan finner du vår policy för returer och öppet köp för cyklar.
        </p>
        <h2>1. Ångerrätt och Öppet Köp </h2>
        <p>
        Vi erbjuder våra kunder en 30-dagars ångerrätt, vilket ger dig möjlighet att ångra ditt köp och returnera produkten inom 30 dagar från det att du mottagit den. För att vara berättigad till ångerrätten måste produkten vara i nyskick och i originalförpackning.
        </p>
        <h2> 2. Returprocess</h2>
        <p>
        För att initiera en retur, vänligen kontakta vår kundtjänst. Ange ditt ordernummer och beskriv varför du önskar returnera produkten. 
        Vårt team kommer att assistera dig genom hela returprocessen.
        </p>   
        <h2>3. Återbetalning eller Byte </h2>    
        <p>
        När vi mottagit och godkänt din retur, kommer återbetalning att utföras inom 14 till det betalningsmedel du använde vid köpet. Om du föredrar ett byte, vänligen ange det vid returansökan så hjälper vi dig med att byta ut produkten.
        </p>       
        <h2>4. Garanti och Service</h2>
        <p>
        För att säkerställa att du är helt nöjd med din cykel erbjuder vi även garantitjänster. 
        Vid eventuella fel eller problem, vänligen kontakta vår kundtjänst för att få assistans med garantifrågor eller reparationer.

        Vi  strävar efter att göra din cykelupplevelse så smidig och bekymmersfri som möjligt. Tveka inte att kontakta oss om du har några frågor eller funderingar angående returer eller öppet köp. Vi finns här för att hjälpa dig!

        Tack för att du handlar hos oss.
        </p>
        </ReturnContainer>
		    <Footer />
      </div>

      
    );
  }
  
  export default Return