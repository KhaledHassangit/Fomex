import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft } from "react-icons/fa6";
import Logo from "../assets/Logo.png"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { FaPhone  ,FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer dir='rtl'>
            <Container>

                <Row>

                    <div className="subscribe  ">
                        <h2 >
                            اشترك معنا فى القائمة البريدية ليصلك كل ماهو جديد  <br />وحصري من فومكس
                        </h2>
                        <div className='d-flex gap-4'>
                            <input type='email' placeholder='البريد الإكتروني' />
                            <button className='book'>
                                انضم الآن
                                <FaArrowLeft style={{ marginRight: '8px' }} />
                            </button>
                        </div>
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="social d-flex justify-content-between gap-5">
                        <Col md="4">
                            <div className='me-5'>
                                <img className="footer-logo" src={Logo} alt="Fomex Logo" />
                                <p className='ms-4'>
                                    اكتشف أحدث تقنيات الوسائط مثل الذكاء الاصطناعي والواقع المعزز، وتواصل مع خبراء الصناعة الرائدين.
                                </p>
                            </div>
                            <ul className='d-flex flex-row' >
                                <li style={{ margin: '0 10px' }}>
                                    <RiTwitterXFill size={20} color="white" />
                                </li>
                                <li style={{ margin: '0 10px' }}>
                                    <FaInstagram size={20} color="white" />
                                </li>
                                <li style={{ margin: '0 10px' }}>
                                    <FaTwitter size={20} color="white" />
                                </li>
                                <li style={{ margin: '0 10px' }}>
                                    <FaFacebook size={20} color="white" />
                                </li>
                            </ul>
                        </Col>

                        <Col md="4">
                            <div className='d-flex links'>
                            <ul >
                            <h6 className='title'>روابط سريعة</h6>
                                <li>
                                عن المعرض
                                </li>
                                <li>
                                المركز الاعلامي
                                </li>
                                <li>
                                المنتدي السعودي للاعلام
                                </li>
                                <li>
                                الاجندة
                                </li>
                                <li>
                                حول العالم
                                </li>
                            </ul>
                            <ul className='mt-4'>
                                <li>
                                المركز الاعلامي
                                </li>
                                <li>
                                المنتدي السعودي للاعلام
                                </li>
                                <li>
                                الاجندة
                                </li>
                                <li>
                                حول العالم
                                </li>
                            </ul>
                            </div>
                        </Col>

                        <Col md="4">
                            <ul className='contact'>
                            <h6 className='title  me-2 '> روابط التواصل</h6>
                                <li>
                                    <div className='icon  ms-2'>
                                    <FaPhone color='#1A735D' />
                                    </div>
                                    966920026612+
                                </li>
                                <li>
                                    <div className='icon  ms-2'>
                                    <MdOutlineEmail  color='#1A735D' />
                                    </div>
                                    fomex@gmail.com                                </li>
                                <li>
                                    <div className='icon ms-2'>
                                    <FaLocationDot  color='#1A735D'/>
                                    </div>
                                    Riyadh, Saudi arabia
                                </li>
                            </ul>
                        </Col>
                    </div>
                    <hr style={{color:"#97928B"}} />

                </Row>

                <Row>
                    <div className="privacy">
                        <Container>

                        </Container>
                    </div>
                </Row>

            </Container>
        </footer>
    )
}

export default Footer
