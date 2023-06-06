import React, { useContext } from 'react';
import 'tailwindcss/tailwind.css';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../components/assets/images/Logo4.png';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import Announcement from './Announcement'; 
import { CartContext } from "./pages/CartContext";

const Container = styled.div`
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 999;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 2px;
  border: 1.5px solid #CBCBCB;
`;

const Input = styled.input`
  border: none;

`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  position: relative;
  transition: 0.3s ease;

  &:hover {
    &:before {
      width: 100%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    background: #1E2029;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    transition: 0.3s ease;
  }
`;

const CustomBadge = styled(Badge)`
  .MuiBadge-badge {
    background-color: #e0ff00;
    color: #000000;
  }
`;

const NavBar = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    let apiCategory = category.toLowerCase();
    if (apiCategory === "women clothing") {
      apiCategory = "women's clothing";
    } else if (apiCategory === "men clothing") {
      apiCategory = "men's clothing";
    }
    navigate(`/results/${apiCategory}`);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const { cartItems } = useContext(CartContext);

  return (
    <Container>
      <Announcement /> 
      <Wrapper>
        <Left>
          <Language className="font-medium">EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon className="text-black-500 text-lg" />
          </SearchContainer>
        </Left>
        <Center>
          <a href="/" onClick={handleLogoClick}>
            <img src={Logo} alt="Levels Logo" className="h-15" />
          </a>
        </Center>
        <Right>
        <NavItems onClick={() => handleCategoryClick("WOMEN CLOTHING")} className="font-medium">
  WOMEN CLOTHING
</NavItems>
<NavItems onClick={() => handleCategoryClick("MEN CLOTHING")} className="font-medium">
  MEN CLOTHING
</NavItems>

          <NavItems onClick={() => handleCategoryClick('jewelery')} className="font-medium">
            JEWELLERY
          </NavItems>
          <NavItems onClick={() => handleCategoryClick('electronics')} className="font-medium">
            ELECTRONICS
          </NavItems>
          <NavItems href="/cart" onClick={handleCartClick} className="mr-4">
            <CustomBadge color="secondary" badgeContent={cartItems.length} showZero>
            <ShoppingCartIcon />
            </CustomBadge>

              
          </NavItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;