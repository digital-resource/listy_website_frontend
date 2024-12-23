import Link from 'next/link'
import Image from 'next/image'
import { LuArrowRight } from 'react-icons/lu'

const CardService = ({ icon, title, content, link }) => {
  return (
    <div className='w-full flex justify-between items-center  bg-white text-black p-5 gap-5 rounded-2xl shadow-lg border-1 border-transparent hover:border-lightBlue'>
      <div className='bg-blue_card flex justify-center p-5 rounded-2xl w-1/3'>
        <Image src={icon} width={100} height={100} alt='card services' />
      </div>
      <div className='flex flex-col gap-2 w-3/5'>
        <h3 className='text-lightBlue'>{title}</h3>
        <p>{content}</p>
        <Link
          href={link}
          className='flex flex-row items-center gap-x-2 font-semibold capitalize transition-all hover:text-lightBlue'
        >
          learn more
          <LuArrowRight className='text-lg font-semibold' />
        </Link>
      </div>
    </div>
  )
}

export default CardService
