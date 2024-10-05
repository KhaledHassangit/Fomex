import React from 'react';

const Partners = () => {
    // Partner images
    const partnersGroup1 = [
        require('../../assets/partner1.png'),
        require('../../assets/partner2.png'),
        require('../../assets/partner3.png'),
        require('../../assets/partner4.png'),
        require('../../assets/partner5.png'),
        require('../../assets/partner6.png'),
        require('../../assets/partner7.png'),
        require('../../assets/partner8.png'),
    ];

    const partnersGroup2 = [
        require('../../assets/partner9.png'),
        require('../../assets/partner10.png'),
        require('../../assets/partner11.png'),
        require('../../assets/partner12.png'),
        require('../../assets/partner1.png'),  
        require('../../assets/partner2.png'),
        require('../../assets/partner3.png'),
    ];

    const partnersGroup3 = [
        require('../../assets/partner4.png'),
        require('../../assets/partner5.png'),
        require('../../assets/partner6.png'),
        require('../../assets/partner7.png'),
        require('../../assets/partner8.png'),
        require('../../assets/partner9.png'),
    ];

    return (
        <section className='partners'>
            <div className='heading mb-5'>
                <h2>..شركاء نفخر بخدمتهم</h2>
            </div>

            <div className='partners-container'>
                <div className='partners-group'>
                    {partnersGroup1.map((image, index) => (
                        <img key={index} src={image} alt={`Partner ${index + 1}`} className='partner-image' />
                    ))}
                </div>

                <div className='partners-group'>
                    {partnersGroup2.map((image, index) => (
                        <img key={index} src={image} alt={`Partner ${index + 9}`} className='partner-image' />
                    ))}
                </div>

                <div className='partners-group'>
                    {partnersGroup3.map((image, index) => (
                        <img key={index} src={image} alt={`Partner ${index + 13}`} className='partner-image' />
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default Partners;
