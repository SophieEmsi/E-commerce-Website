import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { sliderItems } from "../SlidesInfo";
import { mobile } from "../responsive";

const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 20px;
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
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

const CircleContainer = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
`;


const Circle = styled.div`
  width: ${(props) => (props.isActive ? "18px" : "12px")};
  height: ${(props) => (props.isActive ? "18px" : "12px")};
  background-color: ${(props) => (props.isActive ? "#e0ff00" : "rgba(203, 203, 203, 0.84)")};
  border-radius: 50%;
  margin: 0 6px;
  cursor: pointer;
  box-shadow: 0 3px 3px -1px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #e0ff00;
  }
`;


const Slides = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideClick = (index) => {
    setSlideIndex(index);
  };

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, index) => (
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
      <CircleContainer>
        {sliderItems.map((_, index) => (
        <Circle
        key={index}
        isActive={index === slideIndex}
        onClick={() => handleSlideClick(index)}
        />
        ))}
    </CircleContainer>

    </Container>
  );
};

export default Slides;
