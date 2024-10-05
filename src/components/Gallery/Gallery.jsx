import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import gallery from "../../assets/gallery.png";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.png";
import gallery6 from "../../assets/gallery6.png";
import gallery7 from "../../assets/gallery7.png";
import gallery8 from "../../assets/background2.png";

const images = [
    { src: gallery, alt: "Gallery Image 1" },
    { src: gallery1, alt: "Gallery Image 2" },
    { src: gallery2, alt: "Gallery Image 3" },
    { src: gallery3, alt: "Gallery Image 4" },
    { src: gallery4, alt: "Gallery Image 5" },
    { src: gallery5, alt: "Gallery Image 6" },
    { src: gallery6, alt: "Gallery Image 7" },
    { src: gallery7, alt: "Gallery Image 8" },
    { src: gallery8, alt: "Gallery Image 9" }
];

const Gallery = () => {
    return (
        <section>
            <div className='heading mb-5'>
                <h2>بعض من المشاركات وزوار المعرض</h2>
            </div>

            <Container>
                <Row>
                    {images.map((image, index) => (
                        <Col key={index} md={4} className='mb-4'>
                            <div className='image-item'>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className='img-fluid'
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Gallery;
