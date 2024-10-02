import Hero from '@/components/Hero'
import WhyChooseListy from '@/components/WhyChooseListy'
import { Divider } from '@nextui-org/react'
import DiscoverSolution from '@/components/DiscoverSolution'
import Faqs from '@/components/Faqs'
import Footer from '@/components/Footer'
import ConatctHome from '@/components/ConatctHome'

export const metadata = {
  title: 'Homepage | Listy',
  description: 'Listy description',
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseListy />
      <Divider className='responsive_container bg-black' />
      <DiscoverSolution />
      <Divider className='responsive_container_center bg-black' />
      <Faqs/>
      <ConatctHome/>
      <Footer/>
    </>
  )
}
