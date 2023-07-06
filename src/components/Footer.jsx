import styled from "styled-components"
import { Facebook, Instagram, Pinterest, WhatsApp, Room, Phone, MailOutline} from "@material-ui/icons"
import { footer } from "../data"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Description = styled.p`
    margin: 20px 0px 50px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 40%;
`
 


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>METEORA</Logo>
            <Description>Dive into a fashion wonderland where style knows no limits! Our clothing store is a vibrant hub of trendy treasures, combining quality craftsmanship with playful flair. Unleash your inner fashionista and make a statement as unique as you!</Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>                
                <SocialIcon color="25D366">
                    <WhatsApp/>
                </SocialIcon>                
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Acount</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/>123 Fantasy Street, Rome, Italy</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/>+39 1234567890</ContactItem>
            <ContactItem><MailOutline style={{marginRight: "10px"}}/>contact@meteorastore.com</ContactItem>
            <Payment src={footer.img}/>
        </Right>
    </Container>
  )
}

export default Footer