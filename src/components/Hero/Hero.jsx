import React from 'react'
import { Container } from 'react-bootstrap'
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className='landing '>
      <Container className='text-center'>
        <div className='info-text'>
          <h6>أهلا بكم</h6>
          <h5>فــومكس
            </h5>
          <h2>
            معرض مستقبل الاعلام</h2>
        </div>
        <div className='date'>
          <div className='d-flex gap-2 '>
            <p dir='rtl'>19 - 21 فبراير, 2025</p>
            <FaClock color='#1A735D ' style={{width:"16px",height:"20px"}}/>
          </div>
          <div className='d-flex gap-2 '>
            <p>الرياض, المملكة العربية السعودية</p>
            <FaLocationDot color='#1A735D ' style={{width:"16px",height:"20px"}}/>
          </div>
        </div>
        <button className='book'>
          احجز مقعدك الآن
        </button>
      </Container>
    </section>
  )
}

export default Hero
