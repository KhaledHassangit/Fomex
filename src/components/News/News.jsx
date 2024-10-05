import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { MdArrowBackIos } from 'react-icons/md';
import { NewsData } from './newsData'; // Assuming the path is correct

const News = () => {
    const [expandedId, setExpandedId] = useState(null);

    const handleReadMoreClick = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section className='news pb-5'>
            <div className='heading mb-5'>
                <h2>الأخبــــار</h2>
                <p>
                    استكشف الكثير من المسابقات المتاحة خلال هذا العام واستعرض المسارات المتنوعة واختر المسابقة المناسبة لامكانياتك
                </p>
            </div>
            <Container className='' dir='rtl'>
                <div className="d-flex flex-wrap justify-content-between">
                    {NewsData.map((news) => (
                        <Card
                            key={news.id}
                            style={{
                                width: '30%', // 3 cards per row
                                maxHeight: 'auto',
                                borderRadius: '22px',
                                overflow: 'hidden',
                                border: 'none',
                                marginBottom: '20px',
                                marginRight: '10px',
                                marginLeft: '10px'
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src={news.image}
                                style={{
                                    width: '100%', // Keep image width stable
                                    height: '250px',
                                    borderRadius: '12px'
                                }}
                            />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Text>
                                    {news.text}
                                </Card.Text>
                                {/* Render additional text conditionally */}
                                <Card.Text className={`additional-text ${expandedId === news.id ? 'show' : ''}`}>
                                    {news.additionalText}
                                </Card.Text>
                                <Button
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        color: '#27AB9E',
                                        padding: 0
                                    }}
                                    onClick={() => handleReadMoreClick(news.id)}
                                >
                                    {expandedId === news.id ? 'اقرا أقل' : 'اقرا المزيد'}
                                    <MdArrowBackIos style={{ marginLeft: '8px' }} />
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default News;
