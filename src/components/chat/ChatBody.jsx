import { Card, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { BsTrashFill } from 'react-icons/bs'
import { deleteMessage } from '../../actions/messagesActions' 

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
    
    const { details: { message, date, id } } = props
    const { Body } = Card
    const dispatch = useDispatch()

    const removeMessage = e => {
        dispatch(deleteMessage(id))
    }

    return(
        <Col sm='12'>
            <Card style={ cardStyles }>
                <Body>
                    <BsTrashFill style={ trashIcon } onClick={ removeMessage }/>
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

const trashIcon = {
    position: 'absolute',
    right: 10,
    top: 10,
    color: 'gray',
    cursor: 'pointer'
}