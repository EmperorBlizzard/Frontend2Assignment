import styled from "styled-components";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../sections/ProductCardContainer";

const DescriptionContainer = styled.div`
  display: flex;
  padding: 1rem 0 0;
  align-items: flex-start;
  align-self: stretch;
`;

const StyledP = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin: 0;
`;

const Description = () => {
  const prod = useContext(ProductContext);
  return (
    <DescriptionContainer>
      <StyledP>{prod.attributes.shortDescription}</StyledP>
    </DescriptionContainer>
  );
};

Description.propTypes = {
  description: PropTypes.string,
};

export default Description;
