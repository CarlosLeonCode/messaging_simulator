import { Card, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import moment from 'moment'

export default function ChatBody(){

    const { Body } = Card
    const messages = useSelector(state => state.messages.list)

    return(
        <Body style={{ overflowY: 'auto' }}>
            <Row>
            {
                messages.map(item => <MessageCard details={ item } key={ item.id }/>)
            }
            </Row>
        </Body>
    )
}

const MessageCard = (props) => {

    const { details: { message, date } } = props
    const { Body } = Card

    console.log(props)

    return(
        <Col sm='12'>
            <Card style={ cardStyles }>
                <Body>
                    { message }
                    <span style={ dateStyle }>{ moment(date).format('MMM Do YY , h:mm:ss a') }</span>
                </Body>
            </Card>
        </Col>
    )
}

const cardStyles = {
    borderRadius: '1rem 3px 1rem 1rem', 
    margin: '0.5rem', 
    background: '#ddd', 
    border: 'none',
    minHeight: '4rem',
    padding: '0.5rem'
}

const dateStyle = {
    position: 'absolute',
    bottom: '6px',
    right: '1rem',
    fontSize: '.7rem',
    color: 'gray'
}