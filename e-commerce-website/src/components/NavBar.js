import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../components/assets/images/Logo4.png';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
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
`;

const CustomBadge = styled(Badge)`
  .MuiBadge-badge {
    background-color: #E0FF00; 
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN </Language>
          <SearchContainer>
            <Input />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <img src={Logo} alt="Levels" className="h-15" />
        </Center>
        <Right>
          <NavItems>CLOTHING</NavItems>
          <NavItems>JEWELLERY</NavItems>
          <NavItems>ELECTRONICS</NavItems>
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
