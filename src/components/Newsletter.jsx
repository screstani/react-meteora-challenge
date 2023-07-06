import styled from "styled-components"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
`
const Description = styled.div`
    width: 50%;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 40%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 6;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #9353ff;
    color: white;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Would you like to receive our news, exclusive promotions, and 10% OFF on your first purchase? Sign up!</Description>
        <InputContainer>
            <Input placeholder="Your e-mail"/>
            <Button>Send</Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter