import CustomButton from './CustomButton'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import CardService from './CardService'
import Card1 from '@/public/images/card1.webp'
import Card2 from '@/public/images/card2.webp'
import Card3 from '@/public/images/card3.webp'
import FeaturesCarousel from '@/components/features/FeaturesCarousel'

const Cards = [
  {
    title: 'Pre-Listing Checklist',
    content: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    link: '#',
    icon: Card1,
  },
  {
    title: 'Home Valuation',
    content: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    link: '#',
    icon: Card2,
  },
  {
    title: 'Proceeds Calculator',
    content: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    link: '#',
    icon: Card3,
  },
]

//IMAGES
import StreeView from '@/public/images/street_1.webp'

const DiscoverSolution = () => {
  return (
    <section className='w-full py-24'>
      <Container customStyle='flex responsive_container flex-col gap-y-10'>
        <div className='w-3/5 flex m-auto flex-col justify-center gap-y-16 text-center text-black capitalize leading-[2rem]'>
          <h2 className='leading-[120%]'>
            Discover Listy's tailored <br />
            <span className='text-lightBlue'>real estate solutions</span>
          </h2>
          <p>
            From our basic $149 Standard Package to our all-inclusive Premium
            Package. Explore our Full Listing Package for comprehensive support
            and take advantage of our add-ons for extra convenience. Plus, enjoy
            a 25% buyer agent credit with our Premium or Full Listing Package.{' '}
          </p>
        </div>
        <FeaturesCarousel />
        <div className='w-full flex flex-row justify-center gap-x-10 mb-16'>
          <CustomButton className='btn_secondary min-w-[16rem] border-none bg-lightBlue hover:bg-black hover:text-white'>
            Talk to an Expert
          </CustomButton>

          <CustomButton className='btn_secondary min-w-[16rem] border-black text-black hover:text-lightBlue hover:bg-black'>
            Explore all Listy packages
          </CustomButton>
        </div>
        <div className='w-full flex flex-wrap justify-between items-center mb-16'>
          <div className='flex flex-col items-start w-2/5 text-black gap-y-10'>
            <h2 className='leading-[120%]'>
              This is how we <br />
              <span className='text-lightBlue'>can help you</span>
            </h2>
            <p>
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.Jorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex  w-2/5'>
            <Image
              src={StreeView}
              className='w-full min-h-[15rem] rounded-xl'
            />
          </div>
        </div>
        <div className='w-full flex justify-between gap-32'>
          {Cards.map((card, index) => (
            <CardService
              key={index}
              icon={card.icon}
              title={card.title}
              content={card.content}
              link={card.link}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default DiscoverSolution
