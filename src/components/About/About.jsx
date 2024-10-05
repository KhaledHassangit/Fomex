import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import about from "../../assets/about.png";

const About = () => {
    return (
        <section className='welcome about'>
            <Container fluid>
                <Row className='d-flex justify-content-between'>
                    <Col md="6">
                        <div className='holder position-relative'>
                            <img alt='Welcome Video' src={about} className='img-fluid' />
                            <div className='overlay'></div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className='text' dir='rtl'>
                            <h1>
                            لماذا تزور فومكس؟
                            </h1>
                            <p>
                            اكتشف أحدث تقنيات الوسائط مثل الذكاء الاصطناعي والواقع المعزز، وتواصل مع خبراء الصناعة الرائدين. اغتنم هذه الفرصة لتكوين شراكات وصفقات استراتيجية من شأنها تعزيز مكانتك. انضم إلينا في الحدث الذي من المقرر أن يعيد تعريف مستقبل الوسائط!
                            </p>
                        </div>

                        <ul>
                            <li>
                            انطلق في رحلة نحو عالم الإبداع اللامتناهي، حيث تنتظرك الأعمال الإعلامية الملهمة والأفكار الإبداعية التي ستشكل دافعاً لإنجاز مشاريعك المستقبلية.
                            </li>
                            <li>
                            ابدأ في بناء علاقات مهنية ذات قيمة عالية من خلال التفاعل مع رواد الصناعة وممثلي الشركات، فضلاً عن تواصلك مع زملائك في المجال.
                            </li>
                            <li>
                            اكتسب رؤية عميقة حول مستقبل صناعة الإعلام، لتظل دائماً في مقدمة المبتكرين والرائدين.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
