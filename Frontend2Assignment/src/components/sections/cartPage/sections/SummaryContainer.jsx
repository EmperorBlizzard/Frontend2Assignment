import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import MenuLinks from "../../../individuals/MenuLinks";
import styles from "../../../../styling/CartPageStyle.module.css"
import { CartContext } from "../../../../App";


const SummaryCartplusbutton = styled.div`
display: flex;
width: 20rem;
flex-direction: column;
gap: 3rem;
align-items: center;

background: var(--Gray-shades-100, #F9F9F9); 
`;

const CheckoutSummary = styled.div`
display: flex;

flex-direction: column;
align-items: center;
gap: 1.5rem;
align-self: stretch;

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

align-self: stretch;
`;

const SummaryText = styled.h5`
color: var(--Typestyle-Headlines, #2B3136);
font-feature-settings: 'clig' off, 'liga' off;
display:flex;
/* Headlines/H2 */
font-family: Inter;
font-size: 1.2rem;
font-style: normal;
font-weight: bold;
line-height: 2.125rem; /* 121.429% */
align-items: center;
justify-content: center;
`;

const SubtotalPrice = styled.div`
display:flex;
gap: 1em;
`;

const Button = styled.button`
    width: 100%;
`;

function SummaryContainer() {

    const card = useContext(CartContext);
    console.log(card.items)
    const checkout = async () => {
        await fetch("/api/checkout", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: card.items})
        }).then(async(response) => {
            console.log(response)
            return await response.json();
        }).then(async(response) => {
            if(await response.url) {
                window.location.assign(response.url);
            }
        });
    };

    return (
        <SummaryCartplusbutton className={styles.summarycontainer}>
            <CheckoutSummary>
                <SummaryContent>



                    <SummaryText>Ordersammanställning</SummaryText>
                    <TopContent>

                        <SubtotalPrice>
                            <p>Total Pris: {card.totalPrice} </p>


                        </SubtotalPrice>
                    </TopContent>
                </SummaryContent>

            </CheckoutSummary>

            {/* <MenuLinks name="Utcheckning" link="/checkoutpage" /> */}
            <Button onClick={checkout}>
                <span>
                    Köp produkter
                </span>
            </Button>
            

        </SummaryCartplusbutton>
    )
}

export default SummaryContainer;