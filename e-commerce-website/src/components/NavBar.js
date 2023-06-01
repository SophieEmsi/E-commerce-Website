import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../components/assets/images/Logo4.png';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  background-color: ;
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
  background-color: #f8f8f8;
`;

const Input = styled.input`
  border: none;
  background-color: #f8f8f8;
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
    navigate(`/results/${category}`);
  };

  const handleLogoClick = () => {
    navigate('/'); 
  };

  return (
    <Container>
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
          <NavItems onClick={() => handleCategoryClick('clothing')} className="font-medium">
            WOMEN CLOTHING
          </NavItems>
          <NavItems onClick={() => handleCategoryClick('clothing')} className="font-medium">
            MEN CLOTHING
          </NavItems>
          <NavItems onClick={() => handleCategoryClick('jewelery')} className="font-medium">
            JEWELLERY
          </NavItems>
          <NavItems onClick={() => handleCategoryClick('electronics')} className="font-medium">
            ELECTRONICS
          </NavItems>
          <NavItems className="mr-4">
            <CustomBadge color="secondary" badgeContent={0} showZero>
              <ShoppingCartIcon />
            </CustomBadge>
          </NavItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
