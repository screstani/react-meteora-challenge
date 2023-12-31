import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import LogoImage from '../img/Logo-desktop.png';
import USFlag from '../img/USflag.png';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 58px;
    background-color: black;
    color: white;
    ${mobile({ padding: "10px 0px"})};
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    padding-left: 15px;
    ${mobile({ display: "none"})};
`

const LanguageFlag = styled.img`
    height: 20px;s
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    background-color: transparent;
    ${mobile({ width: "50px"})};
`
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Logo = styled.h1`
     font-weight: bold;
     ${mobile({ fontSize: "18px"})};
 `
const LogoImages = styled.img`
  height: 40px;
  width: auto;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center"})};
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px"})};
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>
                    <LogoImages src={LogoImage} alt="Logo" />   
                </Logo>
                <MenuItem>Home</MenuItem>
                <MenuItem>Stores</MenuItem> 
                <MenuItem>What's New</MenuItem>
                <MenuItem>Outlet</MenuItem> 
            </Left>
            <Center>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color: "white", fontSize: 16}}/>
                </SearchContainer>
            </Center>
            <Right>
            <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent = {4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
                <MenuItem>
                    <Language><LanguageFlag src= {USFlag} alt="English language" /></Language>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar