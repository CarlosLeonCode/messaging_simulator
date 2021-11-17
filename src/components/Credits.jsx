import { Card, Row, Col } from 'react-bootstrap'
import { DiReact } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { useSelector } from 'react-redux'

export default function Credits(){

    const state = useSelector(state => state)
    const { messages, emojisBox } = state
    const date = new Date()
    const year = date.getFullYear()

    console.log(emojisBox.show )

    return(
        <Card
            className="p-3"
        >
            <Row>

                <Col sm="12">
                    <h1 className="text-center display-6 mt-2" style={ titleStyle }>Message Simulator</h1>
                    <div style={{ borderTop: '1px solid lightgray' }}>
                        <p className="text-muted text-center py-3" style={ descriptionStyle }>
                            This is a message simulator created using React js and Redux. 
                            This one use LocalStorage for save the messages temporally.
                        </p>
                    </div>
                </Col>

                <Col sm="12" style={{ opacity: 0.6, borderBottom: '1px solid lightgray', paddingBottom: '0.8rem' }}>
                    <Row>
                        <Col sm="12 mb-3">
                            <h3 className="text-center">Technologies</h3>
                        </Col>

                        <Col sm="6" style={{ display: 'flex', alignItems: 'center', justifyContent:'flex-end' }} >
                            <DiReact size={ 45 }/>
                        
                        </Col>

                        <Col sm="6" style={{ display: 'flex', alignItems: 'center', justifyContent:'flex-start' }} >
                            <SiRedux size={ 35 }/>
                        </Col>
                    </Row>
                </Col>

                <Col className="py-3">
                    <h4 style={{ fontSize: '1.4rem' }}>Application State</h4>
                    <ul>
                        <li>
                            <b> Messages: </b> { messages.list.length }
                        </li>
                        <li>
                            <b> Show emojis: </b> { emojisBox.show ? 'Yes' : 'No' }
                        </li>
                    </ul>
                </Col>
                <Col sm="12" style={{ borderTop: '1px solid lightgray', paddingTop: '1rem' }}> 
                    <Row>
                        <Col sm="12">
                            <FaLinkedinIn />
                            <FaGithubAlt />
                            <CgWebsite />
                        </Col>

                        <Col sm="12">
                            <p className="text-center text-muted" style={{ fontSize: '0.9rem' }}>Develop by Carlos León ©{year}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}

const titleStyle = {
    fontSize: '1.8rem'
}

const descriptionStyle = {
    fontSize: '0.9rem'
}