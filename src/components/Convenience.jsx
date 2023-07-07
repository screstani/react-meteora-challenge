import { AccountBalance, Cached, Eco } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const MainTitle = styled.h1`
    font-size: 40px;
    font-weight: 300;
    margin: 20px 80px 0px 80px;
    padding: 40px 0px;
`
const Options = styled.div`
    display: flex;
    flex-direction: row;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`
const Icon = styled.div`
    color: #DAFF01;
    width: 100px;
    height: 100px;
    svg {
        font-size: 75px;
    };
    display: flex;
    justify-content: center;
    align-items: center;
    `
const Info = styled.div`
    width: 65%;
`
const Title = styled.h3`
    color: #DAFF01;
    padding-bottom: 15px;
`
const Desc = styled.p`
    width: 85%;
`


const Convenience = () => {
  return (
    <Container>
        <MainTitle>Explore all our conveniences</MainTitle>
        <Options>
            <Item>
                <Icon>
                    <AccountBalance/>
                </Icon>
                <Info>
                    <Title>PAY BY BANK DEPOSIT</Title>
                    <Desc>Get 5% OFF on payments by bank deposit</Desc>
                </Info>
            </Item>
            <Item>
                <Icon>
                    <Cached/>
                </Icon>
                <Info>
                    <Title>FREE RETURNS</Title>
                    <Desc>Feel free to exchange within 30 days.</Desc>
                </Info>
            </Item>
            <Item>
                <Icon>
                    <Eco/>
                </Icon>
                <Info>
                    <Title>SUSTAINABILITY</Title>
                   <Desc>Responsible fashion that respects the environment.</Desc>
                </Info>
            </Item>
        </Options>
    </Container>
      )
}

export default Convenience