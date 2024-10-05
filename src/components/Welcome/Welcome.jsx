import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import welcome from "../../assets/welcomesc.png";
import { IoPlay } from "react-icons/io5"; 

const Welcome = () => {
    return (
        <section className='welcome'>
            <Container fluid>
                <Row className='d-flex justify-content-between'>
                    <Col md="6">
                        <div className='holder position-relative'>
                            <img alt='Welcome Video' src={welcome} className='img-fluid' />
                            <div className='overlay'></div>
                            <button className='play-button'>
                                <IoPlay className='text-center' /> 
                            </button>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className='text' dir='rtl'>
                            <h1>
                                مرحبًا بكم في معرض<br />
                                "مستقبل الإعلام"<br />
                                (<span style={{ color: "#104540" }}>FOMEX</span>) بالرياض!
                            </h1>
                            <p>
                                اكتشف أحدث تقنيات الإعلام مثل الذكاء الاصطناعي والواقع المعزز، وتفاعل مع قادة الصناعة. اغتنم الفرصة لعقد صفقات وشراكات استراتيجية تعزز مكانتك. كن جزءًا من الحدث الذي سيعيد تشكيل مستقبل الإعلام!
                            </p>
                            <button className='book'>
                                احجز مقعدك الآن
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Welcome;
