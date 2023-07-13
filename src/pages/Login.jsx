import styled from 'styled-components'
import { mobile } from '../responsive'

import { backglogin } from '../data'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${backglogin.img}) center;
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({ width: "75%"})};
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 10px 20px 0px;
    padding: 10px;
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 10px auto 20px auto;
`
const Link = styled.a`
    margin: 10px auto;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
`

const Login = () => {
  return (  
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <ButtonContainer><Button>LOGIN</Button></ButtonContainer>
                <Link>FORGOT PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login