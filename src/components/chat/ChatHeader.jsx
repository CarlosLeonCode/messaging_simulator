import { Card, Row, Col, Image } from 'react-bootstrap'
import personImg from '../../assets/img/homero_simps.jpg' 

export default function ChatHeader(){

    const { Header } = Card

    return(
        <Header>
            <Row>
                <Col sm="5">
                    <Image src={ personImg } roundedCircle style={ imgStyle } />
                    <div style={ wpDescription }>
                        <div style={ description }>
                            Homero Simpson
                            <span style={ userIndicator }>online</span>
                        </div>
                    </div>    
                </Col>
            </Row>
        </Header>
    )
}

const imgStyle = {
    width: '50px', 
    height: '50px', 
    objectFit: 'cover', 
    border: '1px solid lightgray',
    marginLeft: '1rem'
}

const wpDescription = {
    display: 'inline-block',
    marginLeft: '1rem'
}

const description = {
    display: 'flex',
    flexDirection: 'column'
}

const userIndicator = {
    fontSize: '0.8rem',
    display: 'block'
}