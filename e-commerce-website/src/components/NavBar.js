import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div `
    height: 60px;
`
const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex;
    justify-content: space-between
`
const Left = styled.div `
    flex: 1;
    display: flex;
    align-items: center;

`
const Language = styled.div `
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div `
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding: 5px;
`
const Input = styled.input `
    border: none;
`
const Center = styled.div `
    flex: 1;
`
const Right = styled.div `
    flex: 1;
`

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
          <Language> EN </Language>
          <SearchContainer>
            <Input/>
            <SearchIcon/>
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
        </Wrapper>   
    </Container>
  )
}

export default NavBar;