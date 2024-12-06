import CustomButton from './CustomButton'
import Container from './Container'
import Navbar from './Navbar'
import Image from 'next/image'
import Follow from '@/public/images/follow.webp'
import Link from 'next/link'


const Hero = () => {
  return (
    <section className='hero relative bg-lightBlue top-0 overflow-hidden'>
      <Navbar bgColor='bg-lightBlue' textColor='text-white' isHome />
      <Container customStyle='flex flex-wrap justify-between items-center responsive_container text-white'>
        <div className='flex flex-col w-1/2 gap-y-10 '>
          <h1 className='leading-[110%]'>
            Vorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className='w-3/4 text-xl font-light'>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus.
          </p>
          <div className='w-full flex justify-start flex-wrap gap-x-10'>
            <Link href='#'>
              <CustomButton className='btn_primary'>
                Talk to an Expert
              </CustomButton>
            </Link>

            <Link href='#'>
              <CustomButton className='btn_secondary'>
                Start a Free Trial
              </CustomButton>
            </Link>
          </div>
          <div className='w-1/2 flex flex-row gap-x-5'>
            <Image src={Follow} />
            <Link href='#' className='hover:text-black transition-all'>
              <p className='text-base font-light'>
                FIND OUT WHAT
                <br /> PEOPLE SAY ABOUT US
              </p>
            </Link>
          </div>
        </div>
        <div className='flex w-3/5 absolute right-0 bottom-[-5rem] bg-hero bg-cover bg-no-repeat bg-center min-h-[40rem]'></div>
      </Container>
    </section>
  )
}

export default Hero
