import React, { useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Helmet from '../component/Helmet/Helmet'
import CommonSection from '../component/UI/category/common-section/CommonSection'

function Register() {
  // hook
  const fullNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const submitHandler = (e) =>{
    e.preventDeault()
  }
  return (
    <Helmet title='register'>
      <CommonSection title="Register"/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' className='w-full text-center mt-5 mb-5'>
              <form action="" onSubmit={submitHandler}> 
                <div className="form-group">
                  <input type="text" placeholder='Enter fullName' ref={fullNameRef} required/>
                </div>
                <div className="form-group">
                  <input type="email" placeholder='Enter Email' ref={emailRef} required/>
                </div>
                <div className="form-group">
                  <input type="password" placeholder='Enter Password' ref={passwordRef} required/>
                </div>
                <button type="submit" className='rounded text-white text-[1.2rem] p-[.7rem] bg-red-400  text-center hover:bg-blue-500'><span className='mb-[2rem]'>Signup</span></button>
                <div>
                  <Link to={"/login"}>
                    <span className="text-center font-[100]">
                      {" "}
                      Already have an account? Done an account{" "}
                    </span>
                  </Link>
                </div>
              </form> 
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register