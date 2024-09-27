'use client'
import { IoIosArrowDropdown } from 'react-icons/io'
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarBrand,
} from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.webp'
//COMPONENTS
import CustomButton from './CustomButton'
import Container from './Container'

const CustomMenu = ({ bgColor }) => {
  return (
    <section className='navbar'>
      <Container customStyle='flex justify-between bg-transparent responsive_container'>
        <Navbar className={`${bgColor} text-white px-0`}>
          <NavbarBrand>
            <Link href='/'>
              <Image src={Logo} className='w-[15rem]'/>
            </Link>
          </NavbarBrand>
          <NavbarContent className='hidden sm:flex gap-5' justify='center'>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className='dropDown data-[hover=true]:text-black data-[hover=true]:bg-transparent text-white'
                    endContent={<IoIosArrowDropdown />}
                    radius='sm'
                    variant='light'
                  >
                    About Us
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label='features'
                className='w-[340px]'
                itemClasses={{
                  base: 'gap-4',
                }}
              >
                <DropdownItem key='about1'>Link1</DropdownItem>
                <DropdownItem key='about2'>Link2</DropdownItem>
                <DropdownItem key='about3'>Link3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavbarItem className='bg-transparent font-inter font-normal text-small text-white hover:text-black'>
              <Link href='#'>Packeges</Link>
            </NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className='dropDown data-[hover=true]:text-black data-[hover=true]:bg-transparent text-white'
                    endContent={<IoIosArrowDropdown />}
                    radius='sm'
                    variant='light'
                  >
                    Services
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label='features'
                className='w-[340px]'
                itemClasses={{
                  base: 'gap-4',
                }}
              >
                <DropdownItem key='autoscaling'>Link1</DropdownItem>
                <DropdownItem key='usage_metrics'>Link2</DropdownItem>
                <DropdownItem key='production_ready'>Link3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
          <NavbarContent justify='end'>
            <NavbarItem>
              <CustomButton className='btn_navbar'>Login</CustomButton>
            </NavbarItem>
            <NavbarItem>
              <CustomButton className='btn_black'>Sign Up</CustomButton>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </Container>
    </section>
  )
}

export default CustomMenu
