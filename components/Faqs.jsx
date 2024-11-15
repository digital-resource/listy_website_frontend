'use client'
import { Accordion, AccordionItem } from '@nextui-org/react'
import Container from './Container'
import CustomButton from './CustomButton'
import Link from 'next/link'
import { IoIosArrowDropdown } from 'react-icons/io'

const Faqs = () => {
  const itemClasses = {
    title: 'font-normal',
    indicator: 'text-lightBlue font-medium',
    base: 'rounded-2xl',
  }
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  return (
    <section className='w-full py-24'>
      <Container customStyle='flex flex-wrap gap-y-10 xl:py-20 p-12 xl:px-24 rounded-[2.69rem] justify-between text-white bg-faq_gradient min-h-[25rem] responsive_container'>
        <div className='w-full lg:w-2/5 flex flex-col gap-y-7 items-start'>
          <h2 className=''>
            <span className='text-lightBlue'>Frequently</span> Asked Questions
          </h2>
          <div>
            <p className='mb-3'>Can’t Find What You’re Looking for?</p>
            <Link href='#' className='text-lightBlue font-medium hover:text-white'>
              Contact Us ! We’ll Answer Your Questions
            </Link>
          </div>

          <CustomButton className='btn_secondary bg-lightBlue border-none hover:bg-white hover:text-black'>
            Talk to an Expert
          </CustomButton>
        </div>
        <div className='w-full lg:w-1/2'>
          <Accordion
            variant='splitted'
            isCompact
            className='text-black font-normal'
            itemClasses={itemClasses}
          >
            <AccordionItem
              key='1'
              aria-label='Accordion 1'
              title='FAQ question here'
              indicator={<IoIosArrowDropdown />}
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key='2'
              aria-label='Accordion 2'
              title='FAQ question here'
              indicator={<IoIosArrowDropdown />}
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key='3'
              aria-label='Accordion 3'
              title='FAQ question here'
              indicator={<IoIosArrowDropdown />}
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key='4'
              aria-label='Accordion 4'
              title='FAQ question here'
              indicator={<IoIosArrowDropdown />}
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key='5'
              aria-label='Accordion 5'
              title='FAQ question here'
              indicator={<IoIosArrowDropdown />}
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key='6'
              aria-label='Accordion 4'
              title='FAQ question here'
              indicator={<IoIosArrowDropdown />}
            >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </section>
  )
}

export default Faqs
