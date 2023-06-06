import React, { useContext } from "react";
import styled from "styled-components";
import Add from '@mui/icons-material/AddSharp';
import Remove from '@mui/icons-material/RemoveSharp';
import { mobile } from "./responsive";
import { CartContext } from "./CartContext";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin-top: 120px;
  margin-left: 30px;
  margin-right: 30px;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
`;

const SecondButton = styled.button`
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 15px;
  color: black;
  border: 2px solid black;
  padding: 10px 20px;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const FirstButton = styled.button`
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  background-color: black;
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 15px;
  color: white;
  padding: 10px 20px;

  &:hover {
    background-color: white;
    color: black;
    border: none;
  }
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  margin-top: 15px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 120px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  color: black;
  font-weight: 600;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const Cart = () => {
  const navigate = useNavigate();
  
  const { cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  console.log(cartItems);

  const subtotal = cartItems.reduce((total, item) => {
    return total + Number(item.price) * Number(item.quantity);
  }, 0);

  const shipping = 3.50;

  const total = subtotal + shipping;

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <a href="/" onClick={handleButtonClick}>
            <FirstButton>CONTINUE SHOPPING</FirstButton>
          </a>
          <TopTexts>
            <TopText>Shopping Bag({cartItems.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <SecondButton>CHECKOUT NOW</SecondButton>
        </Top>
        <Bottom>
          <Info>
            {cartItems.map((item) => (
              <Product key={item.id}>
                <ProductDetail>
                  <Image src={item.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {item.id}
                    </ProductId>
                    <ProductColor color={item.color} />
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove onClick={() => decreaseQuantity(item.id)} />
                    <ProductAmount>{item.quantity}</ProductAmount>
                    <Add onClick={() => increaseQuantity(item.id)} />
                  </ProductAmountContainer>
                  <ProductPrice>£ {item.price}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>£ {subtotal.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>£ {shipping.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>£ {total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
