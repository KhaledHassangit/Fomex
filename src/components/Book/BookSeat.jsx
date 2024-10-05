import React from 'react';
import { Container } from 'react-bootstrap';

const BookSeat = () => {
    return (
        <section className='booking pb-5'>
            <div className='heading mb-5'>
                <h2> .. اختر مقعدك الآن </h2>
                <p>الآن يمكنك عرض الاماكن المتاحة داخل المعرض واختيار المكان المناسب لك لعرض منتجك, من خلال المربعات الموجود بالأسفل اضغط عليها واعرض تفاصيل كل منها واختر ما يناسبك</p>
            </div>
            <Container>
            <table className='seat-table'>
                <tbody>
                    <tr>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat available'><div>2A</div></td>
                        <td className='seat available'><div>2B</div></td>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat double' colSpan={2}><div>AB</div></td>
                    </tr>
                    <tr className='combined-row'>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat available'><div>2B</div></td>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat double' colSpan={2}><div>2C</div></td>
                    </tr>
                    <tr className='combined-row'>
                        <td className='seat available'><div>2A</div></td>
                        <td className='seat double' colSpan={2}><div>2A</div></td>
                        <td className='seat available'><div>2A</div></td>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat available'><div>2C</div></td>
                    </tr>
                    <tr>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat available'><div>2A</div></td>
                        <td className='seat available'><div>2B</div></td>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat available'><div>2B</div></td>
                    </tr>
                    <tr>
                        <td className='seat available'><div>2A</div></td>
                        <td className='seat available'><div>2A</div></td>
                        <td className='seat available'><div>2A</div></td>
                        <td className='seat available'><div>2B</div></td>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat available'><div>2C</div></td>
                    </tr>
                    <tr>
                        <td className='seat available'>
                            <div>2C</div>
                        </td>
                        <td className='seat available'><div>2A</div></td>
                        <td className='seat available'><div>2B</div></td>
                        <td className='seat available'><div>2C</div></td>
                        <td className='seat available'><div>2B</div></td>
                        <td className='seat available'><div>2A</div></td>
                    </tr>
                </tbody>
            </table>



            
            </Container>

        </section>
    );
};

export default BookSeat;
