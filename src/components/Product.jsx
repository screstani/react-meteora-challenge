import styled from 'styled-components'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons'

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.5s ease;
    cursor: pointer;
`
const Container = styled.div`
    flex-direction: column;
    flex: 1;
    margin: 5px 5px 50px 5px;
    min-width: 340px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 3px solid #efefef;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: auto;
    width: 100%;
    obejct-fit: cover;
    z-index: 2;
`

const Icon = styled.div`
    opacity: 1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`
const Title = styled.h1`
    color: black;
    font-size: 20px;
    margin: 10px;
    text-align: left;
`

const Desc = styled.p`
    font-size: 16px;
    margin: 10px;
    text-align: left;

`
const Price = styled.span`
    margin: 10px;
    font-weight: 600;
    text-align: left;
`
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
        <FlexContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Price>{item.price}</Price>
        </FlexContainer>    
    </Container>  )
}

export default Product