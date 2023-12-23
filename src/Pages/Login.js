import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, loginFailure  } from '../Store/authSlice'
import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LoginBg from '../assets/images/Illustration.png'
import Facebook from '../assets/images/facebook.png'
import Google from '../assets/images/google.png'
import Linkidin from '../assets/images/linkidin.png'
import Twitter from '../assets/images/twitter.png'

function Login() {
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm()

    const UserEmail = 'test@example.com';
    const UserPassword = 'password';
    const fakeToken = 'fake_jwt_token';

    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const onSubmit = (data) => {
        if (data.email === UserEmail && data.password === UserPassword) {
            dispatch(loginUser(fakeToken));
            reset()
            navigate('/home');
            toast.success('Login Successful')
        } else {
            toast.error('Invalid email or password')
            dispatch(loginFailure());
            reset()
        }
    }
    return (
        <>
            <Container className='min-vh-100'>
                <Row className='d-flex justify-content-center align-items-center '>
                    <Col className='col-sm-12 col-md-12 align-items-md-center align-items-lg-stretch  col-lg-3  min-vh-100 d-flex flex-column justify-content-center '>
                        <h4 className='text-lg-start text-center font-weight-bold title'>Sign In</h4>
                        <p className='text-lg-start text-center font-weight-bold sub-title'>New user? <Link>Create an account</Link></p>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Control
                                className='mb-3 '
                                type="email"
                                placeholder='User Name'
                                {...register("email", { required: true })}
                            />
                            {errors.email?.type === "required" && (
                                <p className='error'>Email is required</p>
                            )}
                            <Form.Control
                                className='mb-3'
                                type="password"
                                placeholder='Password'
                                {...register("password", { required: true })}
                            />
                            {errors.password?.type === "required" && (
                                <p className='error'>Password is required</p>
                            )}

                            <Form.Check
                                className='mt-3 font-weight-bold w-10 sub-title'
                                inline
                                label="Keep me signed in"
                                name="group1"
                                type="checkbox"
                                id="inline-checkbox"
                            />
                            <div className='mt-2'>
                                <Button className="login-btn btn-sm w-100" type='submit'>Sign In</Button>

                                <div className='sign-text font-weight-bold sub-title'>
                                    Or Sign In With
                                </div>
                            </div>
                        </Form>
                        <div className='d-flex justify-content-around mt-3'>
                            <img src={Google} alt='google' />
                            <img src={Facebook} alt='facebook' />
                            <img src={Linkidin} alt='linkidin' />
                            <img src={Twitter} alt='twitter' />
                        </div>
                    </Col>
                    <Col className='col-sm-12 col-md-12 col-lg-8 text-center '>
                        <div className='d-none d-lg-block' >
                            <img src={LoginBg} alt='login' />
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login
