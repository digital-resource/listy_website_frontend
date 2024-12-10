import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import { Divider } from '@nextui-org/react'
import EqualLogo from '@/public/images/equal-housing-logo.png'
import Facebook from '@/public/images/facebook.svg'
import Instagram from '@/public/images/instagram.svg'
import Logo from '@/public/images/logo.webp'

const Footer = () => {
  let currentYear = new Date().getFullYear()

  return (
    <section className='w-full py-16 bg-footer_gradient'>
      <Container customStyle='flex flex-col text-white responsive_container'>
        <div className='w-full flex flex-wrap justify-between'>
          <div className='w-full md:w-1/3 flex justify-between flex-wrap gap-x-10 text-center md:text-left'>
            <div className='w-full flex flex-col gap-y-2'>
              <h3 className='mb-5'>About us</h3>
              <Link href='#' className='hover:text-black transition-all'>How Listy Works</Link>
              <Link href='#' className='hover:text-black transition-all'>Why List with Listy</Link>
              <Link href='#' className='hover:text-black transition-all'>FAQs</Link>
            </div>
            <div className='w-full flex flex-col gap-y-2 mt-4'>
              <h3 className='mb-5'>Services</h3>
              <Link href='#' className='hover:text-black transition-all'>Pre-Listing Checklist</Link>
              <Link href='#' className='hover:text-black transition-all'>Home Valuation</Link>
              <Link href='#' className='hover:text-black transition-all'>Seller Proceeds Calculator</Link>
            </div>
          </div>
          <Link href='/' className="m-auto my-6 md:m-0">
            <Image src={Logo} className='w-[15rem]' />
          </Link>
        </div>
        <Divider className='bg-white my-10' />
        <div className='w-full flex flex-col sm:flex-row flex-wrap justify-between items-center sm:items-end gap-y-4'>
          <p className='w-full text-center sm:text-left sm:w-1/3'>
            © {currentYear} Listy All rights reserved.{' '}
            <Link href='#' className='hover:text-black'>
              Refund Policy
            </Link>
          </p>
          <Image src={EqualLogo} className='w-[4rem]' />
          <div className='w-full sm:w-1/3 flex flex-col sm:items-end gap-y-5'>
            <div className='flex justify-center gap-5'>
              <Link href='#'>
                <Image src={Facebook} alt='Facebook' />
              </Link>
              <Link href='#'>
                <Image src={Instagram} alt='Instagram' />
              </Link>
            </div>
            <p className="w-full text-center sm:text-right">
              Designed by{' '}
              <Link href='https://www.yourdigitalresource.com/' target="_blank" className='hover:text-black'>
                Digital Resource
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer
