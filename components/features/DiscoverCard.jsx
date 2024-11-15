import Link from 'next/link'
import Image from 'next/image'
import { LuArrowRight } from "react-icons/lu";
import { HiArrowSmRight } from "react-icons/hi";


const DiscoverCard = ({ image, title, link, children }) => {
  return (
    <div className='w-[95%] h-full xl:h-[16.75rem] flex flex-wrap items-stretch rounded-2xl shadow-xl border-none justify-between p-0 overflow-hidden'>
      <div className='w-full xl:w-1/2 flex'>
        <Image
          width='100%'
          height='auto'
          radius='none'
          alt=''
          src={image}
          className='w-full object-cover object-center '
        />
      </div>

      <div className='w-full xl:w-1/2 flex flex-col p-10 lg:p-5 xl:p-10 gap-5 justify-center items-start'>
        <h3 className='text-lightBlue'>{title}</h3>
        {children}
        <Link href={link} className='flex flex-row items-center gap-x-2 font-semibold capitalize transition-all hover:text-lightBlue'>
          learn more
          <LuArrowRight className='text-lg font-semibold'/>
        </Link>
      </div>
    </div>
  )
}

export default DiscoverCard
