"use client";
import {useState, useEffect} from "react";
import {IoIosArrowDropdown} from "react-icons/io";
import {MdArrowDropDown} from "react-icons/md";
import {
	Accordion,
	AccordionItem,
	Navbar,
	NavbarContent,
	NavbarItem,
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

const CustomMenu = ({bgColor, textColor, isHome}) => {
	const hamburgerColor = (bgColor === 'bg-white') ? 'bg-lightBlue' : 'bg-white'
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [expandedItems, setExpandedItems] = useState({});
	
	const toggleItem = (key) => {
		setExpandedItems((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};
	
	const [isSticky, setSticky] = useState(false);
	useEffect(() => {
		isHome ? setSticky(false) : setSticky(true);
		const handleScroll = () => {
			setSticky(window.scrollY > 300);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isHome]);
	return (<section
		className={`${isSticky ? `fixed py-7 top-0 left-0 w-full z-50 ${bgColor} shadow-lg` : ` relative : `} transition-all duration-300 ease-in-out navbar`}
	>
		<Container customStyle="flex justify-between bg-transparent responsive_container py-2 left-0">
			<Navbar className={`${bgColor} ${textColor}`} onMenuOpenChange={setIsMenuOpen}>
				<NavbarBrand className="left-0 w-[12rem] sm:w-[15rem]">
					<Link href="/">
						<Image src={isHome ? Logo : internalLogo} className="w-full min-w-24" alt="Listy logo"/>
					</Link>
				</NavbarBrand>
				<NavbarContent className="hidden lg:flex gap-5" justify="center">
					<Dropdown>
						<NavbarItem>
							<DropdownTrigger>
								<Button
									disableRipple
									className={`dropDown data-[hover=true]:text-black data-[hover=true]:bg-transparent ${textColor}`}
									endContent={<IoIosArrowDropdown/>}
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
								<Link href="/how-listy-works" className="text-black text-sm">How Listy Works</Link>
							</DropdownItem>
							<DropdownItem key="about2">
								<Link href="/why-list-with-listy" className="text-black text-sm">Why List with Listy</Link>
							</DropdownItem>
							<DropdownItem key="about3">
								<Link href="/faqs" className="text-black text-sm">FAQs</Link>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					
					<NavbarItem>
						<Link className={`${textColor} font-inter font-normal text-small hover:text-black`}
									href="/packages-pricing">Packages &
							Pricing</Link>
					</NavbarItem>
					<Dropdown>
						<NavbarItem>
							<DropdownTrigger>
								<Button
									disableRipple
									className={`dropDown data-[hover=true]:text-black data-[hover=true]:bg-transparent ${textColor}`}
									endContent={<IoIosArrowDropdown/>}
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
								<Link href="/prelisting-checklist" className="text-black text-sm">Pre-Listing Checklist</Link>
							</DropdownItem>
							<DropdownItem key="usage_metrics">
								<Link href="/home-valuation" className="text-black text-sm">Home Valuation</Link>
							</DropdownItem>
							<DropdownItem key="production_ready">
								<Link href="/seller-proceeds-calculator" className="text-black text-sm">Seller Proceeds
									Calculator</Link>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<NavbarItem>
						<Link className={`${textColor} font-inter font-normal text-small hover:text-black`} href="/contact">
							Contact
						</Link>
					</NavbarItem>
				</NavbarContent>
				
				<NavbarContent justify="end">
					<NavbarItem>
						<CustomButton className={`p-2 lg:m-auto lg:p-auto btn_navbar ${textColor}`}>Login</CustomButton>
					</NavbarItem>
					<NavbarItem>
						<CustomButton className="p-2 btn_black">Sign Up</CustomButton>
					</NavbarItem>
				</NavbarContent>
				
				<Button
					onPress={() => setIsMenuOpen(!isMenuOpen)}
					className="flex flex-col align-bottom bg-transparent relative lg:hidden p-0 m-0"
				>
						<span
							className={`${hamburgerColor} h-0.5 w-6 transform transition duration-200 p-0 ${isMenuOpen ? "rotate-45 w-full" : "top-0"}`}></span>
					<span
						className={`${hamburgerColor} h-0.5 w-6 transform transition duration-200 ${isMenuOpen ? "-rotate-45 w-full" : "top-0"}`}></span>
					<span
						className={`${hamburgerColor} h-0.5 w-6 transform transition duration-200 ${isMenuOpen ? "hidden" : "top-0"}`}></span>
				
				</Button>
				
				{isMenuOpen && (
					
					<div
						className={`fixed top-[150%] h-[85vh] z-20 right-[1vw] pr-6 -mr-10 md:-mr-20 md:pr-10 max-w-md left-auto min-w-[300px] w-0 bg-gray-800 text-white text-right flex flex-col p-4 lg:hidden transform transition-transform duration-300 ${isMenuOpen ? "translate-w-0" : "translate-w-full"}`}>
						<ul className="space-y-4">
							<li className="relative my-2">
								<button
									onClick={() => toggleItem("about")}
									className="flex justify-end items-center w-full"
								>
									About Listy
									<MdArrowDropDown
										className={`transition-transform ml-2 ${
											expandedItems["about"] ? "rotate-180" : ""
										}`}
									/>
								</button>
								{expandedItems["about"] && (
									<ul className="mt-2 ml-4 space-y-2 mr-4 gap-y-8">
										<li className="py-2">
											<Link href="/how-listy-works" className="block text-sm">
												How Listy Works
											</Link>
										</li>
										<li className="py-2">
											<Link href="/why-list-with-listy" className="block text-sm">
												Why List with Listy
											</Link>
										</li>
										<li className="py-2">
											<Link href="/faqs" className="block text-sm">
												FAQs
											</Link>
										</li>
									</ul>
								)}
							</li>
							<li className="relative mr-2 py-4">
								<Link href="/packages-pricing" className="block text-white">
									Packages & Pricing
								</Link>
							</li>
							<li>
								<button
									onClick={() => toggleItem("sellerServices")}
									className="flex justify-end items-center w-full"
								>
									Seller Services
									<MdArrowDropDown
										className={`transition-transform ml-2 ${
											expandedItems["sellerServices"] ? "rotate-180" : ""
										}`}
									/>
								</button>
								{expandedItems["sellerServices"] && (
									<ul className="mt-2 ml-4 space-y-2 mr-4">
										<li className='py-2'>
											<Link href="/prelisting-checklist" className="block text-sm">
												Pre-Listing Checklist
											</Link>
										</li>
										<li className='py-2'>
											<Link href="/home-valuation" className="block text-sm">
												Home Valuation
											</Link>
										</li>
										<li className='py-2'>
											<Link href="/seller-proceeds-calculator" className="block text-sm">
												Seller Proceeds Calculator
											</Link>
										</li>
									</ul>
								)}
							</li>
							<li className='mr-2 py-4'>
								<Link href="/contact" className="block text-white">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				
				)}
			</Navbar>
		</Container>
	</section>);
};

export default CustomMenu;
