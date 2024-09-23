import React from 'react'
import CustomButton from './CustomButton'
import Container from './Container'

const Hero = () => {
  return (
    <section className='hero bg-lightBlue'>
      <Container customStyle='flex flex-col justify-center items-start gap-5 responsive_container text-white'>
        <h1>Header</h1>
        <h2>Header</h2>
        <h3>Header</h3>
        <p>
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus.
        </p>
        <CustomButton>Button 1</CustomButton>
        <CustomButton className='btn_secondary'>Button 2</CustomButton>
      </Container>
    </section>
  )
}

export default Hero
