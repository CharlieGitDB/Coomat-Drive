import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import './Base.css'

const Base = () => (
    <div>
        <Grid>
            <Row>
                <Col xs={12} md={8}>
                    Hello
                </Col>
            </Row>
        </Grid>
    </div>
)

export default Base