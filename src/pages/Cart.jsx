import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'

const Container = styled.div`

`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Footer/>
    </Container>
  )
}

export default Cart