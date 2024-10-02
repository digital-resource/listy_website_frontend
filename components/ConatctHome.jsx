import CustomButton from './CustomButton'
import Container from './Container'
import { Input } from '@nextui-org/react'
import Link from 'next/link'

const ConatctHome = () => {
  return (
    <div className='w-full pb-24'>
      <Container customStyle='flex min-h-[32rem] justify-end rounded-xl responsive_container bg-home_contact bg-cover bg-no-repeat bg-center'>
        <div className='w-full flex flex-col xl:w-1/2 p-20 bg-white_blur gap-y-7 justify-center'>
          <h2 className='font-normal capitalize'>Sign into your account</h2>
          <div className='flex flex-col gap-y-6 max-w-[28rem]'>
            <div className='flex flex-col gap-y-5'>
              <Input
                radius='full'
                type='email'
                variant='bordered'
                placeholder='Email'
                classNames={{
                  innerWrapper: 'bg-white',
                  inputWrapper:
                    'bg-white border-solid border-1 border-input-border',
                }}
              />
              <Input
                radius='full'
                type='password'
                variant='bordered'
                placeholder='Password'
                classNames={{
                  innerWrapper: 'bg-white',
                  inputWrapper:
                    'bg-white border-solid border-1 border-input-border',
                }}
              />
            </div>

            <div className='w-full flex flex-row gap-5'>
              <CustomButton className='btn_secondary w-full bg-lightBlue border-none hover:bg-black hover:text-white transition-all'>
                Login
              </CustomButton>
              <CustomButton className='btn_black  w-full hover:bg-lightBlue hover:text-white transition-all'>
                Sign up
              </CustomButton>
            </div>
          </div>

          <Link
            href='#'
            className='text-lightBlue hover:text-black transition-all'
          >
            Forgot Password?
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default ConatctHome
