import Link from 'next/link'
import Image from 'next/image'

const DiscoverCard = ({ image, title, link, children }) => {
  return (
    <div className='w-[95%] h-[16.75rem] flex flex-row items-stretch rounded-2xl shadow-xl border-none justify-between p-0 overflow-hidden'>
      <div className='w-1/2 flex '>
        <Image
          width='100%'
          height='auto'
          radius='none'
          alt=''
          src={image}
          className='w-full object-cover object-center '
        />
      </div>

      <div className='w-1/2 flex flex-col p-10 gap-5 justify-center items-start'>
        <h3 className='text-lightBlue'>{title}</h3>
        {children}
        <Link href={link} className='font-semibold capitalize'>
          learn more
        </Link>
      </div>
    </div>
  )
}

export default DiscoverCard
