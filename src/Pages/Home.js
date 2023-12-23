import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../Store/countriesSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


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
        if (status === 'data') {
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
                    <Footer/>
                </Row>
            </Container>

        </>

    )
}

export default Home