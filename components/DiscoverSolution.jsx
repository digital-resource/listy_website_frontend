import CustomButton from './CustomButton'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'

const DiscoverSolution = () => {
  return (
    <section className='w-full py-24'>
      <Container customStyle='flex responsive_container flex-col gap-y-10'>
        <div className='w-3/5 flex m-auto flex-col justify-center gap-y-10 text-center text-black capitalize leading-[2rem]'>
          <h2>
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
        <div className='w-full flex flex-row justify-center gap-x-10'>
          <CustomButton className='btn_secondary bg-lightBlue hover:bg-black hover:text-white'>
            Explore all Listy packages
          </CustomButton>

          <CustomButton className='btn_secondary border-black text-black hover:border-lightBlue'>
            Explore all Listy packages
          </CustomButton>
        </div>
      </Container>
    </section>
  )
}

export default DiscoverSolution
