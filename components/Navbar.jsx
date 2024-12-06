"use client";
import { useState, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
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
  Link,
  NavbarBrand,
} from "@nextui-org/react";
import Image from "next/image";
//COMPONENTS
import CustomButton from "./CustomButton";
import Container from "./Container";
import Logo from "@/public/images/logo.webp";
import internalLogo from '@/public/images/internal_logo.webp'

const CustomMenu = ({ bgColor, textColor, isHome }) => {

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className={`${
        isSticky
          ? `fixed py-7 top-0 left-0 w-full z-50 ${bgColor} shadow-lg`
          : "relative"
      } transition-all duration-300 ease-in-out navbar`}
    >
      <Container customStyle="flex justify-between bg-transparent responsive_container">
        <Navbar className={`${bgColor} ${textColor}`}>
          <NavbarBrand>
            <Link href="/">
              <Image src={isHome ? Logo : internalLogo } className="w-[15rem]" alt="Listy logo" />
            </Link>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-5" justify="center">
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className={`dropDown data-[hover=true]:text-black data-[hover=true]:bg-transparent ${textColor}`}
                    endContent={<IoIosArrowDropdown />}
                    radius="sm"
                    variant="light"
                  >
                    About Listy
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu
                aria-label="features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem key="about1">
                  <Link href="/how-listy-works" className="text-black text-sm" >How Listy Works</Link>
                </DropdownItem>
                <DropdownItem key="about2">
                  <Link href="#" className="text-black text-sm">Why List with Listy</Link>
                  </DropdownItem>
                <DropdownItem key="about3">FAQs</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <NavbarItem>
              <Link className={`${textColor} font-inter font-normal text-small hover:text-black`} href="#">Packages & Pricing</Link>
            </NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className={`dropDown data-[hover=true]:text-black data-[hover=true]:bg-transparent ${textColor}`}
                    endContent={<IoIosArrowDropdown />}
                    radius="sm"
                    variant="light"
                  >
                    Seller Services
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem key="autoscaling">
                  <Link href="#" className="text-black text-sm">Pre-Listing Checklist</Link>
                  </DropdownItem>
                <DropdownItem key="usage_metrics">Home Valuation</DropdownItem>
                <DropdownItem key="production_ready">Seller Produceeds Calculator</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavbarItem>
              <Link className={`${textColor} font-inter font-normal text-small hover:text-black`} href="#">
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <CustomButton className={`btn_navbar ${textColor}`}>Login</CustomButton>
            </NavbarItem>
            <NavbarItem>
              <CustomButton className="btn_black">Sign Up</CustomButton>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </Container>
    </section>
  );
};

export default CustomMenu;
