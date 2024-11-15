import CustomButton from './CustomButton'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import PlayImage from '@/public/images/play.webp'
import { LuArrowRight } from "react-icons/lu";


const WhyChooseListy = () => {
  return (
    <section className='whychooselisty py-24'>
      <Container customStyle='flex flex-wrap justify-between bg-black p-12 xl:p-24 rounded-[2.69rem] min-h-[35rem] gap-y-10 responsive_container'>
        <div className='flex flex-col items-start container-width-45 gap-y-10'>
          <h2>
            Why Choose <span className='text-lightBlue'>Listy</span>
          </h2>
          <div className='w-full flex flex-wrap gap-7 justify-center'>
            <div className='w-[12rem] h-[12rem] flex flex-col gap-y-2 text-center rounded-full p-10 items-center justify-center border-solid border-1 border-white'>
              <h2 className='text-lightBlue'>+123</h2>
              <p>Satisfied <br/>Customers</p>
            </div>
            <div className='w-[12rem] h-[12rem] flex flex-col gap-y-2 text-center rounded-full p-10 items-center justify-center border-solid border-1 border-white'>
              <h2 className='text-lightBlue'>+456</h2>
              <p>Sold <br/>Houses</p>
            </div>
          </div>
          <p>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Forem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
            est a, mattis tellus.{' '}
          </p>
          <Link
            href='#'
            className='flex flex-row items-center gap-x-2 rounded-xl text-left text-base font-inter font-normal leading-normal transition-all hover:text-lightBlue'
          >
            Learn More
            <LuArrowRight className='text-lg font-semibold'/>
            </Link>
          <CustomButton className='btn_secondary'>
            Start a Free Trial
          </CustomButton>
        </div>
        <div className='flex flex-col container-width-45 gap-10'>
          <div className='w-full flex items-center justify-center rounded-xl bg-video1 bg-cover bg-center bg-no-repeat min-h-[18rem] relative'>
            <Image src={PlayImage} className='cursor-pointer' />
          </div>
          <div className='w-full flex items-center justify-center rounded-xl bg-video2 bg-cover bg-center bg-no-repeat min-h-[18rem] relative'>
            <Image src={PlayImage} className='cursor-pointer'/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseListy
