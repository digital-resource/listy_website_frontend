'use client'
import Container from "./Container";
import CustomButton from './CustomButton'
import {Link} from "@nextui-org/react"

const InternalText = () => {
	return (
		<section className="w-full py-24">
			<Container customStyle="flex flex-col lg:flex-row md:gap-4 w-full responsive_container">
				<div className="w-[80%] mx-auto p-0 gap-10">
					<h2 className="font-700 mb-[2rem] text-center">Morem ipsum dolor sit amet, consectetur <span
						className="text-lightBlue">Adipiscing elit.</span></h2>
					<section className="flex justify-evenly w-full py-[1rem]">
						<CustomButton
							className="btn_secondary bg-lightBlue border-2 border-lightBlue hover:bg-black hover:border-black hover:text-white w-[250px]">
							Talk to an Expert
						</CustomButton>
						<CustomButton
							className="btn_secondary text-black border-2 border-black hover:text-white hover:bg-black w-[250px]">
							<Link href="/">Explore all listy packages</Link>
						</CustomButton>
					</section>
				</div>
				<p className="w-[80%] m-auto text-center lg:w-1/2 lg:text-left">
					Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
					mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
					interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
					aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
					auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
				</p>
			</Container>
		</section>
	)
}

export default InternalText;