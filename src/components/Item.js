import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cookieSrc from "../cookie.svg";

const Item = ({
  index,
  name,
  id,
  cost,
  value,
  numCookies,
  purchasedItems,
  setPurchasedItems,
  setNumCookies,
}) => {
  const ref = React.useRef(null);
  const handleAttemptedPurchase = () => {
    if (cost < numCookies) {
      setNumCookies(numCookies - cost);
      setPurchasedItems({ ...purchasedItems, [id]: purchasedItems[id] + 1 });
    }
  };
  React.useEffect(() => {
    if (index === 0) {
      ref.current.focus();
    }
  }, [index]);
  return (
    <Wrapper ref={ref} onClick={handleAttemptedPurchase}>
      <Left>
        <Name>{name}</Name>
        <Info>
          Cost: {cost} cookie(s). Produces {value} cookies/second.
        </Info>
      </Left>
      <Right>{purchasedItems[id]}</Right>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid #444;
  color: #fff;
  text-align: left;
  padding: 15px 0;
`;

const Left = styled.div`
  flex: 1;
`;

const Name = styled.h4`
  font-size: 22px;
`;

const Info = styled.div`
  color: #ccc;
  font-size: 15px;
`;

const Right = styled.div`
  font-size: 32px;
  padding: 0 20px;
`;

export default Item;
