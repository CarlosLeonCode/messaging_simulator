import { Card } from 'react-bootstrap'

import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

export default function Chat(){

    return(
        <Card 
            style={{ height: '85vh' }}
        >
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </Card>
    )
}