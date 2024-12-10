import Image from "next/image";
import Container from './Container'
import CustomButton from './CustomButton'

import {Link} from "@nextui-org/react";

/*
@
 */

const RichText = ({props}) => {
	const {img, title, text, buttonLink, direction} = props
	
	return (
		<Container customStyle="flex md:responsive_container md:py-24 text-center">
			
			{direction === 'imgTxt' ? (
				<div className='w-full flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center md:mb-16'>
					
					
					<div className='flex md:w-1/2 w-[80%] aspect-video'>
						<Image
							src={img}
							className='w-full min-h-[12rem] rounded-[2.69rem]'
						/>
					</div>
					
					<div className='flex flex-col items-start w-[80%] justify-center md:w-2/5 text-black gap-y-10'>
						<h2 className='leading-[120%] pt-4  m-auto md:pt-0'>
							{title} <br/>
						</h2>
						<p>
							{text}
						</p>
						{buttonLink && (
							
							<CustomButton
								className={`btn_secondary bg-lightBlue border-2 border-lightBlue hover:bg-black hover:border-black hover:text-white w-[250px] m-auto`}>
								<Link href={buttonLink} className="text-white">
									Talk to an Expert
								</Link>
							</CustomButton>
						)}
					</div>
				</div>
			) : (
				<div className='w-full flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center md:mb-16'>
					
					<div className='flex flex-col items-start w-[80%] justify-center md:w-2/5 text-black gap-y-10'>
						<h2 className='leading-[120%] m-auto pt-8'>
							{title} <br/>
						</h2>
						<p className="py-4">
							{text}
						</p>
						{buttonLink && (
							
							<CustomButton
								className={`btn_secondary bg-lightBlue border-2 border-lightBlue hover:bg-black hover:border-black hover:text-white w-[250px] m-auto`}>
								<Link href={buttonLink} className="text-white">
									Talk to an Expert
								</Link>
							</CustomButton>
						)}
					</div>
					<div className='flex w-[80%] md:w-1/2 aspect-video pb-8 md:pb-0'>
						<Image
							src={img}
							className='w-full min-h-[12rem] rounded-[2.69rem]'
						/>
					</div>
				</div>
			)}
		
		</Container>
	)
}

export default RichText;