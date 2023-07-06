import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 5px 8px 0px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
`
const Info = styled.div`
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
    width: 100%;
`
const Title = styled.h1`
    text-align: center;
    padding: 10px;
    font-size: 20px;
`

const Button = styled.button`
    border: none;
    padding: 10px;
    width: 100%;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
        </Info>
        <Button>SHOP NOW</Button>
    </Container>
  )
}

export default CategoryItem