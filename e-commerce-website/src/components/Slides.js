import React from 'react';
import styled from 'styled-components';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from "react";
import { sliderItems } from "../SlidesInfo"
import { mobile } from "../responsive";

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(30, 32, 41, 0.4)  ;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  margin-left: 40px;
  margin-right: 40px;
  cursor: pointer;
  z-index: 2;
  color: white;

  &:hover {
    background-color: #e0ff00;
    color: black;
    border: none;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  position: relative;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 90%;
  
  
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  z-index: 1;
  text-align: center; 
`;

const TitleContainer = styled.div`
  background-color: white;
  display: inline-block;
  padding: 10px 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 0;
`;

const DescContainer = styled.div`
  background-color: white;
  display: inline-block;
  padding: 10px 20px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 0;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: black;
  cursor: pointer;
  margin-top: 60px;
  color: white;
  border: 2px solid black;
  padding: 10px 25px;

  &:hover {
    background-color: white;
    color: black;
    border: none;
  }
`;

const Slides = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container >
      <Arrow className='drop-shadow-2xl' direction="left" onClick={() => handleClick("left")}>
        <NavigateBeforeIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <TitleContainer>
                    <Title>{item.title}</Title>
                </TitleContainer>
                <DescContainer>
                    <Desc>{item.desc}</Desc>
              </DescContainer>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow className='drop-shadow-2xl' direction="right" onClick={() => handleClick("right")}>
        <NavigateNextIcon/>
      </Arrow>
    </Container>
  );
};

export default Slides;
