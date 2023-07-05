import React, { useState } from 'react';
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    top: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const StyledArrowLeftOutlined = withStyles({
    root: {
      fontSize: '80px', // Increase the font size
      color: 'white',
    },
  })(ArrowLeftOutlined);
  
const StyledArrowRightOutlined = withStyles({
    root: {
      fontSize: '80px', // Increase the font size
      color: 'white',
    },
})(ArrowRightOutlined);
  
const Marker = styled.div`
    width: 160px;
    height: 4px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    top: 100;
    left: 44.5vw;
    opacity: 0.5;
    z-index: 2;
`

const MarkerIcon = styled.span`
  width: 80px;
  height: 8px;
  border-radius: 5%;
  margin-bottom: 30px;
  margin-right: 5px;
  margin-left: 5px;
  background-color: ${(props) => (props.isActive ? 'white' : 'darkgray')};
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: transform 0.5s ease-in-out;
`
const Slide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    width: 100%;
`
// const InfoContainer = styled.div`
//     flex: 1;
// `
const Content = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 25%;
    left: ${(props) => {
        if (props.slideIndex === 0) {
            return "50vw";
        } else if (props.slideIndex === 1) {
            return "155vw";
        } else if (props.slideIndex === 2) {
            return "205vw";
        } else {
            return "0"; // Adjust the value for other slide indexes as needed
        }
    }};
    text-align: center;
    color: ${(props) => {
        if (props.slideIndex === 0) {
            return "transparent";
        } else {
            return "white"; // Adjust the value for other slide indexes as needed
        }
    }};
    transition: transform 0.5s ease-in-out;
`

const Title = styled.h1`
    font-size: 40px;
    padding: 0px 50px;
    margin-bottom: 10px;
`
const Description = styled.p`
    margin: 5px 0px;
    padding: 0px 50px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 3px;

`
// const Button = styled.button`
//     padding: 10px;
//     font-size: 20px;
//     background-color: transparent;
//     cursor: pointer;
// `


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0); 
    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <StyledArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                <Slide bg={item.bg}>
                    <ImgContainer>
                        <Image src= {item.img} />
                    </ImgContainer>
                    <Content slideIndex={slideIndex}>
                        <Title>{sliderItems[slideIndex].title}</Title>
                        <Description>{item.desc}</Description>
                        <Description>{item.underdesc}</Description>
                    </Content>
                </Slide>    
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick('right')}>
                <StyledArrowRightOutlined />
            </Arrow>
            <Marker>
                {sliderItems.map((item, index) => (
                <MarkerIcon key={index} isActive={slideIndex === index} />
                ))}
            </Marker>
        </Container>
    )
}

export default Slider