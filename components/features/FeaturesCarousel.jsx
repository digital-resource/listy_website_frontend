'use client'
// LIBRARIES
import Carousel from 'react-multi-carousel'
import Container from '@/components/Container'
import 'react-multi-carousel/lib/styles.css'
import DiscoverCard from './DiscoverCard'
import Slide1 from '@/public/images/slide1.webp'
import Slide2 from '@/public/images/slide2.webp'
import Slide3 from '@/public/images/slide3.webp'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'

export const CustomArrow = ({ next, previous }) => {
  return (
    <div className='flex items-center justify-between'>
      {/* <button
        className='flex items-center justify-center w-12 h-12 bg-white rounded-full border-3 border-solid border-lightBlue'
        onClick={() => previous()}
      >
        <RiArrowLeftSLine className='text-primary text-4xl font-semibold' />
      </button> */}
      <button
        onClick={() => next()}
        className='flex items-center ml-5 shadow-xl justify-center w-12 h-12 bg-white rounded-full border-4 border-solid border-lightBlue'
      >
        <RiArrowRightSLine className='text-primary text-5xl font-bold' />
      </button>
    </div>
  )
}

const FeaturesCarousel = () => {
  return (
    <Container customStyle='flex items-center justify-center'>
      <Carousel
        additionalTransfrom={0}
        customButtonGroup={<CustomArrow />}
        arrows={false}
        autoPlay={false}
        autoPlaySpeed={3500}
        centerMode={false}
        className='py-10'
        containerClass='container'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        partialVisible
        itemClass='px-2'
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled
        renderButtonGroupOutside
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 780 },
            items: 2,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: { max: 1024, min: 450 },
            items: 2,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
            partialVisibilityGutter: 20,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable
      >
        <DiscoverCard
          image={Slide1}
          title='Package #1'
          link='#'
          className='w-1/3'
        >
          <ul className='list-disc pl-5'>
            <li>
              <p>Small description</p>
            </li>
            <li>
              <p>Small description</p>
            </li>
            <li>
              <p>Small description</p>
            </li>
          </ul>
        </DiscoverCard>
        <DiscoverCard
          image={Slide2}
          title='Package #2'
          link='#'
          className='w-1/3'
        >
          <ul className='list-disc pl-5'>
            <li>
              <p>Small description</p>
            </li>
            <li>
              <p>Small description</p>
            </li>
            <li>
              <p>Small description</p>
            </li>
          </ul>
        </DiscoverCard>
        <DiscoverCard
          image={Slide3}
          title='Package #3'
          link='#'
          className='w-1/3'
        >
          <ul className='list-disc pl-5'>
            <li>
              <p>Small description</p>
            </li>
            <li>
              <p>Small description</p>
            </li>
            <li>
              <p>Small description</p>
            </li>
          </ul>
        </DiscoverCard>
      </Carousel>
    </Container>
  )
}

export default FeaturesCarousel
