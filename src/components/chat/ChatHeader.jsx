import { Card, Row, Col, Image } from 'react-bootstrap'
import personImg from '../../assets/img/elliot.jpg' 

export default function ChatHeader(){

    const { Header } = Card

    return(
        <Header>
            <Row>
                <Col sm="5">
                    <Image src={ personImg } roundedCircle style={ imgStyle } />
                    <div style={ wpDescription }>
                        <div style={ description }>
                            Elliot Alderson | Mr.Robot
                            <span style={ userIndicator }>online</span>
                        </div>
                    </div>    
                </Col>
            </Row>
        </Header>
    )
}

const imgStyle = {
    width: '60px', 
    height: '60px', 
    objectFit: 'cover', 
    marginLeft: '1rem'
}

const wpDescription = {
    display: 'inline-block',
    marginLeft: '1rem',
    position: 'absolute',
    top: 15
}

const description = {
    display: 'flex',
    flexDirection: 'column'
}

const userIndicator = {
    fontSize: '0.8rem',
    display: 'block'
}