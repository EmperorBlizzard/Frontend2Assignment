import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import QuantitySelector from "../individuals/QuantitySelector";

const SummaryCartplusbutton = styled.div`
display: flex;
width: 26.625rem;
flex-direction: row;
gap: 1rem;
align-items: center;

`;
const CheckoutSummary = styled.div`
display: flex;
padding: 1rem 1rem 2rem 1rem;
flex-direction: column;
align-items: center;
gap: 1.5rem;
align-self: stretch;
background: var(--Gray-shades-100, #F9F9F9);
width: 16rem;
`;

const SummaryContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
align-self: stretch;
width: 16rem;
`;

const TopContent = styled.div`
display: flex;
height: 3rem;
flex-direction: column;
align-items: column;
justify-content: space-between;

align-items: row;
align-self: stretch;
`;

const BottomContent = styled.div`
display: flex;
height: 3rem;
flex-direction: column;

align-items: column;
align-self: stretch;

`;

const SummaryText = styled.div`
color: var(--Typestyle-Headlines, #2B3136);
font-feature-settings: 'clig' off, 'liga' off;

/* Headlines/H2 */
font-family: Inter;
font-size: 1.75rem;
font-style: normal;
font-weight: 700;
line-height: 2.125rem; /* 121.429% */

`;


function SummaryContainer() {
    return (
        <SummaryCartplusbutton>
        <CheckoutSummary>
            <SummaryContent>
                
                

                <SummaryText>Summary</SummaryText>
                <TopContent>
                    
                    <div>
                    <p>Subtotal</p>
                    <p>Shipping costs</p>
                    
                    </div>
                    <div>
                    <p>40</p>
                    <p>90</p>

                    </div>
                </TopContent>
                <BottomContent>

                   <div>

                   </div>
                  
                
                </BottomContent>


                
            </SummaryContent>
        
        </CheckoutSummary>
        </SummaryCartplusbutton>
    )
}

export default SummaryContainer;