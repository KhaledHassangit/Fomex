import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup'; 

const Statics = () => {
    return (
        <section className='statics'>
            <Container className='text-center'>
                <Row>
                    <div className='d-flex justify-content-between align-items-center flex-wrap'>
                        <div>
                            <h1>
                                <CountUp end={352700} duration={2} /> 
                            </h1>
                            <span>زيارة للموقع</span>
                        </div>

                        <div>
                            <h1>
                                <CountUp end={1200} duration={2} />
                            </h1>
                            <span> مشاركة للجائزة</span>
                        </div>

                        <div>
                            <h1>
                                <CountUp end={150} duration={2} />
                            </h1>
                            <span> عارض</span>
                        </div>

                        <div>
                            <h1>
                                <CountUp end={20000} duration={2} />
                            </h1>
                            <span> زائر</span>
                        </div>

                        <div>
                            <h1>
                                <CountUp end={50000} duration={2} />
                            </h1>
                            <span> مسجل</span>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Statics;
