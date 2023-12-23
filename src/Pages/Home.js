import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../Store/countriesSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Facebook from '../assets/images/facebook.png'
import Google from '../assets/images/google.png'
import Linkidin from '../assets/images/linkidin.png'
import Twitter from '../assets/images/twitter.png'
import Header from '../Components/Header';


function Home() {

    const dispatch = useDispatch();
    const [filter, setFilter] = useState('all');
    const { countries, status, error } = useSelector((state) => state.countries)

    const filteredCountries = filter === 'all' ? countries : countries.filter((country) => country.region === filter);

    const handleFilter = (region) => {
        setFilter(region);
        dispatch(fetchCountries());
    };

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCountries())
        }
    }, [dispatch, status])

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <Container>
                <Row>
                    <Header onFilter={handleFilter} />

                    {filteredCountries.map((country) => (
                        <Col md={6}>
                            <Card className='mb-2 card'>
                                <Card.Body >
                                    <div className='d-flex'>
                                        <img src={country.flag} alt={`${country.name} flag`} style={{ width: "15%" }} />
                                        <div className='countries-name'>{country.name} <br /><span className='font-weight-light'>{country.region}</span></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <div className='footer-wrap'>
                    <div className='d-flex justify-content-center mt-5 mb-4'>
                        <div className='social-icons'>
                            <img src={Google} alt='google' className="social-icon" />
                        </div>
                        <div className='social-icons'>
                            <img src={Facebook} alt='facebook' />
                        </div>
                        <div className='social-icons'>
                            <img src={Linkidin} alt='linkidin' />
                        </div>
                        <div className='social-icons'>
                            <img src={Twitter} alt='twitter' />
                        </div>
                    </div>
                    <div>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <p className='footer-title'>Example@email.com </p>
                            <p className='footer-title'>Copyright © 2020 Name. All rights reserved.</p>
                        </div>
                    </div>
                    </div>
                    
                </Row>
            </Container>

        </>

    )
}

export default Home