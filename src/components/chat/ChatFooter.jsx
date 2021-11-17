import { useState } from 'react'
import { Card, Row, Col, Form, Button } from 'react-bootstrap'
import { AiOutlineSend, AiOutlineClose } from 'react-icons/ai'
import { BsEmojiLaughing } from 'react-icons/bs'
import Picker from 'emoji-picker-react'
import { v4 as uuidv4 }  from 'uuid'
import moment from 'moment'

// redux 
import { useDispatch } from 'react-redux'
import { toggleShowEmojisBoxAction } from '../../actions/emojisBoxActions'
import { addMessageAction } from '../../actions/messagesActions'

export default function ChatFooter(){
    const dispatch = useDispatch()

    const [showEmojisBox, setShowEmojisBox] = useState(false)
    const [message, setMessage] = useState('')

    const { Footer } = Card
    const { Group, Control } = Form
    
    const toggleShowEmjsBox = state => {
        setShowEmojisBox(state)
        dispatch(toggleShowEmojisBoxAction( state ))
    }

    const cathEmoji = (e, emojiData) => {
        let emoji = emojiData.emoji
        appendEmojiToMsm(emoji)
    }

    const appendEmojiToMsm = emoji => {
        // Append to text area 
        let textarea = document.querySelector('#fieldMessage')
        textarea.value = textarea.value + `${ emoji }`

        // Append to msm state
        let newMsm = message + `${ emoji }`
        setMessage(newMsm)
    }

    const msmOnChange = (e) =>{
        let message = e.target.value
        setMessage(message)
    }

    const submitMsm = async e => {
        e.preventDefault()
        let isValid = await validateMessage();

        (isValid)
            ? dispatch( addMessageAction({
                id: uuidv4(),
                message: message,
                date: moment()
            }))
            : console.error('You can send empty messages!')
        cleanMessageToField()
    }

    const cleanMessageToField = () => {
        // from state
        setMessage('')

        // from textarea
        let textarea = document.querySelector('#fieldMessage')
        textarea.value = ''
    }

    const validateMessage = () => {
        return (message.length > 0)
            ?  true
            : false
    }

    return(
        <Footer className="p-3">
            <Form onChange={ msmOnChange } onSubmit={ e => submitMsm(e) } >
                <Row>
                    <Col xs="2" md="2">
                        {
                            (showEmojisBox) 
                                ? <Button style={ buttonStyles } type="button" onClick={() => toggleShowEmjsBox(false)}> <AiOutlineClose size={20} /> </Button>
                                : <Button style={ buttonStyles } type="button" onClick={() => toggleShowEmjsBox(true)}> <BsEmojiLaughing size={20} /> </Button>
                        }
                        {
                            (showEmojisBox) 
                                &&
                                <Picker 
                                    disableSearchBar 
                                    pickerStyle={{ position: 'absolute', bottom: '5rem', boxShadow: '0 5px 10px lightgray' }}
                                    onEmojiClick={ cathEmoji }
                                />
                        }
                    </Col>
                    <Col xs="8" md="8">
                        <Group>
                            <Control 
                                as="textarea" 
                                rows={1} 
                                placeholder="Message..."
                                style={ controlStyles }
                                name="text"
                                id="fieldMessage"
                            />
                        </Group>
                    </Col>

                    <Col xs="2" md="2" className="d-flex justify-content-center">
                        <Group>
                            <Button style={ buttonStyles } type="submit" >
                                <AiOutlineSend size={25}/>
                            </Button>
                        </Group>
                    </Col>
                </Row>
            </Form>
        </Footer>
    )
}

const controlStyles = {
    minHeight: '3rem', 
    maxHeight: '6rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '.8rem',
    paddingBottom: '.8rem',
    borderRadius: '30px',
    resize: 'none',
    overflow: 'hidden'
}

const buttonStyles = {
    borderRadius: '50px',
    width: '3rem',
    height: '3rem'
}