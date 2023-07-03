import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

`

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlined />
        </Arrow>
        <Arrow>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider