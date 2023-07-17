import React from 'react'
import '../../../../style/common-section.css'
import { Container } from 'reactstrap'
// import Helmet from '../../../Helmet/Helmet'

const CommonSection = (props) => {
  return (
    <section className='common-section'>
        <Container className='text-[2.4rem] text-sky-400/100 font-[700]'>
            <h2> {props.title} </h2>
        </Container>
    </section>
  )
}

export default CommonSection